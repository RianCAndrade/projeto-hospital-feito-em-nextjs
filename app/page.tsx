import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { UnitsSection } from '@/components/units-section'
import { SpecialtiesSection } from '@/components/specialties-section'
import { StatsSection } from '@/components/stats-section'
import { ServicesSection } from '@/components/services-section'
import { ConveniosSection } from '@/components/convenios-section'
import { NewsSection } from '@/components/news-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <UnitsSection />
      <SpecialtiesSection />
      <StatsSection />
      <ServicesSection />
      <ConveniosSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
