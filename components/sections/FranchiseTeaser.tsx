import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { StatusBadge } from '@/components/ui'
import { FRANCHISES } from '@/lib/constants'

export function FranchiseTeaser() {
  return (
    <section className="px-6 py-24" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 border lg:grid-cols-2" style={{ borderColor: 'var(--line)' }}>

          {/* Copy */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="eyebrow mb-4">Franchise Network</p>
            <h2 className="font-display mb-4 font-black" style={{ fontSize: 'clamp(1.8rem, 6vw, 2.8rem)', color: 'var(--text-primary)' }}>
              Nigeria is live.<br />The continent is next.
            </h2>
            <p className="mb-7 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              NNW launched as WLA&apos;s proof-of-format in Nigeria. Priority markets are
              already under trademark and franchise review, with the wider continent
              mapped as future territory.
            </p>
            <Link href="/franchises" className="btn-shear btn-shear-green w-fit">
              View Franchise Map <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Franchise status list */}
          <div className="flex flex-col justify-center gap-1 p-8 md:p-12" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-surface)' }}>
            {FRANCHISES.map((f) => (
              <div
                key={f.code}
                className="flex items-center justify-between gap-4 py-3"
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl leading-none" aria-hidden="true">{f.flag}</span>
                  <div>
                    <p className="font-display text-sm font-black" style={{ color: 'var(--text-primary)' }}>{f.code}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{f.country}</p>
                  </div>
                </div>
                <StatusBadge status={f.status} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
