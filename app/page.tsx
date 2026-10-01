import { AmbientBackground } from "@/components/background/ambient-background";
import { AxonPreview } from "@/components/home/axon-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { Contact } from "@/components/home/contact";
import { CurrentlyBuilding } from "@/components/home/currently-building";
import { Hero } from "@/components/home/hero";
import { HomeFlow } from "@/components/home/home-flow";
import { SelectedWork } from "@/components/home/selected-work";
import { WhatIBuild } from "@/components/home/what-i-build";
import { Navigation } from "@/components/navigation/navigation";
import { CommandPalette } from "@/components/navigation/command-palette";
import { Footer } from "@/components/footer/footer";
import { SystemIntro } from "@/components/intro/system-intro";

export default function Home() {
  return (
    <>
      <SystemIntro />

      <Navigation />
      <CommandPalette />

      <div className="relative min-h-screen overflow-x-hidden">
        <AmbientBackground />

        <HomeFlow>
          <main className="relative">
            <Hero />

            <AboutPreview />

            <WhatIBuild />

            <CurrentlyBuilding />

            <SelectedWork />

            <AxonPreview />

            <Contact />
          </main>
        </HomeFlow>
      </div>

      <Footer />
    </>
  );
}