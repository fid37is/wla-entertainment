'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { useTheme } from '@/lib/theme'

const NAV_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Franchises', href: '/franchises' },
  { label: 'Business',   href: '/#business' },
  { label: 'Investors',  href: '/investors' },
  { label: 'Contact',    href: '/contact' }
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isActive = (href: string) => {
    if (href.includes('#')) return pathname === href.split('#')[0]
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b backdrop-blur-md' : 'bg-transparent',
      )}
      style={scrolled ? {
        background: 'color-mix(in srgb, var(--bg-base) 92%, transparent)',
        borderColor: 'var(--border-subtle)',
      } : {}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <WLALogo size={40} rounded="rounded-lg" />
          <div>
            <p className="font-display text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              WLA Entertainment
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest leading-tight" style={{ color: 'var(--text-gold)' }}>
              Warriors League Africa
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                style={{
                  color: active ? 'var(--text-gold)' : 'var(--text-muted)',
                  background: active ? 'var(--bg-gold-tint)' : 'transparent',
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full"
                    style={{ background: 'var(--color-gold)' }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop right controls */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
            style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-gold)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href="https://naijaninja.net"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold text-black transition-all hover:brightness-110"
            style={{ background: 'var(--gradient-gold)' }}
          >
            Visit NNW <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition"
            style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen(v => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border transition"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t px-6 pb-6 pt-4 md:hidden"
          style={{
            background: 'color-mix(in srgb, var(--bg-base) 97%, transparent)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium transition-all"
                  style={{
                    color: active ? 'var(--text-gold)' : 'var(--text-secondary)',
                    background: active ? 'var(--bg-gold-tint)' : 'transparent',
                    borderLeft: active ? '2px solid var(--color-gold)' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://naijaninja.net"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-black"
              style={{ background: 'var(--gradient-gold)' }}
            >
              Visit NNW <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}