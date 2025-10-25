import { InvestmentHero } from "@/components/investment-hero"
import { PropertySpecs } from "@/components/property-specs"
import { FinancialProjections } from "@/components/financial-projections"
import { PanamaAdvantages } from "@/components/panama-advantages"
import { OperationalModels } from "@/components/operational-models"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

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
