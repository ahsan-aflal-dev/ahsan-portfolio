"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const nodes = [
  { x: 50, y: 28 },
  { x: 34, y: 43 },
  { x: 66, y: 43 },
  { x: 28, y: 64 },
  { x: 50, y: 58 },
  { x: 72, y: 64 },
];

const connections = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [4, 5],
];

export function SystemIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return !sessionStorage.getItem("ahsan-intro-seen");
  });

  const [phase, setPhase] = useState(0);

  const [reducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  });

  useEffect(() => {
    if (!visible || reducedMotion) {
      return;
    }

    if (reducedMotion) {
      sessionStorage.setItem("ahsan-intro-seen", "true");
      return;
    }

    const timers = [
      window.setTimeout(() => setPhase(1), 350),
      window.setTimeout(() => setPhase(2), 850),
      window.setTimeout(() => setPhase(3), 1450),
      window.setTimeout(() => setPhase(4), 2050),
      window.setTimeout(() => setPhase(5), 2650),
      window.setTimeout(() => {
        sessionStorage.setItem("ahsan-intro-seen", "true");
        setPhase(6);
      }, 3350),
      window.setTimeout(() => setVisible(false), 3850),
    ];

    return () => {
      timers.forEach(window.clearTimeout);
    };
  }, [visible, reducedMotion]);

  if (!visible || reducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[#050507]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Ambient light */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8D0B93]/10 blur-[150px]"
            animate={{
              scale: phase >= 3 ? [1, 1.08, 1] : 1,
              opacity: phase >= 3 ? [0.5, 0.8, 0.5] : 0.45,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute left-[20%] top-[25%] h-[240px] w-[240px] rounded-full bg-[#FF057C]/5 blur-[120px]"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Fine grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Top telemetry */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-6 right-6 top-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 sm:left-8 sm:right-8 sm:top-8"
          >
            <span>AHSAN / SYSTEM</span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF057C] shadow-[0_0_10px_#FF057C]" />
              ONLINE
            </span>
          </motion.div>

          {/* Center system */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[360px] w-[360px] sm:h-[440px] sm:w-[440px]">
              {/* Outer rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: phase >= 1 ? 0.35 : 0,
                  scale: phase >= 1 ? 1 : 0.85,
                }}
                transition={{ duration: 0.8 }}
                className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: phase >= 2 ? 0.18 : 0,
                  scale: phase >= 2 ? 1 : 0.7,
                }}
                transition={{ duration: 1 }}
                className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
              />

              {/* Rotating technical ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
              />

              {/* Connections */}
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {connections.map(([from, to], index) => {
                  const start = nodes[from];
                  const end = nodes[to];

                  return (
                    <motion.line
                      key={`${from}-${to}`}
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="0.18"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: phase >= 2 ? 1 : 0,
                        opacity: phase >= 2 ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}

                {/* Triangle */}
                <motion.polygon
                  points="50,28 28,64 72,64"
                  fill="none"
                  stroke="rgba(255,5,124,0.55)"
                  strokeWidth="0.25"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: phase >= 3 ? 1 : 0,
                    opacity: phase >= 3 ? 1 : 0,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </svg>

              {/* Nodes */}
              {nodes.map((node, index) => (
                <motion.div
                  key={`${node.x}-${node.y}`}
                  className="absolute"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: phase >= 1 ? 1 : 0,
                    scale: phase >= 1 ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="absolute -inset-2 rounded-full bg-[#FF057C]/20 blur-md" />

                  <span className="relative block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.7)] sm:h-2 sm:w-2" />
                </motion.div>
              ))}

              {/* Actual AHSAN mark */}
              <motion.div
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: phase >= 4 ? 1 : 0,
                  scale: phase >= 4 ? 1 : 0.65,
                  filter:
                    phase >= 4 ? "blur(0px)" : "blur(12px)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute h-32 w-32 rounded-full bg-[#8D0B93]/15 blur-[45px] sm:h-40 sm:w-40" />

                  <Image
                    src="/brand/ahsan-mark.png"
                    alt=""
                    width={96}
                    height={96}
                    className="relative h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
              </motion.div>
            </div>
          </div>

          {/* Status */}
          <div className="absolute bottom-8 left-6 right-6 sm:bottom-10 sm:left-8 sm:right-8">
            <div className="flex items-end justify-between">
              <div>
                <motion.p
                  key={phase}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35"
                >
                  {phase < 2 && "Initializing system"}
                  {phase === 2 && "Mapping intelligence"}
                  {phase === 3 && "Establishing identity"}
                  {phase === 4 && "Identity recognized"}
                  {phase === 5 && "AHSAN / AI · ML"}
                  {phase >= 6 && "System ready"}
                </motion.p>
              </div>

              <motion.div
                className="font-mono text-[9px] tracking-[0.2em] text-white/25"
                animate={{ opacity: [0.25, 0.65, 0.25] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                {String(Math.min(100, phase * 20)).padStart(
                  3,
                  "0",
                )}
                %
              </motion.div>
            </div>

            <div className="mt-3 h-px w-full overflow-hidden bg-white/[0.06]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#321575] via-[#8D0B93] to-[#FF057C]"
                initial={{ width: "0%" }}
                animate={{
                  width: `${Math.min(100, phase * 20)}%`,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>

          {/* Identity reveal */}
          <AnimatePresence>
            {phase >= 5 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[17%] left-1/2 -translate-x-1/2 text-center"
              >
              <div className="relative mx-auto h-10 w-[200px] sm:h-12 sm:w-[240px]">
                <Image
                  src="/brand/ahsan-logo.png"
                  alt="AHSAN"
                  fill
                  sizes="(min-width: 640px) 240px, 200px"
                  className="object-contain opacity-90"
                />
              </div>

                <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/35">
                  AI / ML Engineer
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}