'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Eye, EyeOff, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { WLALogo } from '@/components/ui/logo'
import ChangePasswordForm from './ChangePasswordForm'

export default function InvestorLoginForm() {
  const searchParams = useSearchParams()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [stage, setStage]     = useState<'login' | 'change-password'>('login')

  useEffect(() => {
    const email = searchParams.get('email')
    if (email) setForm(f => ({ ...f, email: decodeURIComponent(email) }))
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email.includes('@')) { toast.error('Enter a valid email address'); return }
    if (form.password.length < 6)  { toast.error('Enter your password'); return }
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email, password: form.password,
      })
      if (error) { toast.error('Invalid email or password.'); setLoading(false); return }
      if (!data.user) { toast.error('Login failed.'); setLoading(false); return }

      const { data: userData, error: userError } = await supabase
        .from('users').select('role, investor_status, must_change_password').eq('id', data.user.id).single()

      if (userError || !userData) {
        toast.error('Account not found. Contact the WLA team.')
        await supabase.auth.signOut(); setLoading(false); return
      }
      if (userData.role !== 'investor') {
        toast.error("This account doesn't have investor portal access. If you believe this is an error, contact the WLA team.")
        await supabase.auth.signOut(); setLoading(false); return
      }
      if (userData.investor_status === 'revoked') {
        toast.error('Your investor access has been revoked. Please contact the WLA team.')
        await supabase.auth.signOut(); setLoading(false); return
      }

      toast.success('Welcome back.')
      if (userData.must_change_password) {
        setLoading(false)
        setStage('change-password')
        return
      }
      window.location.replace('/portal/dashboard')
    } catch {
      toast.error('Something went wrong.'); setLoading(false)
    }
  }

  const handleChangePasswordCancel = async () => {
    await supabase.auth.signOut()
    setForm(f => ({ email: f.email, password: '' }))
    setStage('login')
  }

  return (
    <main className="h-full flex" style={{ background: 'var(--bg-base)' }}>

      {/* ── Left - branding ── */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-16 relative overflow-hidden"
        style={{ background: 'var(--bg-gold-tint-2)', borderRight: '1px solid var(--border-gold)' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(234,179,8,0.1) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center text-center">
          <WLALogo size={160} className="mb-10 shadow-2xl" />
          <h1
            className="font-display font-black mb-3"
            style={{
              fontSize: 'clamp(2.2rem,3.5vw,3.2rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Warriors League Africa
          </h1>
          <p className="eyebrow mb-3" style={{ justifyContent: 'center' }}>Secure Investor Portal</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)', maxWidth: '22rem' }}>
            WLA Entertainment Ltd.
          </p>
        </div>
        <div className="absolute bottom-8 text-center">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.04em]" style={{ color: 'var(--text-faint)' }}>
            RC No. 9529867 · Incorporated May 2026
          </p>
        </div>
      </div>

      {/* ── Right - form ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">

        {/* Mobile logo */}
        <div className="lg:hidden flex flex-col items-center mb-10">
          <WLALogo size={80} />
          <p className="font-mono mt-3 text-xs uppercase tracking-[0.1em]" style={{ color: 'var(--text-gold)' }}>
            Investor Portal
          </p>
        </div>

        {stage === 'change-password' ? (
          <ChangePasswordForm
            onCancel={handleChangePasswordCancel}
            cancelLabel="Back to Sign In"
          />
        ) : (
        <div className="w-full max-w-md">
          <h2
            className="font-display font-black mb-2"
            style={{ fontSize: '2rem', color: 'var(--text-primary)' }}
          >
            Sign In
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            Use the credentials provided by the WLA team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="font-mono block text-[0.68rem] uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                autoComplete="email"
                className="input-base"
              />
            </div>

            <div>
              <label
                className="font-mono block text-[0.68rem] uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="input-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  tabIndex={-1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-shear btn-shear-gold w-full disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Signing in…
                </>
              ) : (
                <>Sign In to Portal <ArrowUpRight size={15} /></>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Don&apos;t have access?{' '}
              <a
                href="mailto:investors@warriorsleague.africa"
                className="font-bold hover:underline"
                style={{ color: 'var(--text-gold)' }}
              >
                Contact the WLA team
              </a>
            </p>
          </div>

          <div className="mt-4">
            <Link href="/" className="text-xs hover:underline" style={{ color: 'var(--text-faint)' }}>
              ← Back to WLA Home
            </Link>
          </div>
        </div>
        )}
      </div>
    </main>
  )
}