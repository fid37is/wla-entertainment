// app/portal/layout.tsx
'use client'

import { usePathname } from 'next/navigation'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
import PortalNavbar from '@/components/investor/PortalNavbar'
const NO_SIDEBAR_PATHS = ['/portal/login']

export default function InvestorPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideSidebar = NO_SIDEBAR_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  )

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var saved = localStorage.getItem('wla-theme');
                // Default to dark for the investor portal
                var theme = saved === 'light' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                // localStorage blocked — default to dark
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `,
        }}
      />

      {hideSidebar ? (
        <div className="flex h-screen flex-col overflow-hidden">
          <PortalNavbar />
          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </div>
      ) : (
        <>
          <InvestorSidebar />
          <main className="min-h-screen">
            <PortalNavbar />
            {children}
          </main>
        </>
      )}
    </>
  )
}