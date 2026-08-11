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
        <div className="hairline-grid grid-cols-1 lg:grid-cols-2">

          {/* Investors */}
          <div className="hairline-cell p-8 md:p-10" style={{ background: 'var(--bg-gold-tint)' }}>
            <p className="font-mono mb-3 text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>
              Investor Relations
            </p>
            <h2 className="font-display mb-4 text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Series A - NGN 800M
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re raising our Series A to fund Season 1 production, obstacle course
              equipment, and the core team.
            </p>
            <Link href="/investors" className="btn-shear btn-shear-gold">
              View Investment Case <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Contact */}
          <div className="hairline-cell p-8 md:p-10">
            <p className="font-mono mb-3 text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>
              Get in Touch
            </p>
            <h2 className="font-display mb-4 text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
              Franchise, partnership, or press?
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We handle every enquiry directly through the founding team - franchise
              licensing, sponsorship, broadcasting, or media.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-ghost-shear">
                Contact Page <ArrowUpRight size={14} />
              </Link>
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="font-mono inline-flex items-center gap-2 px-4 py-4 text-xs uppercase tracking-[0.05em] transition-colors"
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
