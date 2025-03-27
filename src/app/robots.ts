import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/project-quote'],
    },
    sitemap: 'https://bardzak.online/sitemap.xml',
  };
} 