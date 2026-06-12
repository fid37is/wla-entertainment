'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, LogOut, Menu, X, TrendingUp, Mail, KeyRound } from 'lucide-react'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { WLALogo } from '@/components/ui/logo'

const navItems = [
  { label: 'Dashboard',       href: '/portal/dashboard',       icon: LayoutDashboard },
  { label: 'Documents',       href: '/portal/documents',       icon: FileText },
  { label: 'Change Password', href: '/portal/update-password', icon: KeyRound },
  { label: 'Contact',         href: '/portal/contact',         icon: Mail },
]

export default function InvestorSidebar() {
  const pathname = usePathname()
  const router   = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) router.replace('/portal/login')
    })
    return () => subscription.unsubscribe()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logged out')
    router.replace('/portal/login')
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-[--radius-md]"
        style={{ background: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)', color: 'var(--text-secondary)' }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 p-6 overflow-y-auto transition-transform duration-300 z-40 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ background: 'var(--sidebar-bg)', borderRight: '1px solid var(--sidebar-border)' }}
      >
        {/* Logo + title */}
        <Link href="/portal/dashboard" className="flex items-center gap-3 mb-2">
          <WLALogo size={44} rounded="rounded-xl" />
          <div>
            <p className="font-display text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              WLA Entertainment
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest leading-tight" style={{ color: 'var(--text-gold)' }}>
              Investor Portal
            </p>
          </div>
        </Link>

        <div className="my-5" style={{ borderTop: '1px solid var(--sidebar-border)' }} />

        {/* Nav */}
        <nav className="space-y-1 flex-1">
          {navItems.map(item => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium"
                style={isActive ? {
                  background: 'var(--sidebar-active-bg)',
                  color: 'var(--sidebar-active-fg)',
                  fontWeight: 700,
                } : {
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--sidebar-hover-bg)' }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = '' }}
              >
                <Icon size={17} className="flex-shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Access note */}
        <div className="mb-4 rounded-xl p-4" style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
          <div className="flex items-center gap-2 mb-1.5">
            <TrendingUp size={13} style={{ color: 'var(--text-gold)' }} />
            <p className="text-xs font-bold" style={{ color: 'var(--text-gold)' }}>Read-Only Access</p>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Real-time visibility into your WLA investment. Updated by the admin team.
          </p>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium w-full transition-all"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--sidebar-hover-bg)')}
          onMouseLeave={e => (e.currentTarget.style.background = '')}
        >
          <LogOut size={17} className="flex-shrink-0" />
          Logout
        </button>
      </aside>

      {open && (
        <div className="fixed inset-0 z-30 lg:hidden" style={{ background: 'rgba(0,0,0,0.7)' }} onClick={() => setOpen(false)} />
      )}
    </>
  )
}