import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bardzak.online';
  
  // Blog posts
  const blogPosts = [
    {
      slug: "nextjs-14-server-actions",
      lastModified: new Date("2024-01-10"),
    },
    {
      slug: "react-performance",
      lastModified: new Date("2024-01-05"),
    },
    {
      slug: "tailwind-best-practices",
      lastModified: new Date("2023-12-20"),
    },
  ];
  
  // Case studies
  const caseStudies = [
    {
      slug: "ofta",
      lastModified: new Date("2024-01-15"),
    },
    {
      slug: "marekpisl",
      lastModified: new Date("2023-12-10"),
    },
    {
      slug: "odpadymachovic",
      lastModified: new Date("2023-11-20"),
    },
  ];

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Generate blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Generate case study URLs
  const caseStudyUrls = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: study.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Combine all URLs
  return [...staticPages, ...blogUrls, ...caseStudyUrls];
} 