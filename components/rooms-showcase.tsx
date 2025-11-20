"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl'

const rooms = [
  {
    id: "duplex",
    name: "DUPLEX HOUSES",
    image: "/image8.jpeg",
    description: "Two modern duplex houses offering comfortable accommodations with all amenities",
    count: "2 Houses",
  },
  {
    id: "cabins",
    name: "CABINS",
    image: "/image7.jpeg",
    description: "10 individual cabins providing flexible accommodation options for various guest configurations",
    count: "10 Cabins",
  },
  {
    id: "largehouse",
    name: "LARGE HOUSE",
    image: "/image5.jpeg",
    description: "Spacious two-story house with 3 bedrooms, perfect for families or premium rental units",
    count: "3 Bedrooms",
  },
  {
    id: "cabin",
    name: "SPECIAL CABIN",
    image: "/image2.jpeg",
    description: "Unique cabin with 2 bedrooms: 1 large bedroom with 4 beds and 1 small bedroom, ideal for groups",
    count: "2 Bedrooms",
  },
]

export function RoomsShowcase() {
  const t = useTranslations('rooms')
  const [activeRoom, setActiveRoom] = useState("duplex")

  const currentRoom = rooms.find((room) => room.id === activeRoom) || rooms[0]

  return (
    <section className="relative min-h-screen bg-[#0a1628] py-20 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-light tracking-[0.15em] text-white md:text-5xl lg:text-6xl text-balance">
            {t('title')}
          </h2>
          <p className="mx-auto max-w-3xl text-sm font-light leading-relaxed text-white/80 md:text-base text-pretty mb-4">
            {t('description')}
          </p>
          <p className="text-2xl font-light text-cyan-400 tracking-wide">
            {t('totalBedrooms')}
          </p>
        </div>

        {/* Room Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-6 py-3 text-xs font-light tracking-[0.15em] transition-all duration-300 md:text-sm ${
                activeRoom === room.id
                  ? "border border-white bg-transparent text-white"
                  : "border border-white/30 bg-transparent text-white/60 hover:border-white/60 hover:text-white/90"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Image with Diagonal Split Effect */}
        <div className="relative mx-auto max-w-6xl overflow-hidden">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {/* Main Image Container with Diagonal Clip */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            >
              <img
                src={currentRoom.image || "/placeholder.svg"}
                alt={currentRoom.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Secondary Image (Right Side) */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                clipPath: "polygon(85% 0, 100% 0, 100% 100%, 70% 100%)",
              }}
            >
              <img
                src={currentRoom.image || "/placeholder.svg"}
                alt={`${currentRoom.name} detail`}
                className="h-full w-full object-cover object-right transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent pointer-events-none" />

            {/* Room Description Overlay */}
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="mb-2">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">{currentRoom.count}</span>
              </div>
              <p className="text-lg font-light text-white/90 md:text-xl text-balance">{currentRoom.description}</p>
            </div>
          </div>

          {/* Decorative Plant Element (Bottom Right) */}
          <div className="absolute -bottom-4 -right-4 h-32 w-32 opacity-30 md:h-40 md:w-40">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-green-500/20 to-transparent blur-2xl" />
          </div>
        </div>

        {/* Property Highlights */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-light tracking-wider text-white">MULTIPLE STRUCTURES</h3>
            <p className="text-sm font-light text-white/70">2 Duplex Houses + 10 Cabins</p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-light tracking-wider text-white">OCEAN ACCESS</h3>
            <p className="text-sm font-light text-white/70">Direct access to the ocean</p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-light tracking-wider text-white">FACILITIES</h3>
            <p className="text-sm font-light text-white/70">Pool, Bar, Restaurant, Volleyball</p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <svg
                  className="h-8 w-8 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-light tracking-wider text-white">INVESTMENT</h3>
            <p className="text-sm font-light text-white/70">Guaranteed ROI Potential</p>
          </div>
        </div>
      </div>
    </section>
  )
}
