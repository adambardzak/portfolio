"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { useMotionConfig } from "@/components/motion-config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Webové aplikace",
    description:
      "Vývoj moderních webových aplikací s důrazem na výkon a uživatelský zážitek.",
    features: [
      "Single Page Aplikace",
      "Progresivní webové aplikace",
      "Responzivní design",
      "API integrace",
    ],
  },
  {
    id: "e-commerce",
    title: "E-commerce řešení",
    description:
      "Kompletní řešení pro váš online obchod s důrazem na konverze a uživatelský zážitek.",
    features: [
      "Vlastní e-shop na míru",
      "Napojení na ERP systémy",
      "Integrace platebních bran",
      "Správa produktů",
    ],
  },
  {
    id: "websites",
    title: "Webové prezentace",
    description:
      "Reprezentativní webové stránky, které prodávají vaše služby a budují vaši značku.",
    features: [
      "Moderní design",
      "SEO optimalizace",
      "Správa obsahu",
      "Analytika návštěvnosti",
    ],
  },
];

export default function Services() {
  const { shouldReduceMotion } = useMotionConfig();

  // Optimized animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // Container for staggered animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <SectionHeader
            label="SLUŽBY"
            title="Co můžu nabídnout"
            description="Komplexní řešení pro vaše digitální potřeby, od návrhu až po realizaci"
          />
        </div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn}
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
                <motion.ul
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={fadeIn}
                      className="flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Zobrazit všechny služby
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
