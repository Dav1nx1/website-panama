"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/modern-luxury-kitchen-with-dining-area-and-large-w.jpg"
          alt="Madeira luxury interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-6 md:px-8 lg:px-12">
        {/* Hamburger Menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
          <div className="mb-1">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M8 20C8 20 12 12 20 12C28 12 32 20 32 20C32 20 28 28 20 28C12 28 8 20 8 20Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path d="M10 22C10 22 13 16 20 16C27 16 30 22 30 22" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <span className="text-white text-xs tracking-[0.2em] font-light">CASA PACÍFICO PANAMA</span>
        </Link>

        {/* Inquire Now Button */}
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 tracking-[0.15em] text-xs font-light px-6 py-2 h-auto"
        >
          SCHEDULE VIEWING
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-balance">
          <span className="block text-4xl font-light tracking-[0.2em] text-white md:text-5xl lg:text-6xl xl:text-7xl">
            YOUR PANAMA
          </span>
          <span className="block text-4xl font-light tracking-[0.15em] text-cyan-400 md:text-5xl lg:text-6xl xl:text-7xl">
            PARADISE INVESTMENT
          </span>
        </h1>
        <p className="max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/90 md:text-base lg:text-lg">
          Discover an exclusive beachfront property opportunity on Panama's Pacific coast. Luxury living meets
          exceptional rental income potential.
        </p>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/50 p-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
          </div>
          <span className="text-xs tracking-[0.2em] text-white/80">SCROLL DOWN</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute inset-0 z-20 bg-black/95 backdrop-blur-sm">
          <div className="flex h-full flex-col items-center justify-center gap-8 text-white">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute right-4 top-6 text-white hover:text-white/80"
            >
              <X className="h-8 w-8" />
            </button>
            <Link
              href="/"
              className="text-2xl font-light tracking-wider hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/rooms"
              className="text-2xl font-light tracking-wider hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ACCOMMODATIONS
            </Link>
            <Link
              href="/investment"
              className="text-2xl font-light tracking-wider hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              INVESTMENT DETAILS
            </Link>
            <a href="#contact" className="text-2xl font-light tracking-wider hover:text-cyan-400 transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
