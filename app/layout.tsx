import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'
import { Toaster } from 'sonner'

const SITE_URL = 'https://warriorsleague.africa'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WLA Entertainment Ltd - Warriors League Africa',
    template: '%s | WLA Entertainment',
  },
  description:
    "WLA Entertainment Ltd is a CAC-registered sports entertainment company building Africa's first continental network of warrior-format competitions, broadcasts, and franchises.",
  keywords: [
    'Warriors League Africa',
    'WLA Entertainment',
    'Nigeria Next Warrior',
    'Africa sports entertainment',
    'Nigerian competition',
    'next warrior Africa',
  ],
  authors: [{ name: 'WLA Entertainment Ltd' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'WLA Entertainment Ltd - Warriors League Africa',
    description: "Africa's first continental warrior competition franchise network.",
    url: SITE_URL,
    siteName: 'WLA Entertainment Ltd',
    locale: 'en_NG',
    type: 'website',
    // No manual `images` field here — app/opengraph-image.png (the file convention)
    // auto-generates the og:image tag itself. Declaring both caused a conflict.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WLA Entertainment Ltd - Warriors League Africa',
    description: "Africa's first continental warrior competition franchise.",
    site: '@wlaentertainment',
    // Same here — picked up automatically from app/opengraph-image.png.
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  )
}