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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <span className="font-monument">{children}</span>
    </motion.div>
  );
}; 