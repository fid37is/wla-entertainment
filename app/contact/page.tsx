import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/sections/ContactForm'
import { ContactDetails } from '@/components/sections/ContactDetails'

export const metadata: Metadata = {
  title: 'Contact - WLA Entertainment Ltd',
  description:
    'Get in touch with WLA Entertainment Ltd for investment enquiries, partnership opportunities, franchise licensing, or general correspondence.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-28 pb-16">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-stretch">

          {/* Left */}
          <div className="flex flex-col justify-between gap-10">

            {/* Top - heading */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em]" style={{ color: 'var(--text-gold)' }}>
                Contact
              </p>
              <h1
                className="mb-4 font-display font-black leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: 'var(--text-primary)' }}
              >
                Get in Touch
              </h1>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                For investment enquiries, partnership opportunities, franchise licensing, or general
                correspondence - reach us directly or use the form below.
              </p>
            </div>

            {/* Middle - contact details */}
            <ContactDetails />

            {/* Bottom - closing note */}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              WLA Entertainment Ltd is a CAC-registered company incorporated in Nigeria. All enquiries
              are handled personally by the founding team.
            </p>

          </div>

          {/* Right */}
          <ContactForm />

        </div>
      </main>
      <Footer />
    </div>
  )
}