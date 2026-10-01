"use client";

import {
  ArrowRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { PageShell } from "@/components/layout/page-shell";

const contactChannels = [
  {
    label: "EMAIL",
    value: "Ahsan200505@gmail.com",
    href: "mailto:Ahsan200505@gmail.com",
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "ahsan-aflal-dev",
    href: "https://github.com/ahsan-aflal-dev",
    badge: "GH",
  },
  {
    label: "LINKEDIN",
    value: "Tuan Ahsan Aflal",
    href: "https://www.linkedin.com/in/tuan-ahsan-37158036a",
    badge: "in",
  },
];

const topics = [
  "AI / ML Engineering",
  "Intelligent Systems",
  "Agentic AI",
  "Research & Experiments",
  "Projects & Collaboration",
  "Future Opportunities",
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Ahsan200505@gmail.com");
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <PageShell>
      <main className="relative overflow-hidden pt-32 sm:pt-40">
        {/* Hero */}
        <section className="page-container pb-20 sm:pb-28">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                CONTACT / OPEN CHANNEL
              </span>
            </div>

            <h1 className="max-w-4xl text-6xl font-medium tracking-[-0.07em] text-white sm:text-8xl lg:text-[7.5rem]">
              Let&apos;s build
              <br />
              something.
            </h1>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
                Have an interesting problem, idea, experiment, or opportunity?
                Start a conversation. I&apos;m interested in building systems
                that make intelligence useful.
              </p>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                STATUS / OPEN
              </span>
            </div>
          </div>
        </section>

        {/* Primary contact */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-16 sm:py-24">
            <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
                <motion.div
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#8D0B93]/10 blur-[90px]"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.65, 0.4],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                      <Mail size={16} className="text-white/45" />
                    </div>

                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/15">
                      PRIMARY CHANNEL
                    </span>
                  </div>

                  <p className="mt-12 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Email
                  </p>

                  <a
                    href="mailto:Ahsan200505@gmail.com"
                    className="mt-3 block break-all text-2xl font-medium tracking-[-0.03em] text-white/75 transition hover:text-white sm:text-4xl"
                  >
                    Ahsan200505@gmail.com
                  </a>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <a
                      href="mailto:Ahsan200505@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                    >
                      Send email
                      <ArrowRight size={13} />
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] text-white/35 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                      {copied ? "Copied" : "Copy email"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-7 sm:p-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                  <MapPin size={16} className="text-white/35" />
                </div>

                <p className="mt-12 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Based in
                </p>

                <p className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white/65">
                  Sri Lanka
                </p>

                <p className="mt-4 text-sm leading-6 text-white/25">
                  Building, learning, and experimenting from here while
                  working toward a career in AI / ML engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="page-container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Find me
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Other
                <br />
                channels.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/25">
                Follow the work, explore the experiments, or connect directly.
              </p>
            </div>

            <div className="space-y-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:bg-white/[0.045] sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                      {Icon ? (
                        <Icon
                          size={15}
                          className="text-white/30 transition-colors group-hover:text-white/60"
                        />
                      ) : (
                        <span className="text-[11px] font-semibold tracking-[-0.04em] text-white/30 transition-colors group-hover:text-white/60">
                          {channel.badge}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[8px] tracking-[0.18em] text-white/20">
                        {channel.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-white/45 transition-colors group-hover:text-white/70">
                        {channel.value}
                      </p>
                    </div>

                    <ArrowRight
                      size={14}
                      className="shrink-0 text-white/10 transition-all group-hover:translate-x-1 group-hover:text-white/45"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="border-y border-white/[0.06]">
          <div className="page-container py-20 sm:py-28">
            <div className="max-w-3xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Conversation
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Things worth
                <br />
                talking about.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/30 sm:text-base">
                You don&apos;t need a perfectly defined brief. A rough idea,
                technical question, research direction, or interesting
                challenge is enough to start.
              </p>
            </div>

            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <span className="font-mono text-[8px] text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-8 text-sm text-white/45">{topic}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Invitation */}
        <section className="page-container py-24 sm:py-32">
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <motion.div
              className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#FF057C]/10 blur-[100px]"
              animate={{
                y: [0, 25, 0],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative max-w-3xl">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                Open invitation
              </span>

              <h2 className="mt-6 text-3xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                Interesting problems are
                <br />
                usually worth exploring.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/30 sm:text-base sm:leading-8">
                Whether you want to discuss an AI idea, collaborate on a
                project, challenge an assumption, or simply talk about
                intelligent systems — reach out.
              </p>

              <div className="mt-9">
                <a
                  href="mailto:Ahsan200505@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-black transition hover:bg-white/90"
                >
                  Start a conversation
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final */}
        <section className="page-container pb-20">
          <div className="flex flex-col items-center text-center">
            <div className="h-px w-12 bg-white/10" />

            <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.22em] text-white/15">
              AHSAN / AI / ML ENGINEER
            </p>

            <p className="mt-2 text-sm text-white/20">
              Building Intelligent Systems That Think, Learn &amp; Act.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}