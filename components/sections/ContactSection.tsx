import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui'
import { SOCIAL_LINKS } from '@/lib/social'
import { COMPANY } from '@/lib/constants'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left - copy */}
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2
              className="mb-5 font-display font-black leading-tight text-white"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Investment, partnership,
              <br />or franchise enquiries?
            </h2>
            <p className="mb-8 leading-relaxed text-gray-400">
              We handle every enquiry personally. Whether you&apos;re an investor, a brand
              looking to sponsor, a broadcaster, or a potential franchise partner - reach us
              directly or use the contact form.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-black transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
              >
                Open Contact Page <ArrowUpRight size={16} />
              </Link>
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Email Directly
              </a>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col gap-1 text-sm text-gray-500">
              <a href={`mailto:${COMPANY.email.general}`} className="transition-colors hover:text-yellow-400">
                {COMPANY.email.general}
              </a>
              <a href={COMPANY.phoneHref} className="transition-colors hover:text-yellow-400">
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Right - social links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
              Follow Warriors League Africa
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-all hover:border-yellow-500/25 hover:bg-yellow-500/[0.03]"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition group-hover:border-yellow-500/30 group-hover:bg-yellow-500/10">
                    <s.Icon size={16} className="text-gray-400 transition group-hover:text-yellow-500" />
                  </div>
                  <span className="text-sm font-bold text-gray-400 transition group-hover:text-white">
                    {s.label}
                  </span>
                  <ArrowUpRight size={13} className="ml-auto text-gray-700 transition group-hover:text-yellow-500" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}