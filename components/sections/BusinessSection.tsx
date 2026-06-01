import { SectionLabel, SectionHeading } from '@/components/ui'
import { PILLARS } from '@/lib/constants'

export function BusinessSection() {
  return (
    <section
      id="business"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <SectionLabel>What We Do</SectionLabel>
          <SectionHeading className="mb-4">Business Pillars</SectionHeading>
          <p className="mx-auto max-w-xl text-gray-500">
            Six registered business activities powering WLA&apos;s continental sports
            entertainment model.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:border-yellow-500/30 hover:bg-yellow-500/[0.03]"
            >
              <div className="mb-4 h-px w-8 bg-yellow-500 transition-all duration-300 group-hover:w-16" />
              <h3 className="mb-2 font-display text-lg font-black text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
