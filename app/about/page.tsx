import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WLALogo, Avatar } from '@/components/ui/logo'
import { AfricaMap } from '@/components/sections/AfricaMap'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About WLA Entertainment Ltd — Warriors League Africa',
  description:
    "WLA Entertainment Ltd — incorporated May 2026. The company behind Warriors League Africa, Africa's first continental obstacle sports franchise network.",
}

const TEAM = [
  {
    name: 'Fidelis Agba',
    role: 'Founder & CEO',
    bio: 'Creator of the WLA format and the strategic vision behind Warriors League Africa. Fidelis leads investor relations, format IP development, manufacturer partnerships, and the overall direction of the company.',
    email: COMPANY.email.general,
    // DROP photo at /public/team/fidelis-agba.jpg — min 400×400px, face centred
    photo: '/team/fidelis-agba.jpg' as string | null,
    initials: 'FA',
    founder: true,
  },
  {
    name: 'Operations Manager',
    role: 'Head of Operations',
    bio: 'Owns all venue management, equipment installation coordination, zone logistics, event staffing, and day-to-day operational execution across all six geopolitical zones.',
    email: null,
    // DROP photo at /public/team/operations-manager.jpg when confirmed
    photo: null as string | null,
    initials: 'OM',
    founder: false,
  },
  {
    name: 'Legal Counsel',
    role: 'Legal Counsel',
    bio: 'Retained counsel covering format IP protection, investor agreements, sponsorship and broadcasting contracts, employment law, and all regulatory compliance.',
    email: null,
    // DROP photo at /public/team/legal-counsel.jpg when confirmed
    photo: null as string | null,
    initials: 'LC',
    founder: false,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.09) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

              {/* Left — copy */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">About WLA</p>
                <h1 className="mb-6 font-display font-black leading-tight text-white" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                  Built to Own Africa&apos;s<br />
                  <span style={{ background: 'linear-gradient(135deg, #EAB308 0%, #FDE047 50%, #CA8A04 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Entertainment Future
                  </span>
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-400">
                  WLA Entertainment Ltd was incorporated in May 2026 with one mandate: own, produce, and franchise Africa&apos;s first continental obstacle sports entertainment IP. Not an adaptation of a Western format — an original African format built to travel.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Strategy', 'Strength', 'Resilience'].map((v) => (
                    <span key={v} className="rounded-full border border-yellow-500/30 px-4 py-2 text-sm font-bold tracking-wider text-yellow-400">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — animated Africa franchise map */}
              <div className="flex items-center justify-center">
                <AfricaMap />
              </div>

            </div>
          </div>
        </section>

        {/* ── The Human Question ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Why This Exists</p>
            <blockquote className="mb-8 font-display font-black italic leading-tight text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              &ldquo;What does a person become when they stop believing they can?&rdquo;
            </blockquote>
            <p className="mb-6 leading-relaxed text-gray-400">
              Nigeria Ninja Warrior is built on the answer. Not the Nigerian answer — the human answer. Every person who has ever been told they are too old, too slow, too female, too northern, too southern, too poor — and chose to run anyway — is the audience, the contestant, and the reason this show exists.
            </p>
            <p className="leading-relaxed text-gray-400">
              Global distributors do not buy African stories. They buy universal stories that happen to be set in Africa. WLA leads with the human question — the one every viewer in Lagos, London, or the diaspora already knows the answer to — and roots it in something felt everywhere: the cost of proving yourself.
            </p>
          </div>
        </section>

        {/* ── Company ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">The Company</p>
                <h2 className="mb-6 font-display text-3xl font-black text-white md:text-4xl">What WLA Entertainment Is</h2>
                <div className="space-y-4 text-gray-400">
                  <p className="leading-relaxed">
                    WLA Entertainment Ltd is a private company limited by shares, registered with Nigeria&apos;s Corporate Affairs Commission. It is the umbrella entity that owns the Warriors League Africa format — the competition rules, gameplay mechanics, brand standards, and franchise licensing model.
                  </p>
                  <p className="leading-relaxed">
                    Nigeria Ninja Warrior (NNW) is the first edition of that format, produced and operated directly by WLA. Every subsequent country franchise — Ghana, Kenya, South Africa — will be licensed to local partners who produce the show in their territory while WLA earns format fees and royalties.
                  </p>
                  <p className="leading-relaxed">
                    This is the same structural model that made Big Brother, MasterChef, and The Voice into global IP empires. WLA owns the format. The format scales without proportional cost growth.
                  </p>
                </div>
              </div>

              {/* Company details card */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-6">
                  <div className="mb-5 flex items-center gap-4 border-b border-white/10 pb-5">
                    {/* DROP /public/wla-logo.png */}
                    <WLALogo size={48} rounded="rounded-xl" />
                    <div>
                      <p className="font-display text-lg font-black text-white">{COMPANY.name}</p>
                      <p className="text-xs font-bold tracking-wider text-yellow-500">Warriors League Africa</p>
                    </div>
                  </div>
                  <div className="space-y-0">
                    {[
                      ['RC Number', COMPANY.rc],
                      ['Company Type', 'Private Company Limited by Shares'],
                      ['Incorporated', 'May 8, 2026'],
                      ['Status', 'Active'],
                      ['Registered With', 'Corporate Affairs Commission, Nigeria'],
                      ['Address', 'Asaba, Delta State, Nigeria'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 border-b border-white/5 py-3 text-sm last:border-0">
                        <span className="flex-shrink-0 text-gray-600">{label}</span>
                        <span className="text-right text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇳🇬</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-yellow-500">NNW — Live</p>
                      <p className="font-display font-bold text-white">Naija Ninja Warrior</p>
                    </div>
                  </div>
                  <a href={COMPANY.website} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-full bg-gold-gradient px-4 py-2 text-xs font-bold text-black">
                    Visit <ArrowUpRight size={12} />
                  </a>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-4">
                  <ShieldCheck size={15} className="flex-shrink-0 text-yellow-600" />
                  <p className="text-xs text-gray-600">
                    CAC Registered · {COMPANY.rc} · Incorporated May 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">The Team</p>
              <h2 className="mb-3 font-display text-3xl font-black text-white md:text-4xl">Leadership</h2>
              <p className="mx-auto max-w-xl text-gray-500">
                WLA is founder-led with a lean confirmed team. The company scales deliberately — every hire is made when the role is ready to be filled properly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className={`rounded-2xl border p-7 transition-all duration-300 ${member.founder ? 'border-yellow-500/30 bg-yellow-500/[0.03] hover:border-yellow-500/50' : 'border-white/8 bg-white/[0.02] hover:border-white/15'}`}
                >
                  {/* Avatar — drop photo at member.photo path to activate */}
                  <div className="mb-5">
                    <Avatar
                      src={member.photo}
                      alt={member.name}
                      initials={member.initials}
                      size={120}
                      gold={member.founder}
                      className="rounded-2xl"
                    />
                  </div>
                  {member.email && (
                    <a href={`mailto:${member.email}`}
                      className="mb-4 inline-flex items-center gap-2 text-xs text-gray-500 transition hover:text-yellow-400"
                      aria-label={`Email ${member.name}`}>
                      <Mail size={13} /> {member.email}
                    </a>
                  )}

                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-yellow-500">{member.role}</p>
                  <h3 className="mb-3 font-display text-xl font-black text-white">{member.name}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Franchise Network ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">The Network</p>
              <h2 className="mb-3 font-display text-3xl font-black text-white md:text-4xl">Continental Expansion Plan</h2>
              <p className="mx-auto max-w-xl text-gray-500">Nigeria proves the concept. The format then licenses across Africa — one country at a time, each carrying the WLA standard.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { flag: '🇳🇬', code: 'NNW', country: 'Nigeria', status: 'Live — Series A', active: true },
                { flag: '🇬🇭', code: 'GNW', country: 'Ghana', status: 'Year 3', active: false },
                { flag: '🇰🇪', code: 'KNW', country: 'Kenya', status: 'Year 4', active: false },
                { flag: '🇿🇦', code: 'SANW', country: 'South Africa', status: 'Year 5', active: false },
              ].map((f) => (
                <div key={f.code} className={`rounded-2xl border p-6 text-center transition-all ${f.active ? 'border-yellow-500/35 bg-yellow-500/[0.04]' : 'border-white/8 bg-white/[0.02]'}`}>
                  <div className="mb-3 text-4xl">{f.flag}</div>
                  <p className="mb-0.5 text-xs font-black uppercase tracking-[0.2em] text-yellow-500">{f.code}</p>
                  <p className="mb-2 font-display font-bold text-white">{f.country}</p>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${f.active ? 'bg-yellow-500/10 text-yellow-400' : 'bg-white/5 text-gray-600'}`}>
                    {f.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-black text-white md:text-4xl">Back the founding team</h2>
            <p className="mb-8 text-gray-400">
              Series A — NGN 800M is open. The investor who backs WLA at Series A buys the continent&apos;s first obstacle sports IP at its founding price.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/investors"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}>
                View Investment Case <ArrowUpRight size={16} />
              </Link>
              <a href={`mailto:${COMPANY.email.general}?subject=WLA — Enquiry`}
                className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:border-white/40 hover:bg-white/5">
                Contact Founder
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}