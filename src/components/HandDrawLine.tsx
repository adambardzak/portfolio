"use client";

import { motion } from "framer-motion";

type SketchyUnderlineProps = {
  className?: string;
  color?: string;
};

const SketchyUnderline = ({
  className = "",
  color = "#db2777",
}: SketchyUnderlineProps) => {
  const createSketchyPath = () => {
    let path = "";
    const segments = 16; // More segments for more controlled zigzag
    const baseY = 10; // Base line position
    const amplitude = 3; // Height of zigzags

    for (let i = 0; i <= segments; i++) {
      const x = (i * 100) / segments;
      // Alternate between up and down for zigzag
      const y = baseY + (i % 2 === 0 ? amplitude : -amplitude);

      if (i === 0) {
        path += `M${x},${y} `;
      } else {
        // Add a slight randomness to the zigzag
        const smallRandomness = Math.random() * 0.5 - 0.25;
        path += `L${x},${y + smallRandomness} `;
      }
    }

    return path;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "100%", // Position it below the text
        marginTop: "-4px", // Fine-tune the position
        left: "-32px",
        right: "-32px",
        height: "48px",
        overflow: "visible",
        pointerEvents: "none",
        zIndex: -1, // Ensure it's below the text
      }}
    >
      <svg
        style={{
          width: "calc(100% + 64px)",
          height: "100%",
          overflow: "visible",
          display: "block",
        }}
        viewBox="-16 0 132 24"
        preserveAspectRatio="none"
      >
        <motion.path
          d={createSketchyPath()}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ overflow: "visible" }}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  );
};

export default SketchyUnderline;
