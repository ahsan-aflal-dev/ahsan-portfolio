"use client";

import { useEffect, useRef } from "react";

type LiquidGlassPortraitProps = {
  className?: string;
};

const PORTRAIT_SOURCE =
  "/brand/ahsan-portrait.png";

export function LiquidGlassPortrait({
  className = "",
}: LiquidGlassPortraitProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const portraitRef =
    useRef<HTMLDivElement>(null);

  const glowRef =
    useRef<HTMLDivElement>(null);

  const glassRef =
    useRef<HTMLDivElement>(null);

  const highlightRef =
    useRef<HTMLDivElement>(null);

  const frameRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container =
      containerRef.current;

    const portrait =
      portraitRef.current;

    const glow =
      glowRef.current;

    const glass =
      glassRef.current;

    const highlight =
      highlightRef.current;

    const frame =
      frameRef.current;

    if (
      !container ||
      !portrait ||
      !glow ||
      !glass ||
      !highlight ||
      !frame
    ) {
      return;
    }

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    let frameId = 0;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let hovering = false;

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const rect =
        container.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      targetX =
        (x - 0.5) * 2;

      targetY =
        (y - 0.5) * 2;

      hovering = true;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      hovering = false;
    };

    const animate = (
      time: number
    ) => {
      if (reducedMotion) {
        portrait.style.transform =
          "translate3d(0,0,0)";

        glass.style.transform =
          "translate3d(0,0,0)";

        glow.style.transform =
          "translate3d(0,0,0)";

        highlight.style.transform =
          "translate3d(0,0,0)";

        frame.style.transform =
          "translate3d(0,0,0)";

        return;
      }

      /*
       * Smooth cursor interpolation.
       */
      currentX +=
        (targetX - currentX) *
        0.075;

      currentY +=
        (targetY - currentY) *
        0.075;

      /*
       * Very subtle idle movement.
       */
      const seconds =
        time * 0.001;

      const idleX =
        Math.sin(seconds * 0.55) *
        2.5;

      const idleY =
        Math.cos(seconds * 0.7) *
        3;

      /*
       * Portrait has the most
       * noticeable depth movement.
       */
      const portraitX =
        currentX * 10 +
        idleX;

      const portraitY =
        currentY * 7 +
        idleY;

      portrait.style.transform =
        `translate3d(${portraitX}px, ${portraitY}px, 0) scale(1.025)`;

      /*
       * Glass moves slightly less.
       */
      const glassX =
        currentX * 5;

      const glassY =
        currentY * 4;

      glass.style.transform =
        `translate3d(${glassX}px, ${glassY}px, 0)`;

      /*
       * Ambient glow follows cursor.
       */
      const glowX =
        currentX * 18;

      const glowY =
        currentY * 15;

      glow.style.transform =
        `translate3d(${glowX}px, ${glowY}px, 0)`;

      /*
       * Specular reflection travels
       * across the glass surface.
       */
      const highlightX =
        50 +
        currentX * 30;

      const highlightY =
        25 +
        currentY * 25;

      highlight.style.background =
        `
          radial-gradient(
            circle at ${highlightX}% ${highlightY}%,
            rgba(255,255,255,0.22) 0%,
            rgba(255,255,255,0.07) 12%,
            rgba(255,255,255,0.025) 28%,
            transparent 55%
          )
        `;

      /*
       * Slightly stronger glass when hovered.
       */
      const hoverScale =
        hovering ? 1.008 : 1;

      frame.style.transform =
        `translate3d(0, ${idleY * 0.35}px, 0) scale(${hoverScale})`;

      frame.style.setProperty(
        "--cursor-x",
        `${50 + currentX * 18}%`
      );

      frame.style.setProperty(
        "--cursor-y",
        `${50 + currentY * 18}%`
      );

      frame.style.setProperty(
        "--hover-opacity",
        hovering ? "1" : "0.78"
      );

      frameId =
        requestAnimationFrame(
          animate
        );
    };

    container.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    frameId =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        frameId
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex h-[480px] w-full items-center justify-center sm:h-[580px] lg:h-[680px] ${className}`}
      aria-label="Portrait of Ahsan"
    >
      {/* =====================================================
          AMBIENT BACKGROUND LIGHT
          ===================================================== */}

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(141,11,147,0.20) 0%, rgba(141,11,147,0.08) 32%, rgba(50,21,117,0.035) 55%, transparent 72%)",
          filter:
            "blur(35px)",
        }}
      />

      {/* Secondary pink atmospheric glow */}

      <div
        className="pointer-events-none absolute left-[54%] top-[28%] h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,5,124,0.10), transparent 68%)",
          filter:
            "blur(30px)",
        }}
      />

      {/* =====================================================
          MAIN ORB
          ===================================================== */}

      <div
        ref={frameRef}
        className="relative aspect-square w-[72%] max-w-[520px] will-change-transform sm:w-[68%] lg:w-[72%]"
        style={{
          transformStyle:
            "preserve-3d",
          perspective:
            "1200px",
        }}
      >
        {/* Outer atmospheric ring */}

        <div
          className="pointer-events-none absolute -inset-[7%] rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 210deg, transparent 0deg, rgba(141,11,147,0.18) 55deg, transparent 115deg, rgba(255,5,124,0.10) 220deg, transparent 300deg)",
            filter:
              "blur(16px)",
          }}
        />

        {/* =================================================
            GLASS BODY
            ================================================= */}

        <div
          ref={glassRef}
          className="absolute inset-0 overflow-hidden rounded-full will-change-transform"
          style={{
            transformStyle:
              "preserve-3d",

            background:
              "radial-gradient(circle at 32% 24%, rgba(255,255,255,0.105), transparent 27%), radial-gradient(circle at 68% 76%, rgba(141,11,147,0.075), transparent 42%), rgba(255,255,255,0.018)",

            border:
              "1px solid rgba(255,255,255,0.14)",

            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.18), inset 0 -20px 50px rgba(50,21,117,0.10), 0 0 80px rgba(141,11,147,0.08)",

            backdropFilter:
              "blur(10px)",

            WebkitBackdropFilter:
              "blur(10px)",
          }}
        >
          {/* =================================================
              PORTRAIT
              ================================================= */}

          <div
            ref={portraitRef}
            className="absolute inset-[-4%] will-change-transform"
            style={{
              transform:
                "translate3d(0,0,0) scale(1.025)",
              transformStyle:
                "preserve-3d",
            }}
          >
            <img
              src={PORTRAIT_SOURCE}
              alt="Ahsan — AI / ML Engineer"
              draggable={false}
              className="h-full w-full select-none object-cover"
              style={{
                /*
                 * Keeps the portrait clean while
                 * giving it a slightly cinematic
                 * monochrome treatment.
                 */
                filter:
                  "saturate(0.72) contrast(1.04) brightness(0.98)",
              }}
            />
          </div>

          {/* =================================================
              DARK DEPTH VIGNETTE
              ================================================= */}

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 42%, rgba(5,5,9,0.04) 65%, rgba(5,5,9,0.42) 100%)",
            }}
          />

          {/* =================================================
              PURPLE LIQUID GLASS TINT
              ================================================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.08), transparent 24%), radial-gradient(circle at 80% 78%, rgba(141,11,147,0.11), transparent 40%), linear-gradient(135deg, rgba(255,5,124,0.025), transparent 42%, rgba(50,21,117,0.06))",
              mixBlendMode:
                "screen",
            }}
          />

          {/* =================================================
              GLASS SPECULAR HIGHLIGHT
              ================================================= */}

          <div
            ref={highlightRef}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.06) 12%, rgba(255,255,255,0.02) 28%, transparent 55%)",
              mixBlendMode:
                "screen",
            }}
          />

          {/* =================================================
              GLASS CURVE
              ================================================= */}

          <div
            className="pointer-events-none absolute left-[7%] top-[7%] h-[42%] w-[42%] rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.035) 32%, transparent 60%)",
              filter:
                "blur(1px)",
              opacity: 0.7,
            }}
          />

          {/* =================================================
              LOWER GLASS REFLECTION
              ================================================= */}

          <div
            className="pointer-events-none absolute bottom-[3%] left-[15%] h-[20%] w-[70%] rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(141,11,147,0.10), transparent 70%)",
              filter:
                "blur(12px)",
            }}
          />

          {/* =================================================
              INNER BORDER
              ================================================= */}

          <div
            className="pointer-events-none absolute inset-[2px] rounded-full"
            style={{
              border:
                "1px solid rgba(255,255,255,0.055)",
            }}
          />
        </div>

        {/* =================================================
            ORBITAL LIGHT
            ================================================= */}

        <div
          className="pointer-events-none absolute -inset-[2%] rounded-full"
          style={{
            border:
              "1px solid rgba(255,255,255,0.055)",
            transform:
              "rotateX(68deg) rotateZ(-14deg)",
            boxShadow:
              "0 0 22px rgba(141,11,147,0.07)",
          }}
        />

        {/* =================================================
            SMALL ORBITAL ACCENT
            ================================================= */}

        <div
          className="pointer-events-none absolute right-[6%] top-[22%] h-[5px] w-[5px] rounded-full"
          style={{
            background:
              "rgba(255,255,255,0.75)",
            boxShadow:
              "0 0 12px rgba(255,255,255,0.55), 0 0 24px rgba(141,11,147,0.45)",
          }}
        />

        {/* =================================================
            MICRO SYSTEM LABELS
            ================================================= */}

        <div className="pointer-events-none absolute -right-[12%] top-[26%] hidden items-center gap-2 sm:flex">
          <span className="h-px w-7 bg-white/[0.10]" />

          <span className="font-mono text-[8px] tracking-[0.22em] text-white/25">
            IDENTITY
          </span>
        </div>

        <div className="pointer-events-none absolute -left-[13%] bottom-[30%] hidden items-center gap-2 sm:flex">
          <span className="font-mono text-[8px] tracking-[0.22em] text-white/25">
            INTELLIGENCE
          </span>

          <span className="h-px w-7 bg-white/[0.10]" />
        </div>

        {/* =================================================
            STATUS
            ================================================= */}

        <div className="pointer-events-none absolute bottom-[7%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap">
          <span
            className="h-[5px] w-[5px] rounded-full"
            style={{
              background:
                "#8D0B93",
              boxShadow:
                "0 0 10px rgba(141,11,147,0.8)",
            }}
          />

          <span className="font-mono text-[8px] tracking-[0.24em] text-white/30">
            SYSTEM ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiquidGlassPortrait;

export { LiquidGlassPortrait as DotMatrixPortrait };