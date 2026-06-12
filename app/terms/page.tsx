import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ScrollText } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms & Conditions - WLA Entertainment Ltd',
  description: 'Terms and Conditions for WLA Entertainment Ltd, governing use of naijaninja.net and all WLA Group services.',
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 md:p-8" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', color: 'var(--text-secondary)' }}>
      <h2 className="mb-5 font-display text-xl font-black md:text-2xl" style={{ color: 'var(--text-primary)' }}>{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function TermsList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: 'var(--color-gold)' }} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm transition-colors hover:text-yellow-500"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>

        {/* Hero */}
        <div className="mb-12 rounded-2xl p-8" style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-gold-tint)' }}>
          <div className="flex items-start gap-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: 'var(--gradient-gold)' }}>
              <ScrollText size={22} className="text-black" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--text-gold)' }}>Legal</p>
              <h1 className="mb-2 font-display text-3xl font-black md:text-4xl" style={{ color: 'var(--text-primary)' }}>Terms &amp; Conditions</h1>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Last Updated: March 2026</p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-2xl p-6" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            These Terms and Conditions govern your use of the Naija Ninja Warrior website (naijaninja.net) and
            participation in any WLA Entertainment Ltd competitions, events, and services. By accessing our website
            or registering for competitions, you agree to be bound by these terms.
          </p>
        </div>

        <div className="space-y-6">
          <TermsSection title="1. Acceptance of Terms">
            <p>By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. WLA Entertainment Ltd reserves the right to modify these terms at any time.</p>
          </TermsSection>

          <TermsSection title="2. Eligibility">
            <p className="mb-4">To participate in Naija Ninja Warrior competitions:</p>
            <TermsList items={['You must be at least 18 years of age, or have explicit written parental/guardian consent','You must be physically fit and able to participate in high-intensity physical activities','You must be a Nigerian resident or citizen, or otherwise meet the eligibility criteria for your specific competition','You must not have any medical conditions that would prevent safe participation','You must complete all required registration and waiver documentation']} />
          </TermsSection>

          <TermsSection title="3. Registration and Competition Entry">
            <p className="mb-4">By registering for WLA Entertainment Ltd competitions:</p>
            <TermsList items={['You provide accurate and complete information during registration','You understand that registration fees (where applicable) are non-refundable','Selection for competition participation is at the sole discretion of WLA Entertainment Ltd','Registration does not guarantee competition participation','You agree to participate in good faith and abide by all competition rules']} />
          </TermsSection>

          <TermsSection title="4. Health, Safety and Liability Waiver">
            <p className="mb-4">By participating in WLA Entertainment Ltd competitions, you acknowledge that:</p>
            <TermsList items={['Physical competitions carry inherent risks of injury','You participate entirely at your own risk','WLA Entertainment Ltd, its officers, employees, contractors, and agents are not liable for any injury, loss, or damage arising from your participation','You have consulted with a qualified medical professional and are physically fit to compete','You will complete and sign a separate liability waiver before participation at any event','WLA Entertainment Ltd maintains public liability insurance for all official events']} />
          </TermsSection>

          <TermsSection title="5. Intellectual Property">
            <p className="mb-4">All content on this website and associated with the WLA brand is the property of WLA Entertainment Ltd:</p>
            <TermsList items={['The WLA format, including the slot system, weight classification, decision phase, and obstacle framework, is original intellectual property owned by WLA Entertainment Ltd','All trademarks, logos, and brand elements are the property of WLA Entertainment Ltd','Competition footage, photographs, and media content are owned by WLA Entertainment Ltd','You may not reproduce, distribute, or use any WLA content without written permission','Any ideas, suggestions, or feedback you provide become the property of WLA Entertainment Ltd']} />
          </TermsSection>

          <TermsSection title="6. Media Rights and Publicity">
            <p className="mb-4">By participating in WLA Entertainment Ltd events, you grant us:</p>
            <TermsList items={['A perpetual, worldwide, royalty-free licence to record, broadcast, and distribute your image and likeness','The right to use your name, story, and competition footage for promotional and commercial purposes','The right to feature your participation across all media channels including television, streaming, and digital platforms']} />
            <p className="mt-4">You waive any moral rights or rights to compensation for such use, except where prohibited by applicable Nigerian law.</p>
          </TermsSection>

          <TermsSection title="7. User Conduct">
            <p className="mb-4">When using our website or participating in events, you agree not to:</p>
            <TermsList items={['Provide false or misleading information','Use any automated systems to access or scrape our website','Engage in any conduct that could damage the reputation of WLA Entertainment Ltd','Interfere with the fair running of any competition','Use performance-enhancing substances in violation of competition rules','Harass, threaten, or engage in discriminatory behaviour toward other participants or staff']} />
          </TermsSection>

          <TermsSection title="8. Prize Money and Rewards">
            <p className="mb-4">Regarding competition prizes:</p>
            <TermsList items={['Prize pools are announced prior to each competition season','Prizes are subject to applicable Nigerian tax withholding requirements','Prize money will be paid within 30 days of the Grand Finale, subject to satisfactory completion of all required documentation','WLA Entertainment Ltd reserves the right to disqualify any participant found to have violated competition rules, including forfeiture of prizes','Prize amounts may vary between seasons']} />
          </TermsSection>

          <TermsSection title="9. Privacy">
            <p>
              Your use of our services is also governed by our{' '}
              <Link href="/privacy" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-gold)' }}>
                Privacy Policy
              </Link>
              , which is incorporated into these Terms and Conditions by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </TermsSection>

          <TermsSection title="10. Disclaimer of Warranties">
            <p className="mb-4">Our website and services are provided on an &quot;as is&quot; basis. WLA Entertainment Ltd makes no warranties, express or implied, including but not limited to:</p>
            <TermsList items={['The accuracy or completeness of website content','Uninterrupted or error-free website access','That the website is free from viruses or harmful components','That any specific competition results, broadcast dates, or events will occur as planned']} />
          </TermsSection>

          <TermsSection title="11. Limitation of Liability">
            <p>To the maximum extent permitted by Nigerian law, WLA Entertainment Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or participation in our competitions.</p>
          </TermsSection>

          <TermsSection title="12. Governing Law">
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.</p>
          </TermsSection>

          <TermsSection title="13. Severability">
            <p>If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, so that these terms will otherwise remain in full force and effect.</p>
          </TermsSection>

          <TermsSection title="14. Contact Us">
            <p className="mb-6">If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="rounded-xl p-6" style={{ border: '1px solid var(--border-subtle)', background: 'var(--bg-elevated)' }}>
              <p className="font-display font-black" style={{ color: 'var(--text-primary)' }}>{COMPANY.name}</p>
              <p className="mb-3 text-xs" style={{ color: 'var(--text-gold)' }}>A WLA Entertainment Company · {COMPANY.rc}</p>
              <div className="space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <p><a href={`mailto:${COMPANY.email.general}`} className="hover:text-yellow-500 transition-colors">{COMPANY.email.general}</a></p>
                <p><a href={COMPANY.phoneHref} className="hover:text-yellow-500 transition-colors">{COMPANY.phone}</a></p>
                <p>{COMPANY.address}</p>
              </div>
            </div>
          </TermsSection>
        </div>
      </main>
      <Footer />
    </div>
  )
}