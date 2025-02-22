"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Frame, type FrameVariantName } from "@/lib/brand";

interface LogoProps {
  variant?: "default" | "compact" | "framed-type";
  className?: string;
  interactive?: boolean;
  frameStyle?: FrameVariantName;
}

export const Logo = ({
  variant = "default",
  className,
  interactive = true,
  frameStyle = "default",
}: LogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const frameStyles = {
    default: "border-2 border-gray-900 dark:border-gray-100",
    diagonal:
      "after:absolute after:inset-0 after:border-2 after:border-gray-900 dark:after:border-gray-100 after:rotate-45",
    dots: "border-dotted border-2 border-gray-900 dark:border-gray-100",
    dashed: "border-dashed border-2 border-gray-900 dark:border-gray-100",
    gradient: "bg-gradient-to-r from-blue-500 to-cyan-500 p-[2px]",
  };

  // Frame corners animation variants
  const frameVariants = {
    compact: {
      width: "3rem",
      height: "3rem",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    expanded: {
      width: "auto",
      height: "3rem",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Corner animation variants
  const cornerVariants = {
    default: {
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "0.25rem",
      transition: { duration: 0.3 },
    },
    hover: {
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "0.375rem",
      transition: { duration: 0.3 },
    },
  };

  const getLogoMark = () => (
    <div className="relative w-12 h-12 flex-shrink-0">
      <div
        className={cn(
          "absolute inset-0",
          Frame.animated("md", frameStyle),
          "transition-all duration-300"
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-monument text-xl text-gray-900 dark:text-gray-100"
            animate={{
              scale: isHovered ? 1.1 : 1,
              transition: { duration: 0.3 },
            }}
          >
            b
          </motion.span>
        </div>
      </div>
    </div>
  );

  return (
    <Link
      href="/"
      className={cn("relative inline-flex items-center", className)}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <motion.div
        className="relative flex items-center bg-white dark:bg-gray-900"
        variants={frameVariants}
        initial={variant === "compact" ? "compact" : "expanded"}
        animate={variant === "compact" && !isHovered ? "compact" : "expanded"}
      >
        {/* Logo Mark */}
        {getLogoMark()}

        {/* Animated Text */}
        <AnimatePresence>
          {(variant !== "compact" || isHovered) && (
            <motion.div
              className="ml-4 flex items-baseline overflow-hidden"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.span
                className="font-monument text-xl text-gray-900 dark:text-gray-100"
                layout
              >
                bardzak
              </motion.span>
              <motion.span
                className="font-monument text-xl text-gray-500 dark:text-gray-400 ml-0.5"
                layout
              >
                .dev
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};
