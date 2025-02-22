"use client";

import { motion } from "framer-motion";
import { Frame } from "@/lib/brand";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FramedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const FramedImage = ({ src, alt, className, width = 400, height = 300 }: FramedImageProps) => {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover="hover"
    >
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-900 dark:border-gray-100 rounded-tl-lg"
        variants={{
          hover: { width: 32, height: 32, borderRadius: "0.75rem" }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-900 dark:border-gray-100 rounded-br-lg"
        variants={{
          hover: { width: 32, height: 32, borderRadius: "0.75rem" }
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative overflow-hidden">
        <motion.div
          variants={{
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}; 