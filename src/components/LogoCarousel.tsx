"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMotionConfig } from "@/components/motion-config";

const LogoCarousel = () => {
  // Define consistent gap size
  const gapSize = "gap-8 md:gap-12 lg:gap-36";
  
  const logos1 = Array.from(
    { length: 4 },
    (_, i) => `/technologies/Frame ${58 + i}.svg`
  );
  const logos2 = Array.from(
    { length: 5 },
    (_, i) => `/technologies/Frame ${54 + i}.svg`
  );

  const [isMounted, setIsMounted] = useState(false);
  const { shouldReduceMotion } = useMotionConfig();

  // Only run animations after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR or if reduced motion is preferred
  if (!isMounted) {
    return <div className="w-full py-6 md:py-16" aria-hidden="true" />;
  }

  if (shouldReduceMotion) {
    return (
      <div className="w-full py-6 md:py-16">
        <div className="flex flex-col gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-8">
          <div className={`flex ${gapSize} overflow-x-auto pb-4`}>
            {logos1.map((logo, index) => (
              <Image
                key={`row1-${index}`}
                width={200}
                height={200}
                src={logo}
                alt={`Technology logo ${index + 1}`}
                className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
              />
            ))}
          </div>
          <div className={`flex ${gapSize} overflow-x-auto pb-4`}>
            {logos2.map((logo, index) => (
              <Image
                key={`row2-${index}`}
                width={200}
                height={200}
                src={logo}
                alt={`Technology logo ${index + 1}`}
                className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-6 md:py-16">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* First row - moving right */}
        <div className="relative overflow-hidden">
          <div className={`flex ${gapSize} animate-scroll-right-mobile md:animate-scroll-right`}>
            {/* First set of logos */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Duplicate set for seamless looping */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-duplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Third set to ensure no empty space */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos1.map((logo, index) => (
                <Image
                  key={`row1-triplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second row - moving left */}
        <div className="relative overflow-hidden">
          <div className={`flex ${gapSize} animate-scroll-left-mobile md:animate-scroll-left`}>
            {/* First set of logos */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Duplicate set for seamless looping */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-duplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Third set to ensure no empty space */}
            <div className={`flex ${gapSize} shrink-0`}>
              {logos2.map((logo, index) => (
                <Image
                  key={`row2-triplicate-${index}`}
                  width={200}
                  height={200}
                  src={logo}
                  alt={`Technology logo ${index + 1}`}
                  className="w-fit h-20 md:h-16 lg:h-24 object-contain dark:invert"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
