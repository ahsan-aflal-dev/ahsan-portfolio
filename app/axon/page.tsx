"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Database,
  GitBranch,
  Layers3,
  Network,
  Sparkles,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

import { PageShell } from "@/components/layout/page-shell";
import { EcosystemMap } from "@/app/axon/ecosystem-map";
import Link from "next/link";

const systemNodes = [
  {
    id: "01",
    title: "INTELLIGENCE",
    description: "Models, reasoning, learning",
    icon: Brain,
    position: "left-[4%] top-[16%]",
  },
  {
    id: "02",
    title: "MEMORY",
    description: "Knowledge, context, persistence",
    icon: Database,
    position: "right-[4%] top-[16%]",
  },
  {
    id: "03",
    title: "AGENTS",
    description: "Planning, tools, action",
    icon: Network,
    position: "left-[7%] bottom-[15%]",
  },
  {
    id: "04",
    title: "EVALUATION",
    description: "Measurement, experiments",
    icon: Target,
    position: "right-[7%] bottom-[15%]",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand before abstraction",
    description:
      "Build enough understanding of the underlying system before hiding it behind higher-level abstractions.",
  },
  {
    number: "02",
    title: "Systems over isolated features",
    description:
      "Treat intelligence as an interaction between models, memory, tools, environments, and feedback.",
  },
  {
    number: "03",
    title: "Evidence over assumption",
    description:
      "Use experiments and evaluation to understand what a system actually does rather than relying only on intuition.",
  },
  {
    number: "04",
    title: "Build toward autonomy",
    description:
      "Progressively connect capabilities so systems can move from prediction toward reasoning, planning, and action.",
  },
];

const architecture = [
  ["01", "FOUNDATION", "Engineering + mathematics + ML"],
  ["02", "INTELLIGENCE", "Models + representations + reasoning"],
  ["03", "SYSTEMS", "Memory + tools + APIs + infrastructure"],
  ["04", "AGENTS", "Planning + action + observation"],
  ["05", "AUTONOMY", "Interaction + feedback + adaptation"],
];

export default function AxonPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-20 sm:pb-28">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                AXON / ECOSYSTEM
              </span>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-7xl font-medium tracking-[-0.075em] text-white sm:text-8xl lg:text-[10rem]">
                  AXON
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                  The broader ecosystem behind AHSAN&apos;s work — a direction
                  for building intelligent systems that understand, reason,
                  learn, and act.
                </p>
              </div>

              <div className="max-w-xs lg:pb-2">
                <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-white/20">
                  AHSAN
                  <br />
                  ↓
                  <br />
                  BUILDS
                  <br />
                  ↓
                  <br />
                  AXON
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System visual */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-24">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#08080b]">
              {/* Ambient glows */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8D0B93]/10 blur-[90px]"
                animate={{
                  scale: [1, 1.15, 0.95, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Connection lines */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 520"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M180 130 C320 130 350 260 500 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ strokeDashoffset: [0, -48] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.path
                  d="M820 130 C680 130 650 260 500 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ strokeDashoffset: [0, -48] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.path
                  d="M200 400 C330 400 360 280 500 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ strokeDashoffset: [0, -48] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.path
                  d="M800 400 C670 400 640 280 500 260"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  animate={{ strokeDashoffset: [0, -48] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* Center */}
              <motion.div
                className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.035] shadow-2xl backdrop-blur-xl"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(141,11,147,0)",
                    "0 0 70px rgba(141,11,147,0.12)",
                    "0 0 0 rgba(141,11,147,0)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-center">
                  <Sparkles
                    size={19}
                    className="mx-auto text-white/45"
                  />

                  <p className="mt-3 text-sm font-semibold tracking-[0.25em] text-white/75">
                    AXON
                  </p>

                  <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                    SYSTEM
                  </p>
                </div>
              </motion.div>

              {/* Nodes */}
              {systemNodes.map((node) => {
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.id}
                    className={`absolute ${node.position} hidden w-44 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl sm:block`}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                        <Icon size={13} className="text-white/30" />
                      </div>

                      <span className="font-mono text-[8px] text-white/15">
                        {node.id}
                      </span>
                    </div>

                    <p className="mt-5 text-[10px] font-medium tracking-[0.12em] text-white/55">
                      {node.title}
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-white/20">
                      {node.description}
                    </p>
                  </motion.div>
                );
              })}

              {/* Mobile nodes */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2 sm:hidden">
                {systemNodes.map((node) => {
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.id}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 backdrop-blur-xl"
                    >
                      <Icon size={13} className="text-white/30" />

                      <p className="mt-3 text-[8px] tracking-[0.1em] text-white/45">
                        {node.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="absolute bottom-6 left-6 hidden font-mono text-[7px] uppercase tracking-[0.18em] text-white/15 sm:block">
                AXON / SYSTEM MAP / ACTIVE CONCEPT
              </div>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                What is AXON?
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                A direction,
                <br />
                not just a name.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-8 tracking-[-0.02em] text-white/60 sm:text-2xl sm:leading-9">
                AXON represents the larger ecosystem around the work:
                experiments, systems, research, tools, and future products
                connected by a common interest in machine intelligence.
              </p>

              <p className="mt-7 text-sm leading-7 text-white/30 sm:text-base sm:leading-8">
                AHSAN is the engineer and creator. AXON is the broader system
                and brand that those efforts can eventually grow into. The
                distinction keeps the personal identity clear while leaving
                room for larger projects and products in the future.
              </p>
            </div>
          </div>
        </section>

        {/* System map */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  System Map
                </span>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  From foundation to autonomy.
                </h2>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/15">
                05 LAYERS
              </span>
            </div>

            <div className="mt-12 space-y-2">
              {architecture.map(([number, title, description], index) => (
                <div
                  key={number}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:bg-white/[0.035] sm:p-6"
                >
                  <div
                    className="absolute bottom-0 left-0 top-0 w-px bg-white/10 transition-all duration-500 group-hover:bg-white/30"
                    style={{
                      opacity: 1 - index * 0.12,
                    }}
                  />

                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[9px] text-white/15">
                      {number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium tracking-[0.08em] text-white/60">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs text-white/25">
                        {description}
                      </p>
                    </div>

                    <Layers3
                      size={14}
                      className="text-white/10 transition-colors group-hover:text-white/35"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Principles
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                How AXON
                <br />
                should evolve.
              </h2>
            </div>

            <div className="space-y-2">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:bg-white/[0.035]"
                >
                  <div className="flex gap-5">
                    <span className="font-mono text-[9px] text-white/15">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-white/65">
                        {principle.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/30">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-24 sm:py-32">
            <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Direction
                  </span>

                  <h2 className="mt-5 max-w-4xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    Build the intelligence.
                    <br />
                    Then build what it can become.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                    AXON is intentionally long-term. The immediate objective
                    is learning and engineering. The larger objective is to
                    connect those capabilities into systems that can do more
                    than isolated models ever could.
                  </p>
                </div>

                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
                >
                  <ArrowLeft
                    size={14}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Back to AHSAN
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final signal */}
        <section className="page-container py-16">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <GitBranch size={15} className="text-white/15" />

            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/15">
              AHSAN → AXON → INTELLIGENT SYSTEMS
            </p>

            <a
              href="/projects"
              className="group inline-flex items-center gap-2 text-xs text-white/25 transition hover:text-white/60"
            >
              Explore the systems
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </section>
        <EcosystemMap />
      </main>
    </PageShell>
  );
}