"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/components/motion-config";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  const { shouldReduceMotion } = useMotionConfig();
  
  return (
    <div className="mb-32 relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: shouldReduceMotion ? 0.5 : 1, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 bg-blue-500 dark:bg-blue-400 mb-8"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
            className="text-blue-500 dark:text-blue-400 font-medium"
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark"
          >
            {title}
          </motion.h2>
        </div>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, delay: 0.2 }}
            className="text-text-muted-light dark:text-text-muted-dark max-w-lg text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}; 