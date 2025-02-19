"use client";

import { motion } from "framer-motion";
import { GridPattern } from "@/components/DecorativeElements";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudy = {
  slug: "ofta",
  title: "OFTA - Centrum mikrochirurgie oka",
  subtitle: "Moderní webová prezentace pro oční kliniku",
  year: "2024",
  duration: "2 měsíce",
  role: "Full-stack Developer",

  // Visual content
  heroImage: "/projects/ofta/ofta_mockup-bg.png",

  mockups: [
    {
      image: "/projects/ofta/ofta_mockup-right.png",
      caption: "Responzivní design napříč zařízeními",
    },
    {
      image: "/projects/ofta/ofta_mockup.png",
      caption: "Přehledná navigace a struktura webu",
    },
  ],

  // Technical details
  stack: {
    frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    cms: ["Contentlayer", "MDX"],
    deployment: ["Vercel", "GitHub Actions"],
  },

  // Architecture & implementation details
  architecture: {
    diagram: "/projects/ofta/architecture.svg",
    description: `
      Web využívá moderní headless architekturu, kde Next.js frontend komunikuje se Strapi CMS přes REST API.
      Data jsou perzistentně uložena v MariaDB databázi. Toto řešení poskytuje:
      
      • Vysoký výkon díky statické generaci stránek
      • Flexibilní správu obsahu přes Strapi admin rozhraní
      • Spolehlivé uložení dat v MariaDB
      • Snadnou škálovatelnost jednotlivých komponent
    `
      .split("\n")
      .filter((line) => line.trim())
      .join("\n"),
    components: {
      frontend: {
        name: "Next.js Frontend",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS"],
        features: [
          "Server-side rendering",
          "Statická generace stránek",
          "Image optimization",
          "API routes",
        ],
        hosting: "Vercel",
      },
      cms: {
        name: "Strapi CMS",
        tech: ["Strapi v4", "Node.js"],
        features: [
          "REST API",
          "Admin dashboard",
          "Role-based access",
          "Media library",
        ],
        hosting: "VPS/Docker",
      },
      database: {
        name: "MariaDB",
        tech: ["MariaDB 10.6"],
        features: [
          "Relační databáze",
          "Automatické zálohy",
          "Data persistence",
        ],
        hosting: "Managed Database",
      },
    },
    dataFlow: [
      {
        step: 1,
        description: "Next.js posílá požadavek na Strapi API",
      },
      {
        step: 2,
        description: "Strapi získá data z MariaDB",
      },
      {
        step: 3,
        description: "Data jsou transformována a poslána zpět",
      },
      {
        step: 4,
        description: "Next.js generuje statické stránky",
      },
    ],
  },

  // Performance metrics
  performance: {
    lighthouse: 98,
    fcp: "0.8s",
    lcp: "1.2s",
    ttfb: "0.2s",
  },

  // Links
  links: {
    live: "https://ofta.cz",
    github: "https://github.com/example/ofta",
  },

  // Project goals
  goals: [
    "Vytvořit moderní a důvěryhodnou prezentaci oční kliniky",
    "Zlepšit UX pro pacienty hledající informace o očních vadách",
    "Optimalizovat web pro vyhledávače (SEO)",
    "Implementovat systém pro správu aktualit a článků",
  ],

  // Results
  results: [
    "Zvýšení konverzního poměru o 40%",
    "Zlepšení Core Web Vitals na 98/100",
    "První pozice ve vyhledávání pro klíčová slova",
    "Snížení bounce rate o 25%",
  ],

  designer: {
    name: "Marek Pišl",
    url: "https://marekpisl.cz",
  },
};

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-light dark:text-text-dark hover:text-ofta-blue-600 
              dark:hover:text-ofta-blue-600 transition-colors mb-24 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zpět na projekty
          </Link>

          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 text-text-muted-light dark:text-text-muted-dark"
                >
                  <span className="font-medium">{caseStudy.year}</span>
                  <span className="w-1 h-1 rounded-full bg-ofta-blue-600 dark:bg-ofta-blue-600" />
                  <span>{caseStudy.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-ofta-blue-600 dark:bg-ofta-blue-600" />
                  <span>{caseStudy.role}</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-monument text-4xl md:text-6xl text-text-light dark:text-text-dark"
                >
                  {caseStudy.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
                >
                  {caseStudy.subtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-text-muted-light dark:text-text-muted-dark mt-4"
              >
                Design by{" "}
                <a
                  href={caseStudy.designer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ofta-blue-600 dark:text-ofta-blue-600 hover:underline"
                >
                  {caseStudy.designer.name}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {Object.values(caseStudy.stack)
                  .flat()
                  .map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-hover-light dark:bg-hover-dark 
                        text-text-light dark:text-text-dark text-sm border border-border-light dark:border-border-dark"
                    >
                      {tech}
                    </span>
                  ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {caseStudy.links.live && (
                  <a
                    href={caseStudy.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-ofta-blue-600 hover:bg-ofta-blue-600 
                      dark:bg-ofta-blue-600 dark:hover:bg-ofta-blue-600 text-white rounded-xl transition-all duration-300"
                  >
                    Živá ukázka
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {caseStudy.links.github && (
                  <a
                    href={caseStudy.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-hover-light dark:bg-hover-dark 
                      text-text-light dark:text-text-dark rounded-xl border border-border-light dark:border-border-dark 
                      hover:border-text-light/20 dark:hover:border-text-dark/20 transition-all duration-300"
                  >
                    GitHub
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/3] relative rounded-2xl overflow-hidden"
            >
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-24">
              <div className="space-y-12">
                <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                  Technický přehled
                </h2>
                <div className="space-y-12">
                  {Object.entries(caseStudy.stack).map(
                    ([category, techs], i) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                      >
                        <h3 className="text-sm font-medium text-ofta-blue-600 dark:text-ofta-blue-600 uppercase tracking-wider">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {techs.map((tech, j) => (
                            <span
                              key={j}
                              className="px-4 py-2 rounded-xl bg-hover-light dark:bg-hover-dark 
                              text-text-light dark:text-text-dark text-sm border border-border-light dark:border-border-dark"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                  Klíčové funkce
                </h2>
                <ul className="space-y-6">
                  {caseStudy.architecture.components.frontend.features.map(
                    (feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-text-light dark:text-text-dark"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-ofta-blue-600 dark:bg-ofta-blue-600" />
                        {feature}
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Architektura
              </h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square relative rounded-2xl overflow-hidden bg-hover-light dark:bg-hover-dark p-8 
                  border border-border-light dark:border-border-dark"
              >
                <Image
                  src={caseStudy.architecture.diagram}
                  alt="Architecture diagram"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-text-muted-light dark:text-text-muted-dark whitespace-pre-line text-lg leading-relaxed">
                {caseStudy.architecture.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-24">
            {caseStudy.mockups.map((mockup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="space-y-6"
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                  <Image
                    src={mockup.image}
                    alt={mockup.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-text-light dark:text-text-dark text-center text-lg">
                  {mockup.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
