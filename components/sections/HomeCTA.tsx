import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function HomeCTA() {
  return (
    <section
      className="px-6 py-24"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Investors */}
          <div
            className="rounded-2xl p-8"
            style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-gold-tint)' }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
              Investor Relations
            </p>
            <h2 className="mb-4 font-display text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Series A - NGN 800M
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              WLA is raising its Series A to fund Season 1 production, obstacle course equipment,
              and the core team.
            </p>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black transition-all hover:brightness-110"
              style={{ background: 'var(--gradient-gold)' }}
            >
              View Investment Case <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Contact */}
          <div
            className="rounded-2xl p-8"
            style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
              Get in Touch
            </p>
            <h2 className="mb-4 font-display text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Franchise, partnership, or press?
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              All enquiries - franchise licensing, sponsorship, broadcasting, or media - are
              handled directly by the founding team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all"
                style={{ border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}
              >
                Contact Page <ArrowUpRight size={14} />
              </Link>
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all"
                style={{ color: 'var(--text-muted)' }}
              >
                <Mail size={14} /> {COMPANY.email.general}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
