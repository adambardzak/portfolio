"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Layers,
  Database,
  Smartphone as Mobile,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "Vytvářím intuitivní a krásná uživatelská rozhraní, která zaujmou a potěší vaše uživatele.",
    details: [
      "Uživatelský výzkum",
      "Wireframing",
      "Prototypování",
      "Vizuální design",
    ],
    gradient: "from-gray-900/80 via-gray-800/70 to-gray-700/80",
  },
  {
    id: 2,
    icon: Code,
    title: "Webový vývoj",
    description:
      "Vyvíjím rychlé, responzivní a moderní webové stránky pomocí nejnovějších technologií.",
    details: ["React/Next.js", "TypeScript", "Tailwind CSS", "API Integrace"],
    gradient: "from-gray-800/80 via-gray-700/70 to-gray-600/80",
  },
  {
    id: 3,
    icon: Mobile,
    title: "Mobilní aplikace",
    description:
      "Vyvíjím multiplatformní mobilní aplikace, které fungují plynule na všech zařízeních.",
    details: ["React Native", "iOS", "Android", "Optimalizace výkonu"],
    gradient: "from-gray-900/80 via-gray-800/70 to-gray-700/80",
  },
  {
    id: 4,
    icon: Database,
    title: "Backend vývoj",
    description:
      "Vytvářím robustní a škálovatelná backend řešení pro vaše aplikace.",
    details: ["Node.js", "Návrh databáze", "Vývoj API", "Cloudové služby"],
    gradient: "from-gray-800/80 via-gray-700/70 to-gray-600/80",
  },
  {
    id: 5,
    icon: Layers,
    title: "CMS Integrace",
    description:
      "Implementuji systémy pro správu obsahu pro snadnou aktualizaci vašeho webu.",
    details: ["Headless CMS", "WordPress", "Vlastní CMS", "Obsahová strategie"],
    gradient: "from-gray-900/80 via-gray-800/70 to-gray-700/80",
  },
];

export default function Services() {
  return (
    <section
      className={clsx(
        "relative min-h-screen flex items-center",
        // " bg-[#fafafa] dark:bg-[#121212]",
        " transition-colors duration-300 py-32"
      )}
    >
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
              className="font-monument text-sm text-blue-500 dark:text-blue-400 tracking-wide"
            >
              Služby
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
              Komplexní řešení pro vaše digitální potřeby
            </motion.h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-gray-800 
                hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div
                  className="w-12 h-12 rounded-xl bg-blue-500/5 dark:bg-blue-400/5 p-2.5 
                  group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-colors duration-300"
                >
                  <service.icon className="w-full h-full text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                  {service.title}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-muted-light dark:text-text-muted-dark 
                        group-hover:text-text-light dark:group-hover:text-text-dark transition-colors duration-300"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
