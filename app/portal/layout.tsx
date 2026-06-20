// app/portal/layout.tsx
'use client'

import { usePathname } from 'next/navigation'
import InvestorSidebar from '@/components/investor/InvestorSidebar'
const NO_SIDEBAR_PATHS = ['/portal/login', '/portal/change-password']

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
                // localStorage blocked - default to dark
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `,
        }}
      />

      {hideSidebar ? (
        children
      ) : (
        <>
          <InvestorSidebar />
          {/* lg:pl-64 matches the sidebar's fixed w-64 so content never sits under it */}
          <main className="min-h-screen">{children}</main>
        </>
      )}
    </>
  )
}