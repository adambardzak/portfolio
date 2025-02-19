"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platforma",
    description:
      "Moderní e-shop s pokročilými funkcemi a intuitivním rozhraním",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
  {
    id: 2,
    title: "Firemní Systém",
    description: "Komplexní systém pro správu firemních procesů a dokumentů",
    image: "/projects/project2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
  },
  {
    id: 3,
    title: "Mobilní Aplikace",
    description: "Cross-platformní aplikace pro správu osobních financí",
    image: "/projects/project3.jpg",
    tags: ["React Native", "Firebase", "Redux"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
];

export default function ProjectsShowcase() {
  return (
    <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300 py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        {/* Section Header */}
        <div className="space-y-4 mb-24">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark tracking-wide"
            >
              Portfolio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="font-monument text-4xl text-text-light dark:text-text-dark max-w-xl"
            >
              Vybrané projekty
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="aspect-video relative rounded-2xl overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 mix-blend-multiply`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                    {project.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-text-light dark:text-text-dark font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Zobrazit detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
