import type { Metadata } from "next";
import {
  ArrowUpRight,
  Brain,
  Compass,
  Layers3,
  Target,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "The vision, mission, principles, and long-term direction behind AHSAN.",
};

const pillars = [
  {
    number: "01",
    icon: Brain,
    title: "Understand Intelligence",
    description:
      "Study the foundations of artificial intelligence and machine learning deeply enough to understand not only what works, but why it works.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Engineer Systems",
    description:
      "Transform models and algorithms into reliable software systems through strong engineering, architecture, testing, and integration.",
  },
  {
    number: "03",
    icon: Target,
    title: "Measure Progress",
    description:
      "Use experiments, evaluation, benchmarks, and documentation to understand whether a system is actually improving.",
  },
  {
    number: "04",
    icon: Compass,
    title: "Move Toward Autonomy",
    description:
      "Progress from individual models toward systems that can reason, use tools, maintain state, learn from interaction, and act.",
  },
];

export default function VisionPage() {
  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                VISION / MISSION
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              Building toward
              <br />
              <span className="text-gradient">machine intelligence.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              A long-term direction built around understanding intelligence,
              engineering useful systems, measuring what they can actually do,
              and gradually moving toward increasingly autonomous machines.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Mission
                </span>

                <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Learn deeply.
                  <br />
                  Build deliberately.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-xl leading-8 tracking-[-0.02em] text-white/65 sm:text-2xl sm:leading-9">
                  The mission is to become an engineer capable of taking an AI
                  idea from its underlying mathematics and algorithms all the
                  way to a usable intelligent system.
                </p>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                  That means developing strong foundations in software
                  engineering, machine learning, deep learning, data,
                  infrastructure, evaluation, and agentic systems instead of
                  treating AI as a collection of disconnected tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision statement */}
        <section className="page-container py-24 sm:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.025] p-7 sm:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#8D0B93]/10 blur-[100px]" />

            <div className="relative">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Vision
              </span>

              <blockquote className="mt-8 max-w-5xl text-3xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Build intelligent systems that can{" "}
                <span className="text-white/40">
                  understand, reason, learn, and act.
                </span>
              </blockquote>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-10 bg-white/15" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                  AHSAN / LONG-TERM DIRECTION
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic pillars */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Strategic Pillars
                </span>

                <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Four directions.
                </h2>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                04 / PILLARS
              </span>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.number}
                    className="group bg-[#09090c]/90 p-7 transition-colors hover:bg-white/[0.035] sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                        <Icon size={16} className="text-white/35" />
                      </div>

                      <span className="font-mono text-[9px] text-white/15">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="mt-10 text-lg font-medium text-white/75">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/30">
                      {pillar.description}
                    </p>

                    <div className="mt-8 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mental model */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Mental Model
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Models are
                <br />
                components.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-xl leading-8 text-white/55 sm:text-2xl sm:leading-9">
                Intelligence becomes more interesting when models are connected
                to memory, tools, environments, evaluation, and feedback.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-5">
                {[
                  "Models",
                  "Memory",
                  "Tools",
                  "Environment",
                  "Feedback",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-5 text-center"
                  >
                    <span className="font-mono text-[8px] text-white/15">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-xs text-white/45">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-white/30">
                This is the direction behind the project ecosystem: each
                project explores one part of the larger problem, while the
                overall roadmap gradually connects those parts into more
                capable systems.
              </p>
            </div>
          </div>
        </section>

        {/* Road ahead */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                    The Road Ahead
                  </span>

                  <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                    Foundations →
                    <br />
                    Systems →
                    <br />
                    Autonomy
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                    The journey is intentionally staged. First build the
                    engineering and mathematical foundations. Then build
                    increasingly complex AI systems. Finally explore
                    autonomous and multi-agent environments.
                  </p>
                </div>

                <a
                  href="/journey"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
                >
                  View the journey
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