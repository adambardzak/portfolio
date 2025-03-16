import { generateMetadata } from "@/components/SEO";
import Services from "./Services";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Služby",
  description:
    "Nabízím vývoj moderních webových aplikací a e-commerce řešení. ",
  keywords: [
    "Služby",
    "Vývoj webu",
    "web development",
    "grafický design",
    "webová prezentace",
    "Webová aplikace",
    "Nabídka služeb",
  ],
  // ogImage: "/projects/marekpisl/marekpisl_hero_mockup-large.png",
  ogType: "website",
  canonical: "https://adambardzak.cz/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center bg-light dark:bg-dark">
        <Services />
      </section>
    </>
  );
}
