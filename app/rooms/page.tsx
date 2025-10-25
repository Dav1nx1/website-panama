import { RoomsHeroSection } from "@/components/rooms-hero-section"
import { RoomsShowcase } from "@/components/rooms-showcase"
import { BedroomDetailsCarousel } from "@/components/bedroom-details-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function RoomsPage() {
  return (
    <main>
      <RoomsHeroSection />
      <RoomsShowcase />
      <BedroomDetailsCarousel />
      <ContactSection />
      <Footer />
    </main>
  )
}
