'use client'

import { Mail, Phone } from 'lucide-react'

interface ContactLinksProps {
  email: string
  phone: string
  phoneHref: string
}

export function ContactLinks({ email, phone, phoneHref }: ContactLinksProps) {
  return (
    <div className="space-y-3 p-5">
      <a
        href={`mailto:${email}?subject=WLA Series A - IM Request`}
        className="flex items-center gap-3 text-sm transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        <Mail size={15} className="flex-shrink-0" style={{ color: 'var(--color-gold-deeper)' }} />
        {email}
      </a>
      <a
        href={phoneHref}
        className="flex items-center gap-3 text-sm transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-gold)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        <Phone size={15} className="flex-shrink-0" style={{ color: 'var(--color-gold-deeper)' }} />
        {phone}
      </a>
    </div>
  )
}