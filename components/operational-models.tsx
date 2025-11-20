"use client"

import { Hotel, Home, Repeat } from "lucide-react"

export function OperationalModels() {
  const models = [
    {
      icon: Hotel,
      title: "Boutique Hotel Operation",
      description:
        "Operate as a luxury boutique hotel with professional management. Highest revenue potential with year-round operations.",
      pros: [
        "Maximum revenue potential",
        "Professional management available",
        "Established booking channels",
        "Year-round income",
      ],
      income: "$240,000 - $280,000/year",
    },
    {
      icon: Repeat,
      title: "Vacation Rental (Airbnb/VRBO)",
      description:
        "List on major vacation rental platforms. With 9 bedrooms across multiple structures, you can rent individual units or the entire property. Flexible operation with ability to block personal use dates.",
      pros: ["Flexible personal use", "Lower management costs", "Direct guest relationships", "Higher nightly rates", "Multiple unit flexibility"],
      income: "$180,000 - $220,000/year",
    },
    {
      icon: Home,
      title: "Hybrid Model",
      description:
        "Combine personal use with rental income. Use property 4-6 weeks per year while generating rental revenue. Perfect for investors who want a vacation home that pays for itself.",
      pros: ["Personal vacation home", "Offset ownership costs", "Tax advantages", "Flexible scheduling", "Guaranteed ROI"],
      income: "$120,000 - $160,000/year",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-[#0a1628] mb-6">OPERATIONAL MODELS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Choose the operation model that best fits your investment goals. Each approach offers unique benefits and
            income potential. With 9 bedrooms, 2 duplex houses, and 10 cabins, this property offers exceptional flexibility.
          </p>
          <div className="inline-block bg-cyan-100 border-2 border-cyan-500 text-cyan-800 px-6 py-3 rounded-lg">
            <p className="font-semibold">Multiple Revenue Streams | Guaranteed ROI</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <model.icon className="w-16 h-16 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-light mb-4 text-[#0a1628]">{model.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{model.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY BENEFITS</h4>
                <ul className="space-y-2">
                  {model.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-cyan-500 mt-0.5">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">PROJECTED ANNUAL INCOME</p>
                <p className="text-2xl font-light text-[#0a1628]">{model.income}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#0a1628] text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-light mb-6">Property Management Services Available</h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            We partner with established property management companies in Panama that specialize in luxury vacation
            rentals. Services include guest communication, cleaning, maintenance, marketing, and financial reporting.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-cyan-400 font-semibold mb-2">Full-Service Management</p>
              <p className="text-sm text-white/70">10-15% of gross revenue</p>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">Marketing & Booking</p>
              <p className="text-sm text-white/70">Listed on 20+ platforms</p>
            </div>
            <div>
              <p className="text-cyan-400 font-semibold mb-2">24/7 Guest Support</p>
              <p className="text-sm text-white/70">Concierge services included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
