import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import Projects from "@/components/sections/Projects";
import AiSystems from "@/components/sections/AiSystems";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Metrics />
      <Projects />
      <AiSystems />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}
