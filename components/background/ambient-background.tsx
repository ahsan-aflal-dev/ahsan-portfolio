"use client";

import { motion } from "motion/react";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-[#050509]" />

      {/* Large liquid light */}
      <motion.div
        className="absolute -left-[18%] -top-[20%] h-[55vw] w-[55vw] rounded-full bg-[#8D0B93]/10 blur-[140px]"
        animate={{
          x: [0, 45, -20, 0],
          y: [0, 30, 70, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink light */}
      <motion.div
        className="absolute -right-[12%] top-[12%] h-[40vw] w-[40vw] rounded-full bg-[#FF057C]/[0.055] blur-[130px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 55, -25, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Deep blue atmospheric light */}
      <motion.div
        className="absolute -bottom-[20%] left-[25%] h-[45vw] w-[45vw] rounded-full bg-[#321575]/10 blur-[150px]"
        animate={{
          x: [0, 35, -35, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fine radial atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(141,11,147,0.055), transparent 38%), radial-gradient(circle at 80% 65%, rgba(50,21,117,0.045), transparent 32%)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.42) 100%)",
        }}
      />
    </div>
  );
}