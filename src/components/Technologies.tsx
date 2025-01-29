"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "TailwindCSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Basic" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    category: "Design",
    technologies: [
      { name: "Figma", level: "Advanced" },
      { name: "UI/UX", level: "Advanced" },
      { name: "Design Systems", level: "Advanced" },
      { name: "Prototyping", level: "Intermediate" },
      { name: "Adobe Suite", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps",
    technologies: [
      { name: "Docker", level: "Intermediate" },
      { name: "Kubernetes", level: "Basic" },
      { name: "CI/CD Pipelines", level: "Intermediate" },
      { name: "AWS", level: "Basic" },
      { name: "Linux Server Management", level: "Intermediate" },
    ],
  },
];

const Expertise = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 py-32">
        {/* Section Header */}
        <div className="mb-24">
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
              className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark mb-4 tracking-wide"
            >
              Expertise
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
              className="font-monument text-4xl text-text-light dark:text-text-dark max-w-xl tracking-tight"
            >
              Technical Proficiency
            </motion.h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-4 gap-16">
          {skills.map((skillSet, index) => (
            <div key={skillSet.category} className="space-y-8">
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="font-monument text-xl text-text-light dark:text-text-dark"
                >
                  {skillSet.category}
                </motion.h3>
              </div>

              <div className="space-y-6">
                {skillSet.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.4 + index * 0.2 + techIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex justify-between items-baseline group"
                    >
                      <span className="font-monument text-text-light dark:text-text-dark">
                        {tech.name}
                      </span>
                      <span
                        className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {tech.level}
                      </span>
                    </motion.div>
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

export default Expertise;
