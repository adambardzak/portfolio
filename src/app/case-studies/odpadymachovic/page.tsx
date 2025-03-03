"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const caseStudy = {
  slug: "odpadymachovic",
  title: "Odpady Machovič",
  description:
    "Webová prezentace pro firmu zajišťující odvoz a likvidaci odpadu",
  heroImage: "/projects/machovic/machovic_hero_mockup-large.png",
  logo: "/projects/machovic/logo.svg",
  year: "2023",
  client: "Odpady Machovič s.r.o.",
  role: "Development",
  techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  overview: [
    "Moderní webová prezentace služeb",
    "Optimalizace pro vyhledávače",
    "Responzivní design pro všechna zařízení",
  ],
  challenges: [
    "Přehledná prezentace široké nabídky služeb",
    "Jednoduchý objednávkový proces",
    "Důraz na dostupnost a přehlednost",
    "Optimalizace pro lokální vyhledávání",
  ],
  solutions: [
    "Důraz na UX a přehlednou navigaci",
    "SEO optimalizace pro lokální vyhledávání",
  ],
  results: [
    "Zvýšení počtu online objednávek o 150%",
    "Zlepšení pozic ve vyhledávačích",
    "Snížení času potřebného pro vytvoření objednávky",
    "Pozitivní zpětná vazba od zákazníků",
  ],
  mockups: {
    desktop: [
      {
        image: "/projects/machovic/desktop-1.jpg",
        caption: "Hlavní stránka s přehledem služeb",
      },
      {
        image: "/projects/machovic/desktop-2.jpg",
        caption: "Ceník služeb",
      },
      {
        image: "/projects/machovic/desktop-3.jpg",
        caption: "Objednávkový formulář",
      },
    ],
    mobile: [
      {
        image: "/projects/machovic/mobile-1.jpg",
        caption: "Mobilní zobrazení služeb",
      },
      {
        image: "/projects/machovic/mobile-2.jpg",
        caption: "Kontaktní informace",
      },
      {
        image: "/projects/machovic/mobile-3.jpg",
        caption: "Mobilní objednávka",
      },
    ],
    video: {
      url: "/projects/machovic/showcase.mp4",
      thumbnail: "/projects/machovic/video-thumbnail.jpg",
      caption: "Průchod webem a ukázka funkcí",
    },
  },
};

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-light dark:text-text-dark 
              hover:text-blue-500 dark:hover:text-blue-400 transition-colors group mb-16"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zpět na projekty
          </Link>

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

      {/* Project Info */}
      <section className="bg-white dark:bg-[#161616] py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-8">
            O projektu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Přehled
              </h2>
              <ul className="space-y-4">
                {caseStudy.overview.map((item, index) => (
                  <li key={index} className="text-text-muted-light dark:text-text-muted-dark">
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

      {/* Challenges Section */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div className="grid grid-cols-2 gap-8 order-last lg:order-first">
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
                  <li key={index} className="text-text-muted-light dark:text-text-muted-dark">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Řešení
              </h2>
              <ul className="space-y-4">
                {caseStudy.solutions.map((item, index) => (
                  <li key={index} className="text-text-muted-light dark:text-text-muted-dark">
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

      {/* Results Section */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 order-last lg:order-first"
            >
              <div className="aspect-video relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                <video
                  controls
                  poster={caseStudy.mockups.video.thumbnail}
                  className="w-full"
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
                  <li key={index} className="text-text-muted-light dark:text-text-muted-dark">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
