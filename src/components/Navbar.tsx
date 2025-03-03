"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import AnimatedMenuButton from "./AnimatedMenuButton";
import clsx from "clsx";

type NavItem = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle scroll
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
        const progress = Math.min(
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
            100,
          100
        );
        setScrollProgress(progress);
      };

      // Set initial scroll state
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const navItems: NavItem[] = [
    { label: "Služby", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-light/90 dark:bg-dark/90 backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="text-text-light dark:text-text-dark tracking-tight hover:text-text-muted-light 
              dark:hover:text-text-muted-dark transition-colors duration-300"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xl font-normal">&#123; ab &#125;</span>
            </motion.a>

            {/* Center Navigation */}
            <div className="md:flex items-center gap-12 hidden">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-text-light dark:text-text-dark text-sm tracking-wide relative py-2 group"
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-text-light dark:bg-text-dark transform scale-x-0 
                    group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)]"
                    />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-10 h-10 rounded-full flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-hover-light dark:bg-hover-dark"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4 text-text-dark" />
                  ) : (
                    <Moon className="w-4 h-4 text-text-light" />
                  )}
                </motion.div>
              </motion.button>

              {/* Contact Button */}
              <motion.button
                onClick={scrollToContact}
                className="relative h-10 px-5 rounded-full md:flex items-center gap-2 group hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-border-light dark:border-border-dark"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-hover-light dark:bg-hover-dark rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="relative text-sm text-text-light dark:text-text-dark">
                  Kontaktujte mě
                </span>
                <ArrowUpRight
                  className="relative w-4 h-4 text-text-light dark:text-text-dark 
                group-hover:rotate-45 transition-transform duration-200"
                />
              </motion.button>
              <AnimatedMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <motion.div
          className={clsx(
            "absolute bottom-0 left-0 w-full h-px bg-progress-light dark:bg-progress-dark",
            isOpen && "hidden"
          )}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="h-full bg-progress-active-light dark:bg-progress-active-dark"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.1s linear",
            }}
          />
        </motion.div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" fixed w-full h-full z-40"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-light dark:bg-dark" />

            {/* Menu Items Container */}
            <div className="relative h-full w-full flex flex-col justify-center px-8">
              {navItems.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 80, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1 + i * 0.1,
                    }}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl font-monument py-4 text-text-light dark:text-text-dark"
                  >
                    {item.label}
                  </motion.a>
                </div>
              ))}
              <motion.button
                className="relative h-12 px-5 flex mt-6 w-fit rounded-full items-center gap-2 group"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + navItems.length * 0.1,
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border border-border-light dark:border-border-dark"
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-hover-light dark:bg-hover-dark rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="relative text-md text-text-light dark:text-text-dark">
                  Contact
                </span>
                <ArrowUpRight className="relative w-4 h-4 text-text-light dark:text-text-dark " />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
