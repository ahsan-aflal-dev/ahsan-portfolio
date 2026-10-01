import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  ShieldCheck,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Information you provide",
    content: [
      "This portfolio does not require an account or registration.",
      "If you contact AHSAN directly, you may voluntarily provide information such as your name, email address, or the contents of your message.",
      "That information is used only for the purpose of responding to the conversation or request you initiated.",
    ],
  },
  {
    number: "02",
    title: "Technical information",
    content: [
      "Like most websites, the hosting environment may process basic technical information required to deliver the website securely and reliably.",
      "This portfolio does not intentionally collect detailed personal profiles from visitors.",
      "Analytics or additional tracking technologies may be introduced in the future. If that happens, this page will be updated accordingly.",
    ],
  },
  {
    number: "03",
    title: "Local browser storage",
    content: [
      "The portfolio uses browser session storage for a small amount of interface state.",
      "For example, the cinematic system introduction can remember that it has already been shown during a browsing session.",
      "This information remains in your browser and is not used to identify you.",
    ],
  },
  {
    number: "04",
    title: "External services",
    content: [
      "The portfolio may link to external services such as GitHub and LinkedIn.",
      "When you leave this website and visit an external service, that service's own privacy practices apply.",
      "AHSAN does not control the privacy policies, data practices, or security of external platforms.",
    ],
  },
  {
    number: "05",
    title: "Data sharing",
    content: [
      "Personal information voluntarily sent through direct communication is not intentionally sold or rented to third parties.",
      "Information may be processed by infrastructure or service providers required to operate communications or the website.",
      "Any future change to this approach will be reflected in an updated version of this policy.",
    ],
  },
  {
    number: "06",
    title: "Data retention",
    content: [
      "Information received through direct communication is retained only for as long as reasonably necessary to handle the conversation, maintain appropriate records, or meet applicable obligations.",
      "You can request clarification about information associated with a direct conversation by contacting AHSAN.",
    ],
  },
  {
    number: "07",
    title: "Changes to this policy",
    content: [
      "This privacy page may be updated when the website, its functionality, or its information practices change.",
      "The date shown below indicates the most recent revision.",
    ],
  },
];

export const metadata = {
  title: "Privacy",
  description: "Privacy information for the AHSAN portfolio.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="relative pt-32 sm:pt-40">
        <div className="page-container pb-24 sm:pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <ShieldCheck size={14} className="text-white/30" />

              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
                AHSAN / PRIVACY
              </span>
            </div>

            <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.09em]">
              Privacy,
              <br />
              <span className="text-gradient">plainly.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/35 sm:text-lg">
              A straightforward explanation of what information this portfolio
              handles, why it may be handled, and what happens when you
              interact with it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Last updated · September 26, 2026
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5">
                <Lock size={11} className="text-white/25" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Minimal data approach
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] py-16 sm:py-20">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
              The principle
            </span>

            <p className="max-w-3xl text-xl leading-9 tracking-[-0.025em] text-white/55 sm:text-2xl sm:leading-10">
              The goal is simple:{" "}
              <span className="text-white">
                collect as little personal information as reasonably necessary
              </span>{" "}
              and make the purpose of any information handling clear.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="page-container">
          <div className="max-w-4xl">
            {sections.map((section) => (
              <article
                key={section.number}
                className="border-b border-white/[0.06] py-10 first:pt-0 last:border-b-0"
              >
                <div className="grid gap-6 sm:grid-cols-[100px_1fr]">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/15">
                    {section.number}
                  </span>

                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.04em] text-white/75 sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-6 space-y-4">
                      {section.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-white/30 sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28 sm:pb-40">
        <div className="page-container">
          <div className="rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-7 sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Questions
                </span>

                <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white/70 sm:text-3xl">
                  Need clarification?
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/25">
                  If you have a privacy-related question, you can contact AHSAN
                  directly.
                </p>
              </div>

              <a
                href="mailto:Ahsan200505@gmail.com"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
              >
                Contact AHSAN
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25 transition hover:text-white"
        >
          <ArrowLeft size={13} />
          Back to AHSAN
        </Link>
        </div>
      </section>
    </PageShell>
  );
}