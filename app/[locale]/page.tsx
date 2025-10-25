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
  title: "Luxury Villa Madeira | Private Ocean View Retreat",
  description: "Experience unparalleled luxury at Mea Suna Madeira. Private villa with infinity pool, home cinema, golf simulator, and panoramic ocean views. Book your exclusive retreat today.",
  keywords: [
    "luxury villa madeira",
    "private villa madeira", 
    "ocean view villa madeira",
    "luxury accommodation madeira",
    "private retreat madeira",
    "infinity pool villa madeira",
    "home cinema villa madeira",
    "golf simulator villa madeira",
    "luxury vacation madeira",
    "exclusive villa madeira"
  ],
  openGraph: {
    title: "Luxury Villa Madeira | Private Ocean View Retreat",
    description: "Experience unparalleled luxury at Mea Suna Madeira. Private villa with infinity pool, home cinema, golf simulator, and panoramic ocean views.",
    images: [
      {
        url: "/luxury-terrace-with-mountain-view.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Villa Madeira with Ocean View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Villa Madeira | Private Ocean View Retreat",
    description: "Experience unparalleled luxury at Mea Suna Madeira. Private villa with infinity pool, home cinema, golf simulator, and panoramic ocean views.",
    images: ["/luxury-terrace-with-mountain-view.jpg"],
  },
  alternates: {
    canonical: "https://measunamadeira.com",
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
        <h1>Mea Suna Madeira - Luxury Private Villa in Madeira</h1>
        <p>Discover the ultimate luxury retreat at Mea Suna Madeira, a private villa offering unparalleled comfort, world-class amenities, and breathtaking ocean views. Our exclusive property features an infinity pool, state-of-the-art home cinema, professional golf simulator, and premium wellness facilities. Perfect for families, couples, and groups seeking an unforgettable luxury vacation experience in Madeira, Portugal.</p>
        
        <h2>Luxury Amenities & Features</h2>
        <ul>
          <li>Infinity pool with panoramic ocean views</li>
          <li>Home cinema with premium sound system</li>
          <li>Professional golf simulator</li>
          <li>Fitness center with sea views</li>
          <li>Sauna and relaxation areas</li>
          <li>Luxury bedrooms with ocean views</li>
          <li>Modern kitchen and dining areas</li>
          <li>Private gardens and terraces</li>
        </ul>
        
        <h2>Location & Accessibility</h2>
        <p>Located on the beautiful island of Madeira, Portugal, Mea Suna Madeira offers easy access to pristine beaches, hiking trails, golf courses, and cultural attractions. The villa is perfectly positioned for both relaxation and adventure.</p>
      </div>
    </>
  )
}
