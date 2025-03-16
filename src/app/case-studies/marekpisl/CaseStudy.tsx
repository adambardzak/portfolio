"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

const caseStudy = {
  slug: "marekpisl",
  title: "Marek Pišl Portfolio",
  description: "Moderní portfolio web pro grafického designéra",
  heroImage: "/projects/marekpisl/marekpisl_hero_mockup-large.png",
  logo: "/projects/marekpisl/logo.svg",
  year: "2023",
  client: "Marek Pišl",
  role: "Development",
  designer: "Marek Pišl",
  links: {
    live: "https://marekpisl.cz",
  },
  techStack: [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Image Gallery",
  ],
  overview: [
    "Kompletní vývoj portfolia",
    "Responzivní design pro všechna zařízení",
    "Optimalizovaná galerie projektů",
    "Plynulé animace a přechody",
  ],
  challenges: [
    "Optimalizace načítání velkého množství obrázků",
    "Zachování vysoké kvality vizuálů",
    "Intuitivní navigace v galerii",
    "Rychlost načítání webu",
  ],
  solutions: [
    "Implementace pokročilého systému lazy loadingu",
    "Využití Next.js Image optimalizace",
    "Vlastní řešení pro zobrazení galerie",
    "Optimalizace velikosti assetů",
  ],
  results: [
    "Rychlé načítání i při velkém množství obrázků",
    "Intuitivní UX pro prohlížení portfolia",
    "Responzivní design pro všechna zařízení",
    "Moderní a čistý vzhled",
  ],
  mockups: {
    desktop: [
      {
        image: "/projects/marekpisl/marekpisl_mockup-kontakt.png",
        caption: "Galerie projektů",
      },
      {
        image: "/projects/marekpisl/marekpisl_mockup-typografie.png",
        caption: "Úvodní stránka portfolia",
      },
    ],
    mobile: [
      {
        image: "/projects/marekpisl/marekpisl_mockup-homepage.png",
        caption: "Mobilní zobrazení úvodu",
      },
      {
        image: "/projects/marekpisl/marekpisl_mockup-mobilemenu.png",
        caption: "Mobilní menu",
      },
    ],
    video: {
      url: "/projects/marekpisl/marekpisl_video.mp4",
      caption: "Ukázka interakcí a animací",
    },
  },
};

function CaseStudy() {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          {/* Back Button */}
          {/* <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-light dark:text-text-dark 
        hover:text-blue-500 dark:hover:text-blue-400 transition-colors group mb-16"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zpět na projekty
          </Link> */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-monument text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark mb-6">
                  {caseStudy.title}
                </h1>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg md:text-xl">
                  {caseStudy.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {caseStudy.links.live && (
                  <a
                    href={caseStudy.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 
                dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
                  >
                    Živá ukázka
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                {caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-blue-500/5 dark:bg-blue-400/5 
                text-blue-500 dark:text-blue-400 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
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

      {/* Overview with Desktop Preview */}
      <section className="bg-white dark:bg-[#161616] py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Přehled
              </h2>
              <ul className="space-y-4">
                {caseStudy.overview.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted-light dark:text-text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                <Image
                  src={caseStudy.mockups.desktop[0].image}
                  alt={caseStudy.mockups.desktop[0].caption}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges with Mobile Preview */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div className="grid grid-cols-2 gap-8">
              {caseStudy.mockups.mobile.slice(0, 2).map((mockup, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="aspect-[9/16] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                    <Image
                      src={mockup.image}
                      alt={mockup.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Výzvy
              </h2>
              <ul className="space-y-4">
                {caseStudy.challenges.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted-light dark:text-text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions with Desktop Preview */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Řešení
              </h2>
              <ul className="space-y-4">
                {caseStudy.solutions.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted-light dark:text-text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                <Image
                  src={caseStudy.mockups.desktop[1].image}
                  alt={caseStudy.mockups.desktop[1].caption}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results with Video */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className=" relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" w-full h-full object-cover"
                >
                  <source src={caseStudy.mockups.video.url} type="video/mp4" />
                </video>
              </div>
            </motion.div>
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Výsledky
              </h2>
              <ul className="space-y-4">
                {caseStudy.results.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted-light dark:text-text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-white dark:bg-[#161616] py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-text-muted-light dark:text-text-muted-dark mb-2">
                Klient
              </h3>
              <p className="text-text-light dark:text-text-dark">
                {caseStudy.client}
              </p>
            </div>
            <div>
              <h3 className="text-text-muted-light dark:text-text-muted-dark mb-2">
                Rok
              </h3>
              <p className="text-text-light dark:text-text-dark">
                {caseStudy.year}
              </p>
            </div>
            <div>
              <h3 className="text-text-muted-light dark:text-text-muted-dark mb-2">
                Role
              </h3>
              <p className="text-text-light dark:text-text-dark">
                {caseStudy.role}
              </p>
            </div>
            <div>
              <h3 className="text-text-muted-light dark:text-text-muted-dark mb-2">
                Design
              </h3>
              <p className="text-text-light dark:text-text-dark">
                {caseStudy.designer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudy;
