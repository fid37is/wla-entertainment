import type { Metadata } from 'next'
import { ArrowUpRight, ShieldCheck, Lock, Trophy, Handshake, Rocket, TrendingUp, Globe2 } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { COMPANY } from '@/lib/constants'
import { InvestmentPillars } from '@/components/investor/InvestmentPillars'

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

const SCALING_STEPS = [
  {
    icon: Trophy,
    title: 'Format Proven',
    body: 'Nigeria is the only market WLA owns and operates directly today - the live proof of the format.',
  },
  {
    icon: Handshake,
    title: 'Local Partner Licenses It',
    body: 'A vetted operator in a new market licenses the format. WLA does not run that market - the local partner does.',
  },
  {
    icon: Rocket,
    title: 'New Market Launches',
    body: "That partner stages their own national season under the WLA format, branding, and competition rules.",
  },
  {
    icon: TrendingUp,
    title: 'Fees & Royalties Flow Back',
    body: 'WLA earns format fees and royalties from every licensed market, with minimal incremental cost.',
  },
]

export default function InvestorsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
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

              {/* Left - copy */}
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                  Investor Relations
                </p>
                <h1
                  className="mb-6 font-display font-black leading-tight"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--text-primary)' }}
                >
                  Series A<br />
                  <span className="text-gold-gradient">NGN 800M</span>
                </h1>
                <p className="mb-6 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  WLA Entertainment Ltd is raising NGN 800M Series A. This is not an investment in a television
                  season - it is an investment in the company that owns Africa&apos;s first continental obstacle
                  sports format.
                </p>
                <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Nigeria is owned and operated directly today. After it proves the concept, WLA plans to license
                  the format to local partners across the continent - earning format fees and royalties with
                  minimal incremental cost. Investors back the format owner. The franchise travels.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${COMPANY.email.general}?subject=WLA Series A - IM Request`}
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105"
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
              </div>

              {/* Right - stat pills */}
              <div className="flex flex-col justify-center gap-3">
                {[
                  { value: 'NGN 800M',  label: 'Series A Target' },
                  { value: '220M+',     label: 'Nigerian Addressable Audience' },
                  { value: '1',         label: 'Active, Owned Franchise (Nigeria)' },
                  { value: '54',        label: 'Addressable African Markets' },
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

        {/* ── Confidentiality notice ── */}
        <section className="px-6 py-6">
          <div className="mx-auto max-w-7xl">
            <div className="card-gold flex items-start gap-4 p-5">
              <Lock size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-gold)' }} />
              <div>
                <p className="mb-1 text-sm font-bold" style={{ color: 'var(--text-gold)' }}>
                  Confidential Investment Information
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Detailed financials, use-of-funds, risk register, supplier agreements, and investor terms
                  are contained in the WLA Entertainment Ltd Information Memorandum - issued exclusively to
                  verified prospective investors under NDA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Investment pillars ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                The Opportunity
              </p>
              <h2 className="font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                Why WLA, Why Now
              </h2>
            </div>
            <InvestmentPillars />
          </div>
        </section>

        {/* ── Franchise model ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                How WLA Scales
              </p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                One Format. Continental Reach.
              </h2>
              <p className="mx-auto max-w-2xl" style={{ color: 'var(--text-muted)' }}>
                WLA owns the format and operates Nigeria directly. Beyond that, expansion works the same
                way everywhere: a local partner licenses the format and runs it in their own market. WLA
                doesn&apos;t pick the order - that&apos;s set by which partners come forward and close a
                deal, anywhere across the continent&apos;s 54 nations.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SCALING_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="relative">
                    <div
                      className="h-full rounded-2xl p-6"
                      style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
                    >
                      <div
                        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
                      >
                        <Icon size={20} style={{ color: 'var(--text-gold)' }} />
                      </div>
                      <p className="mb-1 text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                        Step {i + 1}
                      </p>
                      <p className="mb-2 font-display text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {step.body}
                      </p>
                    </div>
                    {i < SCALING_STEPS.length - 1 && (
                      <div
                        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block"
                        style={{ color: 'var(--text-faint)' }}
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={16} style={{ transform: 'rotate(45deg)' }} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div
              className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-xl p-4 text-left"
              style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
            >
              <Globe2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-gold)' }} />
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                Nigeria is the only market WLA owns and operates today. No other market has a signed licence
                yet, and no fixed order exists for which one will be next - that depends on which local partners
                come forward and close a deal, not a sequence WLA publishes.
              </p>
            </div>
          </div>
        </section>

        {/* ── What you receive ── */}
        <section className="px-6 py-20" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                Next Step
              </p>
              <h2 className="mb-3 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                What Verified Investors Receive
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Full investment documentation issued under NDA to verified prospective investors only.
              </p>
            </div>
            <div className="card-gold p-8">
              <ul className="space-y-4">
                {WHAT_YOU_RECEIVE.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(234,179,8,0.15)' }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} />
                    </div>
                    <p style={{ color: 'var(--text-primary)' }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA / Contact ── */}
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

            <h2
              className="mb-4 font-display text-3xl font-black md:text-4xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Request the Information Memorandum
            </h2>

            <p className="mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Begin the investor verification process by submitting an enquiry below.
              All enquiries are handled directly by{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Fidelis Agba</span>
              {', Founder & CEO, and '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Peace George</span>
              {', Investment Lead.'}
            </p>

            {/* Verification process steps */}
            <div
              className="mx-auto mb-10 max-w-lg rounded-2xl p-6 text-left"
              style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
            >
              <p
                className="mb-4 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: 'var(--text-gold)' }}
              >
                Verification Process
              </p>
              {[
                'Submit your enquiry via the button below',
                'Our team will respond within 48 hours',
                'NDA issued and executed',
                'Full Information Memorandum and data room access granted',
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-start gap-4 py-2.5"
                  style={{ borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none' }}
                >
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                    style={{
                      background: 'var(--bg-gold-tint)',
                      color: 'var(--text-gold)',
                      border: '1px solid var(--border-gold)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {step}
                  </p>
                </div>
              ))}
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
              This page provides a high-level overview only. It does not constitute an offer to sell or
              solicitation to buy securities. The full Information Memorandum - including financials,
              risk register, and terms - is issued exclusively to verified prospective investors under a
              signed NDA. WLA Entertainment Ltd · {COMPANY.rc} · Incorporated May 2026.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}