'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Franchises', href: '/#franchises' },
  { label: 'Business', href: '/#business' },
  { label: 'Investors', href: '/investors' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/10 bg-black/90 backdrop-blur-md'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <WLALogo size={40} rounded="rounded-lg" />
            <div>
              <p className="font-display text-sm font-bold leading-tight text-white">
                WLA Entertainment
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-yellow-500">
                Warriors League Africa
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://naijaninja.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2 text-sm font-bold text-black transition-all hover:brightness-110 md:flex"
          >
            Visit NNW <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://naijaninja.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-black"
              >
                Visit NNW <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}