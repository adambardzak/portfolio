"use client";

import { motion } from "framer-motion";
import { GridPattern } from "@/components/DecorativeElements";
import {
  Code,
  Paintbrush,
  Rocket,
  Layers,
  Database,
  Smartphone,
  Search,
  Zap,
  LineChart,
  ShieldCheck,
  Workflow,
  Users,
  ArrowRight,
} from "lucide-react";

const detailedServices = [
  {
    id: 1,
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "Vytvářím intuitivní a krásná uživatelská rozhraní, která zaujmou a potěší vaše uživatele.",
    longDescription:
      "Design není jen o vzhledu. Je to o vytváření intuitivních a příjemných zážitků pro vaše uživatele. Kombinuji estetiku s funkcionalitou a vytvářím rozhraní, která jsou nejen krásná, ale také efektivní.",
    process: [
      {
        title: "Uživatelský výzkum",
        description: "Analýza cílové skupiny a jejich potřeb",
        icon: Search,
      },
      {
        title: "Wireframing",
        description: "Návrh struktury a funkčního rozložení",
        icon: Workflow,
      },
      {
        title: "Design systém",
        description: "Vytvoření konzistentního vizuálního jazyka",
        icon: Layers,
      },
      {
        title: "Testování",
        description: "Ověření použitelnosti s reálnými uživateli",
        icon: Users,
      },
    ],
    features: [
      "Responzivní design",
      "Design systémy",
      "Interaktivní prototypy",
      "Uživatelské testování",
      "Vizuální identita",
      "Micro-interakce",
    ],
    tools: ["Figma", "Adobe CC", "Framer", "Maze", "Principle"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
    metrics: [
      {
        value: "40%",
        label: "Nárůst konverzí",
      },
      {
        value: "60%",
        label: "Rychlejší onboarding",
      },
    ],
  },
  {
    id: 2,
    icon: Code,
    title: "Webový vývoj",
    description:
      "Vyvíjím rychlé, responzivní a moderní webové stránky pomocí nejnovějších technologií.",
    longDescription:
      "Moderní web musí být rychlý, bezpečný a škálovatelný. Používám nejnovější technologie a best practices pro vytvoření webů, které nejen skvěle vypadají, ale také perfektně fungují.",
    process: [
      {
        title: "Architektura",
        description: "Návrh technického řešení a struktury",
        icon: Database,
      },
      {
        title: "Vývoj",
        description: "Implementace frontend a backend řešení",
        icon: Code,
      },
      {
        title: "Optimalizace",
        description: "Zrychlení načítání a výkonu",
        icon: Zap,
      },
      {
        title: "Monitoring",
        description: "Sledování výkonu a chyb",
        icon: LineChart,
      },
    ],
    features: [
      "Server-side rendering",
      "Statická generace",
      "API integrace",
      "PWA funkcionalita",
      "SEO optimalizace",
      "Analytics",
    ],
    tools: ["React/Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
    metrics: [
      {
        value: "99%",
        label: "Lighthouse skóre",
      },
      {
        value: "<1s",
        label: "Doba načítání",
      },
    ],
  },
  // ... další služby
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-light dark:bg-dark transition-colors duration-300 overflow-hidden">
        <GridPattern />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Right Side Floating Icons */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 gap-8"
            >
              {[Code, Paintbrush, Rocket, Database, Smartphone].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-400/10 
                    backdrop-blur-sm p-4 flex items-center justify-center hover:from-purple-500/20 hover:to-purple-400/20 
                    transition-colors duration-300"
                  >
                    <Icon className="w-full h-full text-purple-500/30 dark:text-purple-400/30" />
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          {/* Left Side Decorative Elements */}
          <div className="absolute top-[20%] left-[5%]">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/5 to-purple-400/5 
                backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          <div className="relative max-w-3xl space-y-8">
            {/* Purple Accent Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -left-8 top-0 h-16 w-1 bg-gradient-to-b from-purple-500 to-purple-400"
            />

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
                className="font-monument text-sm text-purple-600 dark:text-purple-400 tracking-wider"
              >
                SLUŽBY
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="font-monument text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-purple-400 
                  dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent leading-tight"
              >
                Digitální řešení pro moderní byznys
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
            >
              Od návrhu po realizaci, vytvářím digitální produkty, které
              kombinují estetiku s výkonem a pomohou vám růst.
            </motion.p>

            {/* Service Pills with Enhanced Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {detailedServices.slice(0, 3).map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-light dark:border-border-dark
                    hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300
                    hover:bg-purple-500/5 dark:hover:bg-purple-400/5"
                >
                  <service.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-text-light dark:text-text-dark">
                    {service.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-text-light dark:bg-text-dark 
                  text-light dark:text-dark rounded-lg font-medium hover:opacity-90 
                  transition-all duration-300 shadow-lg shadow-text-light/5 dark:shadow-text-dark/5"
              >
                Začít projekt
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {detailedServices.map((service, index) => (
        <section
          key={service.id}
          className={`relative py-32 ${
            index % 2 === 0
              ? "bg-light dark:bg-dark"
              : "bg-hover-light dark:bg-hover-dark"
          } transition-colors duration-300`}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Service Info */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} backdrop-blur-sm p-3.5 
                      hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-full h-full text-text-light dark:text-text-dark" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-monument text-4xl text-text-light dark:text-text-dark">
                      {service.title}
                    </h2>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                      {service.longDescription}
                    </p>
                  </div>
                </motion.div>

                {/* Process Steps */}
                <div className="space-y-8">
                  <h3 className="font-monument text-sm text-purple-600 dark:text-purple-400">
                    Proces
                  </h3>
                  <div className="grid gap-6">
                    {service.process.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="group flex gap-4 p-4 rounded-xl hover:bg-hover-light dark:hover:bg-hover-dark transition-colors duration-300"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${service.gradient} flex-shrink-0 
                            flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-5 h-5 text-text-light dark:text-text-dark" />
                        </div>
                        <div>
                          <h4 className="font-monument text-text-light dark:text-text-dark mb-1">
                            {step.title}
                          </h4>
                          <p className="text-text-muted-light dark:text-text-muted-dark">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features & Tools */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl border border-border-light dark:border-border-dark space-y-8 
                    hover:border-purple-500/20 dark:hover:border-purple-400/20 transition-colors duration-300"
                >
                  <h3 className="font-monument text-sm text-purple-600 dark:text-purple-400">
                    Co získáte
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 group"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 
                          group-hover:scale-150 transition-transform duration-300"
                        />
                        <span
                          className="text-text-muted-light dark:text-text-muted-dark group-hover:text-text-light 
                          dark:group-hover:text-text-dark transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="p-8 rounded-2xl border border-border-light dark:border-border-dark space-y-8
                    hover:border-purple-500/20 dark:hover:border-purple-400/20 transition-colors duration-300"
                >
                  <h3 className="font-monument text-sm text-purple-600 dark:text-purple-400">
                    Technologie
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {service.tools.map((tool, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center gap-3 group"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 
                          group-hover:scale-150 transition-transform duration-300"
                        />
                        <span
                          className="text-text-muted-light dark:text-text-muted-dark group-hover:text-text-light 
                          dark:group-hover:text-text-dark transition-colors duration-300"
                        >
                          {tool}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
