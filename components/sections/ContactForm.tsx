'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

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

    // Build mailto link with form data as fallback
    // Replace with actual API endpoint / Resend / EmailJS when ready
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const subject = `WLA Enquiry - ${ENQUIRY_TYPES.find((t) => t.value === type)?.label}`
    const body = `Name: ${name}\nEmail: ${email}\nEnquiry type: ${type}\n\n${message}`

    window.open(
      `mailto:${COMPANY.email.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    )

    // Simulate send delay then show confirmation
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  if (sent) {
    return (
      <div className="flex h-full min-h-[480px] flex-col items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-10 text-center">
        <CheckCircle size={48} className="mb-6 text-yellow-500" strokeWidth={1.5} />
        <h3 className="mb-3 font-display text-2xl font-black text-white">Message Sent</h3>
        <p className="mb-6 text-gray-400">
          Your email client opened with your enquiry pre-filled. We aim to respond within 2 business days.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
    >
      <h3 className="mb-6 font-display text-xl font-black text-white">Send an Enquiry</h3>

      {/* Enquiry type */}
      <div className="mb-5">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">
          Enquiry Type
        </label>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setType(t.value)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                type === t.value
                  ? 'bg-yellow-500 text-black'
                  : 'border border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
        />
      </div>

      {/* Organisation */}
      <div className="mb-4">
        <label htmlFor="org" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
          Organisation <span className="text-gray-700 normal-case font-normal">(optional)</span>
        </label>
        <input
          id="org"
          name="org"
          type="text"
          placeholder="Company or organisation"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you have in mind..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full py-4 font-bold text-black transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #EAB308, #CA8A04)' }}
      >
        {loading ? 'Sending…' : (
          <>Send Enquiry <ArrowUpRight size={16} /></>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-gray-700">
        This opens your email client with your message pre-filled.
      </p>
    </form>
  )
}