"use client";

import {
  BrainCircuit,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Network,
  ServerCog,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

const systems = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Models that learn patterns from data, from classical machine learning to neural networks.",
    tags: ["ML", "Neural Networks", "Learning"],
  },
  {
    number: "02",
    icon: Network,
    title: "Intelligent Agents",
    description:
      "Systems that can reason through problems, use tools, maintain context, and take actions.",
    tags: ["Agents", "Reasoning", "Tool Use"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "LLM Systems",
    description:
      "Practical language-model systems built around retrieval, memory, orchestration, and evaluation.",
    tags: ["LLMs", "RAG", "Memory"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Autonomous Systems",
    description:
      "Multi-step systems that connect intelligence with software, tools, environments, and workflows.",
    tags: ["Automation", "Planning", "Execution"],
  },
  {
    number: "05",
    icon: ServerCog,
    title: "AI Infrastructure",
    description:
      "The engineering layer behind intelligent applications: APIs, serving, pipelines, and systems.",
    tags: ["APIs", "Serving", "Systems"],
  },
  {
    number: "06",
    icon: Database,
    title: "Data & Knowledge",
    description:
      "Structured data, databases, retrieval systems, and the knowledge foundations intelligent systems depend on.",
    tags: ["Data", "Databases", "Retrieval"],
  },
];

export function WhatIBuild() {
  return (
    <section
  id="what-i-build"
  className="relative py-28 sm:py-36"
>
      <div className="page-container">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              What I build
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              From models
              <br />
              <span className="text-[var(--muted-strong)]">
                to intelligent
              </span>{" "}
              <span className="text-gradient">systems.</span>
            </h2>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 lg:ml-[37.5%]"
        >
          I’m interested in the complete path from intelligence to execution:
          learning from data, reasoning over information, using tools, and
          turning decisions into reliable software.
        </motion.p>

        {/* System grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.article
                key={system.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[300px] overflow-hidden bg-[#07070a] p-7 transition-colors duration-500 hover:bg-[#0b0a10] sm:p-8"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#8D0B93]/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                    {system.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-white/40 transition-all duration-500 group-hover:border-[#8D0B93]/30 group-hover:text-white/80">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-16">
                  <h3 className="text-xl font-medium tracking-[-0.025em] text-white/90">
                    {system.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/35">
                    {system.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2 sm:bottom-8 sm:left-8 sm:right-8">
                  {system.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25 transition-colors group-hover:text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom index line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#321575] via-[#8D0B93] to-[#FF057C] transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Philosophy bridge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            ["01", "Understand", "The problem"],
            ["02", "Design", "The system"],
            ["03", "Build", "The solution"],
            ["04", "Evaluate", "Then improve"],
          ].map(([number, title, subtitle]) => (
            <div key={number} className="group">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-white/20">
                  {number}
                </span>

                <GitBranch
                  size={12}
                  className="text-white/20 transition-colors group-hover:text-[#FF057C]"
                />
              </div>

              <p className="mt-4 text-sm font-medium text-white/70">
                {title}
              </p>

              <p className="mt-1 text-xs text-white/25">{subtitle}</p>
            </div>
          ))}
        </motion.div>

        {/* Small visual statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2">
            <Eye size={13} className="text-white/30" />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
              Intelligence → Reasoning → Action
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}