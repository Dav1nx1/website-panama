"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const bedrooms = [
  {
    id: 1,
    name: "MASTER BEDROOM",
    description:
      "Experience unparalleled luxury in our master suite, where sophistication meets comfort. Wake up to breathtaking ocean views through expansive windows, and enjoy your private sanctuary designed for ultimate relaxation. The spacious layout features premium furnishings and elegant design touches throughout.",
    features: ["PANORAMIC OCEAN VIEW BALCONY", "ENSUITE LUXURY BATHROOM", "WALK-IN CLOSET SPACE"],
    images: [
      "/luxury-master-bedroom-with-ocean-view-teal-accents.jpg",
      "/luxury-bedroom-with-ocean-view-and-modern-design.jpg",
      "/modern-luxury-home-exterior-with-stone-walls-glass.jpg",
    ],
  },
  {
    id: 2,
    name: "SUNSET VIEW BEDROOM",
    description:
      "As the day winds down, the sunset bedroom welcomes you with its warm hues and inviting atmosphere. Golden light floods the space as the sun sets, creating a serene retreat. Step out onto the balcony, where comfortable seating invites you to unwind and savor the tranquil evening.",
    features: ["SUNSET VIEW BALCONY WITH SEATS", "PRIVATE BATHROOM", "AMPLE CLOSET SPACE"],
    images: [
      "/luxury-bedroom-with-sunset-view-warm-lighting.jpg",
      "/luxury-ocean-view-terrace-with-woman-in-white-dres.jpg",
      "/modern-luxury-home-exterior-with-stone-walls-glass.jpg",
    ],
  },
  {
    id: 3,
    name: "SEA VIEW BEDROOM",
    description:
      "Immerse yourself in coastal tranquility with our sea view bedroom. Floor-to-ceiling windows frame the endless blue horizon, while the carefully curated interior design creates a peaceful haven. Modern amenities blend seamlessly with natural elements for a truly rejuvenating experience.",
    features: ["DIRECT SEA VIEW WINDOWS", "PRIVATE ENSUITE BATHROOM", "SPACIOUS CLOSET AREA"],
    images: [
      "/luxury-bedroom-with-ocean-view-and-modern-design.jpg",
      "/luxury-master-bedroom-with-ocean-view-teal-accents.jpg",
      "/bright-modern-living-space-with-ocean-views.jpg",
    ],
  },
]

export function BedroomDetailsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bedrooms.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bedrooms.length) % bedrooms.length)
  }

  const currentBedroom = bedrooms[currentSlide]

  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image - top left */}
            <div className="col-span-2 overflow-hidden rounded-lg">
              <Image
                src={currentBedroom.images[0] || "/placeholder.svg"}
                alt={`${currentBedroom.name} view 1`}
                width={800}
                height={600}
                className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Bottom left image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src={currentBedroom.images[1] || "/placeholder.svg"}
                alt={`${currentBedroom.name} view 2`}
                width={400}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Bottom right image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src={currentBedroom.images[2] || "/placeholder.svg"}
                alt={`${currentBedroom.name} view 3`}
                width={400}
                height={400}
                className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8 h-px w-16 bg-gray-300" />

            <h2 className="mb-6 font-serif text-4xl font-light tracking-wide text-gray-900 md:text-5xl">
              {currentBedroom.name}
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">{currentBedroom.description}</p>

            <div className="mb-12 h-px w-12 bg-gray-300" />

            {/* Features list */}
            <div className="mb-12 space-y-4">
              {currentBedroom.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-light tracking-wider text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                aria-label="Previous bedroom"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {bedrooms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 transition-all ${
                      index === currentSlide ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                    } rounded-full`}
                    aria-label={`Go to bedroom ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                aria-label="Next bedroom"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
