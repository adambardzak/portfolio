"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg relative overflow-hidden bg-gray-100 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          y: isDark ? 0 : -40,
          rotate: isDark ? 180 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <div className="h-10 flex items-center justify-center">
          <Moon className="w-5 h-5 text-blue-500" />
        </div>
        <div className="h-10 flex items-center justify-center">
          <Sun className="w-5 h-5 text-amber-500" />
        </div>
      </motion.div>
    </button>
  );
}; 