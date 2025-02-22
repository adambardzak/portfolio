"use client";

import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Database,
  Search,
  Workflow,
  Layers,
  Users,
  Zap,
  LineChart,
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
      <section className="relative min-h-[90vh] flex items-center bg-[#fafafa] dark:bg-[#121212] transition-colors duration-300 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.02),transparent_70%)]" />
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 gap-8"
          >
            {[Code, Paintbrush, Database].map((Icon, i) => (
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
                className="w-16 h-16 rounded-2xl bg-blue-500/5 dark:bg-blue-400/5 
                  backdrop-blur-sm p-4 flex items-center justify-center"
              >
                <Icon className="w-full h-full text-blue-500 dark:text-blue-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
          <div className="relative max-w-3xl space-y-8">
            {/* Accent Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -left-8 top-0 h-16 w-[2px] bg-blue-500/20 dark:bg-blue-400/20"
            />

            {/* Label */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="font-monument text-sm text-blue-500 dark:text-blue-400 tracking-wide"
              >
                SLUŽBY
              </motion.p>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4,
                  }}
                  className="font-monument text-5xl md:text-6xl lg:text-7xl text-text-light dark:text-text-dark leading-tight"
                >
                  Digitální řešení pro moderní byznys
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
              >
                Od návrhu po realizaci, vytvářím digitální produkty, které
                kombinují estetiku s výkonem a pomohou vám růst.
              </motion.p>
            </div>

            {/* Service Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {detailedServices.slice(0, 3).map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/10 dark:border-blue-400/10
                    hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                    hover:bg-blue-500/[0.02] dark:hover:bg-blue-400/[0.02]"
                >
                  <service.icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span className="text-text-light dark:text-text-dark">
                    {service.title}
                  </span>
                </motion.div>
              ))}
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
              ? "bg-[#fafafa] dark:bg-[#121212]"
              : "bg-[#f5f5f5] dark:bg-[#161616]"
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
                    className="w-16 h-16 rounded-xl bg-blue-500/5 dark:bg-blue-400/5 p-3.5 
                      hover:scale-110 transition-transform duration-300 backdrop-blur-sm"
                  >
                    <service.icon className="w-full h-full text-blue-500 dark:text-blue-400" />
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
                  <h3 className="font-monument text-sm text-blue-500 dark:text-blue-400">
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
                        className="group flex gap-4 p-4 rounded-xl hover:bg-blue-500/[0.02] dark:hover:bg-blue-400/[0.02] 
                          transition-colors duration-300"
                      >
                        <div
                          className="w-10 h-10 rounded-xl bg-blue-500/5 dark:bg-blue-400/5 
                            flex-shrink-0 flex items-center justify-center 
                            group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 
                            group-hover:scale-110 transition-all duration-300"
                        >
                          <step.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
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
              <div className="lg:sticky lg:top-32 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-8 
                    hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                    bg-white dark:bg-[#161616]"
                >
                  <h3 className="font-monument text-sm text-blue-500 dark:text-blue-400">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 
                          group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-text-muted-light dark:text-text-muted-dark 
                          group-hover:text-blue-500 dark:group-hover:text-blue-400 
                          transition-colors duration-300">
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
                  className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-8
                    hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
                    bg-white dark:bg-[#161616]"
                >
                  <h3 className="font-monument text-sm text-blue-500 dark:text-blue-400">
                    Technologie
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {service.tools.map((tool, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 
                          group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-text-light dark:text-text-dark 
                          group-hover:text-blue-500 dark:group-hover:text-blue-400 
                          transition-colors duration-300">
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
