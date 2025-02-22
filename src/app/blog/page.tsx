"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    image: "/projects/ofta/ofta_mockup.png",
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
    image: "/blog/server-actions.jpg",
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
    image: "/blog/react-performance.jpg",
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
    image: "/blog/tailwind.jpg",
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
    image: "/blog/typescript.jpg",
    href: "/blog/typescript-advanced",
  }
];

export default function BlogPage() {
  return (
    <section className="py-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span
                className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
                border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]"
              >
                BLOG
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-monument text-4xl lg:text-5xl text-text-light dark:text-text-dark"
            >
              Články a case studies
            </motion.h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <Link href={post.href} className="h-full">
                  <div
                    className="flex flex-col h-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 
                      hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                      bg-white dark:bg-[#161616] cursor-pointer"
                  >
                    {/* Post Image - Fixed height */}
                    <div className="h-[240px] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Post Info - Flex grow to fill space */}
                    <div className="flex flex-col flex-grow p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("cs-CZ")}
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
