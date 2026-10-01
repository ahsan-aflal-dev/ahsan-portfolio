"use client";

import { ArrowUpRight, Orbit, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function AxonPreview() {
  return (
    <section
  id="axon"
  className="relative py-28 sm:py-36"
>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.025]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8D0B93]/10 blur-[130px]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05] border-dashed"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8D0B93]/15"
            />
          </div>

          <div className="relative grid min-h-[620px] items-center gap-16 px-7 py-16 sm:px-12 lg:grid-cols-[1fr_0.8fr] lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Beyond the portfolio
                </span>
              </div>

              <h2 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                AXON
              </h2>

              <p className="mt-8 max-w-xl text-[clamp(1.2rem,2.5vw,2rem)] leading-[1.2] tracking-[-0.025em] text-white/65">
                The ecosystem behind the work.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                A long-term vision for building intelligent systems,
                experiments, tools, and technologies that extend beyond a
                single project.
              </p>

              <a
                href="/axon"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Enter AXON
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[380px] sm:w-[380px]"
            >
              <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

              <div className="absolute inset-[15%] rounded-full border border-white/[0.06]" />

              <div className="absolute inset-[30%] rounded-full border border-[#8D0B93]/20" />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0 rgba(255,5,124,0)",
                    "0 0 70px rgba(255,5,124,0.18)",
                    "0 0 0 rgba(255,5,124,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#08070a]/90 backdrop-blur-2xl sm:h-36 sm:w-36"
              >
                <span className="text-3xl font-semibold tracking-[-0.06em] text-gradient sm:text-4xl">
                  AXON
                </span>
              </motion.div>

              <div className="absolute left-[2%] top-1/2 flex -translate-y-1/2 items-center gap-2">
                <Orbit size={13} className="text-white/30" />
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                  Systems
                </span>
              </div>

              <div className="absolute right-[0%] top-1/2 flex -translate-y-1/2 items-center gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                  Intelligence
                </span>
                <Sparkles size={13} className="text-white/30" />
              </div>

              <span className="absolute left-1/2 top-[2%] -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
                Explore
              </span>

              <span className="absolute bottom-[2%] left-1/2 -translate-x-1/2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
                Build
              </span>
            </motion.div>
          </div>

          <div className="relative border-t border-white/[0.07] px-7 py-5 sm:px-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                AHSAN → AXON
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                Personal work → Long-term ecosystem
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}