'use client'

import { useEffect, useRef, useCallback } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────────

type FranchiseStatus = 'live' | 'coming'

interface Franchise {
  code: string
  country: string
  city: string
  status: FranchiseStatus
  lat: number
  lng: number
}

// ─── Data ───────────────────────────────────────────────────────────────────
// These four are the only confirmed/projected markets named publicly.
// Every other African nation remains open for future licensing  see the
// "open" framing in the legend and caption below, not encoded as pins.

const FRANCHISES: Franchise[] = [
  {
    code: 'NNW',
    country: 'Nigeria',
    city: 'Lagos / Abuja',
    status: 'live',
    lat: 9.082,
    lng: 8.6753,
  },
  {
    code: 'GNW',
    country: 'Ghana',
    city: 'Accra',
    status: 'coming',
    lat: 7.9465,
    lng: -1.0232,
  },
  {
    code: 'KNW',
    country: 'Kenya',
    city: 'Nairobi',
    status: 'coming',
    lat: -0.0236,
    lng: 37.9062,
  },
  {
    code: 'SANW',
    country: 'South Africa',
    city: 'Johannesburg',
    status: 'coming',
    lat: -28.4793,
    lng: 24.6727,
  },
]

// ─── Tile URLs ───────────────────────────────────────────────────────────────

const TILES = {
  dark: {
    base:   'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
    labels: 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png',
  },
  light: {
    base:   'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
    labels: 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png',
  },
} as const

// ─── Theme Detection ─────────────────────────────────────────────────────────

function getIsDark(): boolean {
  if (typeof window === 'undefined') return false
  const hostTheme = document.documentElement.getAttribute('data-theme')
  if (hostTheme === 'dark') return true
  if (hostTheme === 'light') return false
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

// ─── Icon Builder ─────────────────────────────────────────────────────────────

function buildIcon(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  L: any,
  franchise: Franchise,
  isDark: boolean,
) {
  const isLive = franchise.status === 'live'

  const dotBg = isLive
    ? 'linear-gradient(135deg,#EAB308,#CA8A04)'
    : isDark
      ? 'rgba(255,255,255,0.18)'
      : 'rgba(0,0,0,0.18)'

  const dotBorder = isLive
    ? '#FDE047'
    : isDark
      ? 'rgba(255,255,255,0.35)'
      : 'rgba(0,0,0,0.28)'

  const dotShadow = isLive ? '0 0 12px rgba(234,179,8,0.55)' : 'none'

  const labelBg = isLive
    ? isDark
      ? 'rgba(234,179,8,0.14)'
      : 'rgba(180,130,0,0.10)'
    : isDark
      ? 'rgba(0,0,0,0.72)'
      : 'rgba(255,255,255,0.88)'

  const labelBorder = isLive
    ? isDark
      ? 'rgba(234,179,8,0.50)'
      : 'rgba(180,130,0,0.38)'
    : isDark
      ? 'rgba(255,255,255,0.14)'
      : 'rgba(0,0,0,0.14)'

  const labelColor = isLive
    ? isDark ? '#EAB308' : '#92700A'
    : isDark
      ? 'rgba(255,255,255,0.42)'
      : 'rgba(0,0,0,0.42)'

  const pulseRings = isLive
    ? `
      <div style="
        position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        width:40px; height:40px; border-radius:50%;
        border:1.5px solid rgba(234,179,8,0.40);
        animation:wla-pulse 2s ease-out infinite;
      "></div>
      <div style="
        position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        width:60px; height:60px; border-radius:50%;
        border:1px solid rgba(234,179,8,0.18);
        animation:wla-pulse 2s ease-out infinite 0.4s;
      "></div>
    `
    : ''

  return L.divIcon({
    className: '',
    html: `
      <div style="
        position:relative;
        display:flex;
        flex-direction:column;
        align-items:center;
        pointer-events:auto;
      ">
        ${pulseRings}
        <div style="
          width:14px; height:14px; border-radius:50%;
          background:${dotBg};
          border:2px solid ${dotBorder};
          box-shadow:${dotShadow};
          position:relative; z-index:2;
        "></div>
        <div style="
          margin-top:5px;
          background:${labelBg};
          border:1px solid ${labelBorder};
          border-radius:4px;
          padding:3px 7px;
          white-space:nowrap;
          font-family:system-ui,sans-serif;
          font-size:9px;
          font-weight:800;
          letter-spacing:0.08em;
          color:${labelColor};
          position:relative; z-index:2;
        ">${franchise.code}</div>
      </div>
    `,
    iconSize: [70, 50],
    iconAnchor: [35, 14],
  })
}

// ─── Popup Builder ────────────────────────────────────────────────────────────

function buildPopupContent(franchise: Franchise, isDark: boolean): string {
  const isLive = franchise.status === 'live'

  const bg = isDark ? '#111111' : '#ffffff'

  const border = isLive
    ? isDark
      ? 'rgba(234,179,8,0.40)'
      : 'rgba(180,130,0,0.30)'
    : isDark
      ? 'rgba(255,255,255,0.10)'
      : 'rgba(0,0,0,0.10)'

  const titleColor = isLive
    ? isDark ? '#EAB308' : '#92700A'
    : '#6B7280'

  const countryColor = isDark ? '#ffffff' : '#0d0d0d'
  const cityColor = '#6B7280'
  const statusLabel = isLive ? '● Live' : '○ Projected'

  return `
    <div style="
      background:${bg};
      border:1px solid ${border};
      border-radius:8px;
      padding:10px 14px;
      font-family:system-ui,sans-serif;
      min-width:130px;
      box-shadow:0 4px 16px rgba(0,0,0,${isDark ? '0.5' : '0.12'});
    ">
      <p style="margin:0 0 2px;font-size:9px;font-weight:800;letter-spacing:0.12em;color:${titleColor};text-transform:uppercase">
        ${franchise.code}  ${statusLabel}
      </p>
      <p style="margin:0 0 2px;font-size:13px;font-weight:900;color:${countryColor}">
        ${franchise.country}
      </p>
      <p style="margin:0;font-size:11px;color:${cityColor}">
        ${franchise.city}
      </p>
    </div>
  `
}

// ─── Component ────────────────────────────────────────────────────────────────

export function AfricaMap() {
  const mapRef         = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const baseTileRef    = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const labelTileRef   = useRef<any>(null)
  const isDarkRef      = useRef<boolean>(false)

  // ── Rebuild markers after a theme change ─────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addMarkers = useCallback((L: any, isDark: boolean) => {
    const map = mapInstanceRef.current
    if (!map) return

    map.eachLayer((layer: unknown) => {
      if (layer instanceof L.Marker) map.removeLayer(layer)
    })

    FRANCHISES.forEach((franchise) => {
      const popup = L.popup({
        closeButton: false,
        className: 'wla-popup',
        offset: [0, -20],
      }).setContent(buildPopupContent(franchise, isDark))

      L.marker([franchise.lat, franchise.lng], {
        icon: buildIcon(L, franchise, isDark),
      })
        .addTo(map)
        .bindPopup(popup)
        .on('mouseover', function (this: unknown) {
          (this as { openPopup: () => void }).openPopup()
        })
        .on('mouseout', function (this: unknown) {
          (this as { closePopup: () => void }).closePopup()
        })
    })
  }, [])

  // ── Swap tile layers ──────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyTiles = useCallback((L: any, isDark: boolean) => {
    const map = mapInstanceRef.current
    if (!map) return

    if (baseTileRef.current)  { map.removeLayer(baseTileRef.current);  baseTileRef.current  = null }
    if (labelTileRef.current) { map.removeLayer(labelTileRef.current); labelTileRef.current = null }

    const tiles = isDark ? TILES.dark : TILES.light

    baseTileRef.current = L.tileLayer(tiles.base, {
      subdomains: 'abcd',
      maxZoom: 6,
    }).addTo(map)

    labelTileRef.current = L.tileLayer(tiles.labels, {
      subdomains: 'abcd',
      maxZoom: 6,
      opacity: 0.45,
    }).addTo(map)
  }, [])

  // ── Full theme refresh ────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyTheme = useCallback((L: any, isDark: boolean) => {
    isDarkRef.current = isDark
    applyTiles(L, isDark)
    addMarkers(L, isDark)
  }, [applyTiles, addMarkers])

  // ── Init ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapRef.current) return

    let cancelled = false

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('leaflet').then((L: any) => {
      if (cancelled || !mapRef.current) return

      const container = mapRef.current as HTMLDivElement & { _leaflet_id?: number }
      if (container._leaflet_id) {
        delete container._leaflet_id
      }

      if (mapInstanceRef.current) return

      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const africaBounds = L.latLngBounds(
        L.latLng(-37, -20),
        L.latLng(38, 52),
      )

      const map = L.map(container, {
        center: [3, 20],
        zoom: 3,
        minZoom: 3,
        maxZoom: 5,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        doubleClickZoom: false,
        touchZoom: false,
        maxBounds: africaBounds,
        maxBoundsViscosity: 1.0,
      })

      mapInstanceRef.current = map

      const isDark = getIsDark()
      applyTheme(L, isDark)

      requestAnimationFrame(() => {
        map.invalidateSize()
        map.fitBounds(africaBounds, { padding: [0, 0] })
      })

      const observer = new MutationObserver(() => {
        const newDark = getIsDark()
        if (newDark !== isDarkRef.current) {
          applyTheme(L, newDark)
        }
      })
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      })

      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const mqHandler = () => {
        if (!document.documentElement.hasAttribute('data-theme')) {
          applyTheme(L, mq.matches)
        }
      }
      mq.addEventListener('change', mqHandler)

      ;(map as unknown as { _wlaCleanup?: () => void })._wlaCleanup = () => {
        observer.disconnect()
        mq.removeEventListener('change', mqHandler)
      }
    })

    return () => {
      cancelled = true

      const map = mapInstanceRef.current
      if (map) {
        const cleanup = (map as unknown as { _wlaCleanup?: () => void })._wlaCleanup
        if (cleanup) cleanup()
        map.remove()
        mapInstanceRef.current = null
      }
      baseTileRef.current  = null
      labelTileRef.current = null

      if (mapRef.current) {
        const container = mapRef.current as HTMLDivElement & { _leaflet_id?: number }
        if (container._leaflet_id) {
          delete container._leaflet_id
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          background: var(--bg-base) !important;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      <div className="relative h-full w-full overflow-hidden" style={{ aspectRatio: '4 / 3' }}>

        <div ref={mapRef} className="absolute inset-0" />

        {/* Legend + open-licensing note */}
        <div className="absolute bottom-4 left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center gap-2 px-4">
          <div className="flex items-center gap-5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-base)]/80 px-5 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background: '#EAB308',
                  boxShadow: '0 0 6px rgba(234,179,8,0.8)',
                }}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                Live
              </span>
            </div>
            <div className="h-3 w-px bg-[var(--border-subtle)]" />
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: 'var(--border-medium)' }}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                Projected
              </span>
            </div>
          </div>
          <p className="text-[10px] text-[var(--text-faint)]">
            Open to licensing across all 54 nations
          </p>
        </div>
      </div>
    </>
  )
}