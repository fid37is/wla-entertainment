import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { WCLSection } from '@/components/sections/WCLSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { InvestorsSection } from '@/components/sections/InvestorsSection'
import { FranchiseUpdatesSection } from '@/components/sections/FranchisesUpdateSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <HeroSection />
      <MissionSection />
      <FranchiseUpdatesSection />
      <WCLSection />
      <BusinessSection />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
