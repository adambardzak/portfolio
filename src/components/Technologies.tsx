"use client";

import { SectionHeader } from "./ui/SectionHeader";
import LogoCarousel from "./LogoCarousel";
import clsx from "clsx";
export default function Technologies() {
  return (
    <section
      className={clsx(
        "relative py-32",
        // "bg-[#fafafa] dark:bg-[#121212]",
        "transition-colors duration-300"
      )}
    >
      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        <SectionHeader
          label="TECHNOLOGIE"
          title="Technická expertíza"
          description="Nástroje a technologie, které používám pro vytváření moderních webových aplikací"
        />
      </div>
      <LogoCarousel />
    </section>
  );
}
