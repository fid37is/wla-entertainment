'use client'

import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─── GoldButton ───────────────────────────────────────────────────────────────
interface GoldButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function GoldButton({ className, size = 'md', children, ...props }: GoldButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }
  return (
    <a
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-bold text-black',
        'bg-gold-gradient transition-all duration-200 hover:scale-105 hover:brightness-110',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

// ─── OutlineButton ────────────────────────────────────────────────────────────
interface OutlineButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function OutlineButton({ className, size = 'md', children, ...props }: OutlineButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold text-white',
        'border border-white/20 transition-all duration-200 hover:bg-white/5 hover:border-white/40',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────
interface StatusBadgeProps {
  status: 'live' | 'coming'
}

export function StatusBadge({ status }: StatusBadgeProps) {
  if (status === 'live') {
    return (
      <span className="flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-bold text-yellow-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
        Live
      </span>
    )
  }
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-gray-500">
      Coming Soon
    </span>
  )
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────
interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500',
        className,
      )}
    >
      {children}
    </p>
  )
}

// ─── SectionHeading ───────────────────────────────────────────────────────────
interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        'font-display text-4xl font-black leading-tight text-white md:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

// ─── GlassCard ────────────────────────────────────────────────────────────────
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  gold?: boolean
}

export function GlassCard({ children, className, gold = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        gold
          ? 'border-yellow-500/35 bg-yellow-500/[0.04] hover:border-yellow-500/60'
          : 'border-white/8 bg-white/[0.02] hover:border-white/15',
        className,
      )}
    >
      {children}
    </div>
  )
}
