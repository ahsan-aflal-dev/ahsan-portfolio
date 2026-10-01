import type { ReactNode } from "react";

import { AmbientBackground } from "@/components/background/ambient-background";
import { Footer } from "@/components/footer/footer";
import { CommandPalette } from "@/components/navigation/command-palette";
import { Navigation } from "@/components/navigation/navigation";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({
  children,
  className = "",
}: PageShellProps) {
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${className}`}
    >
      <Navigation />
      <CommandPalette />

      <div className="relative">
        <AmbientBackground />
        {children}
      </div>

      <Footer />
    </div>
  );
}