import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
  Scale,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "About this website",
    content: [
      "This website is the personal portfolio of Tuan Ahsan Aflal, an AI / ML Engineer in development.",
      "Its purpose is to present professional information, engineering work, projects, research interests, experiments, and the broader AXON ecosystem.",
    ],
  },
  {
    number: "02",
    title: "Use of the website",
    content: [
      "You may browse, read, and interact with the publicly available content for personal and informational purposes.",
      "You agree not to intentionally interfere with the operation, security, availability, or integrity of the website.",
      "You should not attempt to gain unauthorized access to systems, resources, or functionality that are not publicly provided.",
    ],
  },
  {
    number: "03",
    title: "Intellectual property",
    content: [
      "The original visual identity, written content, designs, and original materials presented on this website belong to Tuan Ahsan Aflal unless otherwise stated.",
      "Individual software projects may have their own repositories, licenses, or third-party dependencies. The applicable project license takes precedence for those materials.",
      "Third-party names, trademarks, libraries, frameworks, and services remain the property of their respective owners.",
    ],
  },
  {
    number: "04",
    title: "Project information",
    content: [
      "Projects shown on this website may represent completed work, active development, planned systems, experiments, research directions, or future concepts.",
      "Descriptions of planned or experimental systems are intended to communicate direction and architecture rather than guarantee a particular future implementation.",
      "Project status indicators may change as development progresses.",
    ],
  },
  {
    number: "05",
    title: "External links",
    content: [
      "This website may contain links to external websites and services.",
      "External websites operate independently and may have their own terms, privacy policies, and practices.",
      "AHSAN is not responsible for the content, availability, or policies of external websites.",
    ],
  },
  {
    number: "06",
    title: "Accuracy",
    content: [
      "Reasonable effort is made to keep the information presented on this website accurate and current.",
      "However, portfolio content can change as projects, skills, research, and professional circumstances evolve.",
      "No guarantee is made that every item will always be complete, current, or error-free.",
    ],
  },
  {
    number: "07",
    title: "No professional advice",
    content: [
      "Technical articles, project descriptions, research notes, and educational material published here are provided for informational purposes.",
      "They should not automatically be treated as professional, financial, legal, security, or other specialized advice.",
    ],
  },
  {
    number: "08",
    title: "Changes",
    content: [
      "These terms may be updated as the website and its functionality evolve.",
      "Continued use of the website after an update means that the updated version will govern future use of the website.",
    ],
  },
];

export const metadata = {
  title: "Terms",
  description: "Terms of use for the AHSAN portfolio.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="relative pt-32 sm:pt-40">
        <div className="page-container pb-24 sm:pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <Scale size={14} className="text-white/30" />

              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
                AHSAN / TERMS
              </span>
            </div>

            <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.09em]">
              Clear
              <br />
              <span className="text-gradient">boundaries.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/35 sm:text-lg">
              The basic terms governing your use of this portfolio and the
              information presented through it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Last updated · September 26, 2026
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2.5">
                <FileText size={11} className="text-white/25" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Website terms
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
              Use the website respectfully,{" "}
              <span className="text-white">respect the work behind it</span>,
              and understand that project descriptions can represent different
              stages of development.
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
                  Need to talk?
                </span>

                <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white/70 sm:text-3xl">
                  Questions about these terms?
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/25">
                  Contact AHSAN if something here needs clarification.
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