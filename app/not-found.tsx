import {
  ArrowLeft,
  ArrowUpRight,
  CircleOff,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { CommandPaletteTrigger } from "@/components/navigation/command-palette-trigger";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[calc(100vh-180px)] items-center pt-24">
        <div className="w-full py-24 sm:py-32">
          <div className="page-container">
            <div className="mx-auto max-w-4xl text-center">
              {/* SYSTEM SIGNAL */}
              <div className="flex items-center justify-center gap-3">
                <CircleOff size={14} className="text-white/25" />

                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                  AHSAN / SYSTEM RESPONSE
                </span>
              </div>

              {/* ERROR NUMBER */}
              <div className="mt-10 select-none text-[clamp(8rem,25vw,22rem)] font-medium leading-[0.7] tracking-[-0.12em] text-white/[0.035]">
                404
              </div>

              {/* CONTENT */}
              <div className="relative -mt-12 sm:-mt-24">
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/20">
                  Destination not found
                </p>

                <h1 className="mt-5 text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
                  This path doesn&apos;t exist.
                </h1>

                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/25 sm:text-base">
                  The page you requested may have moved, never existed, or the
                  route may have been entered incorrectly.
                </p>

                {/* ACTIONS */}
                <div className="mt-9 flex flex-wrap justify-center gap-2">
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
                  >
                    <ArrowLeft size={14} />
                    Back home
                  </Link>

                  <CommandPaletteTrigger />
                </div>
              </div>

              {/* SYSTEM FOOTER */}
              <div className="mx-auto mt-20 flex max-w-xl flex-col items-center gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                  HTTP / 404
                </span>

                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 transition hover:text-white/50"
                >
                  Explore projects
                  <ArrowUpRight
                    size={11}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}