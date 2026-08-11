'use client'

const INVESTMENT_PILLARS = [
  {
    title: 'Original African IP - not a licence',
    desc: 'We own the format outright. No royalties paid to a Western rights holder. 100% of licensing revenue stays inside the company. The format is the asset.',
  },
  {
    title: 'The asset-light franchise model',
    desc: 'The Big Brother / MasterChef model. After Nigeria proves the concept, local partners in each country provide production, broadcaster, and sponsors. We earn format fees and royalties without operating every territory.',
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
    desc: 'Series A backs the entity that owns the format, licenses the brand, and compounds value across every new franchise edition we launch.',
  },
]

export function InvestmentPillars() {
  return (
    <div className="hairline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {INVESTMENT_PILLARS.map((card, i) => (
        <div key={card.title} className="hairline-cell p-7">
          <p className="font-mono mb-3 text-[0.68rem]" style={{ color: 'var(--text-gold)' }}>
            {String(i + 1).padStart(2, '0')}
          </p>
          <h3 className="mb-2 font-display text-base font-black" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{card.desc}</p>
        </div>
      ))}
    </div>
  )
}