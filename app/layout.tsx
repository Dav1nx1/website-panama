import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Mea Suna Madeira - Hidden Paradise | Luxury Villa Madeira",
    template: "%s | Mea Suna Madeira"
  },
  description: "Immerse yourself in the serene oasis of Mea Suna Madeira, where comfort and style coexist in perfect harmony. Luxury private villa with panoramic ocean views, world-class amenities, and unparalleled privacy.",
  keywords: [
    "luxury villa madeira",
    "private villa madeira",
    "luxury accommodation madeira",
    "ocean view villa madeira",
    "luxury rental madeira",
    "private retreat madeira",
    "luxury vacation madeira",
    "madeira luxury villa",
    "exclusive villa madeira",
    "premium accommodation madeira"
  ],
  authors: [{ name: "Mea Suna Madeira" }],
  creator: "Mea Suna Madeira",
  publisher: "Mea Suna Madeira",
  generator: "Next.js",
  applicationName: "Mea Suna Madeira",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://measunamadeira.com",
    siteName: "Mea Suna Madeira",
    title: "Mea Suna Madeira - Hidden Paradise | Luxury Villa Madeira",
    description: "Immerse yourself in the serene oasis of Mea Suna Madeira, where comfort and style coexist in perfect harmony. Luxury private villa with panoramic ocean views.",
    images: [
      {
        url: "/601828177.jpg",
        width: 1200,
        height: 630,
        alt: "Mea Suna Madeira - Luxury Villa with Ocean View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mea Suna Madeira - Hidden Paradise | Luxury Villa Madeira",
    description: "Immerse yourself in the serene oasis of Mea Suna Madeira, where comfort and style coexist in perfect harmony.",
    images: ["/601828177.jpg"],
    creator: "@measunamadeira",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://measunamadeira.com",
    languages: {
      "en-US": "https://measunamadeira.com/en",
      "es-ES": "https://measunamadeira.com/es",
      "pt-PT": "https://measunamadeira.com/pt",
      "fr-FR": "https://measunamadeira.com/fr",
    },
  },
  category: "Luxury Hospitality",
}

const locales = ['en', 'es', 'pt', 'fr']

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{}>
}>) {
  // Root layout uses default locale 'en' for HTML lang attribute
  // Actual locale is handled by components inside [locale] routes
  const validLocale = 'en'
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Mea Suna Madeira",
    "description": "Luxury private villa in Madeira with panoramic ocean views, world-class amenities, and unparalleled privacy.",
    "url": "https://measunamadeira.com",
    "logo": "https://measunamadeira.com/logo.png",
    "image": [
      "https://measunamadeira.com/601828177.jpg",
      "https://measunamadeira.com/601828180.jpg",
      "https://measunamadeira.com/671353553.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PT",
      "addressRegion": "Madeira",
      "addressLocality": "Madeira Island"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7607",
      "longitude": "-16.9595"
    },
    "telephone": "+351-XXX-XXX-XXX",
    "email": "info@measunamadeira.com",
    "priceRange": "$$$$",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Infinity Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Fitness Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Home Cinema",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Golf Simulator",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sauna",
        "value": true
      }
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.instagram.com/measunamadeira",
      "https://www.airbnb.com/rooms/measunamadeira",
      "https://www.booking.com/measunamadeira"
    ]
  }

  return (
    <html lang={validLocale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
