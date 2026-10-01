import type { Metadata } from "next";

import { ArrowUpRight, Brain, Code2, Layers3, Sparkles } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tuan Ahsan Aflal, an AI/ML Engineer focused on intelligent systems, machine learning, and agentic AI.",
};

const focusAreas = [
  {
    icon: Brain,
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Understanding how intelligent systems represent knowledge, reason over information, learn from data, and make decisions.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Machine Learning",
    description:
      "Building strong foundations by implementing models, studying their behavior, and understanding what happens beneath high-level abstractions.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Intelligent Systems",
    description:
      "Connecting models, memory, tools, APIs, data, and software engineering into systems that can solve meaningful problems.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Agentic AI",
    description:
      "Exploring systems that can reason, plan, use tools, observe outcomes, maintain state, and act toward objectives.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                ABOUT / 01
              </span>
            </div>

            <h1 className="text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Who is{" "}
              <span className="text-gradient">
                AHSAN?
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Tuan Ahsan Aflal is an AI/ML Engineer in the making, focused on
              understanding intelligence from its foundations and turning that
              understanding into real systems.
            </p>
          </div>
        </section>

        {/* Identity */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Identity
              </span>

              <h2 className="mt-5 max-w-md text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Building intelligence through engineering.
              </h2>
            </div>

            <div className="max-w-2xl space-y-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
              <p>
                AHSAN is the personal identity behind this portfolio. It
                represents the engineer, learner, researcher, and builder
                working toward a deeper understanding of artificial
                intelligence.
              </p>

              <p>
                The goal is not simply to use AI tools. It is to understand
                what makes intelligent systems work, implement those ideas,
                test them, break them, improve them, and eventually combine
                them into larger systems.
              </p>

              <p>
                That journey moves from software engineering and machine
                learning foundations toward deep learning, intelligent
                agents, autonomous systems, and eventually larger AI
                architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Philosophy
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Understand.
                <br />
                Build.
                <br />
                Experiment.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl leading-8 tracking-[-0.02em] text-white/65 sm:text-2xl sm:leading-9">
                Real understanding comes from moving between theory and
                implementation.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Understand", "Learn the underlying concepts."],
                  ["02", "Implement", "Turn ideas into working systems."],
                  ["03", "Experiment", "Measure, break, improve, repeat."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-5"
                  >
                    <span className="font-mono text-[9px] text-white/20">
                      {number}
                    </span>

                    <h3 className="mt-7 text-sm font-medium text-white/75">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/30">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Focus */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Focus Areas
                </span>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Where the work is going.
                </h2>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                04 AREAS
              </span>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.number}
                    className="group bg-[#09090c]/90 p-7 transition-colors hover:bg-white/[0.035] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                        <Icon size={16} className="text-white/35" />
                      </div>

                      <span className="font-mono text-[9px] text-white/15">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-10 text-lg font-medium text-white/75">
                      {area.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/30">
                      {area.description}
                    </p>

                    <div className="mt-8 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="page-container py-24 sm:py-32">
          <div className="glass overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Direction
                </span>

                <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                  From models to systems.
                  <br />
                  From systems to autonomy.
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/35 sm:text-base sm:leading-7">
                  The long-term direction is to build increasingly capable
                  intelligent systems while keeping engineering fundamentals,
                  experimentation, evaluation, and responsible system design
                  at the center.
                </p>
              </div>

              <a
                href="/journey"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
              >
                Explore the journey
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}