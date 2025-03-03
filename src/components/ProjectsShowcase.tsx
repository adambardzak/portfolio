"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./ui/SectionHeader";
import clsx from "clsx";

const projects = [
  {
    id: 1,
    title: "OFTA - Centrum mikrochirurgie oka",
    description: "Moderní webová prezentace pro oční kliniku",
    image: "/projects/ofta/ofta_mockup-bg.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Strapi CMS"],
    gradient: "from-blue-500/80 via-blue-400/70 to-blue-300/80",
    href: "/case-studies/ofta",
  },
  {
    id: 2,
    title: "Marek Pišl Portfolio",
    description: "Portfolio web pro grafického designéra s galerií jeho prací",
    image: "/projects/marekpisl/marekpisl_hero_mockup-large.png",
    tags: ["Next.js 14", "React", "Image Gallery", "Responsive Design"],
    gradient: "from-blue-500/70 via-blue-400/60 to-blue-300/70",
    href: "case-studies/marekpisl",
  },
  {
    id: 3,
    title: "Odpady Machovič",
    description:
      "Webová prezentace pro firmu zajišťující odvoz a likvidaci odpadu",
    image: "/projects/machovic/machovic_hero_mockup-large.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500/60 via-blue-400/50 to-blue-300/60",
    href: "case-studies/odpadymachovic",
  },
];

export default function ProjectsShowcase() {
  return (
    <section
      className={clsx(
        "relative py-32",
        // "bg-light dark:bg-dark",
        "transition-colors duration-300"
      )}
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="absolute inset-0 bg-radial" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="PORTFOLIO"
          title="Vybrané projekty"
          description="Ukázky mé práce a projektů, na kterých jsem měl možnost se podílet"
        />
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.href} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="space-y-8">
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90 mix-blend-multiply 
                      group-hover:opacity-75 transition-opacity duration-500`}
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="font-monument text-2xl text-text-light dark:text-text-dark">
                      {project.title}
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-hover-light dark:bg-hover-dark
                            text-text-muted-light dark:text-text-muted-dark
                            group-hover:text-blue-500 dark:group-hover:text-blue-400
                            transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium 
                      group-hover:gap-4 transition-all duration-300"
                    >
                      <span>Zobrazit detail</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
