import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { FeaturesGrid } from "@/components/features-grid"
import { HorizontalScrollSection } from "@/components/horizontal-scroll-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { GalleryCarousel } from "@/components/gallery-carousel"
import { AmenitiesCarousel } from "@/components/amenities-carousel"
import { LocationMap } from "@/components/location-map"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
  description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with pool, bar, restaurant, volleyball court, and direct ocean access. Guaranteed ROI. Just 1.5 hours from Panama City.",
  keywords: [
    "beachfront property panama",
    "investment property isla grande",
    "panama real estate investment",
    "beachfront resort panama",
    "colon panama property",
    "panama vacation rental investment",
    "boutique hotel panama",
    "panama property for sale",
    "isla grande panama",
    "panama beachfront investment",
    "guaranteed roi panama",
    "panama rental property",
    "9 bedrooms panama",
    "panama duplex houses",
    "panama cabins for sale"
  ],
  openGraph: {
    title: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
    description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with pool, bar, restaurant, and direct ocean access. Guaranteed ROI.",
    images: [
      {
        url: "/image4.jpeg",
        width: 1200,
        height: 630,
        alt: "Beachfront Property Isla Grande, Colon - Investment Opportunity Panama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
    description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with guaranteed ROI.",
    images: ["/image4.jpeg"],
  },
  alternates: {
    canonical: "https://oportunidadenislagrande.com",
  },
}

export default function Home() {
  return (
    <>
      {/* SEO-optimized semantic structure */}
      <main role="main">
        <HeroSection />
        <FeaturesGrid />
        <FeatureSection />
        <HorizontalScrollSection />
        <AmenitiesSection />
        <GalleryCarousel />
        <AmenitiesCarousel />
        <LocationMap />
        <TestimonialsCarousel />
        <ContactSection />
        <Footer />
      </main>
      
      {/* Hidden SEO content for search engines */}
      <div className="sr-only">
        <h1>Beachfront Investment Property Isla Grande, Colon - Panama Real Estate Opportunity</h1>
        <p>Exclusive beachfront investment opportunity in Isla Grande, Colon sector, Panama. This exceptional 6,000 m² property features 9 bedrooms across multiple structures including 2 duplex houses, 10 individual cabins, and a large two-story house with 3 bedrooms. Perfect for boutique hotel operations or vacation rental investment with guaranteed return on investment potential. Located just 1.5 hours from Panama City with direct ocean access, swimming pool, bar, restaurant, and volleyball court.</p>
        
        <h2>Property Features & Structures</h2>
        <ul>
          <li>9 total bedrooms across all structures</li>
          <li>2 modern duplex houses with multiple bedrooms</li>
          <li>10 individual cabins for flexible rental options</li>
          <li>Large two-story house with 3 bedrooms</li>
          <li>Special cabin with 2 bedrooms (1 large with 4 beds, 1 small)</li>
          <li>6,000 m² beachfront property</li>
          <li>Direct ocean access</li>
          <li>Swimming pool with bar and restaurant</li>
          <li>Volleyball court for entertainment</li>
        </ul>
        
        <h2>Investment Opportunity & Location</h2>
        <p>Located in Isla Grande, Colon sector, Panama - just 1.5 hours from Panama City. This turnkey beachfront property offers exceptional income potential for boutique hotel operations or vacation rentals. With guaranteed return on investment, multiple revenue streams, and a prime location in Panama's growing tourism market, this is an ideal investment opportunity for real estate investors seeking profitable beachfront properties in Central America.</p>
      </div>
    </>
  )
}
