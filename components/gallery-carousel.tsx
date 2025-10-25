"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "GARDEN",
    description:
      "Explore our lush garden, spanning four terraces and flourishing with over 4,000 evergreen and colorful plants year-round. Unwind under bougainvillea pergolas with hammocks and sun loungers, offering breathtaking views of the ocean and coastal beauty.",
    image: "/purple-bougainvillea-garden-with-ocean-view.jpg",
  },
  {
    id: 2,
    title: "POOL",
    description:
      "Immerse yourself in our stunning infinity pool with panoramic ocean views, surrounded by modern architecture and natural beauty.",
    image: "/infinity-pool-with-ocean-view-and-modern-pergola.jpg",
  },
  {
    id: 3,
    title: "SCENERY",
    description:
      "Experience breathtaking views of our property nestled in the Madeira coastline, showcasing modern luxury architecture in harmony with nature.",
    image: "/aerial-view-luxury-villa-at-dusk-with-lights.jpg",
  },
]

export function GalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      const images = sectionRef.current.querySelectorAll(".parallax-image")
      images.forEach((img, index) => {
        const speed = (index + 1) * 15
        ;(img as HTMLElement).style.transform =
          `translateY(${scrollProgress * -speed}px) scale(${1 + scrollProgress * 0.05})`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0a1628] text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3a] to-[#0a1628] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <h2 className="text-5xl lg:text-7xl font-light tracking-wide animate-slide-up">
            YOUR PANORAMIC OASIS AWAITS
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Relax amidst lush coastal gardens and a panoramic infinity pool, surrounded by stunning natural beauty.
          </p>
          <button className="px-8 py-3 border border-white hover:bg-white hover:text-[#0a1628] transition-all duration-300 tracking-wider hover:scale-105 animate-slide-up animation-delay-400">
            EXPLORE GALLERY
          </button>
        </div>

        <div className="relative max-w-[1400px] mx-auto h-[600px] lg:h-[700px]" style={{ perspective: "2000px" }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {slides.map((slide, index) => {
              const offset = index - currentSlide
              const isActive = offset === 0
              const isPrev = offset === -1 || (currentSlide === 0 && index === slides.length - 1)
              const isNext = offset === 1 || (currentSlide === slides.length - 1 && index === 0)

              // Calculate position and scale based on offset
              let translateX = offset * 100
              let scale = 0.7
              let opacity = 0
              let zIndex = 0
              let rotateY = offset * 15

              if (isActive) {
                translateX = 0
                scale = 1
                opacity = 1
                zIndex = 30
                rotateY = 0
              } else if (isPrev) {
                translateX = -35
                scale = 0.85
                opacity = 0.6
                zIndex = 20
                rotateY = 15
              } else if (isNext) {
                translateX = 35
                scale = 0.85
                opacity = 0.6
                zIndex = 20
                rotateY = -15
              }

              return (
                <div
                  key={slide.id}
                  className="absolute w-full max-w-[900px] h-[500px] lg:h-[600px] transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => !isActive && setCurrentSlide(index)}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover parallax-image transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[1px]" />
                    )}

                    {isActive && (
                      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                        <div className="space-y-4 animate-slide-up">
                          <div className="inline-block">
                            <h3 className="text-5xl lg:text-6xl font-light mb-2 tracking-wide">{slide.title}</h3>
                            <div className="h-1 bg-cyan-400 w-24 animate-expand-width" />
                          </div>
                          <p className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl animate-fade-in animation-delay-200">
                            {slide.description}
                          </p>
                          <button className="mt-4 px-6 py-2 border border-white/80 hover:bg-white hover:text-[#0a1628] transition-all duration-300 text-sm tracking-wider hover:scale-105 animate-fade-in animation-delay-400">
                            LEARN MORE
                          </button>
                        </div>
                      </div>
                    )}

                    {!isActive && (
                      <div className="absolute inset-0 flex items-end p-6">
                        <h3 className="text-3xl font-light tracking-wide">{slide.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0a1628] transition-all duration-300 z-40 hover:scale-110 shadow-lg hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0a1628] transition-all duration-300 z-40 hover:scale-110 shadow-lg hover:shadow-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-40">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide ? "bg-white w-12 shadow-lg shadow-white/50" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
                {index === currentSlide && <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm tracking-widest">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
