import Image from "next/image"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M20 50 Q 35 30, 50 50 T 80 50" stroke="currentColor" strokeWidth="3" fill="none" />
                <path d="M20 60 Q 35 40, 50 60 T 80 60" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <div className="text-sm">
              <div className="font-light tracking-wider">CASA PACÍFICO</div>
              <div className="font-light tracking-wider">PANAMA</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24">
              <Image
                src="/luxury-award-badge-gold-2025.jpg"
                alt="Best Luxury Beachfront Property Panama 2025"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-xs">
              <div className="font-semibold">BEST LUXURY BEACHFRONT</div>
              <div className="text-gray-400">PANAMA 2025</div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300" aria-label="TikTok">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300" aria-label="Airbnb">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors duration-300 text-xs font-semibold border border-white px-2 py-1 rounded"
              aria-label="Booking.com"
            >
              B.
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">© 2025 Casa Pacífico Panama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
