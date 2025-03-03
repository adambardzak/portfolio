"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
const services = [
  {
    id: 1,
    title: "Webové aplikace",
    description:
      "Moderní a výkonné webové aplikace postavené na nejnovějších technologiích",
    features: [
      "Single Page Applications",
      "Progressive Web Apps",
      "Responzivní design",
      "Optimalizace výkonu",
    ],
  },
  {
    id: 2,
    title: "E-commerce řešení",
    description:
      "Kompletní řešení pro váš online obchod s důrazem na konverze a UX",
    features: [
      "Vlastní e-shop na míru",
      "Napojení na ERP systémy",
      "Platební brány",
      "Skladové hospodářství",
    ],
  },
  {
    id: 3,
    title: "Webové prezentace",
    description: "Reprezentativní webové stránky, které prodávají vaše služby",
    features: [
      "Moderní design",
      "SEO optimalizace",
      "Správa obsahu",
      "Analytika návštěvnosti",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="SLUŽBY"
          title="Co můžu nabídnout"
          description="Komplexní řešení pro vaše digitální potřeby, od návrhu až po realizaci"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-[#161616] rounded-2xl p-8 border border-border-light 
                dark:border-border-dark hover:border-blue-500/20 dark:hover:border-blue-400/20 
                transition-all duration-300"
            >
              {/* Subtle blue gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent 
                dark:from-blue-400/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Content */}
              <div className="relative space-y-6">
                {/* Service number */}
                <span className="text-6xl font-monument text-blue-500/10 dark:text-blue-400/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="space-y-4">
                  <h3 className="font-monument text-2xl text-text-light dark:text-text-dark">
                    {service.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                      {feature}
                    </motion.li>
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
