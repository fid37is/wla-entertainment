import { SectionLabel, SectionHeading, GlassCard } from '@/components/ui'
import { STATS } from '@/lib/constants'

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <SectionLabel>About WLA</SectionLabel>
            <SectionHeading className="mb-6">
              Built to Own Africa&apos;s Sports
              <br />
              Entertainment Future
            </SectionHeading>
            <p className="mb-6 leading-relaxed text-gray-400">
              WLA Entertainment Ltd (Warriors League Africa) was incorporated in May 2026 as a
              private company limited by shares, registered with Nigeria&apos;s Corporate Affairs
              Commission. The company was purpose-built to own, operate, and franchise
              warrior-format sports entertainment properties across the African continent.
            </p>
            <p className="mb-8 leading-relaxed text-gray-400">
              Our model combines live competition events, broadcast and streaming rights,
              sponsorship management, digital platforms, and franchise licensing — creating a
              multi-revenue, season-on-season compounding business across Africa&apos;s youngest
              and fastest-growing markets.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Strategy', 'Strength', 'Resilience'].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-yellow-500/30 px-4 py-2 text-sm font-bold tracking-wider text-yellow-400"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <GlassCard
                key={stat.label}
                className="p-6 text-center hover:border-yellow-500/30"
              >
                <p
                  className="mb-2 font-display text-4xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #EAB308, #FDE047)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
