import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AfricaMap } from '@/components/sections/AfricaMap'
import { COMPANY } from '@/lib/constants'

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
    name: 'Naija Ninja Warrior',
    country: 'Nigeria',
    region: 'West Africa',
    status: 'live',
    desc: 'The flagship franchise and proof of concept for the WLA format. Runs across all six geopolitical zones, with zone champions qualifying for the Grand Finale in FCT Abuja.',
    url: 'https://naijaninja.net',
  },
  {
    code: 'GNW',
    name: 'Ghana Ninja Warrior',
    country: 'Ghana',
    region: 'West Africa',
    status: 'projected',
    desc: "A projected expansion market once the Nigerian edition has proven the format. No licence has been issued and no partner has been confirmed.",
    url: null,
  },
  {
    code: 'KNW',
    name: 'Kenya Ninja Warrior',
    country: 'Kenya',
    region: 'East Africa',
    status: 'projected',
    desc: "A projected expansion market under consideration for East Africa. No licence has been issued and no partner has been confirmed.",
    url: null,
  },
  {
    code: 'SANW',
    name: 'South Africa Ninja Warrior',
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
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                  The Network
                </p>
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
                  WLA owns the Warriors League Africa format. Nigeria is the proof of concept  live and
                  operating. Every other market on this map is a projected expansion, not a confirmed
                  franchise.
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
                    className="rounded-2xl p-8"
                    style={{
                      background: isLive ? 'var(--bg-gold-tint)' : 'var(--bg-surface)',
                      border: isLive ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-1 text-xs font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-gold)' }}>
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
                        <span
                          className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5"
                          style={{ background: 'var(--color-gold)' }}
                        >
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-black">Live</span>
                        </span>
                      ) : (
                        <span
                          className="flex-shrink-0 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest"
                          style={{
                            border: '1px solid var(--border-subtle)',
                            color: 'var(--text-faint)',
                          }}
                        >
                          Projected
                        </span>
                      )}
                    </div>

                    <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {f.desc}
                    </p>

                    {isLive && f.url ? (
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black transition-all hover:brightness-110"
                        style={{ background: 'var(--gradient-gold)' }}
                      >
                        Visit naijaninja.net <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <a
                        href={`mailto:${COMPANY.email.general}?subject=Franchise Interest - ${f.code}`}
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all"
                        style={{ border: '1px solid var(--border-medium)', color: 'var(--text-primary)' }}
                      >
                        Register Interest <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Licensing model ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                The Model
              </p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                How Franchise Licensing Works
              </h2>
              <p className="mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
                WLA provides the format. Local partners provide everything else  once a territory
                is confirmed and a licence is issued.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div
                className="rounded-2xl p-8"
                style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
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
              <div
                className="rounded-2xl p-8"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
              >
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

        {/* ── CTA ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Interested in a franchise licence?
            </h2>
            <p className="mb-10" style={{ color: 'var(--text-secondary)' }}>
              Contact us directly. All franchise enquiries are handled personally by the Founder & CEO.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${COMPANY.email.general}?subject=Franchise Licence Enquiry`}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
                style={{ background: 'var(--gradient-gold)' }}
              >
                <Mail size={16} /> Enquire About Licensing
              </a>
              <Link
                href="/investors"
                className="flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all"
                style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
              >
                View Investor Relations <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}