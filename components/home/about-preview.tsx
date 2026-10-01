"use client";

import { ArrowUpRight, Brain, Code2, Network, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const capabilities = [
  {
    icon: Brain,
    label: "Intelligence",
    description: "Machine learning, neural networks & LLM systems",
  },
  {
    icon: Network,
    label: "Agents",
    description: "Autonomous systems that reason, use tools & act",
  },
  {
    icon: Code2,
    label: "Engineering",
    description: "Reliable software, APIs, databases & infrastructure",
  },
  {
    icon: Sparkles,
    label: "Experimentation",
    description: "Building, evaluating, breaking & improving systems",
  },
];

export function AboutPreview() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="page-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-white/30" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Who am I?
          </span>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Main statement */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
          >
            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              I&apos;m Ahsan.
              <br />
              <span className="text-[var(--muted-strong)]">
                I build systems
              </span>
              <br />
              <span className="text-gradient">
                that become intelligent.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              An AI/ML engineer focused on understanding how intelligent
              systems work — then turning those ideas into software that can
              learn, reason, adapt, and act.
            </p>

            <a
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              More about Ahsan

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Intelligence system */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8D0B93]/10 blur-[70px]" />

              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                    AHSAN / CORE
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Intelligence Stack
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF057C] shadow-[0_0_10px_#FF057C]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Core */}
              <div className="relative flex min-h-[360px] items-center justify-center">
                {/* Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-48 w-48 rounded-full border border-white/[0.07] border-dashed"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-32 w-32 rounded-full border border-[#8D0B93]/20"
                />

                {/* Center */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    boxShadow: [
                      "0 0 0 rgba(255,5,124,0)",
                      "0 0 45px rgba(255,5,124,0.15)",
                      "0 0 0 rgba(255,5,124,0)",
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#08070a]/90 backdrop-blur-xl"
                >
                  <Image
                    src="/brand/ahsan-mark.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                </motion.div>

                {/* Orbit labels */}
                <div className="absolute left-1/2 top-[8%] -translate-x-1/2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Learn
                </div>

                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Act
                </div>

                <div className="absolute left-[4%] top-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Reason
                </div>

                <div className="absolute right-[4%] top-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                  Understand
                </div>
              </div>

              {/* Capabilities */}
              <div className="relative grid gap-2 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3 transition-colors hover:bg-white/[0.05]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-white/60">
                          <Icon size={14} />
                        </div>

                        <div>
                          <p className="text-xs font-medium text-white/80">
                            {item.label}
                          </p>

                          <p className="mt-1 text-[10px] leading-4 text-white/30">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}