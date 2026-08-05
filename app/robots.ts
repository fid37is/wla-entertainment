import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Investor portal is authenticated/private — no reason for it to be crawled or indexed.
      disallow: ['/portal', '/portal/'],
    },
    sitemap: 'https://warriorsleague.africa/sitemap.xml',
  }
}
