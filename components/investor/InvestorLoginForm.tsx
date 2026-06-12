'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Eye, EyeOff, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { WLALogo } from '@/components/ui/logo'

export default function InvestorLoginForm() {
  const searchParams = useSearchParams()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)

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
        .from('users').select('role, must_change_password').eq('id', data.user.id).single()
      if (userError || !userData) {
        toast.error('Account not found. Contact the WLA team.')
        await supabase.auth.signOut(); setLoading(false); return
      }
      if (userData.role !== 'investor') {
        toast.error('This portal is for WLA investors only.')
        await supabase.auth.signOut(); setLoading(false); return
      }
      toast.success('Welcome back.')
      window.location.replace(userData.must_change_password ? '/portal/change-password' : '/portal/dashboard')
    } catch {
      toast.error('Something went wrong.'); setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex" style={{ background: 'var(--bg-base)' }}>

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
          {/* Large prominent logo */}
          <WLALogo size={160} rounded="rounded-3xl" className="mb-10 shadow-2xl" />
          <h1
            className="font-display font-black mb-3"
            style={{ fontSize: 'clamp(2.2rem,3.5vw,3.2rem)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Warriors League Africa
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)', maxWidth: '22rem' }}>
            Secure investor portal for WLA Entertainment Ltd.
          </p>
        </div>
        <div className="absolute bottom-8 text-center">
          <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
            RC No. 9529867 · Incorporated May 2026
          </p>
        </div>
      </div>

      {/* ── Right - form ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="lg:hidden flex flex-col items-center mb-10">
          <WLALogo size={80} rounded="rounded-2xl" />
          <p className="mt-3 font-display font-black text-xl" style={{ color: 'var(--text-primary)' }}>
            Investor Portal
          </p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="font-display font-black mb-2" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
            Sign In
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            Use the credentials provided by the WLA team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Email Address
              </label>
              <input type="email" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com" autoComplete="email" className="input-base" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Password
              </label>
              <div className="relative">
                <input type={showPw ? 'text' : 'password'} value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Enter your password" autoComplete="current-password"
                  className="input-base pr-12" />
                <button type="button" onClick={() => setShowPw(!showPw)} tabIndex={-1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--text-secondary)' }}>
                  {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm transition-all hover:brightness-110 disabled:opacity-50"
              style={{ background: 'var(--gradient-gold)', color: '#000' }}>
              {loading ? (
                <><span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />Signing in…</>
              ) : (
                <>Sign In to Portal <ArrowUpRight size={15} /></>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Don&apos;t have access?{' '}
              <a href="mailto:legal@naijaninja.net" className="font-bold hover:underline" style={{ color: 'var(--text-gold)' }}>
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
      </div>
    </main>
  )
}