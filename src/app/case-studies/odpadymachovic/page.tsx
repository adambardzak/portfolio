import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import CaseStudy from "./CaseStudy";

export const metadata: Metadata = generateMetadata({
  title: "Odpady Machovič | Case Study",
  description:
    "Webová prezentace pro firmu zajišťující odvoz a likvidaci odpadu s důrazem na přehlednost, dostupnost a optimalizaci pro lokální vyhledávání.",
  keywords: [
    "Odpady Machovič",
    "odvoz odpadu",
    "likvidace odpadu",
    "webová prezentace",
    "lokální SEO",
    "case study",
  ],
  ogImage: "/projects/machovic/machovic_hero_mockup-large.png",
  ogType: "article",
  canonical: "https://bardzak.online/case-studies/odpadymachovic",
});

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudy />
    </>
  );
}
