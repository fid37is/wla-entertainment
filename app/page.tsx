import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { WCLSection } from '@/components/sections/WCLSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { HomeCTA } from '@/components/sections/HomeCTA'

export default function HomePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <HeroSection />
      <MissionSection />
      <WCLSection />
      <BusinessSection />
      <HomeCTA />
      <Footer />
    </main>
  )
}
