import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/sections/ContactForm'
import { COMPANY, LEGAL_DETAILS } from '@/lib/constants'
import { Mail, Phone, MapPin } from 'lucide-react'
import { WLALogo } from '@/components/ui/logo'
import { SOCIAL_LINKS } from '@/lib/social'

export const metadata: Metadata = {
  title: 'Contact — WLA Entertainment Ltd',
  description:
    'Get in touch with WLA Entertainment Ltd for investment enquiries, partnership opportunities, franchise licensing, or general correspondence.',
}

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: 'General & Investor',
    value: COMPANY.email.general,
    href: `mailto:${COMPANY.email.general}`,
  },
  {
    Icon: Mail,
    label: 'Support',
    value: COMPANY.email.support,
    href: `mailto:${COMPANY.email.support}`,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    Icon: MapPin,
    label: 'Registered Address',
    value: COMPANY.address,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pb-12 pt-32">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 opacity-40"
            style={{ background: 'radial-gradient(ellipse, rgba(234,179,8,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-yellow-500">Contact</p>
            <h1
              className="mb-4 font-display font-black leading-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Get in Touch
            </h1>
            <p className="max-w-xl text-gray-400">
              For investment enquiries, partnership opportunities, franchise licensing, or general correspondence — reach us directly or use the form below.
            </p>
          </div>
        </section>

        {/* ── Main grid ── */}
        <section className="px-6 pb-24 pt-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

              {/* Left — contact details + legal card */}
              <div className="space-y-5">
                {/* Contact items */}
                {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                      <Icon size={15} className="text-yellow-500" />
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs uppercase tracking-wide text-gray-600">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white transition-colors hover:text-yellow-400">{value}</a>
                      ) : (
                        <p className="text-sm text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social links */}
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Follow WLA</p>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-gray-400 transition-all hover:border-yellow-500/30 hover:text-yellow-400"
                      >
                        <s.Icon size={15} />
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Legal card */}
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-6">
                  <div className="mb-5 flex items-center gap-4 border-b border-white/8 pb-5">
                    <WLALogo size={48} rounded="rounded-xl" />
                    <div>
                      <p className="font-display font-black text-white">{COMPANY.name}</p>
                      <p className="text-xs text-yellow-500">Warriors League Africa</p>
                    </div>
                  </div>
                  <div className="space-y-0">
                    {LEGAL_DETAILS.map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 border-b border-white/5 py-2.5 text-sm last:border-0">
                        <span className="flex-shrink-0 text-gray-600">{label}</span>
                        <span className="text-right text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — enquiry form */}
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}