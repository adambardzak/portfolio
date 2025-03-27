import { Metadata } from "next";
import { generateMetadata } from "@/components/SEO";
import CaseStudy from "./CaseStudy";

export const metadata: Metadata = generateMetadata({
  title: "OFTA - Centrum mikrochirurgie oka | Case Study",
  description:
    "Moderní webová prezentace pro oční kliniku OFTA s implementací Strapi CMS, optimalizací pro vyhledávače a responzivním designem.",
  keywords: [
    "OFTA",
    "oční klinika",
    "webová prezentace",
    "Strapi CMS",
    "SEO optimalizace",
    "case study",
  ],
  ogImage: "/projects/ofta/ofta_mockup-bg.png",
  ogType: "article",
  canonical: "https://bardzak.online/case-studies/ofta",
});

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudy />
    </>
  );
}
