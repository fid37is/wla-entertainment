import { ArrowUpRight } from 'lucide-react'
import { SectionLabel, SectionHeading, StatusBadge, GlassCard } from '@/components/ui'
import { FRANCHISES, type Franchise } from '@/lib/constants'

function FranchiseCard({ franchise }: { franchise: Franchise }) {
  const isLive = franchise.status === 'live'

  return (
    <GlassCard
      gold={isLive}
      className="group relative p-8 transition-all duration-300"
    >
      {/* Status */}
      <div className="absolute right-6 top-6">
        <StatusBadge status={franchise.status} />
      </div>

      {/* Header */}
      <div className="mb-4 flex items-center gap-4">
        <span className="text-4xl" role="img" aria-label={franchise.country}>
          {franchise.flag}
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-500">
            {franchise.code}
          </p>
          <h3 className="font-display text-xl font-black text-white">{franchise.name}</h3>
          <p className="text-sm text-gray-500">{franchise.country}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-400">{franchise.desc}</p>

      {/* CTA */}
      {franchise.url ? (
        <a
          href={franchise.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
        >
          Visit {franchise.code} <ArrowUpRight size={14} />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-bold text-gray-600">
          In Development
        </span>
      )}
    </GlassCard>
  )
}

export function FranchisesSection() {
  return (
    <section
      id="franchises"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <SectionLabel>The Network</SectionLabel>
          <SectionHeading className="mb-4">WLA Franchises</SectionHeading>
          <p className="mx-auto max-w-xl text-gray-500">
            One brand. One standard. Multiple nations. Each franchise carries the WLA mark of
            quality, strategy, and resilience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FRANCHISES.map((franchise) => (
            <FranchiseCard key={franchise.code} franchise={franchise} />
          ))}
        </div>
      </div>
    </section>
  )
}
