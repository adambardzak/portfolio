"use client";

import AnimatedCursor from "@/components/AnimatedCursor";
import { AnimatePresence } from "framer-motion";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <AnimatedCursor />
    </>
  );
}
