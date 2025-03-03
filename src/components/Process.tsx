"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Search } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import clsx from "clsx";
const steps = [
  {
    icon: Search,
    title: "Analýza",
    description: "Důkladná analýza vašich potřeb a cílů projektu",
    gradient: "from-blue-500/80 via-blue-400/70 to-blue-300/80",
  },
  {
    icon: Lightbulb,
    title: "Návrh",
    description: "Vytvoření detailního návrhu a architektury",
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
  {
    icon: Code2,
    title: "Vývoj",
    description: "Implementace s důrazem na kvalitu a výkon",
    gradient: "from-pink-500/80 via-pink-400/70 to-pink-300/80",
  },
  {
    icon: Rocket,
    title: "Nasazení",
    description: "Testování a nasazení do produkce",
    gradient: "from-orange-500/80 via-orange-400/70 to-orange-300/80",
  },
];

export default function Process() {
  return (
    <section
      className={clsx(
        "relative py-32",
        // "bg-[#fafafa] dark:bg-[#121212]",
        "transition-colors duration-300"
      )}
    >
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="PROCES"
          title="Jak pracuji"
          description="Seznamte se s mým pracovním postupem od prvního kontaktu až po finální realizaci"
        />

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-border-light dark:border-border-dark hover:border-text-light dark:hover:border-text-dark transition-colors"
            >
              <div className="space-y-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} backdrop-blur-sm flex items-center justify-center`}
                >
                  <step.icon className="w-6 h-6 text-text-light dark:text-text-dark" />
                </div>
                <div>
                  <h3 className="font-monument text-xl text-text-light dark:text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
