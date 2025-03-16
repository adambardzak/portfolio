import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Technologies";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Contact from "@/components/Contact";
import ProjectCalculator from "@/components/ProjectCalculator";
import Process from "@/components/Process";

export const metadata: Metadata = generateMetadata({
  title: "Webové aplikace a weby na míru",
  description: "Vývoj moderních webových aplikací a webů na míru s důrazem na výkon, design a uživatelskou přívětivost. Specializace na Next.js, React a TypeScript.",
  canonical: "https://adambardzak.cz",
});

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
