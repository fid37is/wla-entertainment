'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// ─── WLA Logo ─────────────────────────────────────────────────────────────────
// Reads /public/wla-logo.png - drop the file and it activates everywhere.
// Dark container keeps the gold/white logo visible on any theme.

interface LogoProps {
  size?: number
  className?: string
  rounded?: string
}

export function WLALogo({ size = 40, className, rounded = 'rounded-xl' }: LogoProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn('relative flex-shrink-0 overflow-hidden', rounded, className)}
      style={{
        width: size,
        height: size,
        background: '#1A1600',
        // Gold ring separates logo from any background
        boxShadow: '0 0 0 1.5px rgba(202,138,4,0.50)',
      }}
    >
      {!failed ? (
        <Image
          src="/wla-logo.png"
          alt="WLA Entertainment Ltd"
          fill
          sizes={`${size}px`}
          // scale-[1.08] lets the logo bleed slightly to the edges
          // so it looks bold and fills the container - not recessed
          className="object-contain object-center scale-[1.08]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className={cn(
            'flex h-full w-full items-center justify-center font-display font-black text-black',
            rounded,
          )}
          style={{
            background: 'linear-gradient(135deg, #EAB308, #CA8A04)',
            fontSize: Math.round(size * 0.28),
          }}
        >
          WLA
        </div>
      )}
    </div>
  )
}

// ─── Person Avatar ────────────────────────────────────────────────────────────

interface AvatarProps {
  src?: string | null
  alt: string
  initials: string
  size?: number
  gold?: boolean
  className?: string
}

export function Avatar({ src, alt, initials, size = 64, gold = false, className }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div
      className={cn('relative flex-shrink-0 overflow-hidden rounded-2xl', className)}
      style={{ width: size, height: size }}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center font-display font-black"
          style={{
            background: gold
              ? 'linear-gradient(135deg, #EAB308, #CA8A04)'
              : 'rgba(255,255,255,0.06)',
            color: gold ? '#000' : '#4B5563',
            fontSize: Math.round(size * 0.3),
          }}
        >
          {initials}
        </div>
      )}
    </div>
  )
}