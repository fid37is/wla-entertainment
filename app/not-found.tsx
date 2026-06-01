import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080808] px-6 text-center text-white">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative">
        <p
          className="mb-2 select-none font-display font-black leading-none"
          style={{
            fontSize: 'clamp(6rem, 20vw, 14rem)',
            background: 'linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.05) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </p>
        <h1 className="mb-4 font-display text-2xl font-black text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mb-10 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
