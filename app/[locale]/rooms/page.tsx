import type { Metadata } from "next"
import { RoomsHeroSection } from "@/components/rooms-hero-section"
import { RoomsShowcase } from "@/components/rooms-showcase"
import { PropertyBreakdown } from "@/components/property-breakdown"
import { BedroomDetailsCarousel } from "@/components/bedroom-details-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Accommodations | 9 Bedrooms, 2 Duplex Houses, 10 Cabins | Isla Grande Panama",
  description: "Discover our comprehensive accommodation options in Isla Grande, Colon, Panama. 9 bedrooms across 2 duplex houses, 10 individual cabins, and a large two-story house. Perfect for boutique hotel operations or vacation rentals.",
  keywords: [
    "panama property accommodations",
    "isla grande panama rooms",
    "panama duplex houses",
    "panama cabins for rent",
    "9 bedrooms panama property",
    "panama vacation rental rooms",
    "boutique hotel panama accommodations",
    "panama property structures"
  ],
  openGraph: {
    title: "Accommodations | 9 Bedrooms, 2 Duplex Houses, 10 Cabins | Isla Grande Panama",
    description: "Discover our comprehensive accommodation options: 9 bedrooms across 2 duplex houses, 10 individual cabins, and a large two-story house.",
    images: [{ url: "/image1.jpeg", width: 1200, height: 630, alt: "Property Accommodations Isla Grande Panama" }],
  },
}

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

