import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://harmony-haven.gcrozariol.me'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
