"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Smartphone, Globe, Cpu } from "lucide-react";

const technologies = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
  {
    category: "Databáze",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "MySQL"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
  {
    category: "Mobilní vývoj",
    icon: Smartphone,
    skills: ["React Native", "iOS", "Android", "Expo", "Mobile UI/UX"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
  {
    category: "DevOps",
    icon: Globe,
    skills: ["Docker", "AWS", "CI/CD", "Vercel", "Cloudflare"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
  {
    category: "Další technologie",
    icon: Cpu,
    skills: ["Git", "Testing", "SEO", "Performance", "Security"],
    gradient: "bg-blue-500/5 dark:bg-blue-400/5 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10",
  },
];

export default function Expertise() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#fafafa] dark:bg-[#121212] transition-colors duration-300 py-32">
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

        {/* Technologies Grid */}
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
                <div className={`w-16 h-16 rounded-2xl ${tech.gradient} transition-colors duration-300 p-4 shrink-0`}>
                  <tech.icon className="w-full h-full text-blue-500 dark:text-blue-400" />
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
                        className="px-4 py-2 rounded-xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-gray-800 
                          text-text-light dark:text-text-dark hover:border-blue-500/20 dark:hover:border-blue-400/20 
                          hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              {index !== technologies.length - 1 && (
                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
