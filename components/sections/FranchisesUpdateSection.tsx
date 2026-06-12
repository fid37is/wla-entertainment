'use client'

import { ArrowUpRight, Bell } from 'lucide-react'

const FRANCHISE_CHANNELS = [
  {
    code: 'NNW',
    name: 'Naija Ninja Warrior',
    country: 'Nigeria',
    flag: '🇳🇬',
    status: 'live' as const,
    desc: 'Live competition dates, zone results, contestant registrations, and Season 1 highlights.',
    links: [
      { label: 'naijaninja.net', href: 'https://naijaninja.net' },
      { label: 'Register to Compete', href: 'https://naijaninja.net/register' },
      { label: 'Investor Portal', href: 'https://investors.naijaninja.net' },
    ],
  },
  {
    code: 'GNW',
    name: 'Ghana Ninja Warrior',
    country: 'Ghana',
    flag: '🇬🇭',
    status: 'available' as const,
    desc: 'West Africa franchise. Available for licensing to a local production partner.',
    links: [],
  },
  {
    code: 'KNW',
    name: 'Kenya Ninja Warrior',
    country: 'Kenya',
    flag: '🇰🇪',
    status: 'available' as const,
    desc: 'East Africa franchise. Available for licensing to a local production partner.',
    links: [],
  },
]

export function FranchiseUpdatesSection() {
  return (
    <section
      className="px-6 py-20"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.35em]"
              style={{ color: 'var(--text-gold)' }}
            >
              Stay Connected
            </p>
            <h2
              className="font-display font-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)' }}
            >
              Follow the Franchises
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            WLA is the parent company. Each franchise runs its own platform where fans,
            contestants, and sponsors get live updates.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FRANCHISE_CHANNELS.map((f) => {
            const isLive = f.status === 'live'
            return (
              <div
                key={f.code}
                className="rounded-2xl p-6 transition-all"
                style={isLive ? {
                  border: '1px solid var(--border-gold)',
                  background: 'var(--bg-gold-tint)',
                } : {
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-surface)',
                }}
              >
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{f.flag}</span>
                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-[0.15em]"
                        style={{ color: 'var(--text-gold)' }}
                      >
                        {f.code}
                      </p>
                      <p
                        className="font-display font-bold"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {f.name}
                      </p>
                    </div>
                  </div>
                  {isLive ? (
                    <span
                      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold"
                      style={{
                        border: '1px solid var(--border-gold)',
                        background: 'var(--bg-gold-tint-2)',
                        color: 'var(--text-gold)',
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 animate-pulse rounded-full"
                        style={{ background: 'var(--color-gold)' }}
                      />
                      Live
                    </span>
                  ) : (
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold"
                      style={{
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-faint)',
                      }}
                    >
                      Available for Licensing
                    </span>
                  )}
                </div>

                <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {f.desc}
                </p>

                {isLive && f.links.length > 0 ? (
                  <div className="space-y-2">
                    {f.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-bold transition-all"
                        style={{
                          border: '1px solid var(--border-subtle)',
                          background: 'var(--bg-elevated)',
                          color: 'var(--text-secondary)',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                          ;(e.currentTarget as HTMLElement).style.color = 'var(--text-gold)'
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                          ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                        }}
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                ) : !isLive ? (
                  <div
                    className="flex items-center gap-2 rounded-lg px-4 py-3"
                    style={{
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--bg-surface)',
                    }}
                  >
                    <Bell size={13} style={{ color: 'var(--text-faint)' }} />
                    <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                      Enquire via{' '}
                      <a
                        href="mailto:legal@naijaninja.net"
                        className="transition-colors"
                        style={{ color: 'var(--color-gold-deeper)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gold-deeper)')}
                      >
                        legal@naijaninja.net
                      </a>
                    </span>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        <div
          className="mt-8 rounded-xl px-6 py-4"
          style={{
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)',
          }}
        >
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            <span className="font-bold" style={{ color: 'var(--text-muted)' }}>WLA platform note -</span>{' '}
            Competition schedules, live results, contestant registration, and episode highlights live on
            each franchise&apos;s own platform. Follow{' '}
            <a
              href="https://naijaninja.net"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--color-gold-deeper)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gold-deeper)')}
            >
              naijaninja.net
            </a>{' '}
            for all NNW Season 1 activity.
          </p>
        </div>

      </div>
    </section>
  )
}
