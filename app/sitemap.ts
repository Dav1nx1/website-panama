import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://measunamadeira.com'
  const locales = ['en', 'es', 'pt', 'fr']
  
  const routes = [
    '',
    '/investment',
    '/rooms'
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate sitemap for each locale
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${route}`,
            'es': `${baseUrl}/es${route}`,
            'pt': `${baseUrl}/pt${route}`,
            'fr': `${baseUrl}/fr${route}`,
          }
        }
      })
    })
  })

  // Add root redirects
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })

  return sitemap
}
