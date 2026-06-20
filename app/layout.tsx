import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'WLA Entertainment Ltd - Warriors League Africa',
  description:
    "WLA Entertainment Ltd is a CAC-registered sports entertainment company building Africa's first continental network of warrior-format competitions, broadcasts, and franchises.",
  keywords: [
    'Warriors League Africa',
    'WLA Entertainment',
    'Naija Ninja Warrior',
    'Africa sports entertainment',
    'Nigerian competition',
    'ninja warrior Africa',
  ],
  authors: [{ name: 'WLA Entertainment Ltd' }],
  openGraph: {
    title: 'WLA Entertainment Ltd - Warriors League Africa',
    description: "Africa's first continental warrior competition franchise network.",
    url: 'https://wlaentertainment.com',
    siteName: 'WLA Entertainment Ltd',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WLA Entertainment Ltd - Warriors League Africa',
    description: "Africa's first continental warrior competition franchise.",
    site: '@wlaentertainment',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning is scoped to this element only (it does not
    // propagate to children). It's needed here because the investor portal's
    // theme script intentionally sets `data-theme` on <html> synchronously,
    // before React hydrates, to avoid a flash of the wrong theme. That makes
    // the server-rendered attribute differ from the client DOM on purpose —
    // this tells React that specific mismatch is expected, not a bug.
    <html lang="en-NG" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}