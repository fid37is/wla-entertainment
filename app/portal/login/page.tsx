export const dynamic = 'force-dynamic'
import { Suspense } from 'react'
import InvestorLoginForm from '@/components/investor/InvestorLoginForm'

export const metadata = { title: 'Investor Login - WLA Entertainment Ltd' }

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-base)' }}>
        <div className="h-8 w-8 rounded-full border-2 animate-spin"
          style={{ borderColor: 'var(--border-gold)', borderTopColor: 'transparent' }} />
      </main>
    }>
      <InvestorLoginForm />
    </Suspense>
  )
}