'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Eye, EyeOff, ShieldCheck, CheckCircle2, Circle, XCircle, Loader2 } from 'lucide-react'

const RULES = [
  { label: 'At least 8 characters',  test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter',   test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One number',             test: (p: string) => /[0-9]/.test(p) },
  { label: 'One special character',  test: (p: string) => /[^A-Za-z0-9]/.test(p) },
]

function strength(p: string): number {
  let s = 0
  if (p.length >= 8)           s++
  if (p.length >= 12)          s++
  if (/[A-Z]/.test(p))         s++
  if (/[0-9]/.test(p))         s++
  if (/[^A-Za-z0-9]/.test(p)) s++
  return s
}

const STRENGTH_META = [
  { label: '',            color: 'var(--border-subtle)' },
  { label: 'Weak',        color: 'var(--status-error-text)' },
  { label: 'Fair',        color: '#FB923C' },
  { label: 'Good',        color: 'var(--color-gold)' },
  { label: 'Strong',      color: 'var(--status-success-text)' },
  { label: 'Very Strong', color: 'var(--status-success-text)' },
]

const DASHBOARD_PATH = '/portal/dashboard'
type CurrentPwStatus = 'idle' | 'checking' | 'valid' | 'invalid'

export default function UpdatePasswordForm() {
  const [form, setForm] = useState({ current: '', password: '', confirm: '' })
  const [show, setShow] = useState({ current: false, password: false, confirm: false })
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const [currentStatus, setCurrentStatus] = useState<CurrentPwStatus>('idle')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const sc   = strength(form.password)
  const meta = STRENGTH_META[sc] || STRENGTH_META[0]

  // Fetch the signed-in user's email once, up front - reused for both the
  // live check below and the final verification in handleSubmit.
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) setEmail(user.email)
    })
  }, [])

  // Debounced live check: re-authenticating with the typed "current password"
  // is the only way Supabase exposes to verify a password without changing
  // it, so we do it on a pause in typing rather than on every keystroke.
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    if (!form.current || !email) {
      setCurrentStatus('idle')
      return
    }

    setCurrentStatus('checking')
    debounceRef.current = setTimeout(async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password: form.current,
      })
      setCurrentStatus(error ? 'invalid' : 'valid')
    }, 700)

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current) }
  }, [form.current, email])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current)                  { toast.error('Enter your current password'); return }
    if (currentStatus !== 'valid')      { toast.error('Current password is incorrect'); return }
    if (form.password.length < 8)       { toast.error('Password must be at least 8 characters'); return }
    if (form.password !== form.confirm) { toast.error('Passwords do not match'); return }

    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user?.email) throw new Error('Could not verify your account. Please sign in again.')

      const { error: verifyError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: form.current,
      })
      if (verifyError) throw new Error('Current password is incorrect')

      const { error } = await supabase.auth.updateUser({ password: form.password })
      if (error) throw error

      toast.success('Password updated.')
      window.location.href = DASHBOARD_PATH
    } catch (err: unknown) {
      toast.error((err as Error)?.message || 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="relative h-full w-full"
      style={{
        // Diagonal gold hairline stripes - very subtle, just enough texture
        backgroundImage: `repeating-linear-gradient(
          135deg,
          transparent,
          transparent 40px,
          rgba(202,138,4,0.03) 40px,
          rgba(202,138,4,0.03) 41px
        )`,
        background: 'var(--bg-base)',
      }}
    >
      {/* Diagonal stripes as a pseudo-layer on top of bg-base */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 48px,
            rgba(202,138,4,0.04) 48px,
            rgba(202,138,4,0.04) 49px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Radial gold glow - top right corner */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(234,179,8,0.12) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Content - centred, constrained width, no excessive padding */}
      <div className="relative mx-auto w-full max-w-3xl px-6 py-10">

        {/* Heading */}
        <div className="mb-6">
          <p className="eyebrow mb-3">Account Security</p>
          <h1
            className="font-display text-2xl font-black mb-1.5"
            style={{ color: 'var(--text-primary)' }}
          >
            Change Password
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Update the password for your investor account.
          </p>
        </div>

        {/* Notice */}
        <div
          className="mb-6 flex items-start gap-3 p-4"
          style={{
            background: 'var(--status-warning-bg)',
            border: '1px solid var(--border-gold)',
          }}
        >
          <ShieldCheck
            size={16}
            className="flex-shrink-0 mt-0.5"
            style={{ color: 'var(--text-gold)' }}
          />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gold-muted)' }}>
            For your security, we verify your current password before saving a new one.
          </p>
        </div>

        {/* Form + requirements */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_260px] lg:items-start">

          {/* ── Form card ── */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* Current password */}
            <div>
              <label
                className="font-mono block text-[0.68rem] uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Current Password
              </label>
              <div className="relative">
                <input
                  type={show.current ? 'text' : 'password'}
                  value={form.current}
                  onChange={e => setForm(f => ({ ...f, current: e.target.value }))}
                  placeholder="Your current password"
                  className="input-base pr-20"
                  style={
                    currentStatus === 'invalid' ? { borderColor: 'var(--status-error-text)' } :
                    currentStatus === 'valid'   ? { borderColor: 'var(--status-success-text)' } :
                    undefined
                  }
                />
                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex items-center">
                  {currentStatus === 'checking' && <Loader2 size={15} className="animate-spin" style={{ color: 'var(--text-faint)' }} />}
                  {currentStatus === 'valid'    && <CheckCircle2 size={15} style={{ color: 'var(--status-success-text)' }} />}
                  {currentStatus === 'invalid'  && <XCircle size={15} style={{ color: 'var(--status-error-text)' }} />}
                </div>
                <button
                  type="button"
                  onClick={() => setShow(s => ({ ...s, current: !s.current }))}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {show.current ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {currentStatus === 'invalid' && (
                <p className="mt-1.5 text-xs" style={{ color: 'var(--status-error-text)' }}>
                  That doesn&apos;t match your current password.
                </p>
              )}
            </div>

            {/* New password */}
            <div>
              <label
                className="font-mono block text-[0.68rem] uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                New Password
              </label>
              <div className="relative">
                <input
                  type={show.password ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="At least 8 characters"
                  className="input-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShow(s => ({ ...s, password: !s.password }))}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {show.password ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {form.password && (
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div
                        key={i}
                        className="h-1 flex-1 transition-all duration-300"
                        style={{ background: i <= sc ? meta.color : 'var(--border-subtle)' }}
                      />
                    ))}
                  </div>
                  {meta.label && (
                    <p className="text-xs font-semibold" style={{ color: meta.color }}>
                      {meta.label}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div>
              <label
                className="font-mono block text-[0.68rem] uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={show.confirm ? 'text' : 'password'}
                  value={form.confirm}
                  onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                  placeholder="Repeat your new password"
                  className="input-base pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShow(s => ({ ...s, confirm: !s.confirm }))}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-faint)' }}
                >
                  {show.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {form.confirm && form.password !== form.confirm && (
                <p className="text-xs mt-1.5" style={{ color: 'var(--status-error-text)' }}>
                  Passwords do not match
                </p>
              )}
              {form.confirm && form.password === form.confirm && (
                <p className="text-xs mt-1.5" style={{ color: 'var(--status-success-text)' }}>
                  ✓ Passwords match
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={() => { window.location.href = DASHBOARD_PATH }}
                className="btn-ghost-shear"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={
                  loading ||
                  currentStatus !== 'valid' ||
                  form.password.length < 8 ||
                  form.password !== form.confirm
                }
                className="btn-shear btn-shear-gold flex-1 disabled:opacity-40"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                    Saving…
                  </>
                ) : 'Save New Password'}
              </button>
            </div>
          </form>

          {/* ── Requirements card ── */}
          <div
            className="p-5"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <p
              className="font-mono mb-3 text-[0.68rem] uppercase tracking-[0.06em]"
              style={{ color: 'var(--text-muted)' }}
            >
              Password Requirements
            </p>
            <ul className="space-y-2.5">
              {/* Current-password check is first - everything else is moot until this passes */}
              <li className="flex items-center gap-2.5 text-sm">
                {currentStatus === 'checking' && <Loader2 size={14} className="animate-spin" style={{ color: 'var(--text-faint)', flexShrink: 0 }} />}
                {currentStatus === 'valid'    && <CheckCircle2 size={14} style={{ color: 'var(--status-success-text)', flexShrink: 0 }} />}
                {currentStatus === 'invalid'  && <XCircle size={14} style={{ color: 'var(--status-error-text)', flexShrink: 0 }} />}
                {currentStatus === 'idle'     && <Circle size={14} style={{ color: 'var(--border-medium)', flexShrink: 0 }} />}
                <span style={{
                  color: currentStatus === 'valid' ? 'var(--text-secondary)'
                    : currentStatus === 'invalid' ? 'var(--status-error-text)'
                    : 'var(--text-muted)',
                }}>
                  Current password confirmed
                </span>
              </li>
              {RULES.map((rule) => {
                const met = rule.test(form.password)
                return (
                  <li key={rule.label} className="flex items-center gap-2.5 text-sm">
                    {met
                      ? <CheckCircle2 size={14} style={{ color: 'var(--status-success-text)', flexShrink: 0 }} />
                      : <Circle       size={14} style={{ color: 'var(--border-medium)',       flexShrink: 0 }} />
                    }
                    <span style={{ color: met ? 'var(--text-secondary)' : 'var(--text-muted)' }}>
                      {rule.label}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}