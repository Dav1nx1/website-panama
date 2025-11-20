"use client"

import { TrendingUp, DollarSign, Calendar, PieChart } from "lucide-react"

export function FinancialProjections() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-[#0a1628] mb-6">FINANCIAL PROJECTIONS</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Based on current market data and comparable properties in the Isla Grande, Colon area, with conservative estimates for
            occupancy and rates.
          </p>
          <div className="inline-block bg-green-100 border-2 border-green-500 text-green-800 px-6 py-3 rounded-lg">
            <p className="font-semibold text-lg">✓ GUARANTEED RETURN ON INVESTMENT</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <DollarSign className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-sm font-semibold text-gray-500 mb-2">ASKING PRICE</h3>
            <p className="text-3xl font-light text-[#0a1628]">$2.85M</p>
            <p className="text-sm text-gray-500 mt-2">USD</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <TrendingUp className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-sm font-semibold text-gray-500 mb-2">ANNUAL INCOME</h3>
            <p className="text-3xl font-light text-[#0a1628]">$180K-$240K</p>
            <p className="text-sm text-gray-500 mt-2">Gross rental revenue</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <PieChart className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-sm font-semibold text-gray-500 mb-2">NET ROI</h3>
            <p className="text-3xl font-light text-[#0a1628]">5-7%</p>
            <p className="text-sm text-gray-500 mt-2">Annual return</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Calendar className="w-12 h-12 text-cyan-500 mb-4" />
            <h3 className="text-sm font-semibold text-gray-500 mb-2">OCCUPANCY</h3>
            <p className="text-3xl font-light text-[#0a1628]">60-70%</p>
            <p className="text-sm text-gray-500 mt-2">Projected rate</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-light mb-8 text-[#0a1628]">Revenue Breakdown</h3>

          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Nightly Rate (High Season)</span>
                <span className="font-semibold text-[#0a1628]">$1,200</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Nightly Rate (Low Season)</span>
                <span className="font-semibold text-[#0a1628]">$800</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Average Nightly Rate</span>
                <span className="font-semibold text-[#0a1628]">$950</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="text-xl font-light mb-4 text-[#0a1628]">Annual Projections (65% Occupancy)</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Gross Rental Income</span>
                  <span className="font-semibold text-[#0a1628]">$225,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Operating Expenses (30%)</span>
                  <span className="font-semibold text-red-600">-$67,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Property Management (10%)</span>
                  <span className="font-semibold text-red-600">-$22,500</span>
                </div>
                <div className="flex justify-between text-lg pt-3 border-t">
                  <span className="font-semibold text-gray-900">Net Annual Income</span>
                  <span className="font-semibold text-green-600">$135,000</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-gray-900">Cash-on-Cash Return</span>
                  <span className="font-semibold text-cyan-600">4.7%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-[#0a1628]">Additional Value Drivers</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Property appreciation: 4-6% annually in Panama coastal markets</li>
              <li>• Tax advantages: No capital gains tax for first 3 years</li>
              <li>• Currency stability: USD is official currency</li>
              <li>• Growing tourism: 15% annual increase in luxury travel to Panama</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
