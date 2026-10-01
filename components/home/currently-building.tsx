"use client";

import {
  ArrowUpRight,
  Cpu,
  Database,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    title: "AHSAN-GPT",
    description:
      "A language-model system exploring how intelligent models can understand, reason, and generate.",
    status: "PLANNED",
    progress: "NEXT",
    icon: Sparkles,
    tags: ["LLM", "NLP", "From Scratch"],
  },
  {
    id: "02",
    title: "MEMORA",
    description:
      "A persistent memory system designed to give intelligent agents structured, retrievable knowledge.",
    status: "PLANNED",
    progress: "UPCOMING",
    icon: Database,
    tags: ["Memory", "RAG", "Agents"],
  },
  {
    id: "03",
    title: "JARVIS",
    description:
      "A personal autonomous AI system connecting reasoning, memory, tools, automation, and action.",
    status: "LONG TERM",
    progress: "YEAR 3",
    icon: Cpu,
    tags: ["Agents", "Automation", "Systems"],
  },
];

export function CurrentlyBuilding() {
  return (
    <section
  id="currently-building"
  className="relative py-28 sm:py-36"
>
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                Currently Building
              </span>
            </div>

            <h2 className="mt-8 max-w-xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Turning
              <br />
              <span className="text-[var(--muted-strong)]">
                ideas into
              </span>
              <br />
              <span className="text-gradient">systems.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl lg:ml-auto"
          >
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              I learn by building. Each project is an experiment designed to
              understand a deeper layer of intelligent systems — from models
              and memory to agents and autonomous execution.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF057C] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF057C]" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                Building the intelligence stack
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.025]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <GitBranch size={14} className="text-white/30" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                Development Pipeline
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
              AHSAN / 2026+
            </span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  className="group relative grid gap-7 p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:p-8 lg:grid-cols-[70px_1fr_auto] lg:items-center"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                    {project.id}
                  </span>

                  <div className="flex gap-5">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/40 sm:flex">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-medium tracking-[-0.025em] text-white/90">
                          {project.title}
                        </h3>

                        <span className="rounded-full border border-white/[0.07] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/[0.035] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/25"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-8 lg:block lg:text-right">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/20">
                      {project.progress}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#321575] via-[#8D0B93] to-[#FF057C] transition-all duration-700 group-hover:w-full" />
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
          >
            Explore the full pipeline
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