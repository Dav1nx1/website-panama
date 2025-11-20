"use client"

import { Building2, Home, Bed, Users, Waves, MapPin, Clock } from "lucide-react"
import { useTranslations } from 'next-intl'

export function PropertyBreakdown() {
  const t = useTranslations('propertyBreakdown')

  const structures = [
    {
      icon: Building2,
      title: t('duplexHouses.title'),
      description: t('duplexHouses.description'),
      details: t('duplexHouses.details'),
    },
    {
      icon: Home,
      title: t('largeHouse.title'),
      description: t('largeHouse.description'),
      details: t('largeHouse.details'),
    },
    {
      icon: Bed,
      title: t('cabin.title'),
      description: t('cabin.description'),
      details: t('cabin.details'),
    },
    {
      icon: Users,
      title: t('cabins.title'),
      description: t('cabins.description'),
      details: t('cabins.details'),
    },
  ]

  const locationInfo = [
    { icon: MapPin, label: t('location.label'), value: t('location.value') },
    { icon: Clock, label: t('distance.label'), value: t('distance.value') },
    { icon: Waves, label: t('oceanAccess.label'), value: t('oceanAccess.value') },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-[#0a1628] mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {structures.map((structure, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <structure.icon className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-2xl font-light mb-3 text-[#0a1628]">{structure.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{structure.description}</p>
              <p className="text-sm font-semibold text-cyan-600">{structure.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1628] text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-light mb-8">{t('locationTitle')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {locationInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <info.icon className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-1">{info.label}</h4>
                  <p className="text-xl font-light">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-light mb-4">{t('totalCapacity')}</h3>
          <p className="text-2xl font-light text-white/90">
            {t('totalCapacityDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}

