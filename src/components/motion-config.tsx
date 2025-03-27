"use client";

import { useReducedMotion } from "framer-motion";
import { createContext, useContext, ReactNode } from "react";

type MotionConfigContextType = {
  shouldReduceMotion: boolean;
};

const MotionConfigContext = createContext<MotionConfigContextType>({
  shouldReduceMotion: false,
});

export function MotionConfigProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion() || false;
  
  return (
    <MotionConfigContext.Provider value={{ shouldReduceMotion }}>
      {children}
    </MotionConfigContext.Provider>
  );
}

export function useMotionConfig() {
  return useContext(MotionConfigContext);
} 