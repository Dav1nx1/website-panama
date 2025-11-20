import type { Metadata } from "next"
import { InvestmentHero } from "@/components/investment-hero"
import { PropertySpecs } from "@/components/property-specs"
import { FinancialProjections } from "@/components/financial-projections"
import { PanamaAdvantages } from "@/components/panama-advantages"
import { OperationalModels } from "@/components/operational-models"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Investment Details | Beachfront Property Isla Grande Panama | Guaranteed ROI",
  description: "Complete investment details for beachfront property in Isla Grande, Colon, Panama. Financial projections, operational models, property specifications. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with guaranteed return on investment.",
  keywords: [
    "panama real estate investment",
    "beachfront property investment panama",
    "panama property roi",
    "investment property isla grande",
    "panama vacation rental investment",
    "boutique hotel investment panama",
    "panama property financial projections",
    "guaranteed roi panama",
    "panama real estate opportunity"
  ],
  openGraph: {
    title: "Investment Details | Beachfront Property Isla Grande Panama | Guaranteed ROI",
    description: "Complete investment details for beachfront property in Isla Grande, Colon, Panama. Financial projections, operational models, and guaranteed ROI.",
    images: [{ url: "/image5.jpeg", width: 1200, height: 630, alt: "Investment Property Isla Grande Panama" }],
  },
}

export default function InvestmentPage() {
  return (
    <main className="min-h-screen">
      <InvestmentHero />
      <PropertySpecs />
      <FinancialProjections />
      <PanamaAdvantages />
      <OperationalModels />
      <ContactSection />
      <Footer />
    </main>
  )
}

