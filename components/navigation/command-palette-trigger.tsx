"use client";

import { Command } from "lucide-react";

export function CommandPaletteTrigger() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("open-command-palette"))
      }
      className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/40 transition hover:bg-white/[0.07] hover:text-white"
    >
      <Command size={14} />
      Navigate
    </button>
  );
}