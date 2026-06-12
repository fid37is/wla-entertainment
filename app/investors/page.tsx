import type { Metadata } from 'next'
import { ArrowUpRight, ShieldCheck, Lock } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { COMPANY } from '@/lib/constants'
import { InvestmentPillars } from '@/components/investor/InvestmentPillars'
import { ContactLinks } from '@/components/investor/ContactLinks'

export const metadata: Metadata = {
  title: 'Investor Relations - WLA Entertainment Ltd',
  description:
    "WLA Entertainment Ltd is raising Series A to build Africa's first continental obstacle sports IP franchise. Request the Information Memorandum directly.",
}

const WHAT_YOU_RECEIVE = [
  'Information Memorandum - full IM including financials, projections, and risk register',
  'Executive summary and investor briefing deck',
  'Data room access - legal, corporate, and supplier documentation',
  'Direct introductory call with the Founder & CEO',
  'Draft investor term sheet and SHA framework',
]

export default function InvestorsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-16 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 opacity-50"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

              {/* Left - copy */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>Investor Relations</p>
                <h1 className="mb-6 font-display font-black leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-primary)' }}>
                  Series A<br />
                  <span className="text-gold-gradient">NGN 800M</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  WLA Entertainment Ltd is raising NGN 800M Series A. This is not an investment in a television season - it is an investment in the company that owns Africa&apos;s first continental obstacle sports format.
                </p>
                <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  After Nigeria proves the concept, WLA licenses the format to local partners in Ghana, Kenya, South Africa, and beyond - earning format fees and royalties with minimal incremental cost. Investors back the format owner. The franchise travels.
                </p>
                <a
                  href={`mailto:${COMPANY.email.general}?subject=WLA Series A - IM Request`}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105"
                  style={{ background: 'var(--gradient-gold)', color: '#000' }}
                >
                  Request Information Memorandum <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Right - stat pills */}
              <div className="flex flex-col justify-center gap-3">
                {[
                  { value: 'NGN 800M', label: 'Series A Target' },
                  { value: '220M+', label: 'Nigerian Addressable Audience' },
                  { value: '4 Markets', label: 'Planned Franchise Pipeline' },
                  { value: '6 Streams', label: 'Revenue Sources - Season 1' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between rounded-xl px-6 py-4"
                    style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
                  >
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                    <span className="font-display text-xl font-black text-gold-gradient">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality notice */}
        <section className="px-6 py-6">
          <div className="mx-auto max-w-7xl">
            <div className="card-gold flex items-start gap-4 p-5">
              <Lock size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-gold)' }} />
              <div>
                <p className="mb-1 text-sm font-bold" style={{ color: 'var(--text-gold)' }}>Confidential Investment Information</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Detailed financials, use-of-funds, risk register, supplier agreements, and investor terms are contained in the WLA Entertainment Ltd Information Memorandum - issued exclusively to verified prospective investors under NDA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment pillars */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>The Opportunity</p>
              <h2 className="font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>Why WLA, Why Now</h2>
            </div>
            <InvestmentPillars />
          </div>
        </section>

        {/* Franchise model */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>How WLA Scales</p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>One Format. Multiple Territories.</h2>
              <p className="mx-auto max-w-2xl" style={{ color: 'var(--text-muted)' }}>
                WLA owns the format. Each country franchise is licensed - not operated. Revenue per edition grows; incremental cost does not.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { flag: '🇳🇬', code: 'NNW', country: 'Nigeria', note: 'Owned & Operated', active: true },
                { flag: '🇬🇭', code: 'GNW', country: 'Ghana', note: 'Format Licence', active: false },
                { flag: '🇰🇪', code: 'KNW', country: 'Kenya', note: 'Format Licence', active: false },
                { flag: '🇿🇦', code: 'SANW', country: 'South Africa', note: 'Format Licence', active: false },
              ].map((f) => (
                <div
                  key={f.code}
                  className="rounded-2xl p-5 text-center"
                  style={f.active ? {
                    border: '1px solid var(--border-gold-strong)',
                    background: 'var(--bg-gold-tint-2)',
                  } : {
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                  }}
                >
                  <div className="mb-2 text-3xl">{f.flag}</div>
                  <p className="mb-0.5 text-xs font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-gold)' }}>{f.code}</p>
                  <p className="mb-1 font-display text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{f.country}</p>
                  <p className="text-[11px]" style={{ color: 'var(--text-faint)' }}>{f.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you receive */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>Next Step</p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>What Verified Investors Receive</h2>
              <p style={{ color: 'var(--text-muted)' }}>Full investment documentation issued under NDA to verified prospective investors only.</p>
            </div>
            <div className="card-gold p-8">
              <ul className="space-y-4">
                {WHAT_YOU_RECEIVE.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: 'rgba(234,179,8,0.15)' }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} />
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
              style={{
                border: '1px solid var(--border-gold)',
                background: 'var(--bg-gold-tint)',
                color: 'var(--text-gold)',
              }}
            >
              <ShieldCheck size={13} /> Series A - NGN 800M Open
            </div>
            <h2 className="mb-4 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Request the Information Memorandum
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Contact us directly to begin the investor verification process. All enquiries are handled personally by the Founder & CEO.
            </p>

            {/* Founder card */}
            <div
              className="mx-auto mb-8 max-w-sm overflow-hidden rounded-2xl text-left"
              style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-surface)' }}
            >
              <div className="relative h-80 w-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                <img
                  src="/team/fidelis-agba.jpg"
                  alt="Fidelis Agba"
                  className="h-full w-full object-cover object-[center_15%]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{ background: 'linear-gradient(to top, var(--bg-base), transparent)' }}
                />
                <div className="absolute bottom-4 left-5">
                  <p className="font-display text-xl font-black" style={{ color: 'var(--text-primary)' }}>Fidelis Agba</p>
                  <p className="text-xs font-bold" style={{ color: 'var(--color-gold-dark)' }}>Founder & CEO - WLA Entertainment Ltd</p>
                </div>
              </div>
              <ContactLinks
                email={COMPANY.email.general}
                phone={COMPANY.phone}
                phoneHref={COMPANY.phoneHref}
              />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${COMPANY.email.general}?subject=WLA Series A - IM Request`}
                className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold transition-all hover:scale-105"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                Request Information Memorandum <ArrowUpRight size={16} />
              </a>
              <a
                href="/portal/login"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105"
                style={{ border: '1px solid var(--border-gold-strong)', color: 'var(--text-gold)' }}
              >
                Investor Portal <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="mt-8 text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              This page provides a high-level overview only. It does not constitute an offer to sell or solicitation to buy securities. The full Information Memorandum - including financials, risk register, and terms - is issued exclusively to verified prospective investors under a signed NDA. WLA Entertainment Ltd · {COMPANY.rc} · Incorporated May 2026.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}