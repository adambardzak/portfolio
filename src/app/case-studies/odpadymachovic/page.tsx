"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

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
  designer: "Marek Pišl",
  links: {
    live: "https://odpadymachovic.cz",
  },
  techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  overview: [
    "Moderní webová prezentace služeb",
    "Optimalizace pro vyhledávače",
    "Responzivní design pro všechna zařízení",
  ],
  challenges: [
    "Přehledná prezentace široké nabídky služeb",
    "Důraz na dostupnost a přehlednost",
    "Optimalizace pro lokální vyhledávání",
  ],
  solutions: [
    "Důraz na UX a přehlednou navigaci",
    "SEO optimalizace pro lokální vyhledávání",
  ],
  results: [
    "Zlepšení pozic ve vyhledávačích",
    "Pozitivní zpětná vazba od zákazníků",
  ],
  mockups: {
    desktop: [
      {
        image: "/projects/machovic/machovic_mockup-services.png",
        caption: "Hlavní stránka s přehledem služeb",
      },
    ],
    mobile: [
      {
        image: "/projects/machovic/machovic_mockup-mobiles.png",
        caption: "Mobilní zobrazení webu",
      },
    ],
    video: {
      url: "/projects/machovic/machovic_video.mp4",
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

      {/* Project Info */}
      <section className="bg-white dark:bg-[#161616] py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-8">
            O projektu
          </h2>
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

      {/* Challenges Section */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div className="order-last lg:order-first">
              <div className="relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                <Image
                  src={caseStudy.mockups.mobile[0].image}
                  alt={caseStudy.mockups.mobile[0].caption}
                  width={1000}
                  height={1000}
                  className="object-cover"
                />
              </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
