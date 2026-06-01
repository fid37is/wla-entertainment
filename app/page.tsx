import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FranchisesSection } from '@/components/sections/FranchisesSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { InvestorsSection } from '@/components/sections/InvestorsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FranchisesSection />
      <BusinessSection />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
