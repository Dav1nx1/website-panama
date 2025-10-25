"use client"

import { Home, Bed, Bath, Maximize, MapPin } from "lucide-react"

export function PropertySpecs() {
  const specs = [
    { icon: Home, label: "Property Type", value: "Luxury Beachfront Villa" },
    { icon: Bed, label: "Bedrooms", value: "5 Suites" },
    { icon: Bath, label: "Bathrooms", value: "6 Full Baths" },
    { icon: Maximize, label: "Interior Space", value: "6,500 sq ft" },
    { icon: MapPin, label: "Location", value: "Coronado, Panama" },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-[#0a1628] mb-6">PROPERTY SPECIFICATIONS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A meticulously designed beachfront estate offering 6,500 square feet of luxury living space with direct
            ocean access and world-class amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <spec.icon className="w-8 h-8 text-cyan-500 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">{spec.label}</h3>
                <p className="text-xl font-light text-[#0a1628]">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1628] text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-light mb-6">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Direct beachfront access with private beach area</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Infinity pool with ocean views</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>State-of-the-art fitness center and spa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Home cinema and entertainment room</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Gourmet kitchen with premium appliances</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Multiple outdoor terraces and balconies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Smart home automation system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>Backup generator and water systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
