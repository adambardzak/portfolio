"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos1 = Array.from(
    { length: 4 },
    (_, i) => `/technologies/Frame ${58 + i}.svg`
  );
  const logos2 = Array.from(
    { length: 5 },
    (_, i) => `/technologies/Frame ${54 + i}.svg`
  );

  const [row1Width, setRow1Width] = useState(0);
  const [row2Width, setRow2Width] = useState(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (row1Ref.current) setRow1Width(row1Ref.current.scrollWidth / 2);
    if (row2Ref.current) setRow2Width(row2Ref.current.scrollWidth / 2);
  }, []);

  return (
    <div className="w-full overflow-hidden py-16">
      <div className="flex flex-col gap-12">
        {/* First row */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={row1Ref}
            className="flex gap-12 md:gap-36"
            animate={{
              x: [0, -row1Width],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="flex gap-12 md:gap-36 shrink-0">
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-16 md:h-24 object-contain dark:invert"
                />
              ))}
            </div>
            <div className="flex gap-12 md:gap-36 shrink-0">
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-duplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-16 md:h-24 object-contain dark:invert"
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={row2Ref}
            className="flex gap-12 md:gap-36"
            animate={{
              x: [-row2Width, 0],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="flex gap-12 md:gap-36 shrink-0">
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-16 md:h-24 object-contain dark:invert"
                />
              ))}
            </div>
            <div className="flex gap-12 md:gap-36 shrink-0">
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-duplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-16 md:h-24 object-contain dark:invert"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
