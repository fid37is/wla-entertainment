'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui'
import { COMPANY } from '@/lib/constants'

export function InvestorsSection() {
  return (
    <section id="investors" className="px-6 py-24" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>Investor Relations</SectionLabel>

        <h2
          className="mb-4 font-display font-black leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--text-primary)' }}
        >
          Series A - NGN 800M
        </h2>

        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          WLA Entertainment Ltd - not a television season, but a continental entertainment IP.
          The NGN 800M Series A funds Season 1 production, custom obstacle course equipment,
          solar infrastructure, the core team, and working capital.
        </p>
        <p className="mx-auto mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          After Nigeria proves the concept, WLA licenses the format to local partners in
          Ghana, Kenya, South Africa, and beyond - earning format fees and royalties without
          operating each territory. Investors are backing the format owner, not the franchise.
        </p>

        {/* Key metrics */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: 'NGN 800M', label: 'Series A Raise' },
            { value: '$156,600', label: 'Equipment PI Confirmed' },
            { value: 'NGN 1.65B+', label: 'Year 5 Revenue Projection' },
          ].map((m) => (
            <div key={m.label} className="card-gold rounded-2xl px-6 py-5">
              <p className="mb-1 font-display text-2xl font-black text-gold-gradient">{m.value}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105"
            style={{ background: 'var(--gradient-gold)', color: '#000' }}
          >
            View Full Investment Case <ArrowUpRight size={16} />
          </Link>
          <a
            href={`mailto:${COMPANY.email.general}?subject=WLA Series A - Investment Enquiry`}
            className="flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all"
            style={{
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
              ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
              ;(e.currentTarget as HTMLElement).style.background = 'transparent'
            }}
          >
            Contact Investor Relations
          </a>
        </div>
      </div>
    </section>
  )
}
