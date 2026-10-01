"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { DotMatrixPortrait } from "./dot-matrix-portrait";

const TARGET_TEXT = "AHSAN";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomCharacter() {
  return SCRAMBLE_CHARS[
    Math.floor(Math.random() * SCRAMBLE_CHARS.length)
  ];
}

export function Hero() {
  const [displayText, setDisplayText] =
    useState(TARGET_TEXT);

  const animationFrameRef =
    useRef<number | null>(null);

  const animationIdRef = useRef(0);

  function scrambleName() {
    animationIdRef.current += 1;

    const animationId = animationIdRef.current;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startTime = performance.now();
    const duration = 650;

    const animate = (currentTime: number) => {
      if (animationId !== animationIdRef.current) {
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(
        elapsed / duration,
        1
      );

      const resolvedCount = Math.floor(
        progress * TARGET_TEXT.length
      );

      let nextText = "";

      for (
        let index = 0;
        index < TARGET_TEXT.length;
        index += 1
      ) {
        if (index < resolvedCount) {
          nextText += TARGET_TEXT[index];
        } else {
          nextText += randomCharacter();
        }
      }

      setDisplayText(
        progress >= 1 ? TARGET_TEXT : nextText
      );

      if (progress < 1) {
        animationFrameRef.current =
          requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);
  }

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="page-container w-full">
        <div className="grid items-center lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:gap-4">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white/30" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                AI / ML Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
              }}
              className="select-none text-[clamp(4rem,13vw,11rem)] font-semibold leading-[0.8] tracking-[-0.075em]"
            >
              <button
                type="button"
                onMouseEnter={scrambleName}
                onFocus={scrambleName}
                aria-label="AHSAN"
                className="cursor-default border-0 bg-transparent p-0 text-left text-inherit outline-none focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-white/20"
              >
                {displayText}
              </button>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.45,
              }}
              className="mt-10 max-w-3xl"
            >
              <p className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                Building Intelligent Systems
                <br />
                <span className="text-gradient">
                  That Think, Learn & Act.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Explore AHSAN

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/projects"
                className="glass inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-white transition hover:bg-white/10"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden min-h-[460px] items-center justify-center lg:flex"
          >
            <DotMatrixPortrait />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] sm:flex"
        >
          <span>Discover</span>

          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </motion.div>
      </div>
    </section>
  );
}