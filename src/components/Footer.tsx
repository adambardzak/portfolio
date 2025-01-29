"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Github", url: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-light dark:bg-dark transition-colors duration-300 py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="font-monument text-5xl text-text-light dark:text-text-dark leading-tight"
              >
                Let&apos;s Start <br />
                Something New
              </motion.h2>
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
          <div className="flex justify-between items-end">
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.url}
                      className="font-monument text-text-muted-light dark:text-text-muted-dark hover:text-text-light hover:dark:text-text-dark transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Back to Top */}
            <div className="overflow-hidden">
              <motion.button
                onClick={scrollToTop}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark hover:text-text-light hover:dark:text-text-dark transition-colors duration-300"
              >
                Back to Top
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
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
              Built with Care
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
