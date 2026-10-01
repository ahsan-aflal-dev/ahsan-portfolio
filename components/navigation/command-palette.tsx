"use client";

import Link from "next/link";
import {
  ArrowRight,
  Command,
  Search,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

const commands = [
  {
    label: "Home",
    description: "Return to the beginning",
    href: "/",
    keywords: ["home", "start", "index"],
  },
  {
    label: "About",
    description: "Learn about Ahsan",
    href: "/about",
    keywords: ["about", "profile", "who", "ahsan"],
  },
  {
    label: "Vision",
    description: "Vision & mission",
    href: "/vision",
    keywords: ["vision", "mission", "direction"],
  },
  {
    label: "Journey",
    description: "Explore the journey",
    href: "/journey",
    keywords: ["journey", "timeline", "career", "education"],
  },
  {
    label: "Projects",
    description: "Explore selected work",
    href: "/projects",
    keywords: ["projects", "work", "portfolio", "systems"],
  },
  {
    label: "Skills",
    description: "Technical capabilities",
    href: "/skills",
    keywords: ["skills", "technology", "technical"],
  },
  {
    label: "Research",
    description: "Research & learning",
    href: "/research",
    keywords: ["research", "learning", "experiments", "study"],
  },
  {
    label: "AXON",
    description: "Enter the AXON ecosystem",
    href: "/axon",
    keywords: ["axon", "brand", "ecosystem"],
  },
  {
    label: "Contact",
    description: "Start a conversation",
    href: "/contact",
    keywords: ["contact", "email", "connect"],
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function CommandPalette() {
  const pathname = usePathname();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return commands;
    }

    return commands.filter((command) => {
      const searchableText = [
        command.label,
        command.description,
        ...command.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  // Open command palette from anywhere in the application.
  useEffect(() => {
    const openPalette = () => {
      setQuery("");
      setSelectedIndex(0);
      setOpen(true);
    };

    window.addEventListener(
      "open-command-palette",
      openPalette
    );

    return () => {
      window.removeEventListener(
        "open-command-palette",
        openPalette
      );
    };
  }, []);

  // Global keyboard shortcut.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCommandShortcut =
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k";

      if (isCommandShortcut) {
        event.preventDefault();

        setOpen((current) => {
          const nextOpen = !current;

          if (nextOpen) {
            setQuery("");
            setSelectedIndex(0);
          }

          return nextOpen;
        });
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus the search input when the palette becomes visible.
  useEffect(() => {
    if (!open) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [open]);

  function closePalette() {
    setOpen(false);
  }

  function navigate(href: string) {
    closePalette();

    if (pathname === href) {
      return;
    }

    router.push(href);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((current) =>
        filteredCommands.length
          ? (current + 1) % filteredCommands.length
          : 0
      );

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((current) =>
        filteredCommands.length
          ? (current - 1 + filteredCommands.length) %
            filteredCommands.length
          : 0
      );

      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const command = filteredCommands[selectedIndex];

      if (command) {
        navigate(command.href);
      }
    }
  }

  if (!open) {
    return null;
  }

  const safeSelectedIndex =
    filteredCommands.length === 0
      ? 0
      : Math.min(
          selectedIndex,
          filteredCommands.length - 1
        );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh] sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close command palette"
        onClick={closePalette}
        className="absolute inset-0 bg-black/65 backdrop-blur-md"
      />

      {/* Palette */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/[0.1] bg-[#09090d]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
        {/* Search */}
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4">
          <Search
            size={17}
            strokeWidth={1.5}
            className="shrink-0 text-white/30"
          />

          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Navigate..."
            aria-label="Search navigation"
            autoComplete="off"
            className="h-14 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/25"
          />

          <kbd className="hidden items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.035] px-2 py-1 font-mono text-[10px] text-white/30 sm:flex">
            <Command size={11} />
            K
          </kbd>

          <button
            type="button"
            onClick={closePalette}
            aria-label="Close command palette"
            className="rounded-lg px-2 py-1 font-mono text-[10px] text-white/25 transition hover:bg-white/[0.05] hover:text-white/60"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[55vh] overflow-y-auto p-2"
        >
          {filteredCommands.length > 0 ? (
            <div className="space-y-1">
              {filteredCommands.map((command, index) => {
                const active = isActivePath(
                  pathname,
                  command.href
                );

                const selected =
                  index === safeSelectedIndex;

                return (
                  <Link
                    key={command.href}
                    href={command.href}
                    onClick={closePalette}
                    onMouseEnter={() =>
                      setSelectedIndex(index)
                    }
                    className={`group flex items-center justify-between rounded-xl px-3 py-3 transition ${
                      selected
                        ? "bg-white/[0.07]"
                        : "bg-transparent hover:bg-white/[0.045]"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-xs transition ${
                          active
                            ? "border-white/[0.14] bg-white/[0.07] text-white"
                            : "border-white/[0.07] bg-white/[0.025] text-white/30 group-hover:text-white/60"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm transition ${
                            selected
                              ? "text-white"
                              : "text-white/65"
                          }`}
                        >
                          {command.label}
                        </p>

                        <p className="mt-0.5 truncate text-[11px] text-white/25">
                          {command.description}
                        </p>
                      </div>
                    </div>

                    <div className="ml-4 flex shrink-0 items-center gap-2">
                      {active && (
                        <span className="rounded-full border border-white/[0.08] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/35">
                          Current
                        </span>
                      )}

                      <ArrowRight
                        size={14}
                        className={`transition ${
                          selected
                            ? "translate-x-0 text-white/55"
                            : "-translate-x-1 text-white/15"
                        }`}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="px-4 py-12 text-center">
              <p className="text-sm text-white/45">
                No matching destination.
              </p>

              <p className="mt-2 text-xs text-white/20">
                Try another search.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-4 text-[10px] text-white/20">
            <span>↑↓ Navigate</span>
            <span>↵ Open</span>
            <span>ESC Close</span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/15">
            AHSAN SYSTEM
          </span>
        </div>
      </div>
    </div>
  );
}