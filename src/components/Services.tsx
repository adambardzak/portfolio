"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, Rocket } from "lucide-react";
import SketchyUnderline from "./HandDrawLine";

const services = [
  {
    id: 1,
    title: "Design",
    description:
      "Creating thoughtful and beautiful interfaces with focus on user experience and modern aesthetics.",
    icon: Paintbrush,
    includes: [
      "UI/UX Design",
      "Design Systems",
      "Responsive Layouts",
      "Interactive Prototypes",
    ],
  },
  {
    id: 2,
    title: "Development",
    description:
      "Building fast, scalable, and maintainable applications using modern web technologies.",
    icon: Code,
    includes: [
      "Frontend Development",
      "React Applications",
      "Next.js Websites",
      "Performance Optimization",
    ],
  },
  {
    id: 3,
    title: "Deployment",
    description:
      "Ensuring your project is properly deployed and maintained in a production environment.",
    icon: Rocket,
    includes: [
      "Website Deployment",
      "Hosting Setup",
      "Domain Configuration",
      "Performance Monitoring",
    ],
  },
];

const Services = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-32">
        <div className="mb-24 overflow-visible">
          {" "}
          {/* Added overflow-visible here */}
          <div className="overflow-visible">
            {" "}
            {/* Changed from overflow-hidden */}
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="overflow-visible"
            >
              <div className="relative inline-block overflow-visible">
                {" "}
                {/* Added overflow-visible here */}
                <h2 className="font-monument text-4xl text-text-light dark:text-text-dark tracking-tight">
                  Crafting Digital
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={service.id} className="space-y-8">
              {/* Icon */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="relative w-12 h-12"
                >
                  <service.icon className="w-full h-full text-text-light dark:text-text-dark transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <motion.h3
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.4 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="font-monument text-xl text-text-light dark:text-text-dark transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>
                </div>
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.6 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="font-monument text-text-muted-light dark:text-text-muted-dark leading-relaxed transition-colors duration-300"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {service.includes.map((item, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.li
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.8 + index * 0.2 + i * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark transition-colors duration-300 list-none"
                    >
                      {item}
                    </motion.li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
