"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";

const links = [
  {
    label: "Email",
    value: "Ahsan200505@gmail.com",
    href: "mailto:Ahsan200505@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/tuan-ahsan-37158036",
  },
  {
    label: "GitHub",
    value: "Explore the code",
    href: "https://github.com/ahsan-aflal-dev",
  },
];

export function Contact() {
  return (
    <section
  id="contact"
  className="relative py-28 sm:py-36"
>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-white/[0.025]">
          <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#8D0B93]/10 blur-[120px]" />

          <div className="relative grid gap-14 px-7 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                  Contact
                </span>
              </div>

              <h2 className="mt-8 max-w-3xl text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.07em]">
                Let’s build
                <br />
                <span className="text-gradient">
                  something intelligent.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                Whether it’s an idea, collaboration, technical conversation,
                or simply connecting — I’m always interested in meaningful
                work around AI, ML, and intelligent systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-3">
                {links.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-[10px] font-semibold tracking-[0.08em] text-white/40 transition-colors group-hover:text-white/80">
                          {Icon ? (
                            <Icon size={17} strokeWidth={1.5} />
                          ) : (
                            link.label === "GitHub" ? "GH" : "in"
                          )}
                        </div>

                        <div>
                          <p className="text-xs font-medium text-white/70">
                            {link.label}
                          </p>

                          <p className="mt-1 text-[11px] text-white/25">
                            {link.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70"
                      />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}