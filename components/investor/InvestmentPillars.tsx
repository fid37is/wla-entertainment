'use client'

const INVESTMENT_PILLARS = [
  {
    title: 'Original African IP - not a licence',
    desc: 'WLA owns the format outright. No royalties paid to a Western rights holder. 100% of licensing revenue stays inside the company. The format is the asset.',
  },
  {
    title: 'The asset-light franchise model',
    desc: 'The Big Brother / MasterChef model. After Nigeria proves the concept, local partners in each country provide production, broadcaster, and sponsors. WLA earns format fees and royalties without operating every territory.',
  },
  {
    title: 'A category with no African incumbent',
    desc: 'Zero obstacle sports formats produced on African soil. Zero African-owned competition IP licensed internationally. First-mover advantage is available - and finite.',
  },
  {
    title: 'Nigeria is the world-class test market',
    desc: '220M people. 67% under 35. 40M+ BBNaija viewers. Success here is the proof of concept that unlocks Ghana, Kenya, South Africa, and the full continental pipeline.',
  },
  {
    title: 'Market validation before marketing spend',
    desc: '100+ organic platform signups. Survey responses from 17+ Nigerian states - all six geopolitical zones represented - with zero paid promotion.',
  },
  {
    title: 'Investing in the company, not the show',
    desc: 'Series A backs WLA Entertainment Ltd - the entity that owns the format, licenses the brand, and compounds value across every new franchise edition launched.',
  },
]

export function InvestmentPillars() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {INVESTMENT_PILLARS.map((card) => (
        <div
          key={card.title}
          className="card group p-6 transition-all"
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
            ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-gold-tint)'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
            ;(e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)'
          }}
        >
          <div className="mb-3 h-px w-8 transition-all duration-300 group-hover:w-14" style={{ background: 'var(--color-gold)' }} />
          <h3 className="mb-2 font-display text-base font-black" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
        </div>
      ))}
    </div>
  )
}