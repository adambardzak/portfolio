import { Metadata } from "next";
import {
  OpenGraph,
  OpenGraphType,
} from "next/dist/lib/metadata/types/opengraph-types";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noIndex?: boolean;
};

export const generateMetadata = ({
  title = "Webové aplikace a weby na míru | Adam Bardzák",
  description = "Vývoj moderních webových aplikací a webů na míru s důrazem na výkon, design a uživatelskou přívětivost. Specializace na Next.js, React a TypeScript.",
  keywords = [
    "webové aplikace",
    "vývoj webu",
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "webdesign",
    "responzivní design",
    "SEO optimalizace",
    "Adam Bardzák",
  ],
  ogImage = "",
  ogType = "website",
  canonical,
  noIndex = false,
}: SEOProps): Metadata => {
  const metaTitle = title.includes("Adam Bardzák")
    ? title
    : `${title} | Adam Bardzák`;
  
  // Use provided image, dynamic OG image, or fallback to static image
  const ogImageUrl = ogImage || 
    (process.env.NODE_ENV === 'production' 
      ? `https://bardzak.online/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&type=${encodeURIComponent(ogType)}`
      : 'https://bardzak.online/og-image.png');

  const openGraph: OpenGraph = {
    title: metaTitle,
    description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: metaTitle,
      },
    ],
    type: (ogType || "website") as OpenGraphType,
    locale: "cs_CZ",
    siteName: "Adam Bardzák",
  };

  return {
    title: metaTitle,
    description,
    keywords,
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: canonical || "https://bardzak.online",
    },
  };
};
