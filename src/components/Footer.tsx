"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="relative z-10 transition-colors duration-300 py-32">
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
                <h4 className="font-monument text-sm text-blue-500 dark:text-blue-400">
                  Navigace
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#services"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Služby
                    </a>
                  </li>
                  <li>
                    <a
                      href="#process"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Proces
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Projekty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-monument text-sm text-blue-500 dark:text-blue-400">
                  Sociální sítě
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://github.com/adambardzak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/adambardzak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              © {currentYear} Všechna práva vyhrazena
            </p>
            <div className="flex gap-6">
              <Link
                href="/legal"
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
              >
                Právní informace
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
