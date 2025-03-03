"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudy = {
  slug: "ofta",
  title: "OFTA - Centrum mikrochirurgie oka",
  description: "Moderní webová prezentace pro oční kliniku",
  heroImage: "/projects/ofta/ofta_mockup-bg.png",
  logo: "/projects/ofta/logo.svg",
  year: "2024",
  client: "OFTA s.r.o.",
  role: "Full-stack Development",
  links: {
    live: "https://ofta.cz",
  },
  techStack: [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Strapi CMS",
  ],
  overview: [
    "Kompletní redesign webové prezentace",
    "Implementace headless CMS pro správu obsahu",
    "Optimalizace pro vyhledávače",
    "Responzivní design pro všechna zařízení",
  ],
  challenges: [
    "Přehledná prezentace široké nabídky služeb",
    "Jednoduchá správa obsahu pro klienta",
    "Optimalizace pro vyhledávače",
    "Integrace objednávkového systému",
  ],
  solutions: [
    "Implementace Strapi CMS pro snadnou správu obsahu",
    "SEO optimalizace s důrazem na klíčová slova",
    "Vlastní komponenty pro dynamický obsah",
    "Automatické generování sitemap",
  ],
  results: [
    "Zlepšení pozic ve vyhledávačích o 40%",
    "Snížení času potřebného pro aktualizaci obsahu o 70%",
    "Zvýšení konverzního poměru objednávek o 25%",
    "Pozitivní zpětná vazba od pacientů",
  ],
  mockups: {
    desktop: [
      {
        image: "/projects/ofta/ofta_mockup-2mobiles.png",
        caption: "Mobilní zobrazení",
      },
      {
        image: "/projects/ofta/ofta_mockup-zakrok.png",
        caption: "Detail zákroku",
      },
      {
        image: "/projects/ofta/ofta_mockup-faq.png",
        caption: "Často kladené otázky",
      },
      {
        image: "/projects/ofta/ofta_mockup-aktuality.png",
        caption: "Aktuality",
      },
    ],
    mobile: [
      {
        image: "/projects/ofta/ofta_mockup-mobile.png",
        caption: "Mobilní zobrazení úvodu",
      },
      {
        image: "/projects/ofta/ofta_mockup-mobile_contact.png",
        caption: "Formulář pro dotazy",
      },
    ],
    video: {
      main: {
        url: "/projects/ofta/ofta_video.mp4",
        caption: "Ukázka webu a administrace",
      },
    },
  },
  architecture: {
    diagram: "/projects/ofta/architecture.svg",
    description: `Aplikace je postavena na moderní JAMstack architektuře využívající Next.js 14 s App Routerem. Frontend je optimalizován pro maximální výkon a SEO:

    • Server-side rendering pro rychlé první vykreslení
    • Statická generace pro často navštěvované stránky
    • Inkrementální statická regenerace pro dynamický obsah
    
    Backend je realizován pomocí Strapi CMS s GraphQL API, což umožňuje:
    
    • Flexibilní správu obsahu
    • Verzování a workflow
    • Granulární řízení přístupu
    • Automatické generování API dokumentace`,
  },
  performance: {
    metrics: [
      {
        label: "Performance Score",
        value: "98/100",
        change: "+15",
      },
      {
        label: "First Contentful Paint",
        value: "0.8s",
        change: "-1.2s",
      },
      {
        label: "Time to Interactive",
        value: "1.2s",
        change: "-2.1s",
      },
    ],
  },
  duration: "2 měsíce",
  designer: {
    name: "Marek Pišl",
    url: "https://marekpisl.cz",
  },
  analytics: {
    clarity: {
      image: "/projects/ofta/ofta-clarity.png",
      metrics: [
        { label: "Průměrná doba návštěvy", value: "3:45", change: "+85%" },
        { label: "Scroll depth", value: "75%", change: "+30%" },
        { label: "Bounce rate", value: "25%", change: "-45%" },
      ],
    },
    searchConsole: {
      image: "/projects/ofta/ofta_search-console.png",
      metrics: [
        { label: "Průměrná pozice", value: "2.8", change: "+15" },
        { label: "Celkové zobrazení", value: "25k", change: "+180%" },
        { label: "CTR", value: "4.8%", change: "+2.1%" },
      ],
    },
    analytics: {
      image: "/projects/ofta/ofta_ga.png",
      metrics: [
        { label: "Konverze", value: "350+", change: "+125%" },
        { label: "Uživatelé", value: "12k", change: "+85%" },
        { label: "Engagement", value: "68%", change: "+40%" },
      ],
    },
  },
  cms: {
    features: [
      {
        title: "Vlastní typy obsahu",
        description: "Přizpůsobené content types pro služby, články a lékaře",
        image: "/projects/ofta/strapi-content_type.png",
      },
      {
        title: "Správa obsahu",
        description: "Systém správy obsahu s verzováním",
        image: "/projects/ofta/strapi-content.png",
      },
      {
        title: "Media Library",
        description: "Pokročilá správa médií s automatickou optimalizací",
        image: "/projects/ofta/strapi-media.png",
      },
    ],
    customizations: [
      "Vlastní komponenty pro strukturovaný obsah",
      "Automatická SEO optimalizace",
      "Systém verzování obsahu",
      "API pro objednávkový systém",
    ],
  },
};

const getTechDescription = (tech: string) => {
  const descriptions: { [key: string]: string } = {
    "Next.js 14":
      "Server-side rendering a App Router pro optimální výkon a SEO",
    TypeScript: "Typově bezpečný kód pro lepší udržovatelnost",
    "Tailwind CSS": "Utility-first CSS framework pro rychlý vývoj",
    "Framer Motion": "Plynulé animace a interakce",
    "Strapi CMS": "Headless CMS pro flexibilní správu obsahu",
  };
  return descriptions[tech] || "";
};

export default function CaseStudyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-light dark:bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          {/* Back Button */}
          <Link
            href="/"
            className="absolute top-32 inline-flex items-center gap-2 text-text-light dark:text-text-dark 
              hover:text-ofta-blue-600 dark:hover:text-ofta-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zpět na projekty
          </Link>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full pt-24">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
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
                  className="font-monument text-3xl md:text-5xl text-text-light dark:text-text-dark"
                >
                  {caseStudy.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
                >
                  {caseStudy.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-text-muted-light dark:text-text-muted-dark"
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
                {caseStudy.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-hover-light dark:bg-hover-dark 
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
                className="flex flex-wrap gap-4"
              >
                {caseStudy.links.live && (
                  <a
                    href={caseStudy.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ofta-blue-600 hover:bg-ofta-blue-600 
                      dark:bg-ofta-blue-600 dark:hover:bg-ofta-blue-600 text-white rounded-lg transition-all duration-300"
                  >
                    Živá ukázka
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right Column */}
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

      {/* Technical Overview & Architecture */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Video and Tech Stack */}
            <div className="space-y-16">
              {/* Tech Stack */}
              <div className="space-y-8 flex flex-col h-full justify-between">
                <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                  Technický přehled
                </h2>
                <div className="space-y-12">
                  {/* Tech Items */}
                  {caseStudy.techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div
                          className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 
                          group-hover:scale-150 transition-transform duration-300"
                        />
                        <h3 className="text-lg font-medium text-text-light dark:text-text-dark">
                          {tech}
                        </h3>
                      </div>
                      <div className="ml-6">
                        <p className="text-text-muted-light dark:text-text-muted-dark">
                          {getTechDescription(tech)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Video */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border 
                  border-border-light dark:border-border-dark"
                >
                  <video
                    src="/projects/ofta/ofta_video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className=" w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Architecture */}
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Architektura
              </h2>
              <div className="flex flex-col justify-between gap-24">
                <div
                  className="relative  rounded-2xl border border-border-light 
                dark:border-border-dark p-8 bg-white dark:bg-[#161616] overflow-hidden group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                    <Image
                      src={caseStudy.architecture.diagram}
                      alt="Architecture diagram"
                      width={800}
                      height={800}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  {/* Subtle gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black/10 
                  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-text-muted-light dark:text-text-muted-dark text-lg whitespace-pre-wrap">
                    <p className="mb-6">
                      Aplikace je postavena na moderní JAMstack architektuře
                      využívající Next.js 14 s App Routerem. Frontend je
                      optimalizován pro maximální výkon a SEO:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Server-side rendering pro rychlé první vykreslení
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Statická generace pro často navštěvované stránky
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Inkrementální statická regenerace pro dynamický obsah
                      </li>
                    </ul>
                    <p className="mb-4">
                      Backend je realizován pomocí Strapi CMS s GraphQL API, což
                      umožňuje:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Flexibilní správu obsahu
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Verzování a workflow
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Granulární řízení přístupu
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                        Automatické generování API dokumentace
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-24">
            {caseStudy.mockups.desktop.map((mockup, i) => (
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

      {/* Mobile Showcase Section */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Mobile First
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                Důraz na mobilní zobrazení byl klíčový, protože více než 60%
                návštěvníků přichází z mobilních zařízení. Design je
                optimalizován pro:
              </p>
              <ul className="space-y-4">
                <li className="text-text-muted-light dark:text-text-muted-dark">
                  • Snadnou navigaci jedním palcem
                </li>
                <li className="text-text-muted-light dark:text-text-muted-dark">
                  • Rychlé načítání na mobilních sítích
                </li>
                <li className="text-text-muted-light dark:text-text-muted-dark">
                  • Přehledné zobrazení všech informací
                </li>
                <li className="text-text-muted-light dark:text-text-muted-dark">
                  • Optimalizované formuláře pro mobilní vstup
                </li>
              </ul>
            </div>
            <motion.div className="grid grid-cols-2 gap-4">
              {caseStudy.mockups.mobile.map((mockup, i) => (
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
                  <p className="mt-4 text-sm text-text-muted-light dark:text-text-muted-dark text-center">
                    {mockup.caption}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-16">
            Výkon a Metriky
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.performance.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border-light dark:border-border-dark"
              >
                <p className="text-text-muted-light dark:text-text-muted-dark mb-2">
                  {metric.label}
                </p>
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-monument text-text-light dark:text-text-dark">
                    {metric.value}
                  </span>
                  <span className="text-green-500 mb-1">{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Overview with Sticky Metrics */}
      <section className="bg-light dark:bg-dark py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-16">
            Analytická Data
          </h2>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sticky Metrics Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 self-start">
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Klíčové Metriky
              </h3>
              <div className="grid gap-4">
                {caseStudy.analytics.clarity.metrics
                  .concat(
                    caseStudy.analytics.searchConsole.metrics,
                    caseStudy.analytics.analytics.metrics
                  )
                  .map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-xl border border-border-light dark:border-border-dark"
                    >
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">
                        {metric.label}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-monument text-text-light dark:text-text-dark">
                          {metric.value}
                        </span>
                        <span
                          className={`text-sm ${
                            metric.change.startsWith("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Dashboards */}
            <div className="lg:col-span-8 space-y-16">
              {/* Microsoft Clarity */}
              <div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-6">
                  Microsoft Clarity - User Behavior
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                    <Image
                      src={caseStudy.analytics.clarity.image}
                      alt="Microsoft Clarity Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Search Console */}
              <div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-6">
                  Google Search Console
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                    <Image
                      src={caseStudy.analytics.searchConsole.image}
                      alt="Search Console Performance"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Google Analytics */}
              <div>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-6">
                  Google Analytics 4
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                    <Image
                      src={caseStudy.analytics.analytics.image}
                      alt="GA4 Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Implementation */}
      <section className="bg-white dark:bg-[#161616] py-32 border-t border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Info Panel */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                  Strapi CMS
                </h2>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                  Implementace vlastního řešení pomocí Strapi CMS s důrazem na
                  jednoduchost správy obsahu a flexibilitu systému.
                </p>
                <ul className="space-y-4">
                  {caseStudy.cms.customizations.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-text-light dark:text-text-dark"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Screenshots */}
            <div className="lg:col-span-7 space-y-8">
              {caseStudy.cms.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-border-light dark:border-border-dark">
                    <div className="aspect-[16/10]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill={false}
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-text-light dark:text-text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
