import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  GitBranch,
  Network,
  Server,
  Terminal,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The technical capabilities, tools, and engineering foundations behind AHSAN.",
};

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Programming",
    items: [
      "Python",
      "JavaScript / TypeScript",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Async Programming",
      "Testing & Debugging",
    ],
  },
  {
    icon: Brain,
    number: "02",
    title: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Optimization",
      "Neural Networks",
      "ML From Scratch",
    ],
  },
  {
    icon: Network,
    number: "03",
    title: "AI Systems",
    items: [
      "LLM Systems",
      "Prompt Engineering",
      "Agents",
      "Tool Calling",
      "Memory",
      "Reasoning",
      "System Architecture",
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "Data & Knowledge",
    items: [
      "SQL",
      "Relational Databases",
      "Data Pipelines",
      "Embeddings",
      "Vector Search",
      "Knowledge Systems",
      "Data Modeling",
    ],
  },
  {
    icon: Server,
    number: "05",
    title: "Infrastructure",
    items: [
      "APIs",
      "FastAPI",
      "Git & GitHub",
      "Linux Fundamentals",
      "Model Serving",
      "Deployment",
      "System Integration",
    ],
  },
  {
    icon: Activity,
    number: "06",
    title: "Research & Evaluation",
    items: [
      "Experiment Design",
      "Benchmarking",
      "Evaluation",
      "Error Analysis",
      "Documentation",
      "Reproducibility",
      "Technical Research",
    ],
  },
];

const learningStack = [
  {
    number: "01",
    title: "FOUNDATION",
    description:
      "Software engineering, mathematics, statistics, data structures, algorithms, and core machine learning.",
  },
  {
    number: "02",
    title: "APPLICATION",
    description:
      "Use those foundations to build models, APIs, intelligent applications, and complete AI systems.",
  },
  {
    number: "03",
    title: "DEPTH",
    description:
      "Study why systems behave the way they do through implementation, experiments, evaluation, and research.",
  },
];

const engineeringLoop = [
  ["01", "Learn", "Understand the concept."],
  ["02", "Implement", "Build it yourself."],
  ["03", "Test", "Find where it breaks."],
  ["04", "Document", "Record what was learned."],
  ["05", "Integrate", "Connect it to a larger system."],
];

export default function SkillsPage() {
  return (
    <PageShell>
      <main
  id="skills"
  className="relative overflow-hidden pt-32 sm:pt-40"
>
        {/* Hero */}
        <section className="page-container pb-24 sm:pb-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                SKILLS / TOOLBOX
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
              The
              <br />
              <span className="text-gradient">toolbox.</span>
            </h1>

            <p className="body-large mt-8 max-w-2xl">
              A growing engineering toolkit built around one objective:
              understanding and building intelligent systems from the
              foundations upward.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-20">
            <div className="grid gap-3 md:grid-cols-3">
              {learningStack.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
                >
                  <span className="font-mono text-[9px] text-white/15">
                    {item.number}
                  </span>

                  <h2 className="mt-5 text-sm font-medium tracking-[0.1em] text-white/65">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-xs leading-5 text-white/25">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capability map */}
        <section className="page-container py-24 sm:py-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Capability Map
              </span>

              <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                What I&apos;m building toward.
              </h2>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/15">
              06 DOMAINS
            </span>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.number}
                  className="group bg-[#09090c]/90 p-7 transition-colors hover:bg-white/[0.035]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                      <Icon
                        size={16}
                        className="text-white/30 transition-colors group-hover:text-white/60"
                      />
                    </div>

                    <span className="font-mono text-[9px] text-white/15">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-lg font-medium text-white/75">
                    {capability.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-white/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14" />
                </article>
              );
            })}
          </div>
        </section>

        {/* Engineering approach */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Engineering Approach
                </span>

                <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                  Knowledge becomes
                  <br />
                  useful when tested.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/30">
                  The objective is not to collect technologies. Each skill
                  should become something that can be applied, measured, and
                  integrated into a working system.
                </p>
              </div>

              <div className="space-y-2">
                {engineeringLoop.map(([number, title, description]) => (
                  <div
                    key={number}
                    className="group flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:bg-white/[0.035]"
                  >
                    <span className="font-mono text-[9px] text-white/15">
                      {number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white/60">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs text-white/25">
                        {description}
                      </p>
                    </div>

                    <GitBranch
                      size={14}
                      className="text-white/15 transition-colors group-hover:text-white/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Current direction */}
        <section className="page-container py-24 sm:py-32">
          <div className="glass rounded-[2rem] p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Current Direction
                </span>

                <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                  Strong foundations.
                  <br />
                  Deeper systems.
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8">
                  The current focus is strengthening Python engineering and
                  machine learning fundamentals while gradually moving into
                  neural networks, language models, and intelligent systems.
                </p>
              </div>

              <Link
                href="/journey"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:text-white"
              >
                Follow the journey
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Terminal signal */}
        <section className="border-t border-white/[0.06]">
          <div className="page-container py-16">
            <div className="flex items-center justify-center gap-3">
              <Terminal size={13} className="text-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                Skills are a moving system
              </span>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}