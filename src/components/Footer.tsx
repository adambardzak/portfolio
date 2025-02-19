"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light dark:bg-dark transition-colors duration-300 py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <motion.h3
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="font-monument text-3xl text-text-light dark:text-text-dark"
              >
                Pojďme společně vytvořit něco výjimečného
              </motion.h3>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                <a
                  href="mailto:hello@adambardzak.com"
                  className="inline-block group"
                >
                  <span className="font-monument text-lg text-text-light dark:text-text-dark flex items-center gap-2">
                    hello@adambardzak.com
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-monument text-sm text-purple-600 dark:text-purple-400">
                  Navigace
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#services"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Služby
                    </a>
                  </li>
                  <li>
                    <a
                      href="#process"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Proces
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Projekty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-monument text-sm text-purple-600 dark:text-purple-400">
                  Sociální sítě
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/adambardzak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/adambardzak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-32 pt-8 border-t border-border-light dark:border-border-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center">
            <span className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark">
              © {currentYear} Adam Bardzak
            </span>
            <span className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark">
              Vytvořeno s láskou
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
