"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WebBuildingAnimation from "./WebBuildingAnimation";
import clsx from "clsx";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={clsx(
        "min-h-screen flex items-center",
        //  "bg-[#fafafa] dark:bg-[#121212]",
        "transition-colors duration-300"
      )}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.02),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span
                className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
                border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]"
              >
                KVALITNÍ WEBY BEZ KOMPROMISŮ
              </span>
            </motion.div>

            {/* Main content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-monument text-4xl lg:text-5xl xl:text-6xl text-text-light dark:text-text-dark leading-tight"
              >
                Děláte byznys?
                <br />
                Potřebujete web.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-xl"
              >
                Žádné šablony, žádné kompromisy. Postavím vám web na míru, který
                bude fungovat a vydělávat.
              </motion.p>
            </div>

            {/* CTA and Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <a
                href="#calculator"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-text-light dark:bg-text-dark 
                  text-light dark:text-dark rounded-lg font-medium transition-all duration-300 
                  hover:bg-blue-500 dark:hover:bg-blue-400"
              >
                Kolik to stojí?
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="flex items-center divide-x divide-blue-500/10 dark:divide-blue-400/10">
                <div className="pr-8">
                  <div className="font-monument text-3xl text-text-light dark:text-text-dark mb-1">
                    5+
                  </div>
                  <div className="text-sm text-blue-500 dark:text-blue-400">
                    Let praxe
                  </div>
                </div>
                <div className="pl-8">
                  <div className="font-monument text-3xl text-text-light dark:text-text-dark mb-1">
                    100%
                  </div>
                  <div className="text-sm text-blue-500 dark:text-blue-400">
                    Bez šablon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl overflow-hidden p-8 
              backdrop-blur-sm border border-blue-500/10 dark:border-blue-400/10
              hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors duration-300"
          >
            <WebBuildingAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
