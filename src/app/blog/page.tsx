"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Hardcoded blog posts - easy to maintain for a developer
const blogPosts = [
  {
    slug: "ofta-case-study",
    title: "OFTA - Jak jsem vytvořil moderní web pro oční kliniku",
    description:
      "Case study o vývoji webu pro OFTA - od návrhu až po nasazení.",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Case Study",
    image: "/projects/ofta/ofta_mockup-bg.png",
    href: "/case-studies/ofta",
  },
  {
    slug: "nextjs-14-server-actions",
    title: "Server Actions v Next.js 14",
    description:
      "Kompletní průvodce Server Actions - od základů až po pokročilé použití v produkčních aplikacích.",
    date: "2024-01-10",
    readTime: "12 min",
    category: "Development",
    image: "/blog/server-actions.png",
    href: "/blog/nextjs-14-server-actions",
  },
  {
    slug: "react-performance",
    title: "Optimalizace výkonu React aplikací",
    description:
      "Praktické techniky pro zrychlení React aplikací - memo, useMemo, useCallback a další optimalizace.",
    date: "2024-01-05",
    readTime: "15 min",
    category: "Performance",
    image: "/blog/react.svg",
    href: "/blog/react-performance",
  },
  {
    slug: "tailwind-best-practices",
    title: "Tailwind CSS - Best Practices a Architektura",
    description:
      "Jak efektivně organizovat Tailwind CSS kód ve větších projektech a vyhnout se běžným chybám.",
    date: "2023-12-20",
    readTime: "10 min",
    category: "CSS",
    image: "/blog/tailwind.svg",
    href: "/blog/tailwind-best-practices",
  },
  {
    slug: "typescript-advanced",
    title: "Pokročilé TypeScript patterns",
    description:
      "Utility types, generics, conditional types a další pokročilé koncepty v TypeScriptu.",
    date: "2023-12-15",
    readTime: "18 min",
    category: "TypeScript",
    image: "/blog/ts.svg",
    href: "/blog/typescript-advanced",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen py-32 bg-[#fafafa] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="BLOG"
          title="Články a návody"
          description="Sdílím své znalosti a zkušenosti z oblasti vývoje webových aplikací"
        />

        <div className="relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <Link href={post.href} className="h-full">
                  <div
                    className="flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 
                      hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                      bg-white dark:bg-[#161616] cursor-pointer"
                  >
                    <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Post Info - Flex grow to fill space */}
                    <div className="flex flex-col flex-grow p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 flex-col md:flex-row">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString("cs-CZ")}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h2 className="font-monument text-2xl text-text-light dark:text-text-dark">
                          {post.title}
                        </h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark">
                          {post.description}
                        </p>
                      </div>

                      {/* Push Read More link to bottom */}
                      <div className="mt-auto">
                        <div
                          className="flex items-center gap-2 text-blue-500 dark:text-blue-400 
                            group-hover:gap-4 transition-all duration-300"
                        >
                          Číst více
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
