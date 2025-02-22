"use client";

import { motion } from "framer-motion";
import { Frame } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface FramedBoxProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: keyof typeof Frame.variants;
  animated?: boolean;
}

export const FramedBox = ({ 
  children, 
  className,
  size = "md",
  variant = "default",
  animated = true
}: FramedBoxProps) => {
  return (
    <motion.div
      className={cn(
        "relative p-4",
        animated ? Frame.animated(size, variant) : Frame.corners(size, variant),
        className
      )}
      whileHover={animated ? "hover" : undefined}
    >
      {children}
    </motion.div>
  );
}; 