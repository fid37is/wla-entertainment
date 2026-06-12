import Link from 'next/link'
import { ArrowLeft, Search, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-xl">
        {/* Status badge */}
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-1.5 text-xs font-medium tracking-[3px]"
          style={{ color: 'var(--text-muted)' }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: 'var(--gradient-gold)' }}
          />
          ERROR 404
        </div>

        {/* Large 404 with modern depth */}
        <div className="relative mb-3">
          <p
            className="font-display font-black leading-none select-none"
            style={{
              fontSize: 'clamp(7rem, 22vw, 15rem)',
              background: 'linear-gradient(135deg, #EAB308 10%, #CA8A04 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 15px 40px rgba(234,179,8,0.2))',
            }}
          >
            404
          </p>
          {/* Soft glow layer */}
          <p
            className="absolute inset-0 -z-10 font-display font-black leading-none select-none blur-2xl opacity-30"
            style={{
              fontSize: 'clamp(7rem, 22vw, 15rem)',
              color: '#EAB308',
            }}
          >
            404
          </p>
        </div>

        <h1 className="mb-4 font-display text-3xl font-black tracking-[-1.5px] md:text-4xl">
          Haha, look who got lost in the ninja course!
        </h1>

        <p
          className="mx-auto mb-10 max-w-md text-[15px] leading-relaxed md:text-base"
          style={{ color: 'var(--text-muted)' }}
        >
          The page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.
        </p>

        {/* Primary actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all active:scale-[0.985] hover:scale-[1.015] sm:w-auto"
            style={{ background: 'var(--gradient-gold)' }}
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold transition-all hover:bg-white/5 active:scale-[0.985] sm:w-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact Support
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}