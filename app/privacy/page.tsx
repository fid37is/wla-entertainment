import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy — WLA Entertainment Ltd',
  description:
    'Privacy Policy for WLA Entertainment Ltd and all WLA Group companies including Naija Ninja Warrior.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-yellow-400"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>

        {/* Hero */}
        <div className="mb-12 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.03] p-8">
          <div className="flex items-start gap-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gold-gradient">
              <ShieldCheck size={22} className="text-black" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
                Legal
              </p>
              <h1 className="mb-2 font-display text-3xl font-black text-white md:text-4xl">
                Privacy Policy
              </h1>
              <p className="text-sm text-gray-500">Last Updated: March 2026</p>
            </div>
          </div>
        </div>

        {/* Data controller */}
        <div className="mb-12 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            Data Controller &amp; Legal Entity
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
              <span className="font-display text-xs font-black text-black">WLA</span>
            </div>
            <div>
              <p className="font-display text-lg font-black text-white">{COMPANY.name}</p>
              <p className="text-xs text-yellow-500">A WLA Entertainment Company · {COMPANY.rc}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>CAC Registered</span>
            <span>·</span>
            <span>Asaba, Delta State, Nigeria</span>
            <span>·</span>
            <a
              href={`mailto:${COMPANY.email.general}`}
              className="transition-colors hover:text-yellow-400"
            >
              {COMPANY.email.general}
            </a>
            <span>·</span>
            <a
              href={COMPANY.phoneHref}
              className="transition-colors hover:text-yellow-400"
            >
              {COMPANY.phone}
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            WLA Entertainment Ltd, parent company of Naija Ninja Warrior, is committed to
            protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or participate in our competition.
          </p>
        </div>

        {/* Policy content */}
        <div className="prose prose-invert max-w-none space-y-10">
          <PolicySection title="1. Information We Collect">
            <PolicySubtitle>Personal Information</PolicySubtitle>
            <p className="mb-4 text-gray-400">
              When you register for the competition or interact with our website, we may collect:
            </p>
            <PolicyList
              items={[
                'Full name, date of birth, and gender',
                'Contact information (email address, phone number, physical address)',
                'Emergency contact details',
                'Medical information relevant to competition participation',
                'Photography and video footage captured during competitions',
                'Social media handles (if provided)',
              ]}
            />
            <PolicySubtitle>Technical Information</PolicySubtitle>
            <p className="text-gray-400">
              We automatically collect certain information when you visit our website:
            </p>
            <PolicyList
              items={[
                'IP address and device information',
                'Browser type and version',
                'Pages visited and time spent on pages',
                'Referring website addresses',
                'Cookies and similar tracking technologies',
              ]}
            />
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p className="mb-4 text-gray-400">
              We use the collected information for the following purposes:
            </p>
            <PolicyList
              items={[
                'Competition Management: Process applications, manage registrations, and coordinate competition logistics',
                'Safety & Medical: Ensure participant safety and provide appropriate medical support',
                'Communication: Send competition updates, results, and important announcements',
                'Broadcasting: Produce and broadcast competition content across various media platforms',
                'Marketing: Promote the competition and share athlete stories (with consent)',
                'Analytics: Improve our website and competition experience',
                'Legal Compliance: Meet legal and regulatory requirements',
              ]}
            />
          </PolicySection>

          <PolicySection title="3. Information Sharing and Disclosure">
            <p className="mb-4 text-gray-400">We may share your information with:</p>
            <PolicyList
              items={[
                'Service Providers: Third parties who help operate our competition (event coordinators, medical staff, production crews)',
                'Broadcasting Partners: TV networks, streaming platforms, and media outlets (for competition footage)',
                'Sponsors: Corporate partners (only with your explicit consent)',
                'WLA Group Companies: Other entities operating under WLA Entertainment Ltd, as we expand across Africa',
                'Legal Authorities: When required by law or to protect our legal rights',
                'Business Transfers: In connection with any merger, sale, or transfer of our business',
              ]}
            />
            <p className="mt-4 font-medium text-gray-300">
              We do not sell your personal information to third parties.
            </p>
          </PolicySection>

          <PolicySection title="4. Photography and Video Rights">
            <p className="mb-4 text-gray-400">
              By participating in Naija Ninja Warrior, you acknowledge and agree that:
            </p>
            <PolicyList
              items={[
                'Your image, likeness, and performance may be recorded and broadcast',
                'We may use this content for promotional purposes across various media',
                'You waive any rights to compensation for such use',
                'You can request removal of specific content from our social media (subject to contractual obligations with broadcasters)',
              ]}
            />
          </PolicySection>

          <PolicySection title="5. Data Security">
            <p className="mb-4 text-gray-400">
              We implement appropriate technical and organisational measures to protect your
              personal information:
            </p>
            <PolicyList
              items={[
                'Secure servers and encrypted data transmission',
                'Limited access to personal information (only authorised personnel)',
                'Regular security audits and updates',
                'Staff training on data protection practices',
              ]}
            />
            <p className="mt-4 text-gray-400">
              However, no method of transmission over the Internet is 100% secure. We cannot
              guarantee absolute security of your information.
            </p>
          </PolicySection>

          <PolicySection title="6. Your Rights and Choices">
            <p className="mb-4 text-gray-400">
              You have the following rights regarding your personal information:
            </p>
            <PolicyList
              items={[
                'Access: Request a copy of the personal information we hold about you',
                'Correction: Request correction of inaccurate or incomplete information',
                'Deletion: Request deletion of your personal information (subject to legal obligations)',
                'Opt-Out: Unsubscribe from marketing communications at any time',
                'Data Portability: Request your data in a portable format',
                'Object: Object to certain types of processing',
              ]}
            />
            <p className="mt-4 text-gray-400">
              To exercise these rights, contact us at:{' '}
              <a
                href={`mailto:${COMPANY.email.general}`}
                className="text-yellow-400 hover:text-yellow-300"
              >
                {COMPANY.email.general}
              </a>
            </p>
          </PolicySection>

          <PolicySection title="7. Cookies and Tracking Technologies">
            <p className="mb-4 text-gray-400">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <PolicyList
              items={[
                'Essential Cookies: Required for website functionality',
                'Analytics Cookies: Help us understand how visitors use our website',
                'Marketing Cookies: Used to deliver relevant advertisements',
              ]}
            />
            <p className="mt-4 text-gray-400">
              You can control cookies through your browser settings. Note that disabling
              cookies may affect website functionality.
            </p>
          </PolicySection>

          <PolicySection title="8. Children's Privacy">
            <p className="text-gray-400">
              Participants must be at least 18 years old or have parental/guardian consent. We
              do not knowingly collect information from children under 13 without verifiable
              parental consent. If you believe we have collected information from a child
              without proper consent, please contact us immediately.
            </p>
          </PolicySection>

          <PolicySection title="9. International Data Transfers">
            <p className="text-gray-400">
              Your information may be transferred to and processed in countries outside
              Nigeria, particularly as WLA Entertainment Ltd expands operations across Africa
              or works with international broadcasting partners. We ensure appropriate
              safeguards are in place for such transfers.
            </p>
          </PolicySection>

          <PolicySection title="10. Data Retention">
            <p className="text-gray-400">
              We retain your personal information for as long as necessary to fulfil the
              purposes outlined in this policy, unless a longer retention period is required
              by law. Competition footage and results may be retained indefinitely for
              historical and archival purposes.
            </p>
          </PolicySection>

          <PolicySection title="11. Changes to This Privacy Policy">
            <p className="text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of any
              material changes by posting the new policy on our website and updating the
              &quot;Last Updated&quot; date. Your continued use of our services after changes
              constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="12. Contact Us">
            <p className="mb-6 text-gray-400">
              If you have questions, concerns, or requests regarding this Privacy Policy or
              our data practices, please contact the data controller:
            </p>
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-6">
              <p className="font-display font-black text-white">{COMPANY.name}</p>
              <p className="mb-3 text-xs text-yellow-500">
                A WLA Entertainment Company · {COMPANY.rc}
              </p>
              <div className="space-y-1 text-sm text-gray-400">
                <p>
                  <a
                    href={`mailto:${COMPANY.email.general}`}
                    className="transition-colors hover:text-yellow-400"
                  >
                    {COMPANY.email.general}
                  </a>
                </p>
                <p>
                  <a href={COMPANY.phoneHref} className="transition-colors hover:text-yellow-400">
                    {COMPANY.phone}
                  </a>
                </p>
                <p>{COMPANY.address}</p>
              </div>
            </div>
          </PolicySection>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PolicySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8">
      <h2 className="mb-5 font-display text-xl font-black text-white md:text-2xl">{title}</h2>
      {children}
    </div>
  )
}

function PolicySubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 mt-5 font-display text-base font-bold text-gray-200">{children}</h3>
  )
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500" />
          {item}
        </li>
      ))}
    </ul>
  )
}
