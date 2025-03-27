import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Často kladené otázky | Webový vývoj a služby",
  description: "Odpovědi na nejčastější otázky o vývoji webových aplikací, webových stránkách, cenách, termínech a procesu spolupráce.",
  keywords: [
    "FAQ",
    "často kladené otázky",
    "webový vývoj",
    "ceny webových stránek",
    "jak probíhá vývoj webu",
    "webové aplikace",
    "termíny dodání",
    "proces spolupráce",
  ],
  openGraph: {
    title: "Často kladené otázky | Webový vývoj a služby",
    description: "Odpovědi na nejčastější otázky o vývoji webových aplikací, webových stránkách, cenách, termínech a procesu spolupráce.",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 