import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mea Suna Madeira - Hidden Paradise',
    short_name: 'Mea Suna Madeira',
    description: 'Luxury private villa in Madeira with panoramic ocean views and world-class amenities.',
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
    categories: ['travel', 'hospitality', 'luxury'],
    lang: 'en',
    scope: '/',
    orientation: 'portrait-primary',
  }
}
