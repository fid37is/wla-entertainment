'use client'

import { useEffect, useState, useCallback } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase/client'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
import {
  FileText, Download, Clock, Shield, AlertCircle,
  X, Eye, Send, ChevronDown, ChevronUp,
} from 'lucide-react'

interface Document {
  id: string
  title: string
  description: string
  document_type: 'agreement' | 'report' | 'certificate' | 'other'
  file_url: string | null
  created_at: string
  is_public: boolean
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const typeLabel = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)

const typeBadgeStyle = (t: string): React.CSSProperties => {
  switch (t) {
    case 'agreement':
      return { background: 'rgba(96,165,250,0.1)', color: '#60A5FA', border: '1px solid rgba(96,165,250,0.2)' }
    case 'report':
      return { background: 'var(--status-success-bg)', color: 'var(--status-success-text)', border: '1px solid rgba(74,222,128,0.2)' }
    case 'certificate':
      return { background: 'rgba(167,139,250,0.1)', color: '#A78BFA', border: '1px solid rgba(167,139,250,0.2)' }
    default:
      return { background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }
  }
}

const Bone = ({ className = '' }: { className?: string }) => (
  <div className={`rounded animate-pulse ${className}`} style={{ background: 'var(--bg-elevated)' }} />
)

// ─── Document Viewer Pane ────────────────────────────────────────────────────

function ViewerPane({
  doc,
  onClose,
}: {
  doc: Document | null
  onClose: () => void
}) {
  // Close on Escape
  useEffect(() => {
    if (!doc) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [doc, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.55)',
          opacity: doc ? 1 : 0,
          pointerEvents: doc ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className="fixed right-0 top-0 z-50 flex h-full flex-col"
        style={{
          width: 'min(720px, 92vw)',
          background: 'var(--bg-base)',
          borderLeft: '1px solid var(--border-subtle)',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.35)',
          transform: doc ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Pane header */}
        <div
          className="flex flex-shrink-0 items-center justify-between gap-4 px-6 py-4"
          style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
        >
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-gold)' }}>
              Document Viewer
            </p>
            <h3 className="font-display font-black truncate text-base" style={{ color: 'var(--text-primary)' }}>
              {doc?.title ?? ''}
            </h3>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">
            {doc?.file_url && (
              <a
                href={doc.file_url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all hover:brightness-110"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                <Download size={13} /> Download
              </a>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all"
              style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}
              onMouseEnter={e => {
                ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'
                  ; (e.currentTarget as HTMLElement).style.color = 'var(--text-gold)'
              }}
              onMouseLeave={e => {
                ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'
                  ; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
              }}
              aria-label="Close viewer"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <div className="flex-1 overflow-hidden">
          {doc?.file_url ? (
            <iframe
              key={doc.file_url}
              src={`${doc.file_url}#toolbar=1&navpanes=0`}
              className="h-full w-full"
              title={doc.title}
              style={{ border: 'none' }}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-sm" style={{ color: 'var(--text-faint)' }}>
                No file available for preview.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ─── Document Request Form ───────────────────────────────────────────────────

function DocumentRequestForm({ investorEmail }: { investorEmail: string }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ title: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim()) { toast.error('Please name the document you need'); return }
    setLoading(true)
    try {
      // ✅ Use current origin so the request stays on the correct subdomain/port
      const res = await fetch(`${window.location.origin}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'legal@naijaninja.net',
          subject: `Document Request — ${form.title}`,
          html: `
          <p><strong>Investor:</strong> ${investorEmail}</p>
          <p><strong>Document requested:</strong> ${form.title}</p>
          ${form.message ? `<p><strong>Additional notes:</strong><br>${form.message}</p>` : ''}
        `,
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      toast.success('Request sent. The WLA team will respond shortly.')
      setForm({ title: '', message: '' })
      setOpen(false)
    } catch {
      toast.error('Failed to send request. Please email legal@naijaninja.net directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="mt-8 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}
    >
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between px-6 py-4 transition-all"
        style={{ background: open ? 'var(--bg-gold-tint)' : 'transparent' }}
        onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)' }}
        onMouseLeave={e => { if (!open) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-xl"
            style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
          >
            <Send size={14} style={{ color: 'var(--text-gold)' }} />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
              Missing a document?
            </p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Request any document from the WLA team
            </p>
          </div>
        </div>
        {open
          ? <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} />
          : <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
        }
      </button>

      {/* Form body */}
      {open && (
        <form
          onSubmit={handleSubmit}
          className="px-6 pb-6 pt-2 space-y-4"
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-muted)' }}
            >
              Document Name *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="e.g. Q2 2025 Report, SHA Amendment, etc."
              className="input-base"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <div>
            <label
              className="block text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: 'var(--text-muted)' }}
            >
              Additional Notes <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>(optional)</span>
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              placeholder="Any additional context about what you need…"
              rows={3}
              className="input-base resize-none"
              style={{ borderRadius: '1rem' }}
            />
          </div>
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-5 py-2.5 text-sm font-bold transition-all"
              style={{ border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !form.title.trim()}
              className="flex items-center gap-2 rounded-2xl px-6 py-2.5 text-sm font-bold transition-all hover:brightness-110 disabled:opacity-40"
              style={{ background: 'var(--gradient-gold)', color: '#000' }}
            >
              {loading ? (
                <>
                  <span className="h-3.5 w-3.5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Sending…
                </>
              ) : (
                <><Send size={13} /> Send Request</>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

// ─── Document Card ────────────────────────────────────────────────────────────

function DocCard({
  doc,
  onView,
}: {
  doc: Document
  onView: (doc: Document) => void
}) {
  return (
    <div
      className="flex flex-col justify-between rounded-2xl p-5 transition-all"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        minHeight: '140px',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-gold)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
    >
      {/* Top row */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
        >
          <FileText size={16} style={{ color: 'var(--text-gold)' }} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
              {doc.title}
            </h3>
            <span
              className="text-[9px] px-2 py-0.5 rounded-full font-bold flex-shrink-0"
              style={typeBadgeStyle(doc.document_type)}
            >
              {typeLabel(doc.document_type)}
            </span>
          </div>
          {doc.description && (
            <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>
              {doc.description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom row — date + actions */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1">
          <Clock size={10} style={{ color: 'var(--text-faint)' }} />
          <span className="text-[10px]" style={{ color: 'var(--text-faint)' }}>
            {new Date(doc.created_at).toLocaleDateString('en-NG', {
              day: 'numeric', month: 'short', year: 'numeric',
            })}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {doc.file_url ? (
            <>
              {/* View */}
              <button
                type="button"
                onClick={() => onView(doc)}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all"
                style={{ border: '1px solid var(--border-gold)', color: 'var(--text-gold)' }}
                onMouseEnter={e => {
                  ; (e.currentTarget as HTMLElement).style.background = 'var(--bg-gold-tint)'
                }}
                onMouseLeave={e => {
                  ; (e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                <Eye size={12} /> View
              </button>

              {/* Download */}
              <a
                href={doc.file_url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all hover:brightness-110"
                style={{ background: 'var(--gradient-gold)', color: '#000' }}
              >
                <Download size={12} /> Download
              </a>
            </>
          ) : (
            <span className="text-[10px] italic" style={{ color: 'var(--text-faint)' }}>
              Processing…
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestorDocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [viewingDoc, setViewingDoc] = useState<Document | null>(null)
  const [investorEmail, setInvestorEmail] = useState('')

  useEffect(() => { loadDocuments() }, [])

  const loadDocuments = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/portal/login'; return }

      const { data: userData } = await supabase
        .from('users').select('role, email').eq('id', user.id).single()

      if (userData?.role !== 'investor') {
        window.location.href = '/portal/dashboard'; return
      }

      setInvestorEmail(userData?.email ?? user.email ?? '')

      const { data: docs, error } = await supabase
        .from('investor_documents').select('*').order('created_at', { ascending: false })
      if (error) throw error

      // Generate a fresh signed URL for each document's stored path
      const docsWithSignedUrls = await Promise.all(
        (docs || []).map(async (doc) => {
          if (!doc.file_url) return doc

          // file_url should now hold just the storage PATH, e.g. "uploads/xyz.pdf"
          const { data: signedData, error: signError } = await supabase.storage
            .from('investor-documents')
            .createSignedUrl(doc.file_url, 60 * 60) // 1 hour validity

          if (signError) {
            console.error(`Failed to sign URL for ${doc.title}:`, signError)
            return { ...doc, file_url: null }
          }

          return { ...doc, file_url: signedData.signedUrl }
        })
      )

      setDocuments(docsWithSignedUrls)
    } catch (err) {
      console.error(err)
      toast.error('Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  const closeViewer = useCallback(() => setViewingDoc(null), [])

  if (loading) {
    return (
      <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
        <InvestorSidebar />
        <main className="flex-1 lg:ml-64 p-8 space-y-6">
          <div className="space-y-2"><Bone className="h-8 w-48" /><Bone className="h-4 w-72" /></div>
          <Bone className="h-16 rounded-2xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[0, 1, 2, 3].map(i => <Bone key={i} className="h-36 rounded-2xl" />)}
          </div>
        </main>
      </div>
    )
  }

  return (
    <>
      <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
        <InvestorSidebar />

        <main className="flex-1 lg:ml-64">
          <div className="mx-auto px-6 py-8 lg:px-8">

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <FileText size={22} style={{ color: 'var(--text-gold)' }} />
                <h1 className="font-display text-2xl font-black" style={{ color: 'var(--text-primary)' }}>
                  Documents
                </h1>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Your investment agreements, quarterly reports, and certificates.
              </p>
            </div>

            {/* Security note */}
            <div
              className="flex items-start gap-3 rounded-2xl p-4 mb-8"
              style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}
            >
              <Shield size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-gold)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gold-muted)' }}>
                All documents are private to your investor account. Files are hosted securely
                and only accessible by you and the WLA admin team.
              </p>
            </div>

            {/* Empty state */}
            {documents.length === 0 ? (
              <div
                className="rounded-2xl p-12 text-center"
                style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}
              >
                <div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <AlertCircle size={28} style={{ color: 'var(--border-medium)' }} />
                </div>
                <h3 className="mb-2 font-bold" style={{ color: 'var(--text-secondary)' }}>
                  No Documents Yet
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-sm mx-auto"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Your investment agreement, certificates, and quarterly reports will appear
                  here once confirmed and uploaded by the WLA admin team.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {(['agreement', 'certificate', 'report', 'other'] as const).map(type => {
                  const typeDocs = documents.filter(d => d.document_type === type)
                  if (typeDocs.length === 0) return null
                  return (
                    <div key={type}>
                      <h2
                        className="mb-3 text-xs font-bold uppercase tracking-widest"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {typeLabel(type)}s
                      </h2>
                      {/* ✅ Two-column grid */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {typeDocs.map(doc => (
                          <DocCard key={doc.id} doc={doc} onView={setViewingDoc} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Document request form */}
            <DocumentRequestForm investorEmail={investorEmail} />

          </div>
        </main>
      </div>

      {/* Slide-in viewer — outside main flow so it overlays everything */}
      <ViewerPane doc={viewingDoc} onClose={closeViewer} />
    </>
  )
}