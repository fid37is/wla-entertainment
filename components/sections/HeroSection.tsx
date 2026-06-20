'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center">

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">

        {/* Grid lines - uses theme-aware border variable */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Rig structure SVG */}
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rig-h" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0" />
              <stop offset="30%" stopColor="#EAB308" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#EAB308" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rig-v-l" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="rig-v-r" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beam-l" x1="20%" y1="0%" x2="42%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="beam-r" x1="80%" y1="0%" x2="58%" y2="100%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Spotlight beams */}
          <polygon points="20%,0 8%,100% 52%,100%" fill="url(#beam-l)" />
          <polygon points="80%,0 92%,100% 48%,100%" fill="url(#beam-r)" />

          {/* Top rig bar */}
          <line x1="5%" y1="7%" x2="95%" y2="7%" stroke="url(#rig-h)" strokeWidth="2" />
          <line x1="10%" y1="13%" x2="90%" y2="13%" stroke="url(#rig-h)" strokeWidth="1" strokeDasharray="8 6" />

          {/* Left vertical poles */}
          <line x1="8%" y1="0" x2="8%" y2="45%" stroke="url(#rig-v-l)" strokeWidth="2" />
          <line x1="15%" y1="0" x2="15%" y2="32%" stroke="url(#rig-v-l)" strokeWidth="1" strokeDasharray="6 8" />

          {/* Right vertical poles */}
          <line x1="92%" y1="0" x2="92%" y2="45%" stroke="url(#rig-v-r)" strokeWidth="2" />
          <line x1="85%" y1="0" x2="85%" y2="32%" stroke="url(#rig-v-r)" strokeWidth="1" strokeDasharray="6 8" />

          {/* Hanging rings - left */}
          <line x1="22%" y1="7%" x2="22%" y2="18%" stroke="#EAB308" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="22%" cy="22%" r="14" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeOpacity="0.22" />
          <circle cx="22%" cy="22%" r="8" fill="none" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.12" />

          <line x1="33%" y1="7%" x2="33%" y2="17%" stroke="#EAB308" strokeWidth="1.5" strokeOpacity="0.18" />
          <circle cx="33%" cy="21%" r="11" fill="none" stroke="#EAB308" strokeWidth="2" strokeOpacity="0.16" />

          {/* Hanging rings - right */}
          <line x1="78%" y1="7%" x2="78%" y2="18%" stroke="#EAB308" strokeWidth="1.5" strokeOpacity="0.25" />
          <circle cx="78%" cy="22%" r="14" fill="none" stroke="#EAB308" strokeWidth="2.5" strokeOpacity="0.22" />
          <circle cx="78%" cy="22%" r="8" fill="none" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.12" />

          <line x1="67%" y1="7%" x2="67%" y2="17%" stroke="#EAB308" strokeWidth="1.5" strokeOpacity="0.18" />
          <circle cx="67%" cy="21%" r="11" fill="none" stroke="#EAB308" strokeWidth="2" strokeOpacity="0.16" />

          {/* Brace cables */}
          <line x1="8%" y1="7%" x2="22%" y2="22%" stroke="#EAB308" strokeWidth="0.8" strokeOpacity="0.10" strokeDasharray="4 6" />
          <line x1="15%" y1="7%" x2="33%" y2="21%" stroke="#EAB308" strokeWidth="0.8" strokeOpacity="0.08" strokeDasharray="4 6" />
          <line x1="92%" y1="7%" x2="78%" y2="22%" stroke="#EAB308" strokeWidth="0.8" strokeOpacity="0.10" strokeDasharray="4 6" />
          <line x1="85%" y1="7%" x2="67%" y2="21%" stroke="#EAB308" strokeWidth="0.8" strokeOpacity="0.08" strokeDasharray="4 6" />

          {/* Hazard dashes - bottom edge */}
          <line x1="0" y1="96%" x2="100%" y2="96%" stroke="#EAB308" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="20 10" />

          {/* Ground glow */}
          <ellipse cx="50%" cy="100%" rx="40%" ry="15%" fill="#EAB308" fillOpacity="0.06" />
        </svg>

        {/* Centre radial glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.07) 0%, transparent 65%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* Alert badge */}
        <div
          className="mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-700"
          style={{
            border: '1px solid var(--border-gold)',
            background: 'var(--bg-gold-tint)',
            color: 'var(--text-gold)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {/* Hexagon warning marker */}
          <span
            className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-[8px] font-black text-black"
            style={{
              background: 'var(--color-gold)',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          >
            !
          </span>
          Warriors League Africa
          <span style={{ opacity: 0.3 }}>·</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: 'var(--color-gold)' }} />
            Series A Open
          </span>
        </div>

        {/* Headline */}
        <div
          className="mb-6 transition-all duration-700 delay-100"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <h1
            className="mb-6 font-display font-black leading-none"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Africa&apos;s
          </h1>
          <h1
            className="font-display font-black leading-none"
            style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)',
              letterSpacing: '-0.02em',
              color: 'transparent',
              WebkitTextStroke: '2px var(--color-gold)',
            }}
          >
            Warrior League
          </h1>
        </div>

        {/* Sub-headline */}
        <p
          className="mb-10 max-w-2xl text-lg leading-relaxed transition-all duration-700 delay-300 md:text-xl"
          style={{
            color: 'var(--text-secondary)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          WLA Entertainment Ltd is a sports entertainment company building
          Africa&apos;s first continental network of warrior-format competitions, broadcasts,
          and franchises.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-[450ms] sm:flex-row"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <a
            href="https://naijaninja.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all hover:scale-105 hover:brightness-110"
            style={{ background: 'var(--gradient-gold)', color: '#000' }}
          >
            Launch NNW - Nigeria
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/franchises"
            className="flex items-center gap-2 rounded-full px-8 py-4 font-bold transition-all"
            style={{
              border: '1px solid var(--border-medium)',
              color: 'var(--text-primary)',
            }}
            onMouseEnter={e => {
              ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                ; (e.currentTarget as HTMLElement).style.background = 'var(--bg-gold-tint)'
            }}
            onMouseLeave={e => {
              ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
                ; (e.currentTarget as HTMLElement).style.background = 'transparent'
            }}
          >
            View All Franchises
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 transition-all duration-700 delay-[600ms]"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          {[
            { value: '220M+', label: 'Nigerian Audience' },
            { value: '1', label: 'Active Franchise' },
            { value: '6', label: 'Revenue Streams' },
            { value: 'S1', label: 'Season One' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="font-display text-2xl font-black leading-none" style={{ color: 'var(--text-gold)' }}>{s.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
              </div>
              {i < 3 && <div className="h-6 w-px" style={{ background: 'var(--border-subtle)' }} />}
            </div>
          ))}
        </div>

      </div>

      {/* ── Legal badge ── */}
      <div
        className="relative mt-12 flex items-center gap-2 text-[11px] transition-all duration-700 delay-[700ms]"
        style={{ color: 'var(--text-faint)', opacity: mounted ? 1 : 0 }}
      >
        <ShieldCheck size={12} style={{ color: 'var(--color-gold-deeper)' }} />
        {COMPANY.name} · {COMPANY.rc}
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-25" aria-hidden="true">
        <div className="h-14 w-px" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-gold))' }} />
      </div>

    </section>
  )
}