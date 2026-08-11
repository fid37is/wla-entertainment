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
        <div className="eyebrow mx-auto mb-8" style={{ justifyContent: 'center' }}>
          ERROR 404
        </div>

        {/* Large 404 with modern depth */}
        <div className="relative mb-3">
          <p
            className="font-display font-black leading-none select-none"
            style={{
              fontSize: 'clamp(7rem, 22vw, 15rem)',
              background: 'var(--gradient-gold-text)',
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
          This page isn&apos;t on the map.
        </h1>

        <p
          className="mx-auto mb-10 max-w-md text-[15px] leading-relaxed md:text-base"
          style={{ color: 'var(--text-muted)' }}
        >
          The page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.
        </p>

        {/* Primary actions */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-shear btn-shear-gold w-full sm:w-auto">
            <Home size={18} />
            Back to Home
          </Link>

          <Link href="/contact" className="btn-ghost-shear w-full sm:w-auto">
            Contact Support
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}