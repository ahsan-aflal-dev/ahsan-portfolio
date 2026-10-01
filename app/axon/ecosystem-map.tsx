"use client";

import Link from "next/link";
import { ArrowUpRight, CircleDot, Network } from "lucide-react";
import { motion } from "motion/react";

import { axonDomains } from "@/app/axon/axon-data";

export function EcosystemMap() {
  return (
    <section className="relative px-6 py-24 sm:px-8 sm:py-32">
      <div className="page-container">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              AXON / ECOSYSTEM
            </span>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              One ecosystem.
              <br />
              <span className="text-white/35">
                Multiple directions.
              </span>
            </h2>
          </div>

          <Network
            size={18}
            strokeWidth={1.5}
            className="text-white/20"
          />
        </div>

        <div className="relative">
          {/* Central AXON node */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] bg-white/[0.015] lg:block">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <span className="font-mono text-[8px] tracking-[0.25em] text-white/20">
                  CORE
                </span>

                <p className="mt-2 text-lg font-medium tracking-[-0.03em] text-white/70">
                  AXON
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {axonDomains.map((domain, index) => (
              <motion.div
                key={domain.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={domain.href}
                  className="group block h-full"
                >
                  <article className="premium-surface motion-lift relative flex min-h-[250px] flex-col overflow-hidden rounded-[24px] p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                        <CircleDot
                          size={15}
                          strokeWidth={1.5}
                          className="text-white/25 transition-colors group-hover:text-white/55"
                        />
                      </div>

                      <span className="font-mono text-[8px] tracking-[0.18em] text-white/15">
                        {domain.number}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-sm font-medium tracking-[0.1em] text-white/65">
                          {domain.name}
                        </h3>

                        <span className="font-mono text-[8px] tracking-[0.14em] text-white/15">
                          {domain.status}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-6 text-white/25">
                        {domain.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20 transition-colors group-hover:text-white/45">
                          Enter domain
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/55"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}