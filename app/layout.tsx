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
    default: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
    template: "%s | Oportunidad en Isla Grande"
  },
  description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with pool, bar, restaurant, volleyball court, and direct ocean access. Guaranteed ROI. Just 1.5 hours from Panama City.",
  keywords: [
    "beachfront property panama",
    "investment property isla grande",
    "panama real estate investment",
    "beachfront resort panama",
    "colon panama property",
    "panama vacation rental investment",
    "boutique hotel panama",
    "panama property for sale",
    "isla grande panama",
    "panama beachfront investment",
    "guaranteed roi panama",
    "panama rental property"
  ],
  authors: [{ name: "Oportunidad en Isla Grande" }],
  creator: "Oportunidad en Isla Grande",
  publisher: "Oportunidad en Isla Grande",
  generator: "Next.js",
  applicationName: "Oportunidad en Isla Grande",
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
    url: "https://oportunidadenislagrande.com",
    siteName: "Oportunidad en Isla Grande",
    title: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
    description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with pool, bar, restaurant, and direct ocean access. Guaranteed ROI.",
    images: [
      {
        url: "/image4.jpeg",
        width: 1200,
        height: 630,
        alt: "Beachfront Property Isla Grande, Colon - Investment Opportunity Panama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beachfront Investment Property Isla Grande | 9 Bedrooms, Direct Ocean Access | Panama",
    description: "Exclusive beachfront investment opportunity in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with guaranteed ROI.",
    images: ["/image4.jpeg"],
    creator: "@oportunidadenislagrande",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://oportunidadenislagrande.com",
    languages: {
      "en-US": "https://oportunidadenislagrande.com/en",
      "es-ES": "https://oportunidadenislagrande.com/es",
      "pt-PT": "https://oportunidadenislagrande.com/pt",
      "fr-FR": "https://oportunidadenislagrande.com/fr",
    },
  },
  category: "Real Estate Investment",
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
    "@type": "RealEstateAgent",
    "name": "Oportunidad en Isla Grande",
    "description": "Exclusive beachfront investment property in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with pool, bar, restaurant, volleyball court, and direct ocean access. Guaranteed return on investment.",
    "url": "https://oportunidadenislagrande.com",
    "image": [
      "https://oportunidadenislagrande.com/image4.jpeg",
      "https://oportunidadenislagrande.com/image1.jpeg",
      "https://oportunidadenislagrande.com/image5.jpeg"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PA",
      "addressRegion": "Colon",
      "addressLocality": "Isla Grande"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.6333",
      "longitude": "-79.0333"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beachfront Investment Property",
      "itemListElement": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Beachfront Resort Complex Isla Grande",
          "description": "9 bedrooms, 2 duplex houses, 10 cabins, 6,000 m² property with pool, bar, restaurant, volleyball court, and direct ocean access",
          "numberOfRooms": "9",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": "6000",
            "unitCode": "MTK"
          }
        }
      }
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Restaurant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Bar",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Volleyball Court",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Direct Ocean Access",
        "value": true
      }
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
