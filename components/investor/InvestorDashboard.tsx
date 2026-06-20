'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase/client'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
import {
  TrendingUp, Users, DollarSign, Calendar,
  CheckCircle, Clock, MapPin, ArrowUpRight,
  RefreshCw, AlertCircle, Trophy, Zap, FileText,
} from 'lucide-react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────
interface InvestorData {
  full_name: string
  email: string
  investment_amount: number
  investment_structure: 'equity' | 'revenue_share' | 'sponsorship'
  equity_percentage: number | null
  investment_date: string
}

interface FinancialMetrics {
  total_revenue: number
  sponsorship_revenue: number
  broadcasting_revenue: number
  ticket_revenue: number
  registration_revenue: number
  merchandise_revenue: number
  digital_revenue: number
  total_expenditure: number
  net_profit: number
  investor_return: number
  last_updated: string
}

interface OperationalMetrics {
  total_applications: number
  approved_contestants: number
  confirmed_participants: number
  total_payments_confirmed: number
  zones_active: number
  current_season: string
  season_status: string
}

interface Milestone {
  id: string
  title: string
  target_date: string
  status: 'completed' | 'in_progress' | 'planned' | 'future'
  notes: string | null
}

interface Season {
  id: string
  name: string
  year: number
  status: string
  start_date: string
  end_date: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmt = (n: number) => {
  if (n >= 1_000_000_000) return `₦${(n / 1_000_000_000).toFixed(2)}B`
  if (n >= 1_000_000)     return `₦${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)         return `₦${(n / 1_000).toFixed(0)}K`
  return `₦${n.toLocaleString()}`
}

const statusDot = (s: string) => {
  switch (s) {
    case 'completed':   return 'var(--status-success-text)'
    case 'in_progress': return '#60A5FA'
    case 'planned':     return 'var(--color-gold)'
    default:            return 'var(--border-medium)'
  }
}

const statusLabel = (s: string) => ({
  completed: 'Completed', in_progress: 'In Progress',
  planned: 'Planned', future: 'Future',
}[s] || s)

const structureLabel = (s: string) => ({
  equity: 'Equity Ownership', revenue_share: 'Revenue Share', sponsorship: 'Sponsorship',
}[s] || s)

// ─── Skeleton ─────────────────────────────────────────────────────────────────
const Bone = ({ className = '' }: { className?: string }) => (
  <div
    className={`rounded animate-pulse ${className}`}
    style={{ background: 'var(--bg-elevated)' }}
  />
)

function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <InvestorSidebar />
      <main className="flex-1 lg:ml-64 p-8 space-y-8">
        <div className="flex items-start justify-between">
          <div className="space-y-2"><Bone className="h-8 w-56" /><Bone className="h-4 w-40" /></div>
          <Bone className="h-9 w-24 rounded-full" />
        </div>
        <Bone className="h-28 w-full rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0,1,2].map(i => <Bone key={i} className="h-24 rounded-2xl" />)}
        </div>
        <Bone className="h-48 rounded-2xl" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[0,1,2,3,4].map(i => <Bone key={i} className="h-24 rounded-2xl" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Bone className="h-64 rounded-2xl" />
          <Bone className="h-64 rounded-2xl" />
        </div>
      </main>
    </div>
  )
}

// ─── Default milestones ───────────────────────────────────────────────────────
const DEFAULT_MILESTONES: Milestone[] = [
  { id: '1', title: 'WLA Incorporation & Legal Setup',       target_date: '2026-06-01', status: 'planned',     notes: null },
  { id: '2', title: 'Trademark Strategy Finalised',          target_date: '2026-06-01', status: 'planned',     notes: null },
  { id: '3', title: 'Series A Close - NGN 800M',             target_date: '2026-09-01', status: 'planned',     notes: null },
  { id: '4', title: 'Equipment Order - Gomeng Confirmed',    target_date: '2026-09-01', status: 'planned',     notes: null },
  { id: '5', title: 'Solar Installation - TANFON 50kw',      target_date: '2026-09-01', status: 'planned',     notes: null },
  { id: '6', title: 'Season 1 Launch - 6 Zones',             target_date: '2026-10-01', status: 'planned',     notes: null },
  { id: '7', title: 'Grand Finale - FCT Abuja',              target_date: '2026-12-01', status: 'planned',     notes: null },
  { id: '8', title: 'Broadcaster Negotiations - Africa Magic',target_date: '2027-01-01', status: 'future',     notes: null },
  { id: '9', title: 'Series B + Ghana Franchise Pre-Launch', target_date: '2027-06-01', status: 'future',     notes: null },
]

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function InvestorDashboard() {
  const [authChecked, setAuthChecked] = useState(false)
  const [investor,    setInvestor]    = useState<InvestorData | null>(null)
  const [financials,  setFinancials]  = useState<FinancialMetrics | null>(null)
  const [ops,         setOps]         = useState<OperationalMetrics | null>(null)
  const [milestones,  setMilestones]  = useState<Milestone[]>([])
  const [season,      setSeason]      = useState<Season | null>(null)
  const [loading,     setLoading]     = useState(true)
  const [refreshing,  setRefreshing]  = useState(false)
  const [lastRefresh, setLastRefresh] = useState(new Date())

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { window.location.replace('/portal/login'); return }
      setAuthChecked(true)
    })
  }, [])

  useEffect(() => {
    if (authChecked) loadAll()
  }, [authChecked])

  const loadAll = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true)
    else setLoading(true)

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data: userData } = await supabase
        .from('users').select('role, full_name, email').eq('id', session.user.id).single()
      if (!userData) return

      const { data: investorData } = await supabase
        .from('investor_profiles').select('*').eq('user_id', session.user.id).single()

      setInvestor(investorData ? {
        full_name:            userData.full_name,
        email:                userData.email,
        investment_amount:    investorData.investment_amount,
        investment_structure: investorData.investment_structure,
        equity_percentage:    investorData.equity_percentage,
        investment_date:      investorData.investment_date,
      } : {
        full_name: userData.full_name, email: userData.email,
        investment_amount: 0, investment_structure: 'equity',
        equity_percentage: null, investment_date: new Date().toISOString(),
      })

      const { data: financialRows } = await supabase
        .from('investor_metrics').select('*').order('updated_at', { ascending: false }).limit(1)

      if (financialRows?.[0]) {
        const f = financialRows[0]
        setFinancials({
          total_revenue: f.total_revenue || 0, sponsorship_revenue: f.sponsorship_revenue || 0,
          broadcasting_revenue: f.broadcasting_revenue || 0, ticket_revenue: f.ticket_revenue || 0,
          registration_revenue: f.registration_revenue || 0, merchandise_revenue: f.merchandise_revenue || 0,
          digital_revenue: f.digital_revenue || 0, total_expenditure: f.total_expenditure || 0,
          net_profit: f.net_profit || 0, investor_return: f.investor_return || 0,
          last_updated: f.updated_at,
        })
      }

      const [appsResult, paymentsResult, seasonRows] = await Promise.all([
        supabase.from('applications').select('id, status, is_participant, payment_status, geo_zone'),
        supabase.from('applications').select('id').eq('payment_status', 'confirmed'),
        supabase.from('seasons').select('*').eq('status', 'active').limit(1),
      ])

      const apps = appsResult.data || []
      const activeZones = [...new Set(apps.filter(a => a.status === 'approved').map((a: { geo_zone?: string }) => a.geo_zone))].filter(Boolean)
      const season = seasonRows.data?.[0] ?? null

      setOps({
        total_applications:       apps.length,
        approved_contestants:     apps.filter(a => a.status === 'approved').length,
        confirmed_participants:   apps.filter(a => a.is_participant).length,
        total_payments_confirmed: (paymentsResult.data || []).length,
        zones_active:             activeZones.length,
        current_season:           season?.name || 'Pre-Season',
        season_status:            season?.status || 'upcoming',
      })

      if (season) setSeason(season)

      const { data: milestonesData } = await supabase
        .from('investor_milestones').select('*').order('target_date', { ascending: true })

      setMilestones(milestonesData?.length ? milestonesData : DEFAULT_MILESTONES)
      setLastRefresh(new Date())
    } catch (err) {
      console.error(err)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  if (!authChecked || loading) return <DashboardSkeleton />

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <InvestorSidebar />

      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="mx-auto px-6 py-8 lg:px-8">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl font-black md:text-3xl" style={{ color: 'var(--text-primary)' }}>
                Welcome back, {investor?.full_name?.split(' ')[0] || 'Investor'}
              </h1>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                {season ? `${season.name} · ${ops?.season_status}` : 'Pre-Season'}
                &nbsp;·&nbsp;
                Last updated {lastRefresh.toLocaleTimeString()}
              </p>
            </div>
            <button
              onClick={() => loadAll(true)}
              disabled={refreshing}
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:brightness-110 disabled:opacity-60"
              style={{ background: 'var(--gradient-gold)', color: '#000' }}
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing…' : 'Refresh'}
            </button>
          </div>

          {/* ── Investment Summary Banner ── */}
          {investor && (
            <div className="rounded-[--radius-2xl] p-6 mb-8"
              style={{ background: 'var(--bg-gold-tint-2)', border: '1px solid var(--border-gold)', boxShadow: 'var(--shadow-gold)' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Your Investment', value: investor.investment_amount ? fmt(investor.investment_amount) : '-' },
                  { label: 'Structure',        value: structureLabel(investor.investment_structure) },
                  { label: 'Equity Stake',     value: investor.equity_percentage ? `${investor.equity_percentage}%` : '-' },
                  { label: 'Returns to Date',  value: financials ? fmt(financials.investor_return) : '₦0' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-gold-muted)' }}>{label}</p>
                    <p className="text-xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Financial Metrics ── */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Financial Metrics</h2>
              {financials?.last_updated && (
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Updated {new Date(financials.last_updated).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              )}
            </div>

            {financials ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {[
                    { label: 'Total Revenue',     value: fmt(financials.total_revenue),     icon: TrendingUp,    tokenColor: 'var(--status-success-text)' },
                    { label: 'Total Expenditure', value: fmt(financials.total_expenditure), icon: ArrowUpRight,  tokenColor: '#FB923C' },
                    { label: 'Net Profit',        value: fmt(financials.net_profit),        icon: DollarSign,    tokenColor: '#60A5FA' },
                  ].map(({ label, value, icon: Icon, tokenColor }) => (
                    <div key={label} className="rounded-[--radius-2xl] p-5"
                      style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon size={16} style={{ color: tokenColor }} />
                        <p className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{label}</p>
                      </div>
                      <p className="font-display text-2xl font-black" style={{ color: tokenColor }}>{value}</p>
                    </div>
                  ))}
                </div>

                {/* Revenue breakdown */}
                <div className="rounded-[--radius-2xl] p-6"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <h3 className="mb-5 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Revenue by Stream</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Sponsorships',             value: financials.sponsorship_revenue,  token: 'var(--text-gold)' },
                      { label: 'Broadcasting & Streaming', value: financials.broadcasting_revenue, token: '#60A5FA' },
                      { label: 'Ticket Sales',             value: financials.ticket_revenue,       token: '#A78BFA' },
                      { label: 'Registration Fees',        value: financials.registration_revenue, token: 'var(--color-gold-light)' },
                      { label: 'Merchandise',              value: financials.merchandise_revenue,  token: '#FB923C' },
                      { label: 'Digital Platform',         value: financials.digital_revenue,      token: '#34D399' },
                    ].map(({ label, value, token }) => {
                      const pct = financials.total_revenue > 0 ? Math.round((value / financials.total_revenue) * 100) : 0
                      return (
                        <div key={label}>
                          <div className="flex justify-between text-sm mb-1.5">
                            <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
                            <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{fmt(value)}</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full" style={{ background: 'var(--border-subtle)' }}>
                            <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: token }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-[--radius-2xl] p-8 text-center"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                <AlertCircle size={32} className="mx-auto mb-3" style={{ color: 'var(--border-medium)' }} />
                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>Financial data will appear here</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  The WLA team updates these figures regularly. Check back soon.
                </p>
              </div>
            )}
          </div>

          {/* ── Operational Metrics ── */}
          <div className="mb-8">
            <h2 className="mb-4 font-display text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              Operational Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Total Applications',     value: ops?.total_applications       ?? '-', Icon: Users },
                { label: 'Approved Contestants',   value: ops?.approved_contestants     ?? '-', Icon: CheckCircle },
                { label: 'Confirmed Participants', value: ops?.confirmed_participants   ?? '-', Icon: Trophy },
                { label: 'Payments Confirmed',     value: ops?.total_payments_confirmed ?? '-', Icon: DollarSign },
                { label: 'Zones with Applicants',  value: ops?.zones_active             ?? '-', Icon: MapPin },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="rounded-[--radius-2xl] p-4"
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                  <Icon size={17} className="mb-2" style={{ color: 'var(--text-gold)' }} />
                  <p className="font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: 'var(--text-muted)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Season + Milestones ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Season */}
            <div className="rounded-[--radius-2xl] p-6"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2 mb-5">
                <Calendar size={17} style={{ color: 'var(--text-gold)' }} />
                <h2 className="font-display text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  Season Overview
                </h2>
              </div>
              {season ? (
                <div className="space-y-0 text-sm">
                  {[
                    ['Season',     season.name],
                    ['Year',       String(season.year)],
                    ['Status',     season.status.charAt(0).toUpperCase() + season.status.slice(1)],
                    ['Start Date', season.start_date ? new Date(season.start_date).toLocaleDateString('en-NG', { day: 'numeric', month: 'long', year: 'numeric' }) : '-'],
                    ['End Date',   season.end_date   ? new Date(season.end_date).toLocaleDateString('en-NG',   { day: 'numeric', month: 'long', year: 'numeric' }) : '-'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-3" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                      <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock size={28} className="mx-auto mb-2" style={{ color: 'var(--border-medium)' }} />
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No active season yet</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-faint)' }}>Season 1 launches Q4 2026</p>
                </div>
              )}
            </div>

            {/* Milestones */}
            <div className="rounded-[--radius-2xl] p-6"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2 mb-5">
                <Zap size={17} style={{ color: 'var(--text-gold)' }} />
                <h2 className="font-display text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  Milestones
                </h2>
              </div>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {milestones.map((m, i) => (
                  <div key={m.id || i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                      style={{ background: statusDot(m.status) }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{m.title}</p>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            background: 'var(--bg-surface-2)',
                            border: '1px solid var(--border-subtle)',
                            color: statusDot(m.status),
                          }}>
                          {statusLabel(m.status)}
                        </span>
                      </div>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {m.target_date ? new Date(m.target_date).toLocaleDateString('en-NG', { month: 'short', year: 'numeric' }) : '-'}
                      </p>
                      {m.notes && <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{m.notes}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Documents CTA ── */}
          <div className="rounded-[--radius-2xl] p-6 mb-8"
            style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: 'var(--bg-gold-tint-2)', border: '1px solid var(--border-gold)' }}>
                  <FileText size={19} style={{ color: 'var(--text-gold)' }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Your Documents</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Investment agreements, reports, and certificates
                  </p>
                </div>
              </div>
              <Link
                href="/portal/documents"
                className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:brightness-110 flex-shrink-0"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                View Documents <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* ── Disclaimer ── */}
          <p className="text-xs text-center leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            This dashboard provides read-only access to WLA Entertainment Ltd investment data.
            Financial figures are updated periodically by the WLA team. For queries, contact{' '}
            <a href="mailto:legal@naijaninja.net" className="hover:underline" style={{ color: 'var(--text-gold-muted)' }}>
              legal@naijaninja.net
            </a>.
          </p>

        </div>
      </main>
    </div>
  )
}