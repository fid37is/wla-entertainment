'use client'

import { useState, useEffect } from 'react'

const AFRICAN_COUNTRIES = [
  { name: 'Nigeria',       flag: '🇳🇬', franchise: true  },
  { name: 'Ghana',         flag: '🇬🇭', franchise: true  },
  { name: 'Kenya',         flag: '🇰🇪', franchise: true  },
  { name: 'South Africa',  flag: '🇿🇦', franchise: true  },
  { name: 'Egypt',         flag: '🇪🇬', franchise: false },
  { name: 'Ethiopia',      flag: '🇪🇹', franchise: false },
  { name: 'Tanzania',      flag: '🇹🇿', franchise: false },
  { name: 'Uganda',        flag: '🇺🇬', franchise: false },
  { name: 'Algeria',       flag: '🇩🇿', franchise: false },
  { name: 'Sudan',         flag: '🇸🇩', franchise: false },
  { name: 'Morocco',       flag: '🇲🇦', franchise: false },
  { name: 'Angola',        flag: '🇦🇴', franchise: false },
  { name: 'Mozambique',    flag: '🇲🇿', franchise: false },
  { name: 'Cameroon',      flag: '🇨🇲', franchise: false },
  { name: 'Ivory Coast',   flag: '🇨🇮', franchise: false },
  { name: 'Madagascar',    flag: '🇲🇬', franchise: false },
  { name: 'Niger',         flag: '🇳🇪', franchise: false },
  { name: 'Burkina Faso',  flag: '🇧🇫', franchise: false },
  { name: 'Mali',          flag: '🇲🇱', franchise: false },
  { name: 'Malawi',        flag: '🇲🇼', franchise: false },
  { name: 'Zambia',        flag: '🇿🇲', franchise: false },
  { name: 'Senegal',       flag: '🇸🇳', franchise: false },
  { name: 'Zimbabwe',      flag: '🇿🇼', franchise: false },
  { name: 'Chad',          flag: '🇹🇩', franchise: false },
  { name: 'Guinea',        flag: '🇬🇳', franchise: false },
  { name: 'Rwanda',        flag: '🇷🇼', franchise: false },
  { name: 'Benin',         flag: '🇧🇯', franchise: false },
  { name: 'Burundi',       flag: '🇧🇮', franchise: false },
  { name: 'Tunisia',       flag: '🇹🇳', franchise: false },
  { name: 'Somalia',       flag: '🇸🇴', franchise: false },
  { name: 'Togo',          flag: '🇹🇬', franchise: false },
  { name: 'Sierra Leone',  flag: '🇸🇱', franchise: false },
  { name: 'Libya',         flag: '🇱🇾', franchise: false },
  { name: 'DR Congo',      flag: '🇨🇩', franchise: false },
  { name: 'Liberia',       flag: '🇱🇷', franchise: false },
  { name: 'C.African Rep', flag: '🇨🇫', franchise: false },
  { name: 'Mauritania',    flag: '🇲🇷', franchise: false },
  { name: 'Eritrea',       flag: '🇪🇷', franchise: false },
  { name: 'Namibia',       flag: '🇳🇦', franchise: false },
  { name: 'Gambia',        flag: '🇬🇲', franchise: false },
  { name: 'Botswana',      flag: '🇧🇼', franchise: false },
  { name: 'Gabon',         flag: '🇬🇦', franchise: false },
  { name: 'Lesotho',       flag: '🇱🇸', franchise: false },
  { name: 'Guinea-Bissau', flag: '🇬🇼', franchise: false },
  { name: 'Eq. Guinea',    flag: '🇬🇶', franchise: false },
  { name: 'Mauritius',     flag: '🇲🇺', franchise: false },
  { name: 'Eswatini',      flag: '🇸🇿', franchise: false },
  { name: 'Djibouti',      flag: '🇩🇯', franchise: false },
  { name: 'Comoros',       flag: '🇰🇲', franchise: false },
  { name: 'Cabo Verde',    flag: '🇨🇻', franchise: false },
  { name: 'Sao Tome',      flag: '🇸🇹', franchise: false },
  { name: 'Seychelles',    flag: '🇸🇨', franchise: false },
  { name: 'South Sudan',   flag: '🇸🇸', franchise: false },
  { name: 'Congo',         flag: '🇨🇬', franchise: false },
]

export function WCLSection() {
  const [mounted, setMounted] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

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
        style={{ background: 'radial-gradient(ellipse 80% 70% at 70% 50%, rgba(234,179,8,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">

          {/* ── Left: Copy ── */}
          <div
            className="flex flex-col justify-center px-6 py-20 lg:pr-16"
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
              style={{
                fontSize: 'clamp(3rem, 5.5vw, 5rem)',
                color: 'var(--text-primary)',
              }}
            >
              One Continent.<br />
              <span className="text-gold-gradient">One Champion.</span>
            </h2>

            <p className="mb-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Every country runs its own season. Every season produces a national champion.
              Those champions converge at one place, on one course, for one title -
              the <span className="font-bold" style={{ color: 'var(--text-primary)' }}>Warriors Champions League</span>.
            </p>
            <p className="mb-10 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              WCL is not a television show. It is Africa&apos;s first continental obstacle
              sports championship - with its own broadcast rights, its own sponsorship
              tier, and its own cultural moment. 54 nations. One course. That is identity.
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {AFRICAN_COUNTRIES.filter((c) => c.franchise).map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
                  style={{
                    border: '1px solid var(--border-gold-strong)',
                    background: 'var(--bg-gold-tint-2)',
                    color: 'var(--text-gold)',
                  }}
                >
                  {c.flag} {c.name}
                  <span className="text-xs" style={{ color: 'var(--color-gold-deeper)' }}>✦ Confirmed</span>
                </span>
              ))}
            </div>

            <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
              WCL is a Series B vision. The Series A is Nigeria. The ceiling is continental.
            </p>
          </div>

          {/* ── Right: Nation mosaic + WCL mark ── */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{
              borderLeft: '1px solid var(--border-subtle)',
              background: 'var(--bg-surface)',
            }}
          >
            {/* Nation flag grid */}
            <div
              className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-x-3 gap-y-3 p-8"
              style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1.2s ease 0.2s' }}
            >
              {AFRICAN_COUNTRIES.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-col items-center gap-1 cursor-default transition-all duration-200"
                  style={{
                    opacity: hovered === country.name ? 1 : country.franchise ? 0.9 : 0.22,
                    transform: hovered === country.name ? 'scale(1.3)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHovered(country.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span style={{ fontSize: country.franchise ? '28px' : '20px', lineHeight: 1 }}>
                    {country.flag}
                  </span>
                  <span
                    className="font-bold uppercase"
                    style={{
                      fontSize: '7px',
                      letterSpacing: '0.08em',
                      color: country.franchise ? 'var(--color-gold)' : 'var(--text-faint)',
                    }}
                  >
                    {country.name.length > 10 ? country.name.slice(0, 9) + '.' : country.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Radial mask so WCL mark pops - adapts to theme */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(circle 180px at 50% 50%, color-mix(in srgb, var(--bg-base) 92%, transparent) 0%, color-mix(in srgb, var(--bg-base) 70%, transparent) 45%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* WCL centrepiece */}
            <div
              className="relative z-10 flex flex-col items-center justify-center text-center"
              style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 0.5s' }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 220, height: 220,
                  border: '1px solid rgba(234,179,8,0.15)',
                  boxShadow: '0 0 60px rgba(234,179,8,0.08)',
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full"
                style={{ width: 170, height: 170, border: '1.5px solid rgba(234,179,8,0.35)' }}
              />

              {/* WCL text */}
              <p
                className="relative font-display font-black leading-none text-gold-gradient"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  letterSpacing: '-0.02em',
                  filter: 'drop-shadow(0 0 30px rgba(234,179,8,0.4))',
                }}
              >
                WCL
              </p>
              <p
                className="relative mt-2 font-bold uppercase tracking-[0.25em]"
                style={{ fontSize: '9px', color: 'var(--color-gold-deeper)' }}
              >
                Warriors Champions League
              </p>
              <p
                className="relative mt-1"
                style={{ fontSize: '8px', letterSpacing: '0.15em', color: 'var(--text-faint)' }}
              >
                54 NATIONS · ONE CHAMPION
              </p>
            </div>

            {/* Hover tooltip */}
            {hovered && (
              <div
                className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full px-5 py-2 text-xs font-bold backdrop-blur-sm whitespace-nowrap"
                style={{
                  border: '1px solid var(--border-gold)',
                  background: 'color-mix(in srgb, var(--bg-base) 90%, transparent)',
                  color: 'var(--text-gold)',
                }}
              >
                {AFRICAN_COUNTRIES.find((c) => c.name === hovered)?.flag}{' '}
                {hovered}
                {AFRICAN_COUNTRIES.find((c) => c.name === hovered)?.franchise ? '  ✦ Confirmed Franchise' : ''}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
