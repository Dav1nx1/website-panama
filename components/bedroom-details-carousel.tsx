"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const bedrooms = [
  {
    id: 1,
    name: "DUPLEX HOUSES",
    description:
      "Two modern duplex houses offering comfortable and spacious accommodations with all modern amenities. Each duplex provides multiple bedrooms with private bathrooms, perfect for families or groups seeking privacy and space. Ideal for premium rental units or boutique hotel operations.",
    features: ["TWO-STORY DESIGN", "MULTIPLE BEDROOMS", "PRIVATE BATHROOMS", "MODERN AMENITIES"],
    images: [
      "/671345275.jpg",
      "/671347648.jpg",
      "/671349312.jpg",
    ],
  },
  {
    id: 2,
    name: "LARGE TWO-STORY HOUSE",
    description:
      "Spacious main house featuring 3 bedrooms, perfect for families or premium rental units. This two-story house offers stunning views, modern design, and comfortable living spaces. Ideal for guests seeking a more traditional home experience with all the comforts of a luxury vacation rental.",
    features: ["3 BEDROOMS", "TWO-STORY DESIGN", "SPACIOUS LAYOUT", "PREMIUM ACCOMMODATIONS"],
    images: [
      "/671347785.jpg",
      "/601828180.jpg",
      "/671349312.jpg",
    ],
  },
  {
    id: 3,
    name: "CABIN WITH 2 BEDROOMS",
    description:
      "Unique cabin featuring 1 large bedroom with 4 beds and 1 small bedroom, ideal for groups or extended families. This flexible accommodation option provides comfortable sleeping arrangements for multiple guests while maintaining a cozy, intimate atmosphere. Perfect for budget-conscious travelers or large groups.",
    features: ["1 LARGE BEDROOM (4 BEDS)", "1 SMALL BEDROOM", "GROUP ACCOMMODATIONS", "FLEXIBLE LAYOUT"],
    images: [
      "/671347648.jpg",
      "/671345275.jpg",
      "/671344178.jpg",
    ],
  },
  {
    id: 4,
    name: "10 INDIVIDUAL CABINS",
    description:
      "Ten individual cabins providing maximum rental flexibility. Each cabin can be rented independently, allowing for various guest configurations and pricing strategies. Perfect for boutique hotel operations, group retreats, or flexible vacation rental management. Each unit offers privacy and independence while sharing common amenities.",
    features: ["10 INDIVIDUAL UNITS", "FLEXIBLE RENTAL OPTIONS", "INDEPENDENT ACCESS", "SHARED AMENITIES"],
    images: [
      "/671344178.jpg",
      "/671353553.jpg",
      "/671376659.jpg",
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
