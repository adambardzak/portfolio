"use client";

import AnimatedCursor from "@/components/AnimatedCursor";
import { AnimatePresence } from "framer-motion";

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AnimatePresence mode="wait">{children}</AnimatePresence>
      <AnimatedCursor />
    </html>
  );
}
