"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const amenities = [
  {
    id: 1,
    title: "FITNESS & SPA",
    description:
      "Stay active in our spacious fitness room with stunning sea views, equipped with multiple cardio, strength and bodyweight training devices. After your workout, unwind in our large sauna and adjoining relaxation room for the perfect revitalization experience.",
    image: "/695531455.jpg",
  },
  {
    id: 2,
    title: "HOME CINEMA",
    description:
      "Enjoy movie nights in our state-of-the-art home cinema with premium sound system and comfortable seating for the ultimate entertainment experience.",
    image: "/695531913.jpg",
  },
  {
    id: 3,
    title: "GOLF SIMULATOR",
    description:
      "Perfect your swing with our high-end golf simulator in the '19th hole' bar, featuring realistic courses and professional-grade equipment.",
    image: "/695532127.jpg",
  },
]

export function AmenitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Parallax effect on background image
      const bgImage = sectionRef.current.querySelector(".parallax-bg")
      if (bgImage) {
        ;(bgImage as HTMLElement).style.transform = `translateY(${scrollProgress * -40}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenities.length)
  }

  const currentAmenity = amenities[currentSlide]

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[12rem] lg:text-[18rem] font-light text-gray-200 tracking-wider whitespace-nowrap">
          Exquisite Amenities
        </h2>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 bg-[#0a1628] text-white p-12 rounded-lg">
            <h3 className="text-5xl font-light tracking-wide">{currentAmenity.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{currentAmenity.description}</p>

            {/* Dots indicator */}
            <div className="flex gap-2 pt-8">
              {amenities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to amenity ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg group">
            <Image
              src={currentAmenity.image || "/placeholder.svg"}
              alt={currentAmenity.title}
              fill
              className="object-cover parallax-bg transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Navigation arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#0a1628] flex items-center justify-center hover:bg-[#0a1628] hover:text-white transition-colors duration-300"
          aria-label="Next amenity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
