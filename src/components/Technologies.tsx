"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Smartphone, Globe, Cpu } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
  },
  {
    category: "Databáze",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "MySQL"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
  {
    category: "Mobilní vývoj",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android", "Expo", "Mobile UI/UX"],
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
  },
  {
    category: "DevOps",
    icon: Globe,
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Cloudflare"],
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
  },
  {
    category: "Další technologie",
    icon: Cpu,
    skills: ["Git", "Testing", "SEO", "Performance", "Security"],
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
  },
];

export default function Expertise() {
  return (
    <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300 py-32">
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
              className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark tracking-wide"
            >
              Technologie
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
              Technická expertíza
            </motion.h2>
          </div>
        </div>

        {/* Technologies Grid - New Layout */}
        <div className="grid grid-cols-1 gap-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.gradient} backdrop-blur-sm p-4 shrink-0`}
                >
                  <tech.icon className="w-full h-full text-text-light dark:text-text-dark" />
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="font-monument text-2xl text-text-light dark:text-text-dark">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tech.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + i * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-xl bg-hover-light dark:bg-hover-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:border-text-light/20 dark:hover:border-text-dark/20 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              {index !== technologies.length - 1 && (
                <div className="w-full h-px bg-border-light dark:bg-border-dark mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
