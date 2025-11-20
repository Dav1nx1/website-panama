"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imagesRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Parallax effect on images
      imagesRef.current.style.transform = `translateY(${scrollProgress * -50}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0a1628] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-light tracking-wide">
              DISCOVER
              <br />
              EXQUISITE AMENITIES
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Work out in our sea-view fitness center, relax at the spa, enjoy films in our home cinema, and perfect
              your swing with our high-end golf simulator in the "19th hole" bar.
            </p>
          </div>

          {/* Right side - Images grid */}
          <div ref={imagesRef} className="grid grid-cols-2 gap-4 transition-transform duration-300">
            {/* Top right - Games */}
            <div className="col-span-2 relative h-64 lg:h-80 overflow-hidden rounded-lg group">
              <Image
                src="/695532592.jpg"
                alt="Games room with billiards"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-4xl font-light">GAMES</h3>
            </div>

            {/* Bottom left - Cinema */}
            <div className="relative h-64 lg:h-80 overflow-hidden rounded-lg group">
              <Image
                src="/695531913.jpg"
                alt="Home cinema"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Bottom right - Spa */}
            <div className="relative h-64 lg:h-80 overflow-hidden rounded-lg group">
              <Image
                src="/695532344.jpg"
                alt="Spa and wellness"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
