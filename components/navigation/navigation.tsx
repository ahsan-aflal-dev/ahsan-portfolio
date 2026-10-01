"use client";

import Link from "next/link";
import { Command, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Research", href: "/research" },
  { label: "AXON", href: "/axon" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  const mobileMenuButtonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      if (
        currentScrollY > previousScrollY &&
        currentScrollY > 80
      ) {
        setScrollingDown(true);
      } else if (currentScrollY < previousScrollY) {
        setScrollingDown(false);
      }

      previousScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);

        requestAnimationFrame(() => {
          mobileMenuButtonRef.current?.focus();
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  function openCommandPalette() {
    setMobileOpen(false);

    window.dispatchEvent(
      new Event("open-command-palette")
    );
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-700 sm:px-5 ${
          scrolled ? "pt-3" : "pt-4 sm:pt-5"
        } ${
          scrollingDown
            ? "translate-y-[-2px]"
            : "translate-y-0"
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className={`group/nav relative mx-auto flex max-w-[1240px] items-center justify-between border transition-all duration-700 ${
            scrolled
              ? "h-[58px] rounded-full border-white/[0.13] bg-black/[0.58] px-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.32),0_0_40px_rgba(141,11,147,0.035)] backdrop-blur-[30px] sm:px-3"
              : "h-[62px] rounded-[22px] border-white/[0.095] bg-black/[0.38] px-3 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-[26px] sm:rounded-[24px] sm:px-4"
          }`}
        >
          {/* Glass reflection */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

            <span className="absolute -left-20 top-0 h-24 w-56 rotate-[-12deg] bg-white/[0.025] blur-2xl transition-transform duration-1000 group-hover/nav:translate-x-8" />

            <span className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.025]" />
          </span>

          {/* Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="AHSAN home"
            className="group relative z-10 flex shrink-0 items-center gap-2.5 rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden border border-white/[0.105] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_5px_18px_rgba(0,0,0,0.18)] transition-all duration-500 ${
                scrolled
                  ? "h-9 w-9 rounded-[12px]"
                  : "h-10 w-10 rounded-[13px]"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent"
              />

                <img
                  src="/brand/ahsan-mark.png"
                  alt=""
                  className="relative h-[70%] w-[70%] object-contain"
                />
            </div>

            <div className="hidden leading-none sm:block">
              <p className="text-[11px] font-semibold tracking-[0.1em] text-white/90 transition-colors duration-300 group-hover:text-white">
                AHSAN
              </p>

              <p className="mt-1 font-mono text-[7px] tracking-[0.13em] text-white/28">
                AI / ML ENGINEER
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="relative z-10 hidden items-center rounded-full border border-white/[0.045] bg-white/[0.018] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] lg:flex">
            {navigation.map((item) => {
              const active = isActivePath(
                pathname,
                item.href
              );

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`group relative rounded-full px-3.5 py-2 text-[10.5px] font-medium tracking-[0.025em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/30 xl:px-4 ${
                    active
                      ? "text-white"
                      : "text-white/42 hover:text-white/85"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full border border-white/[0.08] bg-white/[0.065] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_4px_14px_rgba(0,0,0,0.12)]"
                    />
                  )}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 -z-10 rounded-full bg-white/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      active ? "hidden" : ""
                    }`}
                  />

                  <span className="relative">
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[5px] left-1/2 h-px -translate-x-1/2 rounded-full bg-white/70 transition-all duration-300 ${
                      active
                        ? "w-4 opacity-70"
                        : "w-0 opacity-0 group-hover:w-2.5 group-hover:opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Controls */}
          <div className="relative z-10 flex items-center gap-1.5">
            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="group/cmd hidden h-9 items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none backdrop-blur-xl transition-all duration-300 hover:border-white/[0.13] hover:bg-white/[0.055] hover:text-white/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_6px_20px_rgba(0,0,0,0.14)] focus-visible:ring-2 focus-visible:ring-white/30 sm:flex"
            >
              <Command
                size={12}
                strokeWidth={1.5}
              />

              <span className="font-mono text-[9px] tracking-[0.08em]">
                K
              </span>
            </button>

            <button
              ref={mobileMenuButtonRef}
              type="button"
              onClick={() =>
                setMobileOpen((open) => !open)
              }
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className={`flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-white/[0.03] text-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] outline-none backdrop-blur-xl transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-white/30 lg:hidden ${
                mobileOpen
                  ? "rounded-[13px] bg-white/[0.065] text-white"
                  : "rounded-full"
              }`}
            >
              {mobileOpen ? (
                <X size={16} strokeWidth={1.5} />
              ) : (
                <Menu size={16} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile backdrop */}
        <button
          type="button"
          aria-label="Close mobile navigation"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobileMenu}
          className={`fixed inset-0 -z-10 bg-black/55 backdrop-blur-[5px] outline-none transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        />

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`mx-auto mt-2.5 max-w-[1240px] overflow-hidden rounded-[24px] border border-white/[0.095] bg-black/[0.62] shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-[30px] transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "max-h-[700px] translate-y-0 scale-100 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-3 scale-[0.985] border-transparent opacity-0"
          }`}
        >
          <div className="relative p-2">
            {/* Mobile glass highlight */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent"
            />

            <div className="space-y-0.5">
              {navigation.map((item) => {
                const active = isActivePath(
                  pathname,
                  item.href
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-current={
                      active ? "page" : undefined
                    }
                    className={`group relative flex items-center justify-between overflow-hidden rounded-[15px] px-4 py-3.5 text-[13px] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/30 ${
                      active
                        ? "border border-white/[0.07] bg-white/[0.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]"
                        : "border border-transparent text-white/48 hover:border-white/[0.045] hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-white/75 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={openCommandPalette}
              tabIndex={mobileOpen ? 0 : -1}
              className="mt-2 flex w-full items-center justify-between rounded-[15px] border-t border-white/[0.055] px-4 py-4 pt-4 text-left text-[13px] text-white/38 outline-none transition-all duration-300 hover:bg-white/[0.025] hover:text-white/75 focus-visible:ring-2 focus-visible:ring-white/30"
            >
              <span>Command Palette</span>

              <span className="flex items-center gap-1.5 font-mono text-[9px] text-white/22">
                <Command size={12} strokeWidth={1.5} />
                K
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}