'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'

type EnquiryType = 'investment' | 'partnership' | 'franchise' | 'media' | 'general'

const ENQUIRY_TYPES: { value: EnquiryType; label: string }[] = [
  { value: 'investment', label: 'Investment Enquiry' },
  { value: 'partnership', label: 'Partnership / Sponsorship' },
  { value: 'franchise', label: 'Franchise Licensing' },
  { value: 'media', label: 'Media / Press' },
  { value: 'general', label: 'General Enquiry' },
]

export function ContactForm() {
  const [type, setType] = useState<EnquiryType>('general')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const org = data.get('org') as string
    const message = data.get('message') as string
    const subject = `WLA Enquiry - ${ENQUIRY_TYPES.find((t) => t.value === type)?.label}`

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          name,
          email,
          subject,
          message: `Organisation: ${org || 'Not provided'}\n\n${message}`,
          status: 'new',
        },
      ])

      if (error) throw error

      setSent(true)
    } catch (err) {
      console.error('Error submitting inquiry:', err)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="card-gold flex h-full min-h-[480px] flex-col items-center justify-center p-10 text-center">
        <CheckCircle size={48} className="mb-6" style={{ color: 'var(--text-gold)' }} strokeWidth={1.5} />
        <h3 className="mb-3 font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>Message Sent</h3>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          Your enquiry has been received. We aim to respond within 2 business days.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-bold transition-colors"
          style={{ color: 'var(--text-gold)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-light)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-gold)')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8">
      <h3 className="mb-6 font-display text-xl font-black" style={{ color: 'var(--text-primary)' }}>Send an Enquiry</h3>

      {/* Enquiry type */}
      <div className="mb-5">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Enquiry Type
        </label>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setType(t.value)}
              className="rounded-full px-4 py-1.5 text-xs font-bold transition-all"
              style={type === t.value ? {
                background: 'var(--color-gold)',
                color: '#000',
              } : {
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
              }}
              onMouseEnter={e => {
                if (type !== t.value) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                }
              }}
              onMouseLeave={e => {
                if (type !== t.value) {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
                }
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Full Name
        </label>
        <input id="name" name="name" type="text" required placeholder="Your full name" className="input-base" />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Email Address
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className="input-base" />
      </div>

      {/* Organisation */}
      <div className="mb-4">
        <label htmlFor="org" className="mb-1.5 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Organisation <span className="normal-case font-normal" style={{ color: 'var(--text-faint)' }}>(optional)</span>
        </label>
        <input id="org" name="org" type="text" placeholder="Company or organisation" className="input-base" />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          Message
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell us what you have in mind..."
          className="input-base resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-60"
        style={{ background: 'var(--gradient-gold)', color: '#000' }}
      >
        {loading ? 'Sending…' : (<>Send Enquiry <ArrowUpRight size={16} /></>)}
      </button>

      <p className="mt-4 text-center text-xs" style={{ color: 'var(--text-faint)' }}>
        This opens your email client with your message pre-filled.
      </p>
    </form>
  )
}