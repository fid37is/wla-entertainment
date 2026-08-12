import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, FileText, SearchCheck, ScrollText, Rocket } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AfricaMap } from '@/components/sections/AfricaMap'
import { FranchiseApplicationForm } from '@/components/sections/FranchiseApplicationForm'

export const metadata: Metadata = {
  title: 'Franchises - Warriors League Africa',
  description:
    'WLA Entertainment Ltd licenses the Warriors League Africa format across Africa. Nigeria is live. Ghana, Kenya, and South Africa are projected expansion markets.',
}

interface Franchise {
  code: string
  name: string
  country: string
  region: string
  status: 'live' | 'projected'
  desc: string
  url: string | null
}

const FRANCHISES: Franchise[] = [
  {
    code: 'NNW',
    name: 'Nigeria Next Warrior',
    country: 'Nigeria',
    region: 'West Africa',
    status: 'live',
    desc: 'The flagship franchise and proof of concept for the WLA format. Runs across all six geopolitical zones, with zone champions qualifying for the Grand Finale in FCT Abuja.',
    url: 'https://naijaninja.net',
  },
  {
    code: 'GNW',
    name: 'Ghana Next Warrior',
    country: 'Ghana',
    region: 'West Africa',
    status: 'projected',
    desc: "A projected expansion market once the Nigerian edition has proven the format. No licence has been issued and no partner has been confirmed.",
    url: null,
  },
  {
    code: 'KNW',
    name: 'Kenya Next Warrior',
    country: 'Kenya',
    region: 'East Africa',
    status: 'projected',
    desc: "A projected expansion market under consideration for East Africa. No licence has been issued and no partner has been confirmed.",
    url: null,
  },
  {
    code: 'SANW',
    name: 'South Africa Next Warrior',
    country: 'South Africa',
    region: 'Southern Africa',
    status: 'projected',
    desc: "A projected expansion market under consideration for Southern Africa. No licence has been issued and no partner has been confirmed.",
    url: null,
  },
]

const WHAT_WLA_PROVIDES = [
  'The format bible - competition rules, gameplay mechanics, zone structure',
  'Brand standards - visual identity, naming conventions, quality benchmarks',
  'Obstacle specifications - custom WLA course designs via confirmed supplier',
  'Production standards - broadcast quality requirements and episode structure',
  'Ongoing format support and training for local production teams',
]

const WHAT_PARTNERS_PROVIDE = [
  'Local production company - they produce the show end to end',
  'Broadcaster deal - they secure national TV or streaming rights',
  'Local sponsors - they sell their own sponsorship packages',
  'Contestants and zone structure adapted to local geography',
  'Format licence fee and ongoing royalties paid to WLA',
]

const LICENSING_STEPS = [
  { n: '01', title: 'Apply',     desc: 'Prospective operators submit market and capability details for review.', icon: FileText },
  { n: '02', title: 'Diligence', desc: 'WLA reviews trademark clearance, operator capacity and market readiness.', icon: SearchCheck },
  { n: '03', title: 'License',   desc: "A country licence is issued under the WLA brand and format standard.", icon: ScrollText },
  { n: '04', title: 'Launch',    desc: "The local edition launches under WLA's production and brand guidelines.", icon: Rocket },
]

export default function FranchisesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main>

        {/* ── Hero with map ── */}
        <section className="relative overflow-hidden pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

              {/* Left  copy */}
              <div>
                <p className="eyebrow mb-4">The Network</p>
                <h1
                  className="mb-6 font-display font-black leading-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'var(--text-primary)' }}
                >
                  One format.
                  <br />
                  <span
                    style={{
                      background: 'var(--gradient-gold-text)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    54 nations.
                  </span>
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Every nation on this map has athletes who’ve never had a course built for them. We own
                  the Warriors League Africa format - Nigeria is proof of concept, live and
                  operating. Every other market here is where we go next, not a confirmed franchise yet.
                </p>
              </div>

              {/* Right  map */}
              <div className="relative z-0 flex items-center justify-center">
                <AfricaMap />
              </div>

            </div>
          </div>
        </section>

        {/* ── Franchise grid ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {FRANCHISES.map((f) => {
                const isLive = f.status === 'live'
                return (
                  <div
                    key={f.code}
                    className="p-8"
                    style={{
                      background: isLive ? 'var(--bg-gold-tint)' : 'var(--bg-surface)',
                      border: isLive ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono mb-1 text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-gold)' }}>
                          {f.code}
                        </p>
                        <h3 className="font-display text-xl font-black" style={{ color: 'var(--text-primary)' }}>
                          {f.name}
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {f.country} · {f.region}
                        </p>
                      </div>
                      {isLive ? (
                        <span className="font-mono flex flex-shrink-0 items-center gap-2 px-3 py-2 text-[0.66rem] uppercase tracking-[0.05em]" style={{ background: 'var(--color-gold)', color: '#000' }}>
                          <span className="h-1.5 w-1.5 rounded-full bg-black" />
                          Live
                        </span>
                      ) : (
                        <span
                          className="font-mono flex-shrink-0 px-3 py-2 text-[0.66rem] uppercase tracking-[0.05em]"
                          style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-faint)' }}
                        >
                          Projected
                        </span>
                      )}
                    </div>

                    <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {f.desc}
                    </p>

                    {isLive && f.url ? (
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className="btn-shear btn-shear-gold text-xs">
                        Visit NNW <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <a href="#apply" className="btn-ghost-shear text-xs">
                        Apply for This Market <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Licensing model: process, then responsibility split ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>The Model</p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                How Franchise Licensing Works
              </h2>
              <p className="mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                A four-stage path from application to a live, broadcast-ready country edition.
                WLA provides the format - local partners provide everything else.
              </p>
            </div>

            {/* Process - the four stages */}
            <div className="hairline-grid mb-3 grid-cols-2 lg:grid-cols-4">
              {LICENSING_STEPS.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="hairline-cell p-6">
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center"
                      style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
                    >
                      <Icon size={17} style={{ color: 'var(--text-gold)' }} />
                    </div>
                    <p className="font-mono mb-1 text-[0.64rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-faint)' }}>
                      Stage {step.n}
                    </p>
                    <h3 className="font-display mb-1.5 text-base font-black" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {step.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Responsibility split - detail behind Stage 03/04 */}
            <div className="hairline-grid grid-cols-1 lg:grid-cols-2">
              <div
                className="hairline-cell p-8"
                style={{ background: 'var(--bg-gold-tint)' }}
              >
                <h3 className="mb-5 font-display text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                  WLA Provides
                </h3>
                <ul className="space-y-3">
                  {WHAT_WLA_PROVIDES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--color-gold)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hairline-cell p-8">
                <h3 className="mb-5 font-display text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                  Local Partners Provide
                </h3>
                <ul className="space-y-3">
                  {WHAT_PARTNERS_PROVIDE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--border-medium)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Franchise application form (id="apply" - anchored to from the grid above) ── */}
        <section id="apply" className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="eyebrow mb-4" style={{ justifyContent: 'center' }}>Stage 01</p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                Franchise Application
              </h2>
              <p className="mx-auto max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                Tell us about your market and operating capacity. WLA reviews every application
                against trademark clearance and format fit before moving to diligence.
              </p>
            </div>

            <FranchiseApplicationForm />

            <p className="mt-8 text-center text-sm" style={{ color: 'var(--text-muted)' }}>
              Looking to fund WLA instead of licensing a market?{' '}
              <Link href="/investors" className="font-bold" style={{ color: 'var(--text-gold)' }}>
                View Investor Relations <ArrowUpRight size={12} className="inline" />
              </Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}