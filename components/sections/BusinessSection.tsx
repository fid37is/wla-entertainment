'use client'

import { PILLARS } from '@/lib/constants'

export function BusinessSection() {
  return (
    <section
      id="business"
      className="px-6 py-24"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display mb-4 font-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--text-primary)' }}>
            Business Pillars
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Six registered activities. One continental sports entertainment model.
          </p>
        </div>

        <div className="hairline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="hairline-cell group p-7 transition-colors duration-300">
              <p className="font-mono mb-4 text-[0.68rem]" style={{ color: 'var(--text-gold)' }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display mb-2 text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
