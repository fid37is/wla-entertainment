'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// ─── WLA Logo ─────────────────────────────────────────────────────────────────
// Reads /public/wla-logo.png - drop the file and it activates everywhere.

interface LogoProps {
  size?: number
  className?: string
  rounded?: string
}

export function WLALogo({ size = 40, className, rounded = 'rounded-lg' }: LogoProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={cn('relative flex-shrink-0', rounded, className)}
      style={{ width: size, height: size }}
    >
      {!failed ? (
        <Image
          src="/wla-logo.png"
          alt="WLA Entertainment Ltd"
          fill
          sizes={`${size}px`}
          className="object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        /* Fallback monogram */
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
// Pass src="/team/fidelis-agba.jpg" - falls back to initials if missing.

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
        /* Fallback monogram - only shown when no image or image fails */
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