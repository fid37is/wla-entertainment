import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatStrip } from '@/components/sections/StatStrip'
import { MissionSection } from '@/components/sections/MissionSection'
import { ZoneSystemSection } from '@/components/sections/ZoneSystemSection'
import { WCLSection } from '@/components/sections/WCLSection'
import { BusinessSection } from '@/components/sections/BusinessSection'
import { FranchiseTeaser } from '@/components/sections/FranchiseTeaser'
import { HomeCTA } from '@/components/sections/HomeCTA'

export default function HomePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <Navbar />
      <HeroSection />
      <StatStrip />
      <MissionSection />
      <ZoneSystemSection />
      <WCLSection />
      <BusinessSection />
      <FranchiseTeaser />
      <HomeCTA />
      <Footer />
    </main>
  )
}
