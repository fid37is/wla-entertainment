'use client'

import { SectionLabel, SectionHeading } from '@/components/ui'
import { PILLARS } from '@/lib/constants'

export function BusinessSection() {
  return (
    <section
      id="business"
      className="px-6 py-24"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <SectionHeading className="mb-4">Business Pillars</SectionHeading>
          <p className="mx-auto max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Six registered business activities powering WLA&apos;s continental sports
            entertainment model.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl p-6 transition-all duration-300"
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-surface)',
              }}
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
                className="mb-4 h-px w-8 transition-all duration-300 group-hover:w-16"
                style={{ background: 'var(--color-gold)' }}
              />
              <h3 className="mb-2 font-display text-lg font-black" style={{ color: 'var(--text-primary)' }}>
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
