import type { Metadata } from 'next'
import { ArrowUpRight, ShieldCheck, Lock, Mail, Phone } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Avatar } from '@/components/ui/logo'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Investor Relations — WLA Entertainment Ltd',
  description:
    "WLA Entertainment Ltd is raising Series A to build Africa's first continental obstacle sports IP franchise. Request the Information Memorandum directly.",
}

const INVESTMENT_PILLARS = [
  {
    title: 'Original African IP — not a licence',
    desc: 'WLA owns the format outright. No royalties paid to a Western rights holder. 100% of licensing revenue stays inside the company. The format is the asset.',
  },
  {
    title: 'The asset-light franchise model',
    desc: 'The Big Brother / MasterChef model. After Nigeria proves the concept, local partners in each country provide production, broadcaster, and sponsors. WLA earns format fees and royalties without operating every territory.',
  },
  {
    title: 'A category with no African incumbent',
    desc: 'Zero obstacle sports formats produced on African soil. Zero African-owned competition IP licensed internationally. First-mover advantage is available — and finite.',
  },
  {
    title: 'Nigeria is the world-class test market',
    desc: '220M people. 67% under 35. 40M+ BBNaija viewers. Success here is the proof of concept that unlocks Ghana, Kenya, South Africa, and the full continental pipeline.',
  },
  {
    title: 'Market validation before marketing spend',
    desc: '100+ organic platform signups. Survey responses from 17+ Nigerian states — all six geopolitical zones represented — with zero paid promotion.',
  },
  {
    title: 'Investing in the company, not the show',
    desc: 'Series A backs WLA Entertainment Ltd — the entity that owns the format, licenses the brand, and compounds value across every new franchise edition launched.',
  },
]

const WHAT_YOU_RECEIVE = [
  'Information Memorandum — full IM including financials, projections, and risk register',
  'Executive summary and investor briefing deck',
  'Data room access — legal, corporate, and supplier documentation',
  'Direct introductory call with the Founder & CEO',
  'Draft investor term sheet and SHA framework',
]

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 opacity-50"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

              {/* Left — copy */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Investor Relations</p>
                <h1 className="mb-6 font-display font-black leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                  Series A<br />
                  <span style={{ background: 'linear-gradient(135deg, #EAB308 0%, #FDE047 50%, #CA8A04 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    NGN 800M
                  </span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-gray-400">
                  WLA Entertainment Ltd is raising NGN 800M Series A. This is not an investment in a television season — it is an investment in the company that owns Africa&apos;s first continental obstacle sports format.
                </p>
                <p className="mb-8 leading-relaxed text-gray-400">
                  After Nigeria proves the concept, WLA licenses the format to local partners in Ghana, Kenya, South Africa, and beyond — earning format fees and royalties with minimal incremental cost. Investors back the format owner. The franchise travels.
                </p>
                <a
                  href={`mailto:${COMPANY.email.general}?subject=WLA Series A — IM Request`}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
                >
                  Request Information Memorandum <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Right — compact stat pills */}
              <div className="flex flex-col justify-center gap-3">
                {[
                  { value: 'NGN 800M', label: 'Series A Target' },
                  { value: '220M+', label: 'Nigerian Addressable Audience' },
                  { value: '4 Markets', label: 'Planned Franchise Pipeline' },
                  { value: '6 Streams', label: 'Revenue Sources — Season 1' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-6 py-4"
                  >
                    <span className="text-sm text-gray-500">{s.label}</span>
                    <span
                      className="font-display text-xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, #EAB308, #FDE047)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Confidentiality notice ── */}
        <section className="px-6 py-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-start gap-4 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] p-5">
              <Lock size={16} className="mt-0.5 flex-shrink-0 text-yellow-500" />
              <div>
                <p className="mb-1 text-sm font-bold text-yellow-400">Confidential Investment Information</p>
                <p className="text-sm leading-relaxed text-gray-400">
                  Detailed financials, use-of-funds, risk register, supplier agreements, and investor terms are contained in the WLA Entertainment Ltd Information Memorandum — issued exclusively to verified prospective investors under NDA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Investment pillars ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">The Opportunity</p>
              <h2 className="font-display text-3xl font-black text-white md:text-4xl">Why WLA, Why Now</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {INVESTMENT_PILLARS.map((card) => (
                <div key={card.title} className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all hover:border-yellow-500/20 hover:bg-yellow-500/[0.02]">
                  <div className="mb-3 h-px w-8 bg-yellow-500 transition-all duration-300 group-hover:w-14" />
                  <h3 className="mb-2 font-display text-base font-black text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Franchise model overview ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">How WLA Scales</p>
              <h2 className="mb-3 font-display text-3xl font-black text-white md:text-4xl">One Format. Multiple Territories.</h2>
              <p className="mx-auto max-w-2xl text-gray-500">
                WLA owns the format. Each country franchise is licensed — not operated. Revenue per edition grows; incremental cost does not.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { flag: '🇳🇬', code: 'NNW', country: 'Nigeria', note: 'Owned & Operated', active: true },
                { flag: '🇬🇭', code: 'GNW', country: 'Ghana', note: 'Format Licence', active: false },
                { flag: '🇰🇪', code: 'KNW', country: 'Kenya', note: 'Format Licence', active: false },
                { flag: '🇿🇦', code: 'SANW', country: 'South Africa', note: 'Format Licence', active: false },
              ].map((f) => (
                <div key={f.code} className={`rounded-2xl border p-5 text-center ${f.active ? 'border-yellow-500/35 bg-yellow-500/[0.04]' : 'border-white/8 bg-white/[0.02]'}`}>
                  <div className="mb-2 text-3xl">{f.flag}</div>
                  <p className="mb-0.5 text-xs font-black uppercase tracking-[0.2em] text-yellow-500">{f.code}</p>
                  <p className="mb-1 font-display text-sm font-bold text-white">{f.country}</p>
                  <p className="text-[11px] text-gray-600">{f.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What you receive ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Next Step</p>
              <h2 className="mb-3 font-display text-3xl font-black text-white md:text-4xl">What Verified Investors Receive</h2>
              <p className="text-gray-500">Full investment documentation issued under NDA to verified prospective investors only.</p>
            </div>
            <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-8">
              <ul className="space-y-4">
                {WHAT_YOU_RECEIVE.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
        <section className="border-t border-white/5 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-yellow-500">
              <ShieldCheck size={13} /> Series A — NGN 800M Open
            </div>
            <h2 className="mb-4 font-display text-3xl font-black text-white md:text-4xl">
              Request the Information Memorandum
            </h2>
            <p className="mb-10 leading-relaxed text-gray-400">
              Contact us directly to begin the investor verification process. All enquiries are handled personally by the Founder & CEO.
            </p>

            {/* Founder contact card */}
            <div className="mx-auto mb-8 max-w-sm rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-left">
              <div className="mb-5 flex items-center gap-4 border-b border-white/8 pb-5">
                {/* DROP /public/team/fidelis-agba.jpg — min 400×400px */}
                <Avatar
                  src="/team/fidelis-agba.jpg"
                  alt="Fidelis Agba"
                  initials="FA"
                  size={48}
                  gold
                />
                <div>
                  <p className="font-display font-black text-white">Fidelis Agba</p>
                  <p className="text-xs text-yellow-500">Founder & CEO — WLA Entertainment Ltd</p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${COMPANY.email.general}?subject=WLA Series A — IM Request`}
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-yellow-400"
                >
                  <Mail size={15} className="flex-shrink-0 text-yellow-600" />
                  {COMPANY.email.general}
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-yellow-400"
                >
                  <Phone size={15} className="flex-shrink-0 text-yellow-600" />
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${COMPANY.email.general}?subject=WLA Series A — IM Request`}
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-black transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
            >
              Request Information Memorandum <ArrowUpRight size={16} />
            </a>

            <p className="mt-8 text-xs leading-relaxed text-gray-700">
              This page provides a high-level overview only. It does not constitute an offer to sell or solicitation to buy securities. The full Information Memorandum — including financials, risk register, and terms — is issued exclusively to verified prospective investors under a signed NDA. WLA Entertainment Ltd · {COMPANY.rc} · Incorporated May 2026.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}