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
      "Generate exceptional rental income with this turnkey beachfront property. With 9 bedrooms, multiple structures, and premium amenities, this investment offers guaranteed ROI potential. Perfect for boutique hotel operations or vacation rentals in Panama's growing tourism market.",
    image: "/601828206.jpg",
  },
  {
    id: "location",
    label: "",
    title: "PRIME BEACHFRONT LOCATION",
    description: "Located in Isla Grande, Colon sector - just 1.5 hours from Panama City. 6,000 m² property with direct ocean access, perfect for investors seeking a profitable beachfront investment.",
    image: "/671338991.jpg",
  },
  {
    id: "amenities",
    label: "",
    title: "COMPLETE RESORT FACILITIES",
    description: "Pool, bar, restaurant, volleyball court, and direct ocean access. All amenities included for immediate operation as a boutique hotel or vacation rental complex.",
    image: "/671344178.jpg",
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
