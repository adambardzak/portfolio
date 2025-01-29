"use client";

import React, { useState, useEffect } from "react";
import {
  AArrowDownIcon,
  ArrowDown,
  ArrowDown01,
  ArrowDownAZ,
  ArrowDownCircle,
  ArrowUpDown,
  ArrowUpDownIcon,
  ArrowUpRight,
} from "lucide-react";
import ProjectPreview from "./ProjectsShowcase";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen  select-none font-space">
      <div className="relative min-h-screen flex items-center py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          {/* Main container with initial fade */}
          <div
            className={`space-y-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-between w-full
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            <div>
              <div className="space-y-8">
                {/* Title with slide up */}
                <div className="overflow-hidden">
                  <div
                    className={`text-lg text-text-muted-light dark:text-text-muted-dark tracking-wide
                    transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms]
                    ${isVisible ? "translate-y-0" : "translate-y-full"}`}
                  >
                    Fullstack Developer & Designer
                  </div>
                </div>

                <h1 className="space-y-3">
                  {/* First name with slide up */}
                  <div className="overflow-hidden">
                    <div
                      className={`block text-6xl md:text-8xl font-normal text-text-light dark:text-text-dark
                      tracking-tight cursor-default hover:translate-x-2 hover:text-text-muted-light
                      dark:hover:text-text-muted-dark transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      delay-[400ms] ${
                        isVisible ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      Adam
                    </div>
                  </div>
                  {/* Last name with slide up */}
                  <div className="overflow-hidden">
                    <div
                      className={`block text-6xl md:text-8xl font-normal text-text-light dark:text-text-dark
                      tracking-tight cursor-default hover:translate-x-2 hover:text-text-muted-light
                      dark:hover:text-text-muted-dark transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      delay-[600ms] ${
                        isVisible ? "translate-y-0" : "translate-y-full"
                      }`}
                    >
                      Bardzak
                    </div>
                  </div>
                </h1>

                {/* Description with slide up */}
                <div className="overflow-hidden max-w-xl">
                  <div
                    className={`text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed
                    tracking-wide transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                    delay-[800ms] ${
                      isVisible ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Creating thoughtful digital experiences through clean
                    aesthetics and functional design solutions.
                  </div>
                </div>
              </div>

              {/* CTA with slide up */}
              <div className="overflow-hidden pt-8">
                <div
                  className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
                  delay-[1000ms] ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <button className="group flex items-center gap-4">
                    <span className="text-text-light dark:text-text-dark text-lg relative tracking-wide">
                      Get In Touch
                      <span
                        className="absolute left-0 right-0 bottom-0 h-px bg-text-light dark:bg-text-dark 
                        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 
                        ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 text-text-light dark:text-text-dark transform 
                      transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="relative pt-24 w-full flex justify-end">
              <ProjectPreview />
            </div> */}
          </div>

          {/* Footer with fade up */}
          <div
            className={`absolute bottom-12 left-0 right-0 px-8 lg:px-16 transition-all
              duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[1200ms]
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex justify-between items-end max-w-7xl mx-auto">
              <motion.button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                  opacity: { duration: 1, delay: 1.2 },
                //   y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="text-text-muted-light dark:text-text-muted-dark text-sm tracking-wide flex items-center gap-2 group cursor-pointer"
              >
                Scroll Down
                <ArrowDown className="w-4 h-4  group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
              <div className="text-text-muted-light dark:text-text-muted-dark text-sm tracking-wide flex items-center gap-2">
                <div className="bg-green-500 aspect-square h-3 w-3 rounded-full animate-pulse" />
                <b className="text-green-500"> Available now </b> — Prague,
                Czech Republic
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
