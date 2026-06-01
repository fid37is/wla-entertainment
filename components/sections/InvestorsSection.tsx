import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui'
import { COMPANY } from '@/lib/constants'

export function InvestorsSection() {
  return (
    <section id="investors" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <SectionLabel>Investor Relations</SectionLabel>

        <h2
          className="mb-4 font-display font-black leading-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          Series A — NGN 800M
        </h2>

        <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
          WLA Entertainment Ltd — not a television season, but a continental entertainment IP.
          The NGN 800M Series A funds Season 1 production, custom obstacle course equipment,
          solar infrastructure, the core team, and working capital.
        </p>
        <p className="mx-auto mb-10 max-w-2xl leading-relaxed text-gray-500">
          After Nigeria proves the concept, WLA licenses the format to local partners in
          Ghana, Kenya, South Africa, and beyond — earning format fees and royalties without
          operating each territory. Investors are backing the format owner, not the franchise.
        </p>

        {/* Key metrics */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: 'NGN 800M', label: 'Series A Raise' },
            { value: '$156,600', label: 'Equipment PI Confirmed' },
            { value: 'NGN 1.65B+', label: 'Year 5 Revenue Projection' },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] px-6 py-5"
            >
              <p
                className="mb-1 font-display text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #EAB308, #FDE047)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {m.value}
              </p>
              <p className="text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/investors"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
          >
            View Full Investment Case <ArrowUpRight size={16} />
          </Link>
          <a
            href={`mailto:${COMPANY.email.general}?subject=WLA Series A — Investment Enquiry`}
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Contact Investor Relations
          </a>
        </div>
      </div>
    </section>
  )
}