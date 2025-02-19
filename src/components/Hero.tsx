"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WebBuildingAnimation from "./WebBuildingAnimation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="text-sm tracking-wider text-text-muted-light dark:text-text-muted-dark font-medium px-4 py-2 rounded-full border border-border-light dark:border-border-dark">
                  KVALITNÍ WEBY BEZ KOMPROMISŮ
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-monument text-4xl lg:text-5xl xl:text-6xl text-text-light dark:text-text-dark leading-tight"
              >
                Děláte byznys?<br />
                Potřebujete web.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-xl"
              >
                Žádné šablony, žádné kompromisy. Postavím vám web na míru, který bude fungovat a vydělávat.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <a
                href="#calculator"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-text-light dark:bg-text-dark text-light dark:text-dark rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-text-light/5 dark:shadow-text-dark/5"
              >
                Kolik to stojí?
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center divide-x divide-border-light dark:divide-border-dark">
                <div className="pr-8">
                  <div className="font-monument text-3xl text-text-light dark:text-text-dark mb-1">
                    5+
                  </div>
                  <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Let praxe
                  </div>
                </div>
                <div className="pl-8">
                  <div className="font-monument text-3xl text-text-light dark:text-text-dark mb-1">
                    100%
                  </div>
                  <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Bez šablon
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-2xl  overflow-hidden p-8 backdrop-blur-sm border border-text-light/10 dark:border-text-dark/10 "
          >
            <WebBuildingAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
