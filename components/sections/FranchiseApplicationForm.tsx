'use client'

import { useState } from 'react'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'


const MARKET_OPTIONS = ['Ghana', 'Kenya', 'South Africa', 'Other']

const EXPERIENCE_OPTIONS = [
  'None yet',
  'Some - adjacent industry',
  'Direct live-sport or broadcast experience',
]

const CAPITAL_OPTIONS = [
  'Prefer to discuss',
  'Under ₦50M',
  '₦50M – ₦200M',
  '₦200M – ₦500M',
  '₦500M+',
]

export function FranchiseApplicationForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    const name       = data.get('name') as string
    const email      = data.get('email') as string
    const market     = data.get('market') as string
    const org        = data.get('org') as string
    const experience = data.get('experience') as string
    const capital    = data.get('capital') as string
    const message    = data.get('message') as string

    const subject = `Franchise Application - ${market}`
    const body = [
      `Target Market: ${market}`,
      `Organization: ${org || 'Not provided'}`,
      `Live Sport / Events Experience: ${experience}`,
      `Estimated Capital Capacity: ${capital || 'Not provided'}`,
      '',
      message,
    ].join('\n')

    try {
      const { error } = await supabase.from('inquiries').insert([
        { name, email, subject, message: body, status: 'new' },
      ])
      if (error) throw error
      setSent(true)
    } catch (err) {
      console.error('Error submitting franchise application:', err)
      toast.error('Failed to submit application. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="card-gold flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <CheckCircle size={48} className="mb-6" style={{ color: 'var(--text-gold)' }} strokeWidth={1.5} />
        <h3 className="mb-3 font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
          Application Received
        </h3>
        <p className="mb-6 max-w-sm" style={{ color: 'var(--text-secondary)' }}>
          WLA reviews every application against trademark clearance and format fit before moving to diligence. We aim to respond within 5 business days.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-bold transition-colors"
          style={{ color: 'var(--text-gold)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-light)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-gold)')}
        >
          Submit another application
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className="input-base" />
        </div>
        <div>
          <label htmlFor="email" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Email Address
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className="input-base" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="market" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Target Country / Market
          </label>
          <select id="market" name="market" required defaultValue="" className="input-base">
            <option value="" disabled>Select a market</option>
            {MARKET_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="org" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Organization <span className="normal-case font-normal" style={{ color: 'var(--text-faint)' }}>(optional)</span>
          </label>
          <input id="org" name="org" type="text" placeholder="Company or entity" className="input-base" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="experience" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Live Sport / Events Experience
          </label>
          <select id="experience" name="experience" required defaultValue="" className="input-base">
            <option value="" disabled>Select an option</option>
            {EXPERIENCE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="capital" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
            Estimated Capital Capacity
          </label>
          <select id="capital" name="capital" defaultValue="" className="input-base">
            <option value="">Prefer to discuss</option>
            {CAPITAL_OPTIONS.slice(1).map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="font-mono mb-1.5 block text-[0.68rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-muted)' }}>
          Market &amp; Operating Plan
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Local team, venue access, broadcast relationships, timeline..."
          className="input-base resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-shear btn-shear-green mt-6 w-full disabled:opacity-60"
      >
        {loading ? 'Submitting…' : (<>Submit Franchise Application <ArrowUpRight size={16} /></>)}
      </button>
    </form>
  )
}