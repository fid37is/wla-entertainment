'use client'

import { type AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─── GoldButton ───────────────────────────────────────────────────────────────
interface GoldButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function GoldButton({ className, size = 'md', children, ...props }: GoldButtonProps) {
  const sizes = {
    sm: 'text-xs px-5 py-3',
    md: 'text-sm px-6 py-4',
    lg: 'text-base px-8 py-5',
  }
  return (
    <a className={cn('btn-shear btn-shear-gold group', sizes[size], className)} {...props}>
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
    sm: 'text-xs px-5 py-3',
    md: 'text-sm px-6 py-4',
    lg: 'text-base px-8 py-5',
  }
  return (
    <a className={cn('btn-ghost-shear', sizes[size], className)} {...props}>
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
        className="font-mono flex items-center gap-2 px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.05em]"
        style={{ border: '1px solid var(--border-green-strong)', color: 'var(--text-green)' }}
      >
        <span className="dot-live" />
        Live
      </span>
    )
  }
  return (
    <span
      className="font-mono px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.05em]"
      style={{ border: '1px solid var(--line-strong)', color: 'var(--text-muted)' }}
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
    <p className={cn('eyebrow mb-4', className)}>
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
      className={cn('border transition-all duration-300', className)}
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