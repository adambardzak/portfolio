"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WebBuildingAnimation from "./WebBuildingAnimation";
import clsx from "clsx";
import { useMotionConfig } from "@/components/motion-config";

const scrollToCalc = () => {
  const contactSection = document.getElementById("calculation");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Hero = () => {
  const { shouldReduceMotion } = useMotionConfig();

  return (
    <section
      className={clsx(
        "relative min-h-[90vh] flex items-center",
        // "bg-[#fafafa] dark:bg-[#121212]",
        "transition-colors duration-300"
      )}
    >
      {/* Background with noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.03]" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28 lg:py-32"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium text-blue-500 dark:text-blue-400 
                bg-blue-500/[0.05] dark:bg-blue-400/[0.05] rounded-full border border-blue-500/10 
                dark:border-blue-400/10 backdrop-blur-sm"
            >
              MODERNÍ WEBY PRO NÁROČNÉ KLIENTY
            </motion.div>

            {/* Main content */}
            <div className="space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-light dark:text-text-dark leading-[1.1] md:leading-tight"
                >
                  Webové aplikace a weby na míru
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: 0.1 }}
                className="text-base sm:text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
              >
                Specializuji se na vývoj moderních webových aplikací, které
                přinášejí reálné výsledky. Kombinuji nejnovější technologie s
                důrazem na konverze a uživatelský zážitek.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <motion.button
                onClick={scrollToCalc}
                className="group relative flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-3 sm:py-4 
                  bg-blue-500 dark:bg-blue-400 text-white rounded-lg font-medium text-base overflow-hidden
                  w-full sm:w-auto"
                whileHover={!shouldReduceMotion ? { y: -2 } : {}}
                whileTap={!shouldReduceMotion ? { y: 1 } : {}}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 
                  dark:to-blue-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"
                />
                <span className="relative">Spočítat cenu projektu</span>
                <ArrowRight
                  className="relative w-4 h-4 transition-transform duration-200 
                  group-hover:translate-x-1"
                />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="group relative flex items-center justify-center sm:justify-start gap-3 px-6 sm:px-8 py-3 sm:py-4 
                  text-text-light dark:text-text-dark rounded-lg font-medium text-base
                  border border-border-light dark:border-border-dark overflow-hidden
                  w-full sm:w-auto"
                whileHover={!shouldReduceMotion ? { y: -2 } : {}}
                whileTap={!shouldReduceMotion ? { y: 1 } : {}}
              >
                <div
                  className="absolute inset-0 bg-hover-light dark:bg-hover-dark translate-y-[101%] 
                  group-hover:translate-y-0 transition-transform duration-300"
                />
                <span className="relative">Nezávazně konzultovat</span>
                <ArrowRight
                  className="relative w-4 h-4 transition-transform duration-200 
                  group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Animation - Hidden on mobile, visible on tablet and up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.3 : 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 
              backdrop-blur-sm border border-blue-500/10 dark:border-blue-400/10
              hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300
              hidden md:block"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <WebBuildingAnimation />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
