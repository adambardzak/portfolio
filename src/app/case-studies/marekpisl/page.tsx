import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import CaseStudy from "./CaseStudy";

export const metadata: Metadata = generateMetadata({
  title: "Marek Pišl Portfolio | Case Study",
  description:
    "Moderní portfolio web pro grafického designéra s optimalizovanou galerií projektů, responzivním designem a plynulými animacemi.",
  keywords: [
    "Marek Pišl",
    "portfolio",
    "grafický design",
    "webová prezentace",
    "galerie projektů",
    "case study",
  ],
  ogImage: "/projects/marekpisl/marekpisl_hero_mockup-large.png",
  ogType: "article",
  canonical: "https://adambardzak.cz/case-studies/marekpisl",
});

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero Section */}
      <CaseStudy />
    </>
  );
}
