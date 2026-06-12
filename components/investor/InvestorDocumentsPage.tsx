'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase/client'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
import { FileText, Download, Clock, Shield, AlertCircle } from 'lucide-react'

interface Document {
  id: string
  title: string
  description: string
  document_type: 'agreement' | 'report' | 'certificate' | 'other'
  file_url: string | null
  created_at: string
  is_public: boolean
}

const typeLabel = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)

const typeBadgeStyle = (t: string): React.CSSProperties => {
  switch (t) {
    case 'agreement':   return { background: 'rgba(96,165,250,0.1)',  color: '#60A5FA',          border: '1px solid rgba(96,165,250,0.2)' }
    case 'report':      return { background: 'var(--status-success-bg)', color: 'var(--status-success-text)', border: '1px solid rgba(74,222,128,0.2)' }
    case 'certificate': return { background: 'rgba(167,139,250,0.1)', color: '#A78BFA',          border: '1px solid rgba(167,139,250,0.2)' }
    default:            return { background: 'var(--bg-elevated)',     color: 'var(--text-muted)', border: '1px solid var(--border-subtle)' }
  }
}

const Bone = ({ className = '' }: { className?: string }) => (
  <div className={`rounded animate-pulse ${className}`} style={{ background: 'var(--bg-elevated)' }} />
)

export default function InvestorDocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading]     = useState(true)

  useEffect(() => { loadDocuments() }, [])

  const loadDocuments = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/portal/login'; return }

      const { data: userData } = await supabase
        .from('users').select('role').eq('id', user.id).single()
      if (userData?.role !== 'investor') {
        window.location.href = '/portal/dashboard'; return
      }

      const { data: docs, error } = await supabase
        .from('investor_documents').select('*').order('created_at', { ascending: false })
      if (error) throw error
      setDocuments(docs || [])
    } catch (err) {
      console.error(err)
      toast.error('Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
        <InvestorSidebar />
        <main className="flex-1 lg:ml-64 p-8 space-y-6">
          <div className="space-y-2"><Bone className="h-8 w-48" /><Bone className="h-4 w-72" /></div>
          <Bone className="h-16 rounded-2xl" />
          {[0,1,2].map(i => <Bone key={i} className="h-24 rounded-2xl" />)}
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <InvestorSidebar />

      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">

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
          <div className="flex items-start gap-3 rounded-[--radius-2xl] p-4 mb-8"
            style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
            <Shield size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-gold)' }} />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-gold-muted)' }}>
              All documents are private to your investor account. Files are hosted securely
              and only accessible by you and the WLA admin team.
            </p>
          </div>

          {/* Empty state */}
          {documents.length === 0 ? (
            <div className="rounded-[--radius-2xl] p-12 text-center"
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: 'var(--bg-elevated)' }}>
                <AlertCircle size={28} style={{ color: 'var(--border-medium)' }} />
              </div>
              <h3 className="mb-2 font-bold" style={{ color: 'var(--text-secondary)' }}>No Documents Yet</h3>
              <p className="text-sm leading-relaxed max-w-sm mx-auto" style={{ color: 'var(--text-muted)' }}>
                Your investment agreement, certificates, and quarterly reports will appear
                here once confirmed and uploaded by the WLA admin team.
              </p>
              <p className="text-xs mt-4" style={{ color: 'var(--text-faint)' }}>
                Questions?{' '}
                <a href="mailto:legal@naijaninja.net" className="hover:underline"
                  style={{ color: 'var(--text-gold-muted)' }}>
                  legal@naijaninja.net
                </a>
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {(['agreement', 'certificate', 'report', 'other'] as const).map(type => {
                const typeDocs = documents.filter(d => d.document_type === type)
                if (typeDocs.length === 0) return null
                return (
                  <div key={type}>
                    <h2 className="mb-3 text-xs font-bold uppercase tracking-widest"
                      style={{ color: 'var(--text-muted)' }}>
                      {typeLabel(type)}s
                    </h2>
                    <div className="space-y-3">
                      {typeDocs.map(doc => (
                        <div
                          key={doc.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[--radius-2xl] p-5 transition-all"
                          style={{
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-gold)')}
                          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                              style={{ background: 'var(--bg-gold-tint)', border: '1px solid var(--border-gold)' }}>
                              <FileText size={18} style={{ color: 'var(--text-gold)' }} />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                                  {doc.title}
                                </h3>
                                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                                  style={typeBadgeStyle(doc.document_type)}>
                                  {typeLabel(doc.document_type)}
                                </span>
                              </div>
                              {doc.description && (
                                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                  {doc.description}
                                </p>
                              )}
                              <div className="flex items-center gap-1 mt-1.5">
                                <Clock size={11} style={{ color: 'var(--text-faint)' }} />
                                <p className="text-xs" style={{ color: 'var(--text-faint)' }}>
                                  {new Date(doc.created_at).toLocaleDateString('en-NG', {
                                    day: 'numeric', month: 'long', year: 'numeric',
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>

                          {doc.file_url ? (
                            <a
                              href={doc.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold flex-shrink-0 transition-all hover:brightness-110"
                              style={{ background: 'var(--gradient-gold)', color: '#000' }}
                            >
                              <Download size={14} /> Download
                            </a>
                          ) : (
                            <span className="text-xs italic flex-shrink-0" style={{ color: 'var(--text-faint)' }}>
                              Processing…
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}