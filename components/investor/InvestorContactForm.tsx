'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
import { COMPANY } from '@/lib/constants'

const SUBJECTS = [
  'Investment Update Request',
  'Financial Report Query',
  'Board Meeting / Governance',
  'Distribution / Returns',
  'Portfolio Performance',
  'Document Request',
  'General Inquiry',
  'Other',
]

export default function InvestorContactForm() {
  const router = useRouter()
  const [sessionChecked, setSessionChecked] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })

  useEffect(() => {
    let mounted = true
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return
      if (!session) { router.replace('/portal/login'); return }
      setFormData(prev => ({
        ...prev,
        name: session.user.user_metadata?.full_name || '',
        email: session.user.email || '',
      }))
      setSessionChecked(true)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!mounted) return
      if (!session) router.replace('/portal/login')
    })
    return () => { mounted = false; subscription.unsubscribe() }
  }, [router])

  const set = (key: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData(prev => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setSubmitting(true)
    try {
      const { error } = await supabase.from('inquiries').insert([{
        name: formData.name,
        email: formData.email,
        subject: `[WLA Investor] ${formData.subject}`,
        message: `Phone: ${formData.phone || 'Not provided'}\n\n${formData.message}`,
        status: 'new',
      }])
      if (error) throw error
      setSubmitted(true)
      toast.success('Message sent. The WLA team will respond shortly.')
    } catch (err) {
      console.error(err)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const Loader = () => (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <InvestorSidebar />
      <main className="flex-1 lg:ml-64 flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 animate-spin"
          style={{ borderColor: 'var(--border-gold)', borderTopColor: 'transparent' }} />
      </main>
    </div>
  )

  if (!sessionChecked) return <Loader />

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <InvestorSidebar />

      <main className="flex-1 lg:ml-64 min-h-screen overflow-y-auto">

        {/* Page header */}
        <div className="px-8 py-5" style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="flex items-center gap-2.5 mb-0.5">
            <MessageSquare size={17} style={{ color: 'var(--text-gold)' }} />
            <h1 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Contact WLA Team</h1>
          </div>
          <p className="text-sm pl-7" style={{ color: 'var(--text-muted)' }}>
            Send a message to the WLA admin team. We&apos;ll respond to your registered email.
          </p>
        </div>

        <div className="px-8 py-10">

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              { Icon: Mail, label: 'Email', value: COMPANY.email.general, href: `mailto:${COMPANY.email.general}` },
              { Icon: Phone, label: 'Call', value: COMPANY.phone, href: COMPANY.phoneHref },
              { Icon: MapPin, label: 'Location', value: 'Asaba, Delta State, Nigeria', href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="rounded-[--radius-2xl] p-6"
                style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'var(--bg-gold-tint-2)', border: '1px solid var(--border-gold)' }}>
                  <Icon size={20} style={{ color: 'var(--text-gold)' }} />
                </div>
                <h3 className="mb-1 font-bold" style={{ color: 'var(--text-primary)' }}>{label}</h3>
                {href ? (
                  <a href={href} className="text-sm transition-colors hover:underline" style={{ color: 'var(--text-gold-muted)' }}>
                    {value}
                  </a>
                ) : (
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form / success */}
          {submitted ? (
            <div className="rounded-[--radius-2xl] p-16 flex flex-col items-center text-center gap-4 mb-12"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
                <CheckCircle2 size={32} style={{ color: 'var(--text-gold)' }} />
              </div>
              <div>
                <h2 className="mb-2 font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>Message Sent</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  The WLA team has received your message and will reply to{' '}
                  <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{formData.email}</span> shortly.
                </p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setFormData(prev => ({ ...prev, subject: '', message: '', phone: '' })) }}
                className="mt-2 rounded-[--radius-full] px-6 py-2.5 text-sm font-bold transition-all hover:brightness-110"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="rounded-[--radius-2xl] p-8"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <h2 className="mb-6 font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
                    Send a Message
                  </h2>
                  <div className="space-y-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          Full Name <span style={{ color: 'var(--status-error-text)' }}>*</span>
                        </label>
                        <input type="text" value={formData.name} onChange={set('name')}
                          className="input-base" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          Email Address <span style={{ color: 'var(--status-error-text)' }}>*</span>
                        </label>
                        <input type="email" value={formData.email} onChange={set('email')}
                          className="input-base" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          Phone Number
                        </label>
                        <input type="tel" value={formData.phone} onChange={set('phone')}
                          className="input-base" placeholder="+234 800 000 0000" />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                          Subject <span style={{ color: 'var(--status-error-text)' }}>*</span>
                        </label>
                        <select
                          value={formData.subject}
                          onChange={set('subject')}
                          className="input-base"
                          style={{ colorScheme: 'dark' }}
                        >
                          <option value="" style={{ background: '#1a1a1a', color: '#fff' }}>Select a subject</option>
                          {SUBJECTS.map(s => (
                            <option key={s} value={s} style={{ background: '#1a1a1a', color: '#fff' }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        Message <span style={{ color: 'var(--status-error-text)' }}>*</span>
                      </label>
                      <textarea value={formData.message} onChange={set('message')} rows={6}
                        className="input-base resize-none"
                        placeholder="Describe your inquiry in detail…" />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="flex items-center gap-2 rounded-2xl px-8 py-3 font-bold transition-all hover:brightness-110 disabled:opacity-50"
                        style={{ background: 'var(--gradient-gold)', color: '#000' }}
                      >
                        {submitting ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <><Send size={15} /> Send Message</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                {/* Office hours */}
                <div className="rounded-[--radius-2xl] p-6"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <h3 className="mb-4 font-bold" style={{ color: 'var(--text-primary)' }}>Office Hours</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ['Monday – Friday', '9:00 AM – 6:00 PM'],
                      ['Saturday', '10:00 AM – 4:00 PM'],
                      ['Sunday', 'Closed'],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>{day}</span>
                        <span style={{ color: hours === 'Closed' ? 'var(--text-muted)' : 'var(--text-primary)' }}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investor note */}
                <div className="rounded-[--radius-2xl] p-6"
                  style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
                  <h3 className="mb-3 font-bold" style={{ color: 'var(--text-primary)' }}>Investor Note</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gold-muted)' }}>
                    For urgent investment matters, call us directly. We typically respond to portal messages within one business day.
                  </p>
                </div>

                {/* Direct email */}
                <div className="rounded-[--radius-2xl] p-6"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <h3 className="mb-3 font-bold" style={{ color: 'var(--text-primary)' }}>Direct Email</h3>
                  <p className="mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    Prefer to email directly?
                  </p>
                  <a href={`mailto:${COMPANY.email.general}`}
                    className="flex items-center gap-1.5 text-sm font-bold transition-colors hover:underline"
                    style={{ color: 'var(--text-gold)' }}>
                    <Mail size={13} />
                    {COMPANY.email.general}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Department contacts */}
          <div className="mb-12">
            <h2 className="mb-6 font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
              Department Contacts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { dept: 'Investor Relations', desc: 'Investment updates, returns, and portfolio queries' },
                { dept: 'Finance & Reporting', desc: 'Financial statements and distribution questions' },
                { dept: 'Board & Governance', desc: 'Meeting schedules and governance matters' },
                { dept: 'Franchise Licensing', desc: 'Franchise enquiries and partnership discussions' },
                { dept: 'Media & Broadcasting', desc: 'Press enquiries and media partnerships' },
                { dept: 'General Enquiries', desc: 'All other questions and feedback' },
              ].map((c) => (
                <div key={c.dept} className="rounded-[--radius-xl] p-5"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <h3 className="mb-1 font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{c.dept}</h3>
                  <p className="mb-3 text-xs" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
                  <a
                    href={`mailto:${COMPANY.email.general}?subject=${encodeURIComponent('[WLA Investor] ' + c.dept + ' Inquiry')}`}
                    className="flex items-center gap-1.5 text-xs font-bold transition-colors hover:underline"
                    style={{ color: 'var(--text-gold)' }}
                  >
                    <Mail size={12} /> Contact Department
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA banner */}
          <div className="rounded-[--radius-2xl] p-10 text-center"
            style={{ background: 'var(--bg-gold-tint-2)', border: '1px solid var(--border-gold)' }}>
            <h2 className="font-display text-3xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Need Urgent Support?
            </h2>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              For time-sensitive investment matters, call us directly during office hours.
            </p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-3 font-bold transition-all hover:brightness-110"
              style={{ background: 'var(--gradient-gold)', color: '#000' }}
            >
              <Phone size={17} /> {COMPANY.phone}
            </a>
          </div>

        </div>
      </main>
    </div>
  )
}