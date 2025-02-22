"use client";

import { motion } from "framer-motion";
import { Frame } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface LogoFrameProps {
  children: React.ReactNode;
  variant?: keyof typeof Frame.variants;
  className?: string;
}

export const LogoFrame = ({ children, variant = "default", className }: LogoFrameProps) => {
  const frameVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      className={cn("relative p-8", className)}
      variants={frameVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={cn(
          "relative",
          Frame.animated("lg", variant)
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 