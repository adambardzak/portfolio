"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
}

const WordAnimated = ({ word, index }: { word: string; index: number }) => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wordRef, {
    once: true,
    amount: 0.5,
    margin: "-100px",
  });

  const getAnimation = (index: number) => {
    const animations = [
      // 3D flip from top
      {
        initial: { opacity: 0, rotateX: -90, scale: 0.5 },
        animate: { opacity: 1, rotateX: 0, scale: 1 },
        preserve3d: true,
      },
      // Regular scale with rotation
      {
        initial: { opacity: 0, scale: 1.5, rotate: 15 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        preserve3d: false,
      },
      // 3D double flip
      {
        initial: { opacity: 0, rotateX: 180, scale: 0.5 },
        animate: { opacity: 1, rotateX: 0, scale: 1 },
        preserve3d: true,
      },
      // Regular fade with scale
      {
        initial: { opacity: 0, scale: 0.7 },
        animate: { opacity: 1, scale: 1 },
        preserve3d: false,
      },
      // 3D flip from bottom
      {
        initial: { opacity: 0, rotateX: 90, scale: 0.8 },
        animate: { opacity: 1, rotateX: 0, scale: 1 },
        preserve3d: true,
      },
      // Regular spiral
      {
        initial: { opacity: 0, scale: 0.5, rotate: 180 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        preserve3d: false,
      },
    ];

    return animations[index % animations.length];
  };

  const animation = getAnimation(index);

  return (
    <motion.span
      ref={wordRef}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1,
        velocity: 2,
      }}
      className="inline-block mr-4 origin-center"
      style={{
        perspective: animation.preserve3d ? "1000px" : "none",
        transformStyle: animation.preserve3d ? "preserve-3d" : "flat",
      }}
    >
      {word}
    </motion.span>
  );
};

const Text = ({ text }: AnimatedTextProps) => {
  const words = text.split(" ");
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section className="h-[600vh] relative" ref={targetRef}>
      <div className="sticky top-0 z-10 flex items-center justify-start w-full h-screen overflow-hidden bg-gray-600">
        <motion.div
          className="text-[80pt] font-black leading-normal whitespace-nowrap text-white"
          style={{ x }}
        >
          {words.map((word, index) => (
            <WordAnimated key={index} word={word} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Text;
