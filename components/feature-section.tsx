"use client"

import { useState } from "react"

export function FeatureSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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
            Casa Pacífico Panama offers exceptional income potential on Panama's Pacific coast. With premium amenities
            including a world-class fitness center, infinity pool, and modern entertainment spaces, this property
            commands top-tier nightly rates of $800-$1,200. Perfect for boutique hotel operation or luxury vacation
            rentals.
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
                src="/luxury-ocean-view-terrace-with-woman-in-white-dres.jpg"
                alt="Luxury terrace with ocean view at Mea Suna Madeira"
                className="h-auto w-full object-cover"
              />
            ) : (
              <video
                className="h-auto w-full object-cover"
                controls
                autoPlay
                poster="/luxury-ocean-view-terrace-with-woman-in-white-dres.jpg"
              >
                <source src="/videos/madeira-feature.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
