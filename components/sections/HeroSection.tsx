'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { COMPANY, FRANCHISES, NNW_SEASON_1 } from '@/lib/constants'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const nnw = FRANCHISES[0] // Nigeria Next Warrior - the live flagship franchise

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pt-40">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 65%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow badge */}
            <div
              className="eyebrow mb-8 transition-all duration-700"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)' }}
            >
              Warriors League Africa
              <span style={{ opacity: 0.3 }}>·</span>
              <span className="flex items-center gap-2">
                <span className="dot-live" style={{ background: 'var(--color-gold)' }} />
                Series A Open
              </span>
            </div>

            {/* Headline - copy unchanged, new display treatment */}
            <div
              className="mb-6 transition-all duration-700 delay-100"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <h1
                className="font-display font-black"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                  WebkitTextStroke: '1.5px var(--text-primary)',
                  color: 'transparent',
                }}
              >
                Africa&apos;s
              </h1>
              <h1
                className="font-display font-black"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: 'var(--color-gold)' }}
              >
                Warrior League
              </h1>
            </div>

            {/* Sub-headline - the human story. Copy unchanged. */}
            <p
              className="mb-10 max-w-xl text-base leading-relaxed transition-all duration-700 delay-300 md:text-lg"
              style={{
                color: 'var(--text-secondary)',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              Every athlete who&apos;s ever been told they&apos;re too old, too slow, or too far
              from the spotlight to make it - this is where they prove it wrong. We&apos;re
              building the continental network, the broadcast, and the franchise to find them.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col gap-3 transition-all duration-700 delay-[450ms] sm:flex-row"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <Link href="/investors" className="btn-shear btn-shear-gold group">
                View Investment Case
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="/franchises" className="btn-ghost-shear">
                View All Franchises
              </a>
            </div>

            {/* Legal badge */}
            <div
              className="mt-10 flex items-center gap-2 text-[11px] transition-all duration-700 delay-[700ms]"
              style={{ color: 'var(--text-faint)', opacity: mounted ? 1 : 0 }}
            >
              <ShieldCheck size={12} style={{ color: 'var(--color-gold-deeper)' }} />
              {COMPANY.name} · {COMPANY.rc}
            </div>
          </div>

          {/* ── Right: NNW flagship card ── */}
          <div
            className="transition-all duration-700 delay-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--line)',
              padding: '1.75rem',
            }}
          >
            <div className="font-mono mb-3 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-green)' }}>
              <span className="dot-live" />
              Flagship Franchise — Live
            </div>
            <h3 className="font-display mb-1.5 text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
              NNW — Nigeria
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {nnw.name}: six geopolitical zones, one Grand Finale.
            </p>

            {/* Zone bar */}
            <div className="mt-4 flex gap-1" aria-hidden="true">
              {Array.from({ length: NNW_SEASON_1.zoneCount }).map((_, i) => (
                <div key={i} className="h-[5px] flex-1" style={{ background: 'var(--color-gold)' }} />
              ))}
            </div>

            {/* Stat row */}
            <div
              className="font-mono mt-4 flex justify-between gap-2 pt-4 text-[0.66rem] uppercase tracking-[0.04em]"
              style={{ borderTop: '1px solid var(--line)', color: 'var(--text-secondary)' }}
            >
              <div>
                <b className="font-display block text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                  {NNW_SEASON_1.zoneCount}
                </b>
                Zones
              </div>
              <div>
                <b className="font-display block text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                  {NNW_SEASON_1.totalContestants}
                </b>
                Contestants
              </div>
              <div>
                <b className="font-display block text-lg font-black" style={{ color: 'var(--text-primary)' }}>
                  {NNW_SEASON_1.grandFinaleFinalists}
                </b>
                Finalists
              </div>
            </div>

            <a
              href={nnw.url ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shear btn-shear-green mt-5 w-full"
            >
              Visit NNW Website <ArrowUpRight size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
