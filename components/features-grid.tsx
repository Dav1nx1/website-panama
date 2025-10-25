"use client"

import { useState } from "react"

interface FeatureCard {
  id: string
  label: string
  title: string
  description: string
  image: string
}

const features: FeatureCard[] = [
  {
    id: "roi",
    label: "INVESTMENT",
    title: "PROVEN ROI POTENTIAL",
    description:
      "Generate $180,000-$240,000 in annual rental income with 60-70% occupancy rates. This turnkey property offers immediate cash flow with 5-7% net returns plus 4-6% annual appreciation in Panama's growing coastal market.",
    image: "/modern-luxury-interior-with-teal-accents.jpg",
  },
  {
    id: "location",
    label: "",
    title: "PRIME BEACHFRONT LOCATION",
    description: "",
    image: "/luxury-dining-room-with-teal-chairs-and-ocean-view.jpg",
  },
  {
    id: "amenities",
    label: "",
    title: "LUXURY AMENITIES",
    description: "",
    image: "/bright-modern-living-space-with-ocean-views.jpg",
  },
]

export function FeaturesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `url('${feature.image}')`,
                transform: hoveredCard === feature.id ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 transition-all duration-500"
              style={{
                backgroundColor: hoveredCard === feature.id ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.4)",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-12 text-center text-white">
              {feature.label && <p className="text-xs md:text-sm tracking-[0.3em] mb-6 font-light">{feature.label}</p>}

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-wide">
                {feature.title}
              </h2>

              {feature.description && (
                <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-md opacity-90">
                  {feature.description}
                </p>
              )}
            </div>

            {/* Vertical Border */}
            {feature.id !== "amenities" && <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />}
          </div>
        ))}
      </div>
    </section>
  )
}
