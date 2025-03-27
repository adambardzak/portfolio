"use client";

import { motion } from "framer-motion";
import { Plus, Minus, Mail } from "lucide-react";
import { useState } from "react";
import { ContentSection } from "@/components/blog/ContentSection";
import { Highlight } from "@/components/blog/Highlight";

type FAQItem = {
  question: string;
  answer: JSX.Element;
  category: "general" | "development" | "pricing" | "support";
};

const faqItems: FAQItem[] = [
  {
    question: "Jak probíhá spolupráce?",
    answer: (
      <>
        Spolupráce začíná úvodní konzultací, kde si ujasníme vaše potřeby a
        cíle. Následně připravíme návrh řešení a cenovou kalkulaci. Po
        odsouhlasení začneme pracovat na projektu s pravidelnými konzultacemi,
        abyste měli přehled o postupu. Po dokončení vám předáme hotové dílo
        včetně potřebné dokumentace a zaškolení.
      </>
    ),
    category: "general",
  },
  {
    question: "Kolik stojí webová stránka nebo aplikace?",
    answer: (
      <>
        Cena se odvíjí od rozsahu a složitosti projektu. Každý projekt je
        jedinečný, proto připravujeme individuální kalkulace. Základní webové
        prezentace začínají na 30 000 Kč, e-shopy a složitější aplikace na 80
        000 Kč. Pro přesnou kalkulaci mě neváhejte kontaktovat.
      </>
    ),
    category: "pricing",
  },
  {
    question: "Jak dlouho trvá vytvoření webu?",
    answer: (
      <>
        Doba realizace závisí na komplexnosti projektu. Jednodušší webové
        prezentace mohu dodat do 4-6 týdnů, složitější projekty jako e-shopy
        nebo webové aplikace obvykle trvají 2-4 měsíce. Vždy se snažím dodržet
        dohodnuté termíny a průběžně vás informovat o postupu.
      </>
    ),
    category: "general",
  },
  {
    question: "Používáte šablony nebo tvoříte na míru?",
    answer: (
      <>
        Každý projekt vytváříme na míru podle vašich potřeb a požadavků.
        Nepoužíváme předpřipravené šablony, ale navrhujeme a programujeme vše od
        základů. Díky tomu získáte originální řešení, které přesně odpovídá
        vašim představám a potřebám vašeho podnikání.
      </>
    ),
    category: "development",
  },
  {
    question: "Nabízíte i správu a údržbu webu?",
    answer: (
      <>
        Ano, nabízíme kompletní správu a údržbu webů, které vytváříme.
        Zajišťujeme pravidelné aktualizace, bezpečnostní kontroly, zálohování a
        technickou podporu. Můžete si vybrat z několika servisních balíčků podle
        vašich potřeb nebo se domluvíme na individuálním řešení.
      </>
    ),
    category: "support",
  },
  {
    question: "Pomůžete mi i s marketingem?",
    answer: (
      <>
        Díky spolupráci s marketingovými specialisty mohu zajistit i kompletní
        marketingovou strategii. Nabízíme služby jako SEO optimalizace, PPC
        kampaně, správa sociálních sítí nebo email marketing. Vždy se snažíme
        propojit technické řešení s efektivním marketingem pro maximální
        výsledky.
      </>
    ),
    category: "development",
  },
  {
    question: "Jak přistupujete k SEO?",
    answer: (
      <>
        SEO považujeme za klíčovou součást každého webu. Již při vývoji
        implementujeme všechny technické aspekty SEO jako rychlost načítání,
        mobilní optimalizaci, strukturovaná data a správné HTML značky. Dále
        mohu zajistit obsahovou strategii, analýzu klíčových slov a průběžnou
        optimalizaci pro lepší pozice ve vyhledávačích.
      </>
    ),
    category: "development",
  },
  {
    question: "Jaké technologie používáte?",
    answer: (
      <>
        Specializujeme se na moderní webové technologie jako{" "}
        <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>,
        <Highlight>TypeScript</Highlight> a <Highlight>Tailwind CSS</Highlight>.
        Pro každý projekt vybíráme optimální technologický stack podle
        specifických požadavků.
      </>
    ),
    category: "development",
  },
  {
    question: "Mohu si web spravovat sám?",
    answer: (
      <>
        Určitě! Po domluvě dokáži vytvořit takový web, aby ho mohl spravovat i
        netechnický uživatel. Součástí dodávky je vždy implementace
        administračního rozhraní a zaškolení, jak s ním pracovat. Zároveň jsem
        vám k dispozici pro případnou podporu nebo složitější úpravy.
      </>
    ),
    category: "support",
  },
  {
    question: "Jak řešíte hosting a domény?",
    answer: (
      <>
        Mohu zajistit kompletní řešení včetně registrace domény a hostingu.
        Používáme spolehlivé hostingové služby jako Vercel, Netlify nebo
        DigitalOcean, které zajišťují vysokou dostupnost a bezpečnost. Pokud již
        máte svůj hosting nebo doménu, není problém využít je pro váš nový web.
      </>
    ),
    category: "support",
  },
];

const categories = {
  all: "Vše",
  general: "Obecné",
  development: "Vývoj",
  pricing: "Ceník",
  support: "Podpora",
} as const;

const FAQItem = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="border-b border-gray-200 dark:border-gray-800"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className="text-lg font-medium text-text-light dark:text-text-dark group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {item.question}
        </span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-500 dark:text-blue-400" />
        ) : (
          <Plus className="w-5 h-5 text-text-muted-light dark:text-text-muted-dark group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, ease: "easeOut" },
        }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          {item.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof categories | "all"
  >("all");

  const filteredItems = faqItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <section className="py-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span
                className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
                border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]"
              >
                FAQ
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-monument text-4xl lg:text-5xl text-text-light dark:text-text-dark"
            >
              Často kladené otázky
            </motion.h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() =>
                  setSelectedCategory(key as keyof typeof categories | "all")
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === key
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-text-muted-light dark:text-text-muted-dark hover:bg-blue-500/10 dark:hover:bg-blue-400/10"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <ContentSection>
            <motion.div
              className="divide-y divide-gray-200 dark:divide-gray-800"
              layout
            >
              {filteredItems.map((item, index) => (
                <FAQItem key={index} item={item} />
              ))}
            </motion.div>
          </ContentSection>

          {/* Contact Section */}
          <ContentSection className="!mt-32">
            <div className="text-center space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                Nenašli jste odpověď?
              </h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                Neváhejte nás kontaktovat pro další informace. Rádi zodpovíme
                všechny vaše dotazy a pomůžeme vám s vaším projektem.
              </p>
              <div className="pt-8">
                <a
                  href="mailto:hello@adambardzak.cz"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                    bg-blue-500 hover:bg-blue-600 transition-colors
                    text-white font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Kontaktujte nás
                </a>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </section>
  );
}
