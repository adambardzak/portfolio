import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Technologies";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Contact from "@/components/Contact";
import ProjectCalculator from "@/components/ProjectCalculator";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsShowcase />
      <ProjectCalculator />
      <Expertise />
      <Process />
      <Contact />
    </>
  );
}
