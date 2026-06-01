import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { COMPANY } from '@/lib/constants'

const FOOTER_LINKS = {
  Company: [
    { label: 'About WLA', href: '/about' },
    { label: 'Franchises', href: '/#franchises' },
    { label: 'Business Pillars', href: '/#business' },
    { label: 'Investor Relations', href: '/investors' },
  ],
  Franchises: [
    { label: 'NNW — Nigeria', href: 'https://naijaninja.net', external: true },
    { label: 'GNW — Ghana', href: null },
    { label: 'KNW — Kenya', href: null },
    { label: 'SNW — South Africa', href: null },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Contact Us', href: '/#contact' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <WLALogo size={40} rounded="rounded-lg" />
              <div>
                <p className="font-display text-sm font-bold text-white">WLA Entertainment Ltd</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">
                  Warriors League Africa
                </p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              Building Africa's first continental warrior competition franchise network.
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <p>{COMPANY.rc}</p>
              <p>Incorporated May 2026</p>
              <p>Asaba, Delta State, Nigeria</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-yellow-400"
                        >
                          {link.label} <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-gray-500 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )
                    ) : (
                      <span className="text-sm text-gray-700">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/5" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-gray-700">
            © {year} WLA Entertainment Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-gray-600 transition-colors hover:text-yellow-400"
            >
              naijaninja.net <ArrowUpRight size={10} />
            </a>
            <Link
              href="/privacy"
              className="text-xs text-gray-600 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-600 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
          <p className="text-xs text-gray-700">
            {COMPANY.rc} · Asaba, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}