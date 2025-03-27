"use client";

import { motion } from "framer-motion";
import { useMotionConfig } from "@/components/motion-config";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  const { shouldReduceMotion } = useMotionConfig();
  
  return (
    <div className="mb-16 md:mb-24 lg:mb-32 relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4rem", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: shouldReduceMotion ? 0.3 : 0.6, 
          ease: "easeOut" 
        }}
        className="h-1 bg-blue-500 dark:bg-blue-400 mb-6 md:mb-8 opacity-0"
      />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div className="space-y-3 md:space-y-4">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: shouldReduceMotion ? 0.2 : 0.3, 
              ease: "easeOut" 
            }}
            className="text-blue-500 dark:text-blue-400 font-medium"
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: shouldReduceMotion ? 0.2 : 0.3, 
              delay: 0.05,
              ease: "easeOut" 
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark"
          >
            {title}
          </motion.h2>
        </div>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: shouldReduceMotion ? 0.2 : 0.3, 
              delay: 0.1,
              ease: "easeOut" 
            }}
            className="text-text-muted-light dark:text-text-muted-dark max-w-lg text-base md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}; 