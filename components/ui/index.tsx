'use client'

import { type AnchorHTMLAttributes } from 'react'
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
        'inline-flex items-center justify-center gap-2 rounded-full font-bold',
        'transition-all duration-200',
        sizes[size],
        className,
      )}
      style={{
        color: 'var(--text-primary)',
        border: '1px solid var(--border-medium)',
      }}
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
      <span
        className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
        style={{
          border: '1px solid var(--status-live-border)',
          background: 'var(--status-live-bg)',
          color: 'var(--status-live-text)',
        }}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: 'var(--status-live-text)' }} />
        Live
      </span>
    )
  }
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-bold"
      style={{
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        color: 'var(--text-muted)',
      }}
    >
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
      className={cn('mb-4 text-xs font-bold uppercase tracking-[0.35em]', className)}
      style={{ color: 'var(--text-gold)' }}
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
      className={cn('font-display text-4xl font-black leading-tight md:text-5xl', className)}
      style={{ color: 'var(--text-primary)' }}
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
      className={cn('rounded-2xl border transition-all duration-300', className)}
      style={gold ? {
        border: '1px solid var(--border-gold)',
        background: 'var(--bg-gold-tint)',
      } : {
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
      }}
    >
      {children}
    </div>
  )
}