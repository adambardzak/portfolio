"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FramedHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const FramedHeading = ({ children, className, size = "md" }: FramedHeadingProps) => {
  const sizeClasses = {
    sm: "text-xl py-2 px-4",
    md: "text-2xl py-3 px-6",
    lg: "text-3xl py-4 px-8"
  };

  return (
    <motion.div
      className={cn("relative inline-block", sizeClasses[size], className)}
      whileHover="hover"
    >
      <motion.div
        className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900 dark:border-gray-100 rounded-tl-lg"
        variants={{
          hover: { width: 24, height: 24, opacity: 1, borderRadius: "0.5rem" }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900 dark:border-gray-100 rounded-br-lg"
        variants={{
          hover: { width: 24, height: 24, opacity: 1, borderRadius: "0.5rem" }
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="font-monument">{children}</span>
    </motion.div>
  );
}; 