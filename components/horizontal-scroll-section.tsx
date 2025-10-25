"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current
    if (!container || !scrollContainer) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      // Start scrolling when section enters viewport, continue until it leaves
      const scrollStart = rect.top
      const scrollEnd = rect.bottom - viewportHeight

      if (scrollStart <= 0 && scrollEnd >= 0) {
        // Section is pinned, calculate progress
        const scrolled = Math.abs(scrollStart)
        const totalScrollDistance = containerHeight - viewportHeight
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1)

        setScrollProgress(progress)

        // Calculate horizontal translation (move through 3 panels = 200vw of movement)
        const maxHorizontalScroll = scrollContainer.scrollWidth - window.innerWidth
        const horizontalScroll = progress * maxHorizontalScroll

        scrollContainer.style.transform = `translateX(-${horizontalScroll}px)`

        console.log("[v0] Scroll progress:", progress, "Horizontal scroll:", horizontalScroll)
      } else if (scrollStart > 0) {
        // Section hasn't entered yet
        setScrollProgress(0)
        scrollContainer.style.transform = `translateX(0px)`
      } else if (scrollEnd < 0) {
        // Section has passed
        setScrollProgress(1)
        const maxHorizontalScroll = scrollContainer.scrollWidth - window.innerWidth
        scrollContainer.style.transform = `translateX(-${maxHorizontalScroll}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNextClick = () => {
    const newProgress = Math.min(scrollProgress + 0.33, 1)
    const container = containerRef.current
    if (!container) return

    const containerHeight = container.offsetHeight
    const viewportHeight = window.innerHeight
    const totalScrollDistance = containerHeight - viewportHeight
    const targetScroll = container.offsetTop + newProgress * totalScrollDistance

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white">
      {/* Sticky container that holds the horizontal scrolling content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={scrollContainerRef} className="flex h-full will-change-transform" style={{ width: "300vw" }}>
          {/* Panel 1: Living Space with image collage */}
          <div className="relative flex h-full w-screen flex-shrink-0">
            {/* Left side: Image collage */}
            <div className="relative w-1/2 bg-gray-100">
              <div className="grid h-full grid-cols-2 grid-rows-2 gap-0">
                <div className="relative col-span-2 row-span-1">
                  <Image
                    src="/luxury-modern-home-exterior-with-pool-and-lounge-c.jpg"
                    alt="Exterior pool area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src="/stone-wall-texture-with-decorative-sphere.jpg"
                    alt="Stone wall detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src="/modern-glass-railing-detail.jpg"
                    alt="Glass railing detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Text content */}
            <div className="flex w-1/2 items-center justify-center bg-white px-16">
              <div className="max-w-lg">
                <h2 className="mb-8 font-serif text-5xl font-light leading-tight tracking-wide text-gray-900">
                  Living Space
                </h2>
                <div className="mb-8 h-px w-24 bg-gray-300" />
                <p className="font-sans text-base leading-relaxed text-gray-600">
                  Immerse yourself in the finest comfort of our spacious living area. Relax by the fireplace, unwind on
                  the plush sofa or stay productive in the serene study room.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 2: Large living room image with thumbnails */}
          <div className="relative flex h-full w-screen flex-shrink-0 items-center justify-center bg-white">
            <div className="relative h-full w-full">
              <Image
                src="/luxury-living-room-with-teal-cushions-white-sofa-w.jpg"
                alt="Living room with teal accents"
                fill
                className="object-cover"
              />

              {/* Thumbnail previews - bottom right */}
              <div className="absolute bottom-8 right-8 flex gap-4">
                <div className="relative h-24 w-32 overflow-hidden rounded-lg border-2 border-white shadow-lg">
                  <Image src="/modern-home-office-with-wooden-desk.jpg" alt="Preview 1" fill className="object-cover" />
                </div>
                <div className="relative h-24 w-32 overflow-hidden rounded-lg border-2 border-white shadow-lg">
                  <Image src="/luxury-bedroom.png" alt="Preview 2" fill className="object-cover" />
                </div>
              </div>

              {/* Thumbnail preview - bottom left */}
              <div className="absolute bottom-8 left-8">
                <div className="relative h-24 w-32 overflow-hidden rounded-lg border-2 border-white shadow-lg">
                  <Image src="/modern-teal-living-room.png" alt="Previous" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3: Explore Our Home */}
          <div className="relative flex h-full w-screen flex-shrink-0">
            {/* Left side: Text content */}
            <div className="flex w-1/2 items-center justify-center bg-white px-16">
              <div className="max-w-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-12 bg-gray-900" />
                  <span className="font-sans text-xs uppercase tracking-widest text-gray-900">PRIVACY & SPACE</span>
                </div>
                <h2 className="mb-8 font-serif text-6xl font-light leading-tight tracking-wide text-gray-900">
                  EXPLORE
                  <br />
                  OUR HOME
                </h2>
                <p className="mb-8 font-sans text-base leading-relaxed text-gray-700">
                  From the moment you step into the expansive living area, you'll be immersed in the awe-inspiring sea
                  views that define every room. The beautifully appointed sitting areas, elegant dining spaces, and
                  inviting bedrooms create a refined and welcoming ambiance.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-gray-900 bg-transparent px-8 py-6 font-sans text-sm uppercase tracking-widest text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  INQUIRE NOW
                </Button>
              </div>
            </div>

            {/* Right side: Image collage */}
            <div className="relative w-1/2 bg-gray-100">
              <div className="grid h-full grid-cols-2 grid-rows-3 gap-0">
                <div className="relative col-span-2 row-span-2">
                  <Image
                    src="/modern-luxury-home-exterior-with-stone-walls-glass.jpg"
                    alt="Modern home exterior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src="/woman-relaxing-on-outdoor-lounge-chair-with-ocean-.jpg"
                    alt="Relaxation area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative col-span-1 row-span-1">
                  <Image
                    src="/modern-bedroom-interior-with-ocean-view.jpg"
                    alt="Bedroom view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation button - centered at bottom */}
        <button
          onClick={handleNextClick}
          className="absolute bottom-12 left-1/2 z-10 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-transparent shadow-2xl transition-all hover:scale-110 hover:bg-white/10"
          aria-label="Next section"
        >
          <div className="relative flex h-full w-full items-center justify-center">
            {/* Circular progress indicator */}
            <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - scrollProgress)}`}
                className="transition-all duration-300"
              />
            </svg>
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
