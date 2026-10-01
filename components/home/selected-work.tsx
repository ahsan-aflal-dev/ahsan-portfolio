"use client";

import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Network,
  ServerCog,
} from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "AHSAN-GPT",
    category: "LANGUAGE MODEL",
    description:
      "Exploring the foundations of language intelligence by understanding and building model components from the ground up.",
    tags: ["LLM", "NLP", "Deep Learning"],
    icon: BrainCircuit,
    status: "PLANNING",
  },
  {
    number: "02",
    title: "MEMORA",
    category: "MEMORY SYSTEM",
    description:
      "A persistent memory architecture for intelligent systems, designed around retrieval, context, and long-term knowledge.",
    tags: ["Memory", "RAG", "Knowledge"],
    icon: Database,
    status: "PLANNING",
  },
  {
    number: "03",
    title: "NEXUS",
    category: "AGENT SYSTEM",
    description:
      "An intelligent orchestration layer connecting models, tools, memory, and workflows into a unified agent system.",
    tags: ["Agents", "Tools", "Orchestration"],
    icon: Network,
    status: "PLANNING",
  },
  {
    number: "04",
    title: "MODEL-SERVE",
    category: "AI INFRASTRUCTURE",
    description:
      "Engineering the bridge between trained intelligence and real software through model serving, APIs, and evaluation.",
    tags: ["APIs", "Serving", "Inference"],
    icon: ServerCog,
    status: "PLANNING",
  },
];

export function SelectedWork() {
  return (
    <section
  id="selected-work"
  className="relative py-28 sm:py-36"
>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                Selected Work
              </span>
            </div>

            <h2 className="mt-8 text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              Systems
              <br />
              <span className="text-gradient">in progress.</span>
            </h2>
          </div>

          <div className="hidden pb-2 text-right sm:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
              Selected experiments
            </p>
            <p className="mt-2 text-xs text-white/30">
              Intelligence / Systems / Agents
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.a
                key={project.title}
                href="/projects"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:border-white/[0.13] hover:bg-white/[0.045] sm:p-8 lg:p-10"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8D0B93]/10 opacity-0 blur-[90px] transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative grid gap-8 lg:grid-cols-[80px_1fr_auto] lg:items-center">
                  <div className="flex items-center justify-between lg:block">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                      {project.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/40 lg:mt-8">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                        {project.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/15" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FF057C]/50">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-medium tracking-[-0.05em] text-white/90">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-white/35 sm:text-base sm:leading-7">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:block lg:text-right">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                      View project
                    </span>

                    <div className="mt-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/30 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white lg:mt-6 lg:ml-auto">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#321575] via-[#8D0B93] to-[#FF057C] transition-all duration-700 group-hover:w-full" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            Explore all projects
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}