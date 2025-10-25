"use client"

import { Shield, TrendingUp, Globe, Plane, Heart, Building } from "lucide-react"

export function PanamaAdvantages() {
  const advantages = [
    {
      icon: Shield,
      title: "Tax Benefits",
      description:
        "No capital gains tax for first 3 years, property tax exemptions for new construction, and favorable income tax rates for foreign investors.",
    },
    {
      icon: TrendingUp,
      title: "Growing Market",
      description:
        "Panama's tourism sector grows 15% annually. Luxury vacation rentals see consistent demand from North American and European travelers.",
    },
    {
      icon: Globe,
      title: "Strategic Location",
      description:
        "Hub of the Americas with direct flights to major US and European cities. Easy access for international guests and property visits.",
    },
    {
      icon: Plane,
      title: "Residency Programs",
      description:
        "Friendly Nations Visa offers fast-track residency. Property ownership can support various visa applications for investors and families.",
    },
    {
      icon: Heart,
      title: "Quality of Life",
      description:
        "Year-round tropical climate, world-class healthcare, low cost of living, and vibrant expat community make Panama ideal for lifestyle investment.",
    },
    {
      icon: Building,
      title: "Stable Economy",
      description:
        "USD official currency eliminates exchange risk. Strong banking sector, political stability, and pro-business environment protect your investment.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0a1628] text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide mb-6">WHY INVEST IN PANAMA?</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Panama offers unique advantages for international real estate investors, combining financial benefits with
            exceptional quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <advantage.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-light mb-3">{advantage.title}</h3>
              <p className="text-white/70 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-cyan-500/10 border border-cyan-500/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-light mb-4">Market Snapshot</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-light text-cyan-400 mb-2">$438B</p>
              <p className="text-sm text-white/70">Panama GDP (2024)</p>
            </div>
            <div>
              <p className="text-3xl font-light text-cyan-400 mb-2">2.5M+</p>
              <p className="text-sm text-white/70">Annual tourists</p>
            </div>
            <div>
              <p className="text-3xl font-light text-cyan-400 mb-2">85%</p>
              <p className="text-sm text-white/70">Luxury rental occupancy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
