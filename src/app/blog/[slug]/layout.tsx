import { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/components/SEO";

type Props = {
  params: { slug: string }
};

// This function generates metadata for each blog post based on its slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  
  // Map of blog post slugs to their metadata
  const blogMetadata: Record<string, {
    title: string;
    description: string;
    keywords: string[];
    image: string;
    publishedTime?: string;
    author?: string;
  }> = {
    "nextjs-14-server-actions": {
      title: "Server Actions v Next.js 14",
      description: "Kompletní průvodce Server Actions - od základů až po pokročilé použití v produkčních aplikacích.",
      keywords: ["Next.js 14", "Server Actions", "React", "Web Development", "JavaScript", "TypeScript"],
      image: "/blog/server-actions.png",
      publishedTime: "2024-01-10",
      author: "Adam Bardzák",
    },
    "react-performance": {
      title: "Optimalizace výkonu React aplikací",
      description: "Praktické techniky pro zrychlení React aplikací - memo, useMemo, useCallback a další optimalizace.",
      keywords: ["React", "Performance", "Optimization", "useMemo", "useCallback", "memo", "Web Development"],
      image: "/blog/react.svg",
      publishedTime: "2024-01-05",
      author: "Adam Bardzák",
    },
    "tailwind-best-practices": {
      title: "Tailwind CSS - Best Practices a Architektura",
      description: "Jak efektivně organizovat Tailwind CSS kód ve větších projektech a vyhnout se běžným chybám.",
      keywords: ["Tailwind CSS", "CSS", "Web Development", "Frontend", "Best Practices", "Architecture"],
      image: "/blog/tailwind.svg",
      publishedTime: "2023-12-20",
      author: "Adam Bardzák",
    },
    "typescript-advanced": {
      title: "Pokročilé TypeScript patterns",
      description: "Utility types, generics, conditional types a další pokročilé koncepty v TypeScriptu.",
      keywords: ["TypeScript", "Generics", "Utility Types", "Advanced TypeScript", "Type Safety", "Web Development"],
      image: "/blog/ts.svg",
      publishedTime: "2023-12-15",
      author: "Adam Bardzák",
    },
    // Add more blog posts as needed
  };
  
  // Get metadata for the current blog post or use defaults
  const postMeta = blogMetadata[slug] || {
    title: "Blog Post",
    description: "Článek o webovém vývoji a moderních technologiích",
    keywords: ["web development", "blog", "článek"],
    image: "/og-image.png",
    author: "Adam Bardzák",
  };
  
  // Create dynamic OG image URL for production or use static image
  const ogImageUrl = process.env.NODE_ENV === 'production'
    ? `https://bardzak.online/api/og?title=${encodeURIComponent(postMeta.title)}&description=${encodeURIComponent(postMeta.description)}&type=article`
    : `https://bardzak.online${postMeta.image}`;
  
  return createMetadata({
    title: postMeta.title,
    description: postMeta.description,
    keywords: postMeta.keywords,
    ogImage: ogImageUrl,
    ogType: "article",
    canonical: `https://bardzak.online/blog/${slug}`,
  });
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 