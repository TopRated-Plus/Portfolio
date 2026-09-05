import { AIExperience } from "@/components/sections/ai-experience";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { Hero } from "@/components/sections/hero";
import { InteractiveTerminal } from "@/components/sections/interactive-terminal";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { Timeline } from "@/components/sections/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <InteractiveTerminal />
      <CaseStudiesPreview />
      <Timeline />
      <Metrics />
      <Testimonials />
      <AIExperience />
    </>
  );
}
