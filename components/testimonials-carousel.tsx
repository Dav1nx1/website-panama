"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Our family had an amazing time! The kids were entertained with table soccer and billiards, while I found peace in the tranquil garden. The house offers so much, from relaxing in the sauna to enjoying movie nights in the cinema. It truly felt like having our own private retreat. Perfect for a family getaway!",
    author: "Beatrix Aldridge",
    image: "/695532905.jpg",
  },
  {
    id: 2,
    quote:
      "We couldn't have asked for a better escape to Isla Grande. The stunning ocean views, the privacy of the property, and the luxurious amenities made just as much of an impression as the mornings with coffee on the terrace, cooling off in the pool, and the evenings unwinding. The property exceeded our expectations and gave us everything we were looking for.",
    author: "James Brown",
    image: "/695534207.jpg",
  },
  {
    id: 3,
    quote:
      "An unforgettable experience in paradise. Every detail was thoughtfully designed for comfort and luxury. The infinity pool, the gardens, and the breathtaking views made our stay truly magical.",
    author: "Sophie Martinez",
    image: "/695534850.jpg",
  },
]

export function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      // Parallax effect on background
      const bgImage = sectionRef.current.querySelector(".parallax-testimonial")
      if (bgImage) {
        ;(bgImage as HTMLElement).style.transform = `scale(${1 + scrollProgress * 0.1})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentSlide]

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <Image
          src={currentTestimonial.image || "/placeholder.svg"}
          alt="Background"
          fill
          className="object-cover parallax-testimonial transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Testimonial card */}
          <div className="bg-white/10 backdrop-blur-md p-12 rounded-lg border border-white/20 text-white">
            <div className="text-6xl mb-6 opacity-50">"</div>
            <p className="text-lg leading-relaxed mb-8 italic">{currentTestimonial.quote}</p>
            <p className="text-sm font-light tracking-wider">{currentTestimonial.author}</p>
          </div>

          {/* Right side - Title */}
          <div className="text-white text-right">
            <h2 className="text-6xl lg:text-8xl font-light tracking-wide">
              CUSTOMER
              <br />
              STORIES
            </h2>
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0a1628] transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#0a1628] transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
