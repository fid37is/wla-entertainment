'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { COMPANY } from '@/lib/constants'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Stagger mount to trigger CSS transitions
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Radial gold glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(234,179,8,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Diagonal accent lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="35%" x2="100%" y2="65%" stroke="#EAB308" strokeWidth="1" />
          <line x1="0" y1="65%" x2="100%" y2="35%" stroke="#EAB308" strokeWidth="1" />
          <line x1="15%" y1="0" x2="85%" y2="100%" stroke="#EAB308" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Logo ── */}
      <div
        className="relative mb-8 transition-all duration-1000"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(32px)' }}
      >
        <div
          className="absolute inset-0 scale-150 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.25) 0%, transparent 70%)' }}
        />
        {/* DROP /public/wla-logo.png - minimum 280×280px square PNG/SVG */}
        <WLALogo size={128} rounded="rounded-3xl" className="relative shadow-2xl" />
      </div>

      {/* ── Eyebrow ── */}
      <p
        className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-yellow-500 transition-all duration-1000 delay-100"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
      >
        Warriors League Africa
      </p>

      {/* ── Headline ── */}
      <h1
        className="mb-6 font-display font-black leading-none transition-all duration-1000 delay-200"
        style={{
          fontSize: 'clamp(3rem, 9vw, 7rem)',
          letterSpacing: '-0.02em',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        <span className="text-white">Africa&apos;s</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #EAB308 0%, #FDE047 50%, #CA8A04 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Warrior League
        </span>
      </h1>

      {/* ── Sub-headline ── */}
      <p
        className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 transition-all duration-1000 delay-300 md:text-xl"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
      >
        WLA Entertainment Ltd is a CAC-registered sports entertainment company building
        Africa&apos;s first continental network of warrior-format competitions, broadcasts,
        and franchises.
      </p>

      {/* ── CTAs ── */}
      <div
        className="flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-[450ms] sm:flex-row"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <a
          href="https://naijaninja.net"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:brightness-110"
          style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
        >
          Launch NNW - Nigeria
          <ArrowUpRight
            size={18}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
        <a
          href="#franchises"
          className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:border-white/40 hover:bg-white/5"
        >
          View All Franchises
        </a>
      </div>

      {/* ── Legal badge ── */}
      <div
        className="mt-12 flex items-center gap-2 text-xs text-gray-600 transition-all duration-1000 delay-[600ms]"
        style={{ opacity: mounted ? 1 : 0 }}
      >
        <ShieldCheck size={14} className="text-yellow-600" />
        <span>
          {COMPANY.name} · {COMPANY.rc} · Incorporated May 2026 · Asaba, Nigeria
        </span>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-25" aria-hidden="true">
        <div className="h-14 w-px bg-gradient-to-b from-transparent to-yellow-500" />
      </div>
    </section>
  )
}