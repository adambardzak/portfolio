// TODO: adjust the background colors
// TODO: improve the design of cards and mictrointeractions

"use client";

import type { Skill } from "@/data/skills";
import { skills } from "@/data/skills";
import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  MotionValue,
  color,
} from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface SkillDetailProps {
  skill: Skill["items"][0];
  onClose: () => void;
  color: string;
}

type SkillPanelProps = {
  skill: Skill;
  index: number;
  activeIndex: number;
  color: string;
  setSelectedSkill: (skill: Skill["items"][0] | null) => void;
};

const useScrollLock = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};

const SkillDetail: React.FC<SkillDetailProps> = ({ skill, onClose, color }) => {
  useScrollLock();

  return createPortal(
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <motion.div
        className={`${color} w-full max-w-lg m-4 rounded-2xl p-6 relative bg-gray-900/95 backdrop-blur-md shadow-xl`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>

        <div className="space-y-6">
          <p className="text-white/80 leading-relaxed">{skill.description}</p>

          <div>
            <div className="flex justify-between text-sm text-white/80 mb-2">
              <span>Experience</span>
              <span>{skill.years} years</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/90"
                initial={{ width: 0 }}
                animate={{ width: `${(skill.years / 10) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm text-white/80 mb-2">
              <span>Proficiency</span>
              <span>{skill.proficiency}%</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/90"
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-4 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {["Projects", "Resources", "Articles", "Tools"].map((item) => (
              <motion.button
                key={item}
                className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 
                            transition-colors active:scale-95 transform"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const SkillPanel: React.FC<SkillPanelProps> = ({
  skill,
  index,
  activeIndex,
  setSelectedSkill,
}) => {
  const isActive = index === activeIndex;
  const offset = index - activeIndex;

  return (
    <motion.div
      key={skill.category}
      className="absolute left-1/2 top-1/2 w-[800px]"
      animate={{
        z: -offset * 1000,
        opacity: offset === 0 ? 1 : 0.3,
        scale: offset === 0 ? 1 : 0.8,
        x: "-50%",
        y: "-50%",
        pointerEvents: isActive ? "auto" : "none",
      }}
      transition={{
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <motion.div
        className={clsx(
          "h-[500px] rounded-3xl p-8 relative overflow-hidden",
          color,
          "bg-opacity-100",
          "after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent",
          "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/20 before:to-transparent"
        )}
        style={{
          backgroundImage: `
              radial-gradient(
                circle at top right,
                rgba(255,255,255,0.1),
                transparent 40%
              )
            `,
        }}
      >
        <div className="absolute inset-0 rounded-3xl shadow-inner" />

        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-10">
            <div className="p-4 bg-black/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <skill.icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">
                {skill.category}
              </h3>
              <p className="text-white/80 text-lg">{skill.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skill.items.map((item, itemIndex) => (
              <motion.button
                key={item.name}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event bubbling
                  setSelectedSkill(item);
                }}
                className={clsx(
                  "relative group bg-black/10 backdrop-blur-sm rounded-xl p-6 text-left",
                  "border border-white/5 transition-all duration-300",
                  "hover:bg-black/20 hover:border-white/10",
                  "z-20" // Ensure buttons are above other elements
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20,
                }}
                transition={{ delay: itemIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white text-lg">
                    {item.name}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full bg-white/40 
                                  group-hover:bg-white/60 transition-colors"
                  />
                </div>
                <p className="text-sm text-white/60 group-hover:text-white/80">
                  Click to explore details
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TunnelSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill["items"][0] | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (isScrolling) return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Only handle scroll if we're within the section
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();

        setIsScrolling(true);
        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = Math.max(
          0,
          Math.min(activeIndex + direction, skills.length - 1)
        );

        if (nextIndex !== activeIndex) {
          setActiveIndex(nextIndex);
        }

        setTimeout(() => setIsScrolling(false), 800);
      }
    },
    [activeIndex, isScrolling]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-900">
        <div
          className="relative w-full h-full"
          style={{ perspective: "1500px" }}
        >
          {skills.map((skill, index) => (
            <SkillPanel
              key={skill.category}
              skill={skill}
              color={skill.color}
              index={index}
              activeIndex={activeIndex}
              setSelectedSkill={setSelectedSkill}
            />
          ))}
        </div>

        {/* Navigation dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {skills.map((_, index) => (
            <button
              key={index}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-white scale-125"
                  : "bg-white/20 hover:bg-white/40"
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <SkillDetail
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
            color={skills[activeIndex].color}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default TunnelSection;
