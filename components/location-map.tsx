"use client"

import Image from "next/image"

export function LocationMap() {
  return (
    <section className="relative min-h-screen bg-gray-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl lg:text-7xl font-light tracking-wide text-[#0a1628]">PRIME BEACHFRONT LOCATION</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in Isla Grande, Colon sector - just 1.5 hours from Panama City. This exceptional 6,000 m² beachfront property offers direct ocean access and unparalleled investment potential.
          </p>
          <button className="px-8 py-3 border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-colors duration-300 tracking-wider">
            INQUIRE NOW
          </button>
        </div>

        {/* Map */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
            <Image src="/695535934.jpg" alt="Isla Grande, Colon Map" fill className="object-contain" />

            {/* Map markers - positioned absolutely */}
            <div className="absolute inset-0">
              {/* Mea Suna Madeira - Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-[#0a1628] border-4 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-sm font-semibold text-[#0a1628]">Isla Grande Property</p>
                    <p className="text-xs text-gray-600">Colon Sector</p>
                  </div>
                </div>
              </div>

              {/* Panama City - Left */}
              <div className="absolute left-[15%] top-[35%] group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0a1628] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="19" r="2" />
                      <path d="M12 2L12 17" strokeWidth={2} stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-[#0a1628]">Panama City</p>
                    <p className="text-xs text-gray-600">1.5 Hours Drive</p>
                  </div>
                </div>
              </div>

              {/* Colon City - Right */}
              <div className="absolute right-[20%] top-[40%] group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0a1628] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="19" r="2" />
                      <path d="M12 2L12 17" strokeWidth={2} stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-[#0a1628]">Colon</p>
                    <p className="text-xs text-gray-600">Nearby City</p>
                  </div>
                </div>
              </div>

              {/* Ocean Access - Bottom Right */}
              <div className="absolute right-[25%] bottom-[25%] group">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0a1628] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#0a1628]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-[#0a1628]">Ocean Access</p>
                    <p className="text-xs text-gray-600">Direct Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
