"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  CircleDot,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  Layers3,
  Network,
  Server,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";
import { motion } from "motion/react";

export type ProjectArchitecture = {
  title: string;
  description: string;
  icon: string;
};

export type ProjectExperiment = {
  title: string;
  description: string;
};

export type ProjectData = {
  number: string;
  name: string;
  category: string;
  status: string;
  tagline: string;
  description: string;
  problem: string;
  objective: string;
  architecture: ProjectArchitecture[];
  technologies: string[];
  experiments: ProjectExperiment[];
  learning: string[];
  future: string[];
  accent: string;
};

const iconMap = {
  brain: Brain,
  network: Network,
  flask: FlaskConical,
  server: Server,
  database: Database,
  sparkles: Sparkles,
  layers: Layers3,
  target: Target,
};

type ProjectDetailProps = {
  project: ProjectData;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="relative min-h-screen pb-24 pt-32">
      <div className="page-container">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            All Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <section className="relative mt-12">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                {project.number}
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                {project.category}
              </span>

              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                <CircleDot size={10} />
                {project.status}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-8xl"
            >
              {project.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-3xl text-xl leading-relaxed text-white/55 sm:text-2xl"
            >
              {project.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mt-24 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="01" title="OVERVIEW" icon={<Code2 size={16} />} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-lg leading-8 text-white/60 sm:text-xl">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Problem */}
        <section className="mt-28 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel number="02" title="PROBLEM" icon={<Target size={16} />} />

          <ContentCard>
            <p className="text-base leading-8 text-white/55 sm:text-lg">
              {project.problem}
            </p>
          </ContentCard>
        </section>

        {/* Objective */}
        <section className="mt-20 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel
            number="03"
            title="OBJECTIVE"
            icon={<CheckCircle2 size={16} />}
          />

          <ContentCard>
            <p className="text-base leading-8 text-white/55 sm:text-lg">
              {project.objective}
            </p>
          </ContentCard>
        </section>

        {/* Architecture */}
        <section className="mt-32">
          <SectionLabel
            number="04"
            title="ARCHITECTURE"
            icon={<GitBranch size={16} />}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.architecture.map((item, index) => {
              const Icon =
                iconMap[item.icon as keyof typeof iconMap] ?? Layers3;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      0{index + 1}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-white/35 transition group-hover:text-white/70"
                    />
                  </div>

                  <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-32 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel
            number="05"
            title="TECHNOLOGY"
            icon={<Terminal size={16} />}
          />

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                }}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-xs text-white/55 transition hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
              >
                {technology}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experiments */}
        <section className="mt-32">
          <SectionLabel
            number="06"
            title="EXPERIMENTS"
            icon={<FlaskConical size={16} />}
          />

          <div className="mt-10 space-y-3">
            {project.experiments.map((experiment, index) => (
              <motion.div
                key={experiment.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group grid gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-white/[0.14] hover:bg-white/[0.04] md:grid-cols-[220px_1fr]"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-white/25">
                    0{index + 1}
                  </span>

                  <h3 className="text-sm font-medium text-white">
                    {experiment.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-white/45">
                  {experiment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learning */}
        <section className="mt-32 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel
            number="07"
            title="LEARNING"
            icon={<Brain size={16} />}
          />

          <div className="space-y-3">
            {project.learning.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
              >
                <Sparkles
                  size={15}
                  className="mt-1 shrink-0 text-white/30"
                />

                <p className="text-sm leading-7 text-white/50">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="mt-32 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionLabel
            number="08"
            title="FUTURE"
            icon={<Network size={16} />}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {project.future.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm text-white/50"
              >
                <span className="mr-3 font-mono text-[10px] text-white/25">
                  0{index + 1}
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </section>

        {/* End */}
        <section className="mt-36 border-t border-white/[0.08] pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                END OF PROJECT
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                Explore the rest of the system.
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 self-start rounded-full border border-white/[0.1] bg-white/[0.035] px-5 py-3 text-xs uppercase tracking-[0.14em] text-white/55 transition hover:bg-white/[0.07] hover:text-white sm:self-auto"
            >
              All Projects
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionLabel({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 self-start">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/40">
        {icon}
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-[0.2em] text-white/25">
          {number}
        </p>

        <h2 className="mt-1 text-xs font-medium tracking-[0.16em] text-white/55">
          {title}
        </h2>
      </div>
    </div>
  );
}

function ContentCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8"
    >
      {children}
    </motion.div>
  );
}