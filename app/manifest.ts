import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oportunidad en Isla Grande - Beachfront Investment Property Panama',
    short_name: 'Isla Grande Property',
    description: 'Exclusive beachfront investment property in Isla Grande, Colon, Panama. 9 bedrooms, 2 duplex houses, 10 cabins on 6,000 m² with direct ocean access and guaranteed ROI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1628',
    theme_color: '#0a1628',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['real estate', 'investment', 'property'],
    lang: 'en',
    scope: '/',
    orientation: 'portrait-primary',
  }
}
