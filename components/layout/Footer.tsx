'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { SOCIAL_LINKS } from '@/lib/social'
import { COMPANY } from '@/lib/constants'

const FOOTER_LINKS = {
  Company: [
    { label: 'About WLA', href: '/about' },
    { label: 'Franchises', href: '/franchises' },
    { label: 'Business Pillars', href: '/#business' },
    { label: 'Investor Relations', href: '/investors' },
    { label: 'Contact', href: '/contact' },
  ],
  Franchises: [
    { label: 'NNW - Nigeria', href: 'https://naijaninja.net', external: true },
    { label: 'GNW - Ghana', href: null },
    { label: 'KNW - Kenya', href: null },
    { label: 'SANW - South Africa', href: null },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand + social */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <WLALogo size={40} rounded="rounded-lg" />
              <div>
                <p className="font-display text-sm font-bold" style={{ color: 'var(--text-primary)' }}>WLA Entertainment Ltd</p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-gold)' }}>
                  Warriors League Africa
                </p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Building Africa&apos;s first continental warrior competition franchise network.
            </p>

            {/* Social icons */}
            <div className="mb-5 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition"
                  style={{
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-gold)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                    ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                  }}
                >
                  <s.Icon size={15} />
                </a>
              ))}
            </div>

            <div className="space-y-1 text-xs" style={{ color: 'var(--text-faint)' }}>
              <p>{COMPANY.rc}</p>
              <p>Asaba, Delta State, Nigeria</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--text-secondary)' }}>
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm transition-colors"
                          style={{ color: 'var(--text-muted)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                          {link.label} <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm transition-colors"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <span className="text-sm" style={{ color: 'var(--text-faint)' }}>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10" style={{ borderTop: '1px solid var(--border-subtle)' }} />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            © {year} WLA Entertainment Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs transition-colors"
              style={{ color: 'var(--text-faint)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
            >
              naijaninja.net <ArrowUpRight size={10} />
            </a>
            <Link href="/privacy" className="text-xs transition-colors" style={{ color: 'var(--text-faint)' }}>
              Privacy
            </Link>
            <Link href="/terms" className="text-xs transition-colors" style={{ color: 'var(--text-faint)' }}>
              Terms
            </Link>
          </div>
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{COMPANY.rc} · Asaba, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
