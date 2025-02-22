"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    slug: "e-commerce-platform",
    description: "Moderní e-shop postavený na Next.js s pokročilými funkcemi",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    link: "https://example-shop.com",
    github: "https://github.com/username/project",
    category: "E-commerce",
    metrics: [
      { label: "Konverzní poměr", value: "4.8%" },
      { label: "Rychlost načítání", value: "<1s" },
    ],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytický dashboard pro správu firemních procesů",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    link: "https://dashboard-example.com",
    category: "Web Application",
    metrics: [
      { label: "Aktivní uživatelé", value: "5k+" },
      { label: "Retence", value: "92%" },
    ],
  },
  // Add more projects...
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center bg-[#fafafa] dark:bg-[#121212] transition-colors duration-300">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.02),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          <div className="max-w-3xl space-y-8">
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
                PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-monument text-4xl lg:text-5xl text-text-light dark:text-text-dark"
            >
              Projekty, které mění hru
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-muted-light dark:text-text-muted-dark text-lg"
            >
              Podívejte se na výběr mých nejlepších projektů. Každý z nich je
              jedinečný a přináší skutečnou hodnotu klientům.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-light dark:bg-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/case-studies/${project.slug}`}>
                  <div
                    className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 
                      hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                      bg-white dark:bg-[#161616] cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-4">
                        <span className="text-sm text-blue-500 dark:text-blue-400 font-medium">
                          {project.category}
                        </span>
                        <h3 className="font-monument text-2xl text-text-light dark:text-text-dark">
                          {project.title}
                        </h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/5 dark:bg-blue-400/5 
                              text-blue-500 dark:text-blue-400 border border-blue-500/10 dark:border-blue-400/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="flex gap-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                          {project.metrics.map((metric, i) => (
                            <div key={i}>
                              <div className="font-monument text-xl text-text-light dark:text-text-dark">
                                {metric.value}
                              </div>
                              <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex gap-4 pt-6">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-light dark:text-text-dark 
                              hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                            Live Preview
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-light dark:text-text-dark 
                              hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
