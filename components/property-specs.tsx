"use client"

import { Home, Bed, Bath, Maximize, MapPin, Clock, Building2, Waves } from "lucide-react"
import { useTranslations } from 'next-intl'

export function PropertySpecs() {
  const t = useTranslations('propertySpecs')
  
  const specs = [
    { icon: Home, label: t('propertyType'), value: t('propertyTypeValue') },
    { icon: Bed, label: t('bedrooms'), value: t('bedroomsValue') },
    { icon: Building2, label: t('structures'), value: t('structuresValue') },
    { icon: Maximize, label: t('landSize'), value: t('landSizeValue') },
    { icon: MapPin, label: t('location'), value: t('locationValue') },
    { icon: Clock, label: t('distance'), value: t('distanceValue') },
    { icon: Waves, label: t('oceanAccess'), value: t('oceanAccessValue') },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-wide text-[#0a1628] mb-6">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <spec.icon className="w-8 h-8 text-cyan-500 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">{spec.label}</h3>
                <p className="text-xl font-light text-[#0a1628]">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1628] text-white p-12 rounded-2xl mb-12">
          <h3 className="text-3xl font-light mb-6">{t('keyFeaturesTitle')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature3')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature4')}</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature5')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature6')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature7')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">✓</span>
                <span>{t('feature8')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-12 rounded-2xl text-center">
          <h3 className="text-4xl font-light mb-4">{t('guaranteedROI')}</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('guaranteedROIDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}
