"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Calendar, FileText } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Parallax effect on background
      const bgImage = sectionRef.current.querySelector(".parallax-contact-bg")
      if (bgImage) {
        ;(bgImage as HTMLElement).style.transform = `translateY(${scrollProgress * -30}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-terrace-with-mountain-view.jpg"
          alt="Contact background"
          fill
          className="object-cover parallax-contact-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex flex-col justify-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-light tracking-wide text-white mb-6">
            READY TO INVEST IN
            <br />
            YOUR PANAMA PARADISE?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* Booking Request Card */}
          <div className="bg-white p-12 rounded-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-light mb-2 text-[#0a1628]">Schedule Private Viewing</h3>
                <p className="text-gray-600">Visit the property and explore your investment opportunity.</p>
              </div>
              <Calendar className="w-12 h-12 text-[#0a1628] group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Business Contact Card */}
          <div className="bg-white p-12 rounded-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-light mb-2 text-[#0a1628]">Request Investment Package</h3>
                <p className="text-gray-600">Get detailed financials, projections, and property information.</p>
              </div>
              <FileText className="w-12 h-12 text-[#0a1628] group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
