'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui'
import { SOCIAL_LINKS } from '@/lib/social'
import { COMPANY } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left - copy */}
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2
              className="mb-5 font-display font-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
            >
              Investment, partnership,
              <br />or franchise enquiries?
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We handle every enquiry personally. Whether you&apos;re an investor, a brand
              looking to sponsor, a broadcaster, or a potential franchise partner - reach us
              directly or use the contact form.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                Open Contact Page <ArrowUpRight size={16} />
              </Link>
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all"
                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                Email Directly
              </a>
            </div>

            <div className="flex flex-col gap-1 text-sm" style={{ color: 'var(--text-muted)' }}>
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {COMPANY.email.general}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Right - social links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-muted)' }}>
              Follow Warriors League Africa
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card flex items-center gap-3 px-5 py-4 transition-all"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-gold-tint)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'
                  }}
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition"
                    style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-elevated)' }}
                  >
                    <s.Icon size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>
                    {s.label}
                  </span>
                  <ArrowUpRight size={13} className="ml-auto" style={{ color: 'var(--text-faint)' }} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
