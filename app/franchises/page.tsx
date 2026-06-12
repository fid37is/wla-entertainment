import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FlagNigeria, FlagGhana, FlagKenya, FlagSouthAfrica } from '@/components/ui/Flags'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Franchises - Warriors League Africa',
  description:
    'WLA Entertainment Ltd licenses the Warriors League Africa format across Africa. Nigeria is live. Ghana, Kenya, and South Africa are available for licensing.',
}

const FRANCHISES = [
  {
    Flag: FlagNigeria,
    code: 'NNW',
    name: 'Naija Ninja Warrior',
    country: 'Nigeria',
    region: 'West Africa',
    status: 'live' as const,
    desc: "The flagship franchise and proof of concept for the WLA format. Nigeria Ninja Warrior runs across all six geopolitical zones - North-West, North-East, North-Central, South-West, South-East, and South-South - with zone champions qualifying for the Grand Finale in FCT Abuja.",
    details: [
      'Six zonal competition weeks',
      'National Grand Finale - FCT Abuja',
      'Broadcast-quality episode production',
      '220M+ addressable audience',
      'naijaninja.net platform live',
    ],
    url: 'https://naijaninja.net',
    cta: 'Visit naijaninja.net',
  },
  {
    Flag: FlagGhana,
    code: 'GNW',
    name: 'Ghana Ninja Warrior',
    country: 'Ghana',
    region: 'West Africa',
    status: 'available' as const,
    desc: "Ghana is the natural first expansion market - strong youth culture, a growing entertainment industry, and a diaspora that drives digital viewership. The WLA format is ready to license to a Ghanaian production partner.",
    details: [
      'Format licence available',
      'Local production partner required',
      'Full WLA format bible provided',
      'Equipment introduction to Gomeng',
      'WLA brand standards and support',
    ],
    url: null,
    cta: null,
  },
  {
    Flag: FlagKenya,
    code: 'KNW',
    name: 'Kenya Ninja Warrior',
    country: 'Kenya',
    region: 'East Africa',
    status: 'available' as const,
    desc: "Kenya's media market - anchored by Nairobi's creative economy and East Africa's largest digital audience - makes it a priority expansion territory for WLA. The format licence is open to qualified local partners.",
    details: [
      'Format licence available',
      'Local production partner required',
      'Full WLA format bible provided',
      'Equipment introduction to Gomeng',
      'WLA brand standards and support',
    ],
    url: null,
    cta: null,
  },
  {
    Flag: FlagSouthAfrica,
    code: 'SANW',
    name: 'South Africa Ninja Warrior',
    country: 'South Africa',
    region: 'Southern Africa',
    status: 'available' as const,
    desc: "South Africa brings the most developed broadcast infrastructure on the continent - MultiChoice, SuperSport, and a proven content market. A WLA franchise here would anchor the Southern Africa network and provide a direct pathway to continental broadcast deals.",
    details: [
      'Format licence available',
      'Local production partner required',
      'Full WLA format bible provided',
      'Equipment introduction to Gomeng',
      'WLA brand standards and support',
    ],
    url: null,
    cta: null,
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

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
              The Network
            </p>
            <h1
              className="mb-6 font-display font-black leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: 'var(--text-primary)' }}
            >
              One format.
              <br />
              <span style={{
                background: 'var(--gradient-gold-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                54 nations.
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              WLA owns the Warriors League Africa format. We license it to local partners across the continent - each producing their own edition, under the WLA standard, with their own broadcasters and sponsors. Nigeria is live. Every other market is open.
            </p>
          </div>
        </section>

        {/* ── Full-bleed flag strip ── */}
        <section id="network">
          <div className="flex w-full overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {FRANCHISES.map((f, i) => {
              const isLive = f.status === 'live'
              return (
                <div
                  key={f.code}
                  className="group relative flex-none overflow-hidden"
                  style={{ width: '25vw', minWidth: '220px', height: '480px' }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: isLive ? 'brightness(0.8)' : 'brightness(0.22) saturate(0.3)' }}
                  >
                    <f.Flag className="h-full w-full" />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(160deg, transparent 25%, rgba(0,0,0,0.92) 65%)' }}
                  />
                  {isLive && (
                    <div className="absolute left-0 top-0 h-full w-1" style={{ background: 'var(--gradient-gold)' }} />
                  )}
                  <div className="absolute left-5 top-5">
                    <span
                      className="font-display text-7xl font-black leading-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: isLive ? '1px rgba(234,179,8,0.2)' : '1px rgba(255,255,255,0.06)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {isLive && (
                    <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full px-3 py-1.5"
                      style={{ background: 'var(--color-gold)' }}>
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-black">Live</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p
                      className="mb-1 font-display font-black leading-none"
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: isLive ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {f.code}
                    </p>
                    <p className="mb-3 text-sm" style={{ color: 'var(--text-secondary)' }}>{f.name}</p>
                    <div
                      className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: isLive ? 'rgba(234,179,8,0.15)' : 'rgba(255,255,255,0.05)',
                        color: isLive ? 'var(--color-gold)' : 'var(--text-faint)',
                        border: isLive ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                      }}
                    >
                      {isLive ? 'Season 1 · 2026' : 'Available for Licensing'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Franchise detail cards ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl space-y-8">
            {FRANCHISES.map((f) => {
              const isLive = f.status === 'live'
              return (
                <div
                  key={f.code}
                  className="grid grid-cols-1 gap-8 rounded-[--radius-2xl] p-8 lg:grid-cols-2"
                  style={{
                    background: isLive ? 'var(--bg-gold-tint)' : 'var(--bg-surface)',
                    border: isLive ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                  }}
                >
                  {/* Left */}
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <div className="overflow-hidden rounded-xl" style={{ width: 56, height: 38 }}>
                        <f.Flag className="h-full w-full" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-gold)' }}>{f.code}</p>
                        <h3 className="font-display text-xl font-black" style={{ color: 'var(--text-primary)' }}>{f.name}</h3>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{f.country} · {f.region}</p>
                      </div>
                    </div>
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.desc}</p>
                    {f.url && (
                      <a
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black transition-all hover:brightness-110"
                        style={{ background: 'var(--gradient-gold)' }}
                      >
                        {f.cta} <ArrowUpRight size={14} />
                      </a>
                    )}
                    {!isLive && (
                      <a
                        href={`mailto:${COMPANY.email.general}?subject=Franchise Licence Enquiry - ${f.code}`}
                        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:brightness-110"
                        style={{ background: 'var(--gradient-gold)', color: '#000' }}
                      >
                        Enquire About Licensing <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>

                  {/* Right - details */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {isLive ? 'Format Details' : 'What You Get'}
                    </p>
                    <ul className="space-y-3">
                      {f.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--color-gold)' }} />
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
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
                WLA provides the format. Local partners provide everything else. The same model that built Big Brother, MasterChef, and The Voice into global IP empires.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-[--radius-2xl] p-8" style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
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
              <div className="rounded-[--radius-2xl] p-8" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
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
                className="flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:bg-white/5"
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