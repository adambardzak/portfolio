"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { useMotionConfig } from "@/components/motion-config";

const AnimatedCursor = () => {
  const { shouldReduceMotion } = useMotionConfig();
  const router = useRouter();
  
  // Initialize all hooks first, before any conditional returns
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Magnetic effect springs
  const magneticX = useMotionValue(0);
  const magneticY = useMotionValue(0);

  // Smooth spring for general cursor movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // More bouncy spring for magnetic effect
  const magneticSpringConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const magneticXSpring = useSpring(magneticX, magneticSpringConfig);
  const magneticYSpring = useSpring(magneticY, magneticSpringConfig);
  
  // Add this condition to check if we should render the cursor
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldRenderCursor = !shouldReduceMotion && !isMobile;

  // Handle navigation with transition
  const handleNavigation = async (href: string, e: MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
    setClickPosition({ x: e.clientX, y: e.clientY });

    await new Promise((resolve) => setTimeout(resolve, 1200));
    router.push(href);
    setIsTransitioning(false);
  };

  useEffect(() => {
    if (!shouldRenderCursor) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element?.matches("button, a, [role='button']")) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        magneticX.set((centerX - e.clientX) * 0.3);
        magneticY.set((centerY - e.clientY) * 0.3);
        setIsHovered(true);

        if (element.tagName === "A") {
          const href = element.getAttribute("href");
          if (href) {
            (element as HTMLElement).onclick = (e) =>
              handleNavigation(href, e as unknown as MouseEvent);
          }
        }
      } else {
        magneticX.set(0);
        magneticY.set(0);
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, magneticX, magneticY, shouldRenderCursor, handleNavigation]);

  if (!shouldRenderCursor) {
    return null;
  }
  return (
    <>
      {/* Regular cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: magneticXSpring,
          translateY: magneticYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isHovered ? 2.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-text-light dark:bg-text-dark mix-blend-color-dodge" />
        </motion.div>
      </motion.div>

      {/* Page transition overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[998] bg-light dark:bg-text-light"
            initial={{
              clipPath: `circle(0px at ${clickPosition.x}px ${clickPosition.y}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${clickPosition.x}px ${clickPosition.y}px)`,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.4, delay: 0.8 },
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedCursor;

