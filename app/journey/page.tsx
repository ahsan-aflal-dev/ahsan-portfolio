import type { Metadata } from "next";
import {
  ArrowRight,
  Brain,
  Code2,
  Cpu,
  GitBranch,
  Network,
  Rocket,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The three-year AI/ML engineering journey behind AHSAN, from foundations to autonomous intelligent systems.",
};

const years = [
  {
    year: "YEAR 01",
    label: "FOUNDATIONS",
    description:
      "Build the engineering, mathematical, machine learning, and neural network foundations required to understand AI from the ground up.",
    projects: [
      {
        number: "01",
        title: "Python Engineering",
        type: "FOUNDATION",
        description:
          "Deep Python engineering: language fundamentals, OOP, architecture, testing, debugging, concurrency, async programming, and project design.",
        icon: Code2,
      },
      {
        number: "02",
        title: "ML Fundamentals",
        type: "MACHINE LEARNING",
        description:
          "Statistics, probability, data preparation, supervised learning, unsupervised learning, optimization, evaluation, and model selection.",
        icon: Brain,
      },
      {
        number: "03",
        title: "ML-FROM-SCRATCH",
        type: "IMPLEMENTATION",
        description:
          "Implement core machine learning algorithms without relying on high-level ML libraries.",
        icon: GitBranch,
      },
      {
        number: "04",
        title: "Neural Networks",
        type: "DEEP FOUNDATIONS",
        description:
          "Understand neurons, forward propagation, backpropagation, loss functions, optimization, and neural network training.",
        icon: Cpu,
      },
      {
        number: "05",
        title: "AHSAN-GPT",
        type: "LLM SYSTEM",
        description:
          "Explore the foundations of language models and build a progressively capable GPT-style system.",
        icon: Network,
      },
    ],
  },
  {
    year: "YEAR 02",
    label: "SYSTEMS",
    description:
      "Move from individual models toward complete AI systems involving deep learning, computer vision, memory, agents, evaluation, and serving.",
    projects: [
      {
        number: "01",
        title: "Deep Learning",
        type: "DEEP LEARNING",
        description:
          "Study modern deep learning architectures, training strategies, representation learning, and practical model development.",
        icon: Brain,
      },
      {
        number: "02",
        title: "Computer Vision",
        type: "VISION",
        description:
          "Build systems capable of understanding visual information using modern computer vision techniques.",
        icon: Cpu,
      },
      {
        number: "03",
        title: "MEMORA",
        type: "MEMORY SYSTEM",
        description:
          "Design a persistent memory layer that allows intelligent systems to store, retrieve, organize, and use knowledge over time.",
        icon: Network,
      },
      {
        number: "04",
        title: "NEXUS",
        type: "AGENT SYSTEM",
        description:
          "Connect reasoning, planning, tools, execution, observation, and state into an agentic architecture.",
        icon: GitBranch,
      },
      {
        number: "05",
        title: "AI-EVAL",
        type: "EVALUATION",
        description:
          "Build evaluation infrastructure for measuring model and agent behavior through repeatable experiments and benchmarks.",
        icon: Code2,
      },
      {
        number: "06",
        title: "MODEL-SERVE",
        type: "AI INFRASTRUCTURE",
        description:
          "Learn how models become usable production-style services through APIs, inference systems, monitoring, and deployment.",
        icon: Rocket,
      },
    ],
  },
  {
    year: "YEAR 03",
    label: "AUTONOMY",
    description:
      "Explore advanced agents, multi-agent coordination, environments, research, and the long-term JARVIS system.",
    projects: [
      {
        number: "01",
        title: "Advanced Agents",
        type: "AGENTIC AI",
        description:
          "Move beyond simple tool calling into planning, reflection, memory, execution loops, and increasingly capable autonomous systems.",
        icon: Brain,
      },
      {
        number: "02",
        title: "SWARM",
        type: "MULTI-AGENT",
        description:
          "Explore systems where multiple specialized agents coordinate toward shared objectives.",
        icon: Network,
      },
      {
        number: "03",
        title: "ENVIRONMENT",
        type: "AGENT ENVIRONMENT",
        description:
          "Create environments where agents can observe, interact, receive feedback, and learn through repeated interaction.",
        icon: GitBranch,
      },
      {
        number: "04",
        title: "AGENT-RESEARCH",
        type: "RESEARCH",
        description:
          "Investigate advanced agent architectures, evaluation methods, memory, planning, coordination, and system behavior.",
        icon: Code2,
      },
      {
        number: "05",
        title: "JARVIS",
        type: "PERSONAL AI",
        description:
          "The long-term personal intelligent system combining reasoning, memory, skills, tools, automation, voice, and adaptive interaction.",
        icon: Rocket,
      },
    ],
  },
];

export default function JourneyPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                JOURNEY / ROADMAP
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              From foundations
              <br />
              to <span className="text-gradient">autonomy.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              A three-year progression designed to turn fundamentals into
              increasingly complex intelligent systems.
            </p>
          </div>
        </section>

        {/* Progression */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-20">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["01", "MODELS", "Understand intelligence at the model level."],
                ["02", "SYSTEMS", "Connect models into useful systems."],
                ["03", "AGENTS", "Build systems capable of action."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <span className="font-mono text-[9px] text-white/15">
                    {number}
                  </span>

                  <h2 className="mt-5 text-sm font-medium tracking-[0.08em] text-white/65">
                    {title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-white/25">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="page-container py-24 sm:py-32">
          <div className="space-y-24 sm:space-y-32">
            {years.map((year) => (
              <section key={year.year}>
                <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
                  {/* Year heading */}
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                      {year.year}
                    </span>

                    <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                      {year.label}
                    </h2>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
                      {year.description}
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="space-y-3">
                    {year.projects.map((project) => {
                      const Icon = project.icon;

                      return (
                        <article
                          key={`${year.year}-${project.title}`}
                          className="group rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.035] sm:p-6"
                        >
                          <div className="flex gap-5">
                            <div className="hidden shrink-0 sm:flex sm:h-11 sm:w-11 sm:items-center sm:justify-center sm:rounded-xl sm:border sm:border-white/[0.07] sm:bg-white/[0.025]">
                              <Icon
                                size={16}
                                className="text-white/30 transition-colors group-hover:text-white/60"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <span className="font-mono text-[9px] text-white/15">
                                    {project.number}
                                  </span>

                                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                                    {project.type}
                                  </span>
                                </div>

                                <ArrowRight
                                  size={14}
                                  className="text-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/40"
                                />
                              </div>

                              <h3 className="mt-5 text-lg font-medium tracking-[-0.02em] text-white/75">
                                {project.title}
                              </h3>

                              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/30">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-24 sm:py-32">
            <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    The Direction
                  </span>

                  <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    Learn the pieces.
                    <br />
                    Connect the pieces.
                    <br />
                    Build the system.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                    Every project exists for a reason. The roadmap is not a
                    collection of unrelated repositories; it is a progression
                    where each stage provides knowledge and infrastructure for
                    the next.
                  </p>
                </div>

                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
                >
                  Explore the projects
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}