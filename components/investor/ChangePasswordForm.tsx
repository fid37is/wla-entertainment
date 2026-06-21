'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Eye, EyeOff, Lock, ShieldCheck, CheckCircle2, Circle, ArrowLeft } from 'lucide-react'

const RULES = [
  { label: 'At least 8 characters',  test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter',   test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One number',             test: (p: string) => /[0-9]/.test(p) },
  { label: 'One special character',  test: (p: string) => /[^A-Za-z0-9]/.test(p) },
]

function strength(p: string): number {
  let s = 0
  if (p.length >= 8)            s++
  if (p.length >= 12)           s++
  if (/[A-Z]/.test(p))          s++
  if (/[0-9]/.test(p))          s++
  if (/[^A-Za-z0-9]/.test(p))  s++
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

interface ChangePasswordFormProps {
  /** Called instead of the default dashboard redirect when Cancel is pressed. */
  onCancel?: () => void
  /** Called instead of the default dashboard redirect once the password is saved. */
  onSuccess?: () => void
  /** Label for the back/cancel control — context-dependent (e.g. "Back to Sign In"). */
  cancelLabel?: string
}

export default function ChangePasswordForm({
  onCancel,
  onSuccess,
  cancelLabel = 'Cancel',
}: ChangePasswordFormProps) {
  const [form, setForm] = useState({ current: '', password: '', confirm: '' })
  const [show, setShow] = useState({ current: false, password: false, confirm: false })
  const [loading, setLoading] = useState(false)

  const sc = strength(form.password)
  const meta = STRENGTH_META[sc] || STRENGTH_META[0]

  const handleCancel = () => {
    if (onCancel) onCancel()
    else window.location.href = DASHBOARD_PATH
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current)                  { toast.error('Enter your temporary password'); return }
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
      if (verifyError) throw new Error('Temporary password is incorrect')

      const { error } = await supabase.auth.updateUser({ password: form.password })
      if (error) throw error

      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        await supabase.from('users').update({ must_change_password: false }).eq('id', session.user.id)
      }

      toast.success('Password set. Welcome to the WLA Investor Portal.')
      if (onSuccess) onSuccess()
      else window.location.href = DASHBOARD_PATH
    } catch (err: unknown) {
      toast.error((err as Error)?.message || 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl">

      {/* Back/cancel link — normal flow, not floating over anything */}
      <button
        type="button"
        onClick={handleCancel}
        className="mb-6 flex items-center gap-1.5 text-sm font-medium transition-colors"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <ArrowLeft size={15} /> {cancelLabel}
      </button>

      {/* Heading */}
      <div className="mb-6">
        <p className="mb-1.5 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-gold)' }}>
          Account Security
        </p>
        <h1 className="font-display text-2xl font-black mb-1.5" style={{ color: 'var(--text-primary)' }}>
          Set Your Password
        </h1>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          Create a personal password for your investor account. You only need to do this once.
        </p>
      </div>

      {/* Notice */}
      <div
        className="mb-6 flex items-start gap-3 rounded-xl p-4"
        style={{ background: 'var(--status-warning-bg)', border: '1px solid var(--border-gold)' }}
      >
        <ShieldCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-gold)' }} />
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gold-muted)' }}>
          Your temporary password was assigned by the WLA team. Create a strong personal password that only you know.
        </p>
      </div>

      {/* Form and requirements — two separate, independent cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px] lg:items-start">

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[--radius-2xl] p-6"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}
        >
          {/* Temporary (current) password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
              Temporary Password
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }} />
              <input
                type={show.current ? 'text' : 'password'}
                value={form.current}
                onChange={e => setForm(f => ({ ...f, current: e.target.value }))}
                placeholder="The temporary password you were given"
                className="input-base pl-10 pr-12"
              />
              <button type="button" onClick={() => setShow(s => ({ ...s, current: !s.current }))}
                className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }}>
                {show.current ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* New password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
              New Password
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }} />
              <input
                type={show.password ? 'text' : 'password'}
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="At least 8 characters"
                className="input-base pl-10 pr-12"
              />
              <button type="button" onClick={() => setShow(s => ({ ...s, password: !s.password }))}
                className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }}>
                {show.password ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {form.password && (
              <div className="mt-2.5 space-y-1.5">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{ background: i <= sc ? meta.color : 'var(--border-subtle)' }}
                    />
                  ))}
                </div>
                {meta.label && (
                  <p className="text-xs font-semibold" style={{ color: meta.color }}>{meta.label}</p>
                )}
              </div>
            )}
          </div>

          {/* Confirm password */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
              Confirm Password
            </label>
            <div className="relative">
              <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }} />
              <input
                type={show.confirm ? 'text' : 'password'}
                value={form.confirm}
                onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                placeholder="Repeat your new password"
                className="input-base pl-10 pr-12"
              />
              <button type="button" onClick={() => setShow(s => ({ ...s, confirm: !s.confirm }))}
                className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-faint)' }}>
                {show.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {form.confirm && form.password !== form.confirm && (
              <p className="text-xs mt-1" style={{ color: 'var(--status-error-text)' }}>Passwords do not match</p>
            )}
            {form.confirm && form.password === form.confirm && (
              <p className="text-xs mt-1" style={{ color: 'var(--status-success-text)' }}>✓ Passwords match</p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-[--radius-full] px-6 py-3.5 font-bold text-sm transition-all"
              style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !form.current || form.password.length < 8 || form.password !== form.confirm}
              className="flex flex-1 items-center justify-center gap-2 py-3.5 rounded-[--radius-full] font-bold text-sm transition-all hover:brightness-110 disabled:opacity-40"
              style={{ background: 'var(--gradient-gold)', color: '#000' }}
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Saving…
                </>
              ) : 'Set Password & Continue'}
            </button>
          </div>
        </form>

        {/* Requirements — its own card, not nested inside the form's card */}
        <div
          className="rounded-[--radius-2xl] p-5"
          style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Password Requirements
          </p>
          <ul className="space-y-2.5">
            {RULES.map((rule) => {
              const met = rule.test(form.password)
              return (
                <li key={rule.label} className="flex items-center gap-2.5 text-sm">
                  {met
                    ? <CheckCircle2 size={14} style={{ color: 'var(--status-success-text)', flexShrink: 0 }} />
                    : <Circle       size={14} style={{ color: 'var(--border-medium)', flexShrink: 0 }} />
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
  )
}