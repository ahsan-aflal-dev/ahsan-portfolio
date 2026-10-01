"use client";

import {
  ArrowUpRight,
  BookOpen,
  Brain,
  FlaskConical,
  Lightbulb,
  Network,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import { PageShell } from "@/components/layout/page-shell";

const researchAreas = [
  {
    number: "01",
    icon: Brain,
    title: "Machine Learning",
    description:
      "Understanding learning algorithms, optimization, generalization, representations, and the behavior of models from first principles.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Deep Learning",
    description:
      "Exploring neural architectures, representation learning, training dynamics, and the systems that make modern deep learning possible.",
  },
  {
    number: "03",
    icon: Network,
    title: "LLM Systems",
    description:
      "Studying language models, transformers, inference, context, retrieval, memory, and the engineering surrounding modern LLM applications.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Intelligent Agents",
    description:
      "Investigating reasoning, planning, tool use, memory, observation, state, feedback loops, and autonomous task execution.",
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "AI Evaluation",
    description:
      "Exploring how intelligent systems should be measured through benchmarks, experiments, behavioral evaluation, and error analysis.",
  },
  {
    number: "06",
    icon: Search,
    title: "AI Engineering",
    description:
      "Understanding how models become reliable software through architecture, APIs, infrastructure, deployment, monitoring, and testing.",
  },
];

const learningLoop = [
  {
    number: "01",
    title: "Understand",
    description:
      "Study the theory, assumptions, mathematics, and underlying mechanisms.",
  },
  {
    number: "02",
    title: "Implement",
    description:
      "Turn the concept into working code rather than leaving it as theory.",
  },
  {
    number: "03",
    title: "Experiment",
    description:
      "Change variables, test hypotheses, and observe system behavior.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Measure performance, identify failure modes, and compare results.",
  },
  {
    number: "05",
    title: "Document",
    description:
      "Record what was learned so the experiment becomes reusable knowledge.",
  },
];

const openQuestions = [
  "How should long-term memory work in intelligent systems?",
  "How can agent reasoning be evaluated reliably?",
  "What makes a tool-using agent robust rather than merely functional?",
  "How should multiple specialized agents coordinate?",
  "How can increasingly capable systems remain observable and testable?",
];

export default function ResearchPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                RESEARCH / LEARNING
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Always
              <br />
              <span className="text-gradient">learning.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Research is the process of turning questions into experiments,
              experiments into evidence, and evidence into better systems.
            </p>
          </div>
        </section>

        {/* Research signal */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                    <BookOpen size={16} className="text-white/35" />
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                    RESEARCH SIGNAL
                  </span>
                </div>

                <h2 className="mt-10 max-w-2xl text-2xl font-medium tracking-[-0.035em] text-white/80 sm:text-3xl">
                  Learn by building things that can fail.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/30">
                  A working implementation exposes details that theory alone
                  can hide. Experiments make those details visible, while
                  evaluation helps distinguish intuition from evidence.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                  CURRENT SIGNAL
                </span>

                <div className="mt-8 space-y-4">
                  {[
                    ["01", "FOUNDATIONS", "Active"],
                    ["02", "INTELLIGENT SYSTEMS", "Exploring"],
                    ["03", "AGENTS", "Long-term"],
                  ].map(([number, title, status]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 border-b border-white/[0.05] pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-mono text-[8px] text-white/15">
                        {number}
                      </span>

                      <span className="flex-1 text-[10px] tracking-[0.08em] text-white/40">
                        {title}
                      </span>

                      <span className="text-[9px] text-white/20">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research areas */}
        <section className="page-container py-24 sm:py-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Research Areas
              </span>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Questions worth exploring.
              </h2>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/15">
              06 AREAS
            </span>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-[#09090c]/90 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                      <Icon
                        size={16}
                        className="text-white/30 transition-colors group-hover:text-white/60"
                      />
                    </div>

                    <span className="font-mono text-[9px] text-white/15">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-lg font-medium text-white/75">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/30">
                    {area.description}
                  </p>

                  <div className="mt-8 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Learning loop */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Learning Loop
                </span>

                <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Research
                  <br />
                  becomes
                  <br />
                  iteration.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/30">
                  Every investigation should produce something concrete:
                  working code, measurements, documentation, or a better
                  question.
                </p>
              </div>

              <div className="space-y-2">
                {learningLoop.map((step) => (
                  <div
                    key={step.number}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:bg-white/[0.035]"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-mono text-[9px] text-white/15">
                        {step.number}
                      </span>

                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-white/60">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-white/25">
                          {step.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="text-white/10 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/35"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open questions */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Open Questions
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                The unknowns
                <br />
                are part of it.
              </h2>
            </div>

            <div className="space-y-2">
              {openQuestions.map((question, index) => (
                <div
                  key={question}
                  className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <span className="shrink-0 font-mono text-[9px] text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-white/40">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principle */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-24 sm:py-32">
            <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                  <FlaskConical size={17} className="text-white/35" />
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    Research Principle
                  </span>

                  <h2 className="mt-5 max-w-4xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    Don&apos;t just ask whether it works.
                    <br />
                    Ask why.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                    Understanding failure is as valuable as observing success.
                    The objective is to build systems whose behavior can be
                    explained, measured, and improved.
                  </p>

                  <a
                    href="/axon"
                    className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
                  >
                    Explore AXON
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}