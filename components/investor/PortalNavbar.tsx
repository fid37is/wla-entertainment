'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/theme'

export default function PortalNavbar() {
  const { theme, toggle } = useTheme()

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-end gap-3 px-6 py-3"
      style={{ background: 'var(--bg-base)', borderBottom: '1px solid var(--border-subtle)' }}
    >
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="font-mono flex items-center gap-2 px-3.5 py-1.5 text-[0.68rem] uppercase tracking-[0.04em] transition-colors"
        style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)' }}
      >
        {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
        {theme === 'dark' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}