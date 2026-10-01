"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07]">
      <div className="page-container py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-[0.22em]">
                AHSAN
              </span>

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                AI / ML Engineer
              </span>
            </div>

            <p className="mt-3 max-w-md text-xs leading-5 text-white/25">
              Building Intelligent Systems That Think, Learn & Act.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/ahsan-aflal-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] text-[9px] font-semibold tracking-wide text-white/35 transition hover:bg-white/[0.07] hover:text-white"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/tuan-ahsan-37158036"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] text-[9px] font-semibold tracking-wide text-white/35 transition hover:bg-white/[0.07] hover:text-white"
            >
              in
            </a>

            <motion.button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              whileHover={{ y: -2 }}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/15">
            © {year} Tuan Ahsan Aflal
          </p>

          <div className="flex gap-5">
            <a
              href="/privacy"
              className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/15 transition hover:text-white/50"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/15 transition hover:text-white/50"
            >
              Terms
            </a>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/15">
            AHSAN → AXON
          </span>
        </div>
      </div>
    </footer>
  );
}