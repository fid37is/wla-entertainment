// components/sections/MissionSection.tsx
'use client'

export function MissionSection() {
  return (
    <section className="px-6 py-24" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">Who We Are</p>
          <h2 className="font-display font-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', color: 'var(--text-primary)' }}>
            Why WLA Exists
          </h2>
        </div>

        {/* Mission + Vision - the actual mission statement, nothing else in this grid */}
        <div className="hairline-grid mb-3 grid-cols-1 md:grid-cols-3">
          <div className="hairline-cell p-8 md:col-span-2 md:p-10" style={{ background: 'var(--bg-gold-tint)' }}>
            <p className="font-mono mb-3 text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>01 — Mission</p>
            <h3 className="font-display mb-5 text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
              African athletes deserve a continental stage that belongs to them.
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We are not here to bring ninja warrior to Africa. We are here to build something Africa owns. A format created on this continent, protecting its IP in this continent, licensing its brand across this continent - and eventually beyond. The mission is simple: build the infrastructure that makes African athletic excellence impossible to ignore on the world stage.
            </p>
          </div>

          <div className="hairline-cell p-8 md:p-10">
            <p className="font-mono mb-3 text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>02 — Vision</p>
            <h3 className="font-display mb-5 text-xl font-black" style={{ color: 'var(--text-primary)' }}>
              The day a continent has one champion.
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              When Nigeria&apos;s best walks onto the Warriors Champions League course alongside Ghana&apos;s best, Kenya&apos;s best, South Africa&apos;s best - that is the moment we are building toward. One title. One continent. Under a format we own.
            </p>
          </div>
        </div>

        {/* How We Operate - separate, secondary, own numbering. Not part of the mission statement above. */}
        <div className="mt-14">
          <p className="font-mono mb-6 text-[0.66rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-faint)' }}>
            How We Operate
          </p>
          <div className="hairline-grid grid-cols-1 md:grid-cols-3">
            {[
              {
                n: '01',
                value: 'Strategy',
                desc: 'We built the format before we pitched it. We registered the company before we raised money. Every decision here is made in the right order.',
              },
              {
                n: '02',
                value: 'Strength',
                desc: 'The athletes who compete on this course are genuine. The production that captures them will be broadcast-quality. We do not move the standard.',
              },
              {
                n: '03',
                value: 'Resilience',
                desc: 'We are building this in Nigeria - one of the hardest operating environments on earth. If the model works here, it works anywhere on the continent.',
              },
            ].map((v) => (
              <div key={v.value} className="hairline-cell p-6">
                <p className="font-mono mb-2 text-[0.64rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-faint)' }}>{v.n} — {v.value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}