import { Mail, Phone, MapPin } from 'lucide-react'
import { SectionLabel, SectionHeading } from '@/components/ui'
import { WLALogo } from '@/components/ui/logo'
import { COMPANY, LEGAL_DETAILS } from '@/lib/constants'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'General & Investor',
    value: COMPANY.email.general,
    href: `mailto:${COMPANY.email.general}`,
  },
  {
    icon: Mail,
    label: 'Support',
    value: COMPANY.email.support,
    href: `mailto:${COMPANY.email.support}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
  },
  {
    icon: MapPin,
    label: 'Registered Address',
    value: COMPANY.address,
    href: null,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading className="mb-6">Contact WLA Entertainment</SectionHeading>
            <p className="mb-8 leading-relaxed text-gray-400">
              For investment enquiries, partnership opportunities, franchise licensing, or
              general correspondence — reach us directly.
            </p>

            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                      <Icon size={16} className="text-yellow-500" />
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs uppercase tracking-wide text-gray-600">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white transition-colors hover:text-yellow-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legal card */}
          <div className="rounded-2xl border border-yellow-500/20 bg-white/[0.02] p-8">
            {/* Card header */}
            <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-6">
              {/* DROP /public/wla-logo.png */}
              <WLALogo size={56} rounded="rounded-xl" />
              <div>
                <h3 className="font-display text-lg font-black text-white">{COMPANY.name}</h3>
                <p className="text-xs font-bold tracking-wider text-yellow-500">
                  A WLA Entertainment Company
                </p>
              </div>
            </div>

            {/* Legal details */}
            <div className="space-y-0">
              {LEGAL_DETAILS.map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b border-white/5 py-3 text-sm last:border-0"
                >
                  <span className="flex-shrink-0 text-gray-600">{label}</span>
                  <span className="text-right text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}