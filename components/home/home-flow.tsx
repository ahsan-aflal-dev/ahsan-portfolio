"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type HomeFlowProps = {
  children: ReactNode;
};

const transition = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function HomeFlow({ children }: HomeFlowProps) {
  return (
    <div className="relative">
      {children}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[-1] h-screen overflow-hidden"
      >
        <motion.div
          className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8D0B93]/[0.035] blur-[120px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[8%] top-[55%] h-[280px] w-[280px] rounded-full bg-[#FF057C]/[0.025] blur-[110px]"
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[100vh] h-[70vh] bg-gradient-to-b from-transparent via-[#8D0B93]/[0.012] to-transparent"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      />
    </div>
  );
}