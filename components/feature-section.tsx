"use client"

import { useState } from "react"

export function FeatureSection() {
  const [isPlaying, setIsPlaying] = useState(true)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="relative bg-[#0a1628] py-16 px-6 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Heading and Description */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="mb-6 text-4xl font-light leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
            A PROPERTY THAT
            <br />
            PAYS FOR ITSELF
          </h2>

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
            This exceptional beachfront property in Isla Grande, Colon offers unmatched income potential. With 9 bedrooms, 2 duplex houses, 10 cabins, pool, bar, restaurant, and volleyball court on 6,000 m², this turnkey investment property is perfect for boutique hotel operations or vacation rentals. 
            <span className="block mt-3 font-semibold text-cyan-400">Guaranteed Return on Investment | Direct Ocean Access | 1.5 Hours from Panama City</span>
          </p>

          {/* Play Button Icon */}
          <button
            onClick={handlePlayClick}
            className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 transition-all hover:border-white hover:bg-white/10"
            aria-label="Play video"
          >
            <div className="h-3 w-3 rounded-full border-2 border-white" />
          </button>
        </div>

        {/* Video/Image Container */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {!isPlaying ? (
              <img
                src="/601828180.jpg"
                alt="Luxury beachfront property in Isla Grande, Colon"
                className="h-auto w-full object-cover"
              />
            ) : (
              <video
                className="h-auto w-full object-cover"
                controls
                autoPlay
                muted
                poster="/601828180.jpg"
              >
                <source src="/Cabañas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
