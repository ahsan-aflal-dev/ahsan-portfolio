import type { Metadata } from "next";
import {
  ArrowUpRight,
  Brain,
  Database,
  FlaskConical,
  Layers3,
  Network,
  Server,
  Sparkles,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The AI, machine learning, intelligent systems, and agentic AI projects being built by AHSAN.",
};

const projects = [
  {
    number: "01",
    name: "AHSAN-GPT",
    category: "LANGUAGE MODEL",
    status: "IN DEVELOPMENT",
    tagline: "Understanding language models from the inside.",
    description:
      "A progressive exploration of GPT-style language models, from tokenization and embeddings through transformer architecture and generation.",
    href: "/projects/ahsan-gpt",
    icon: Brain,
  },
  {
    number: "02",
    name: "MEMORA",
    category: "MEMORY SYSTEM",
    status: "PLANNING",
    tagline: "Giving intelligent systems a memory.",
    description:
      "A persistent memory architecture for storing, retrieving, organizing, and using knowledge across interactions.",
    href: "/projects/memora",
    icon: Database,
  },
  {
    number: "03",
    name: "NEXUS",
    category: "AGENT SYSTEM",
    status: "PLANNING",
    tagline: "Connecting intelligence to action.",
    description:
      "An agent architecture connecting reasoning, planning, tools, execution, observation, and state.",
    href: "/projects/nexus",
    icon: Network,
  },
  {
    number: "04",
    name: "AI-EVAL",
    category: "RESEARCH / EVALUATION",
    status: "PLANNING",
    tagline: "Measuring intelligence instead of assuming it.",
    description:
      "An evaluation framework for testing model and agent capabilities through repeatable experiments and benchmarks.",
    href: "/projects/ai-eval",
    icon: FlaskConical,
  },
  {
    number: "05",
    name: "MODEL-SERVE",
    category: "AI INFRASTRUCTURE",
    status: "PLANNING",
    tagline: "Turning models into usable systems.",
    description:
      "Infrastructure for serving models through APIs and reliable inference workflows.",
    href: "/projects/model-serve",
    icon: Server,
  },
  {
    number: "06",
    name: "JARVIS",
    category: "PERSONAL AI",
    status: "LONG TERM",
    tagline: "An intelligent system built around its human.",
    description:
      "A long-term personal AI combining reasoning, persistent memory, skills, tools, automation, voice, and adaptive interaction.",
    href: "/projects/jarvis",
    icon: Sparkles,
  },
  {
    number: "07",
    name: "SWARM",
    category: "MULTI-AGENT SYSTEM",
    status: "FUTURE",
    tagline: "Many agents. One coordinated intelligence.",
    description:
      "A multi-agent architecture exploring specialization, communication, coordination, and collective problem solving.",
    href: "/projects/swarm",
    icon: Network,
  },
  {
    number: "08",
    name: "ENVIRONMENT",
    category: "AGENT ENVIRONMENT",
    status: "FUTURE",
    tagline: "Where intelligence learns through interaction.",
    description:
      "An environment designed for agents to observe, interact, receive feedback, and learn through repeated experience.",
    href: "/projects/environment",
    icon: Layers3,
  },
];

const statusStyles: Record<string, string> = {
  "IN DEVELOPMENT":
    "border-[#8D0B93]/30 bg-[#8D0B93]/10 text-[#d78ddd]",
  PLANNING:
    "border-white/[0.08] bg-white/[0.03] text-white/35",
  "LONG TERM":
    "border-white/[0.08] bg-white/[0.025] text-white/25",
  FUTURE:
    "border-white/[0.06] bg-white/[0.02] text-white/20",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                PROJECTS / REGISTRY
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Systems
              <br />
              <span className="text-gradient">in the making.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              A connected project ecosystem exploring machine learning,
              language models, memory, agents, evaluation, infrastructure, and
              autonomous systems.
            </p>
          </div>
        </section>

        {/* Registry */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  System Registry
                </span>

                <p className="mt-3 text-sm text-white/30">
                  Projects are ordered by their place in the larger learning
                  and engineering roadmap.
                </p>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/15">
                08 SYSTEMS
              </span>
            </div>
          </div>
        </section>

        {/* Project list */}
        <section className="page-container py-20 sm:py-28">
          <div className="space-y-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <a
                  key={project.number}
                  href={project.href}
                  className="group block rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.035] sm:p-7"
                >
                  <div className="grid gap-7 lg:grid-cols-[70px_1fr_auto] lg:items-center">
                    {/* Number */}
                    <div className="flex items-center justify-between lg:block">
                      <span className="font-mono text-[10px] text-white/15">
                        {project.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] lg:mt-7">
                        <Icon
                          size={16}
                          className="text-white/30 transition-colors group-hover:text-white/60"
                        />
                      </div>
                    </div>

                    {/* Main content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                          {project.category}
                        </span>

                        <span
                          className={`rounded-full border px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] ${statusStyles[project.status]}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-medium tracking-[-0.035em] text-white/80 transition-colors group-hover:text-white sm:text-3xl">
                        {project.name}
                      </h2>

                      <p className="mt-2 text-sm text-white/40">
                        {project.tagline}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/25">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 lg:block lg:border-0 lg:pt-0">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/15 lg:hidden">
                        View system
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:bg-white/[0.08]">
                        <ArrowUpRight
                          size={15}
                          className="text-white/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Architecture idea */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-24 sm:py-32">
            <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    The Ecosystem
                  </span>

                  <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    Not isolated projects.
                    <br />
                    A connected system.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                    Each project explores a specific capability while
                    contributing knowledge, architecture, or infrastructure to
                    the larger AHSAN roadmap.
                  </p>
                </div>

                <a
                  href="/journey"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
                >
                  See the roadmap
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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