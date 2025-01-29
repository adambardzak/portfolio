"use client";

import { motion } from "framer-motion";
import { Code, Paintbrush, Rocket } from "lucide-react";

const processSteps = [
  {
    phase: "01",
    title: "Discovery",
    description:
      "Understanding your vision, goals, and requirements to create the perfect strategy.",
    details: [
      "Project objectives",
      "User research",
      "Market analysis",
      "Technical requirements",
    ],
    icon: Paintbrush,
    color: "#2563eb20",
  },
  {
    phase: "02",
    title: "Design",
    description:
      "Crafting beautiful and functional interfaces that align with your brand and users' needs.",
    details: ["Wireframing", "UI/UX design", "Prototyping", "Design system"],
    icon: Code,
    color: "#7c3aed20",
  },
  {
    phase: "03",
    title: "Development",
    description:
      "Building your project with clean, efficient code and modern technologies.",
    details: [
      "Frontend development",
      "Backend integration",
      "Performance optimization",
      "Responsive implementation",
    ],
    icon: Rocket,
    color: "#db277720",
  },
];

const Process = () => {
  return (
    <div className="w-full bg-light dark:bg-dark">
      {/* Header Section */}
      <section className="min-h-[90vh] flex items-center relative mb-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="space-y-8">
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
                className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark tracking-wider"
              >
                Work Process
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <div className="relative inline-block">
                <motion.h1
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="font-monument text-7xl md:text-9xl text-text-light dark:text-text-dark tracking-tight"
                >
                  How I Work
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <section
          key={step.phase}
          className="min-h-screen py-32 flex items-center relative"
        >
          <motion.div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.015 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <step.icon className="w-full h-full" />
          </motion.div>

          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full relative">
            <div className="grid md:grid-cols-[1fr,1.5fr] gap-16 xl:gap-32 items-start">
              {/* Left Column - Phase Info */}
              <div className="sticky top-32 space-y-12">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-px bg-text-light dark:bg-text-dark opacity-20" />
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark font-monument tracking-widest">
                      {step.phase}
                    </span>
                  </motion.div>

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
                      className="text-5xl md:text-6xl xl:text-7xl font-monument text-text-light dark:text-text-dark"
                    >
                      {step.title}
                    </motion.h2>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-md leading-relaxed"
                  >
                    {step.description}
                  </motion.p>
                </div>

                <div className="space-y-4">
                  {step.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className="w-2 h-2 rounded-full bg-text-light dark:bg-text-dark 
                        group-hover:scale-150 transition-transform duration-300"
                      />
                      <span className="text-lg text-text-light dark:text-text-dark">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Icon/Visual */}
              <div className="relative h-[70vh] flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full aspect-square relative"
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ filter: "blur(120px)" }}
                  />
                  <step.icon className="w-full h-full text-text-light dark:text-text-dark opacity-20" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Process;
