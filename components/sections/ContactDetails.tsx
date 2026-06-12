'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { SOCIAL_LINKS } from '@/lib/social'

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
    label: 'Address',
    value: COMPANY.address,
    href: null,
  },
]

export function ContactDetails() {
  return (
    <div className="space-y-8">

      {/* Contact items */}
      <div className="space-y-4">
        {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-3">
            <div
              className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
              style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
            >
              <Icon size={14} style={{ color: 'var(--text-gold)' }} />
            </div>
            <div>
              <p className="mb-0.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-subtle)' }} />

      {/* Social links */}
      <div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>
          Follow WLA
        </p>
        <div className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all"
              style={{
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-gold)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
              }}
            >
              <s.Icon size={14} />
              {s.label}
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}