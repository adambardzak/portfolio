"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMotionConfig } from "@/components/motion-config";
import { useEffect, useState, useRef } from "react";

export default function ScrollIndicator() {
  const { shouldReduceMotion } = useMotionConfig();
  const [isMounted, setIsMounted] = useState(false);

  // Only enable scroll tracking after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't track scroll if not mounted or if reduced motion is preferred
  if (!isMounted || shouldReduceMotion) {
    return null;
  }

  return <ScrollIndicatorContent />;
}

// Separate component to avoid running scroll hooks during SSR
function ScrollIndicatorContent() {
  // Create a ref for the document element with the correct type
  const documentRef = useRef<HTMLElement | null>(null);

  // Set the ref to document.documentElement after mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      documentRef.current = document.documentElement;
    }
  }, []);

  // Use requestAnimationFrame for smoother performance
  const { scrollYProgress } = useScroll({
    axis: "y",
    smooth: 0.1,
    // Use the ref instead of direct DOM element
    container: documentRef,
  });

  // Use a spring with lower stiffness for smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-500 dark:bg-blue-400 z-50 origin-left"
      style={{ scaleX, transformOrigin: "0%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
