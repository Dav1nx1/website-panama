import { RoomsHeroSection } from "@/components/rooms-hero-section"
import { RoomsShowcase } from "@/components/rooms-showcase"
import { PropertyBreakdown } from "@/components/property-breakdown"
import { BedroomDetailsCarousel } from "@/components/bedroom-details-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function RoomsPage() {
  return (
    <main>
      <RoomsHeroSection />
      <RoomsShowcase />
      <PropertyBreakdown />
      <BedroomDetailsCarousel />
      <ContactSection />
      <Footer />
    </main>
  )
}

