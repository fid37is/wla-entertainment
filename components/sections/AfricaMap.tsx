'use client'

import { useEffect, useRef } from 'react'

const FRANCHISES = [
  {
    code: 'NNW',
    country: 'Nigeria',
    city: 'Lagos / Abuja',
    status: 'live' as const,
    lat: 9.082,
    lng: 8.6753,
  },
  {
    code: 'GNW',
    country: 'Ghana',
    city: 'Accra',
    status: 'coming' as const,
    lat: 7.9465,
    lng: -1.0232,
  },
  {
    code: 'KNW',
    country: 'Kenya',
    city: 'Nairobi',
    status: 'coming' as const,
    lat: -0.0236,
    lng: 37.9062,
  },
  {
    code: 'SANW',
    country: 'South Africa',
    city: 'Johannesburg',
    status: 'coming' as const,
    lat: -28.4793,
    lng: 24.6727,
  },
]

export function AfricaMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Dynamically import Leaflet - only runs client side
    import('leaflet').then((L) => {
      // Fix default icon paths broken by webpack
      // @ts-expect-error - leaflet internal
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current!, {
        center: [3, 20],
        zoom: 3,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        doubleClickZoom: false,
        touchZoom: false,
      })

      // Dark styled tile layer using CartoDB dark matter - no API key
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
        {
          subdomains: 'abcd',
          maxZoom: 6,
        },
      ).addTo(map)

      // Country name labels only
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
        {
          subdomains: 'abcd',
          maxZoom: 6,
          opacity: 0.4,
        },
      ).addTo(map)

      // Add franchise markers
      FRANCHISES.forEach((f) => {
        const isLive = f.status === 'live'

        const icon = L.divIcon({
          className: '',
          html: `
            <div style="
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              pointer-events: auto;
            ">
              ${isLive ? `
                <div style="
                  position: absolute;
                  top: 50%; left: 50%;
                  transform: translate(-50%, -50%);
                  width: 40px; height: 40px;
                  border-radius: 50%;
                  border: 1.5px solid rgba(234,179,8,0.4);
                  animation: wla-pulse 2s ease-out infinite;
                "></div>
                <div style="
                  position: absolute;
                  top: 50%; left: 50%;
                  transform: translate(-50%, -50%);
                  width: 60px; height: 60px;
                  border-radius: 50%;
                  border: 1px solid rgba(234,179,8,0.18);
                  animation: wla-pulse 2s ease-out infinite 0.4s;
                "></div>
              ` : ''}
              <div style="
                width: 14px; height: 14px;
                border-radius: 50%;
                background: ${isLive ? 'linear-gradient(135deg,#EAB308,#CA8A04)' : 'rgba(255,255,255,0.25)'};
                border: 2px solid ${isLive ? '#FDE047' : 'rgba(255,255,255,0.4)'};
                box-shadow: ${isLive ? '0 0 12px rgba(234,179,8,0.6)' : 'none'};
                position: relative; z-index: 2;
              "></div>
              <div style="
                margin-top: 5px;
                background: ${isLive ? 'rgba(234,179,8,0.15)' : 'rgba(0,0,0,0.7)'};
                border: 1px solid ${isLive ? 'rgba(234,179,8,0.5)' : 'rgba(255,255,255,0.15)'};
                border-radius: 4px;
                padding: 3px 7px;
                white-space: nowrap;
                font-family: sans-serif;
                font-size: 9px;
                font-weight: 800;
                letter-spacing: 0.08em;
                color: ${isLive ? '#EAB308' : 'rgba(255,255,255,0.5)'};
                position: relative; z-index: 2;
              ">${f.code}</div>
            </div>
          `,
          iconSize: [70, 50],
          iconAnchor: [35, 14],
        })

        const popup = L.popup({
          closeButton: false,
          className: 'wla-popup',
          offset: [0, -20],
        }).setContent(`
          <div style="
            background: #111;
            border: 1px solid ${isLive ? 'rgba(234,179,8,0.4)' : 'rgba(255,255,255,0.1)'};
            border-radius: 8px;
            padding: 10px 14px;
            font-family: sans-serif;
            min-width: 130px;
          ">
            <p style="margin:0 0 2px; font-size:9px; font-weight:800; letter-spacing:0.12em; color:${isLive ? '#EAB308' : '#6B7280'}; text-transform:uppercase">${f.code} - ${isLive ? '● Live' : '○ Coming Soon'}</p>
            <p style="margin:0 0 1px; font-size:13px; font-weight:900; color:#fff">${f.country}</p>
            <p style="margin:0; font-size:11px; color:#6B7280">${f.city}</p>
          </div>
        `)

        L.marker([f.lat, f.lng], { icon })
          .addTo(map)
          .bindPopup(popup)
          .on('mouseover', function (this: L.Marker) { this.openPopup() })
          .on('mouseout', function (this: L.Marker) { this.closePopup() })
      })

      mapInstanceRef.current = map
    })

    return () => {
      if (mapInstanceRef.current) {
        ;(mapInstanceRef.current as { remove: () => void }).remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes wla-pulse {
          0%   { transform: translate(-50%, -50%) scale(0.8); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(2);   opacity: 0; }
        }
        .wla-popup .leaflet-popup-content-wrapper,
        .wla-popup .leaflet-popup-tip {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .wla-popup .leaflet-popup-content {
          margin: 0 !important;
        }
        .leaflet-container {
          background: #080808 !important;
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
        {/* Subtle gold vignette overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(8,8,8,0.7) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Map container */}
        <div ref={mapRef} className="h-full w-full" style={{ minHeight: 420 }} />

        {/* Legend overlay */}
        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-base)]/80 px-5 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(234,179,8,0.8)]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Live</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">Pipeline</span>
          </div>
        </div>
      </div>
    </>
  )
}