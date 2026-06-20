'use client'

import { useState, useEffect, useMemo } from 'react'

type CountryStatus = 'active' | 'potential' | 'none'

interface Country {
  name: string
  code: string
  status: CountryStatus
}

const AFRICAN_COUNTRIES: Country[] = [
  { name: 'Nigeria',       code: 'ng', status: 'active'    },
  { name: 'Ghana',         code: 'gh', status: 'potential' },
  { name: 'Kenya',         code: 'ke', status: 'potential' },
  { name: 'South Africa',  code: 'za', status: 'potential' },
  { name: 'Egypt',         code: 'eg', status: 'none' },
  { name: 'Ethiopia',      code: 'et', status: 'none' },
  { name: 'Tanzania',      code: 'tz', status: 'none' },
  { name: 'Uganda',        code: 'ug', status: 'none' },
  { name: 'Algeria',       code: 'dz', status: 'none' },
  { name: 'Sudan',         code: 'sd', status: 'none' },
  { name: 'Morocco',       code: 'ma', status: 'none' },
  { name: 'Angola',        code: 'ao', status: 'none' },
  { name: 'Mozambique',    code: 'mz', status: 'none' },
  { name: 'Cameroon',      code: 'cm', status: 'none' },
  { name: 'Ivory Coast',   code: 'ci', status: 'none' },
  { name: 'Madagascar',    code: 'mg', status: 'none' },
  { name: 'Niger',         code: 'ne', status: 'none' },
  { name: 'Burkina Faso',  code: 'bf', status: 'none' },
  { name: 'Mali',          code: 'ml', status: 'none' },
  { name: 'Malawi',        code: 'mw', status: 'none' },
  { name: 'Zambia',        code: 'zm', status: 'none' },
  { name: 'Senegal',       code: 'sn', status: 'none' },
  { name: 'Zimbabwe',      code: 'zw', status: 'none' },
  { name: 'Chad',          code: 'td', status: 'none' },
  { name: 'Guinea',        code: 'gn', status: 'none' },
  { name: 'Rwanda',        code: 'rw', status: 'none' },
  { name: 'Benin',         code: 'bj', status: 'none' },
  { name: 'Burundi',       code: 'bi', status: 'none' },
  { name: 'Tunisia',       code: 'tn', status: 'none' },
  { name: 'Somalia',       code: 'so', status: 'none' },
  { name: 'Togo',          code: 'tg', status: 'none' },
  { name: 'Sierra Leone',  code: 'sl', status: 'none' },
  { name: 'Libya',         code: 'ly', status: 'none' },
  { name: 'DR Congo',      code: 'cd', status: 'none' },
  { name: 'Liberia',       code: 'lr', status: 'none' },
  { name: 'C. African Rep',code: 'cf', status: 'none' },
  { name: 'Mauritania',    code: 'mr', status: 'none' },
  { name: 'Eritrea',       code: 'er', status: 'none' },
  { name: 'Namibia',       code: 'na', status: 'none' },
  { name: 'Gambia',        code: 'gm', status: 'none' },
  { name: 'Botswana',      code: 'bw', status: 'none' },
  { name: 'Gabon',         code: 'ga', status: 'none' },
  { name: 'Lesotho',       code: 'ls', status: 'none' },
  { name: 'Guinea-Bissau', code: 'gw', status: 'none' },
  { name: 'Eq. Guinea',    code: 'gq', status: 'none' },
  { name: 'Mauritius',     code: 'mu', status: 'none' },
  { name: 'Eswatini',      code: 'sz', status: 'none' },
  { name: 'Djibouti',      code: 'dj', status: 'none' },
  { name: 'Comoros',       code: 'km', status: 'none' },
  { name: 'Cabo Verde',    code: 'cv', status: 'none' },
  { name: 'Sao Tome',      code: 'st', status: 'none' },
  { name: 'Seychelles',    code: 'sc', status: 'none' },
  { name: 'South Sudan',   code: 'ss', status: 'none' },
  { name: 'Congo',         code: 'cg', status: 'none' },
]

// Circular, royalty-free flag set (HatScripts "circle-flags", MIT licensed, via jsdelivr).
// Every flag ships pre-cropped to a circle, so there's no emoji-rendering inconsistency
// across OS/browser and no manual border-radius clipping artifacts.
const flagUrl = (iso2: string) =>
  `https://cdn.jsdelivr.net/npm/circle-flags@latest/flags/${iso2}.svg`

type Placed = { country: Country; xPct: number; yPct: number; size: number; t: number }

// Fraction of the container's own width/height the cluster is allowed to use.
// Kept comfortably short of 50% on every side so flags never get clipped by
// the column edge and the whole thing sits inside one viewport with room to
// spare  no scrolling required to see the outer flags.
const INNER_RADIUS = 0.19 // clears the WCL emblem
const OUTER_RADIUS = 0.42 // leaves a clean, even margin to the edges
const MAX_SIZE = 56 // the active franchise
const POTENTIAL_SIZE = 42 // potential markets
const MIN_SIZE = 24
const GOLDEN_ANGLE = 137.50776405003785 // degrees  the phyllotaxis constant

/**
 * Places every nation using a phyllotaxis (sunflower-seed) spiral: point i
 * sits at radius ∝ √i and angle = i × the golden angle. That formula is what
 * gives sunflower heads and pinecones their famously even, gap-free packing 
 * applied here it spaces all 54 flags with consistent, professional-looking
 * gaps instead of arbitrary ring math that can bunch some together and leave
 * others stranded. Nigeria (the only active franchise) and the three
 * potential markets are first in the source list, so they naturally land
 * closest to the centre and stay biggest.
 *
 * The same fractional radius is applied to width and height independently,
 * so the cluster stretches into an ellipse that matches the column's own
 * aspect ratio rather than a circle floating in a square.
 */
function buildSpiralLayout(countries: Country[]): Placed[] {
  const n = countries.length
  return countries.map((country, i) => {
    const t = Math.sqrt((i + 0.5) / n) // 0 → 1, even areal distribution
    const radius = INNER_RADIUS + (OUTER_RADIUS - INNER_RADIUS) * t
    const rad = (i * GOLDEN_ANGLE * Math.PI) / 180
    const size =
      country.status === 'active'
        ? MAX_SIZE
        : country.status === 'potential'
          ? POTENTIAL_SIZE
          : Math.max(MIN_SIZE, MAX_SIZE - (MAX_SIZE - MIN_SIZE) * t)
    return {
      country,
      xPct: 50 + radius * 100 * Math.cos(rad),
      yPct: 50 + radius * 100 * Math.sin(rad),
      size,
      t,
    }
  })
}

export function WCLSection() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const placedFlags = useMemo(() => buildSpiralLayout(AFRICAN_COUNTRIES), [])

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 70% 50%, rgba(234,179,8,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/*
          Fixed height, not a min-height  that's what keeps the section
          from ever growing past one screen. Drop this number down further
          if it's still spilling on your page (e.g. there's a header above
          it eating into the available space).
        */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            height: '88vh',
            minHeight: 560,
          }}
        >

          {/* ── Left: Copy ── */}
          <div
            className="flex flex-col justify-center overflow-y-auto px-6 py-12 lg:pr-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.35em]"
              style={{ color: 'var(--text-gold)' }}
            >
              The Long Game
            </p>
            <h2
              className="mb-8 font-display font-black leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', color: 'var(--text-primary)' }}
            >
              One Continent.<br />
              <span className="text-gold-gradient">One Champion.</span>
            </h2>

            <p className="mb-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Every country runs its own season. Every season produces a national champion.
              Those champions converge at one place, on one course, for one title {' '}
              the{' '}
              <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                Warriors Champions League
              </span>.
            </p>
            <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              WCL is not a television show. It is Africa&apos;s first continental obstacle
              sports championship  with its own broadcast rights, its own sponsorship tier,
              and its own cultural moment. 54 nations. One course. That is identity.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-2">
              {AFRICAN_COUNTRIES.filter((c) => c.status === 'active').map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
                  style={{
                    border: '1px solid var(--border-gold-strong)',
                    background: 'var(--bg-gold-tint-2)',
                    color: 'var(--text-gold)',
                  }}
                >
                  <img
                    src={flagUrl(c.code)}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    style={{ borderRadius: '50%', display: 'block' }}
                  />
                  {c.name}
                  <span className="text-xs" style={{ color: 'var(--color-gold-deeper)' }}>
                    ✦ Active Franchise
                  </span>
                </span>
              ))}

              <span
                aria-hidden="true"
                style={{ width: 1, height: 22, background: 'var(--border-subtle)', margin: '0 4px' }}
              />

              {AFRICAN_COUNTRIES.filter((c) => c.status === 'potential').map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <img
                    src={flagUrl(c.code)}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    style={{ borderRadius: '50%', display: 'block', opacity: 0.85 }}
                  />
                  {c.name}
                  <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                    Potential Market
                  </span>
                </span>
              ))}
            </div>

            <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
              WCL is a Series B vision. The Series A is Nigeria  the only active franchise today.
              The ceiling is continental.
            </p>
          </div>

          {/* ── Right: Nation orbit, edge-to-edge, WCL at the centre ── */}
          <div
            className="relative overflow-hidden"
            style={{
              borderLeft: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
              height: '100%',
            }}
          >
            {/*
              Absolute, full-bleed canvas  no padding on any side, and the
              column's height is now fixed (not just min-height), so the
              spiral's outer edge sits inside a clean, even margin instead of
              spilling past the bottom of the viewport.
            */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: mounted ? 1 : 0,
                transition: 'opacity 1.2s ease 0.2s',
              }}
            >
              {placedFlags.map(({ country, xPct, yPct, size, t }) => {
                const isHovered = hovered === country.name
                const isActive = country.status === 'active'
                const isPotential = country.status === 'potential'

                return (
                  <button
                    key={country.name}
                    type="button"
                    aria-label={country.name}
                    className="flex items-center justify-center"
                    style={{
                      position: 'absolute',
                      left: `${xPct}%`,
                      top: `${yPct}%`,
                      width: size,
                      height: size,
                      transform: isHovered
                        ? 'translate(-50%, -50%) scale(1.25)'
                        : 'translate(-50%, -50%) scale(1)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease, z-index 0s',
                      border: 'none',
                      borderRadius: '50%',
                      padding: 0,
                      background: 'var(--bg-base)',
                      cursor: 'default',
                      zIndex: isHovered ? 30 : Math.round((1 - t) * 20) + 5,
                      boxShadow: isActive
                        ? '0 0 0 2px var(--color-gold), 0 0 18px rgba(234,179,8,0.45)'
                        : isPotential
                          ? '0 0 0 1.5px var(--border-gold-strong), 0 0 10px rgba(234,179,8,0.2)'
                          : isHovered
                            ? '0 0 0 2px var(--border-gold)'
                            : '0 0 0 1px var(--border-subtle)',
                    }}
                    onMouseEnter={() => setHovered(country.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {isHovered && (
                      <div
                        className="whitespace-nowrap rounded-full text-xs font-bold"
                        style={{
                          position: 'absolute',
                          bottom: '100%',
                          left: '50%',
                          transform: 'translate(-50%, -10px)',
                          padding: '6px 14px',
                          border: '1px solid var(--border-gold)',
                          background: 'color-mix(in srgb, var(--bg-base) 92%, transparent)',
                          color: 'var(--text-gold)',
                          backdropFilter: 'blur(4px)',
                          pointerEvents: 'none',
                          zIndex: 50,
                        }}
                      >
                        {country.name}
                        {isActive ? '  ✦ Active Franchise' : isPotential ? '  ◌ Potential Market' : ''}
                        <div
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            width: 8,
                            height: 8,
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            background: 'var(--bg-base)',
                            borderRight: '1px solid var(--border-gold)',
                            borderBottom: '1px solid var(--border-gold)',
                          }}
                        />
                      </div>
                    )}
                    <img
                      src={flagUrl(country.code)}
                      alt={country.name}
                      width={size}
                      height={size}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        display: 'block',
                        objectFit: 'cover',
                        opacity: isActive ? 1 : isPotential ? 0.9 : isHovered ? 1 : 0.55,
                        transition: 'opacity 0.15s ease',
                      }}
                    />
                  </button>
                )
              })}
            </div>

            {/* Radial mask behind WCL mark */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  'radial-gradient(circle 14vw at 50% 50%, color-mix(in srgb, var(--bg-base) 92%, transparent) 0%, color-mix(in srgb, var(--bg-base) 65%, transparent) 55%, transparent 78%)',
              }}
              aria-hidden="true"
            />

            {/* WCL centrepiece */}
            <div
              className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
              style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 1s ease 0.5s',
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: '13vw',
                  height: '13vw',
                  maxWidth: 200,
                  maxHeight: 200,
                  minWidth: 130,
                  minHeight: 130,
                  border: '1px solid rgba(234,179,8,0.18)',
                  boxShadow: '0 0 60px rgba(234,179,8,0.08)',
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  width: '10vw',
                  height: '10vw',
                  maxWidth: 155,
                  maxHeight: 155,
                  minWidth: 100,
                  minHeight: 100,
                  border: '1.5px solid rgba(234,179,8,0.38)',
                }}
              />
              <p
                className="relative font-display font-black leading-none text-gold-gradient"
                style={{
                  fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 0 28px rgba(234,179,8,0.45))',
                }}
              >
                WCL
              </p>
              <p
                className="relative mt-2 font-bold uppercase tracking-[0.22em]"
                style={{ fontSize: '8px', color: 'var(--color-gold-deeper)' }}
              >
                Warriors Champions League
              </p>
              <p
                className="relative mt-1 uppercase"
                style={{ fontSize: '7px', letterSpacing: '0.18em', color: 'var(--text-faint)' }}
              >
                54 Nations · One Champion
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}