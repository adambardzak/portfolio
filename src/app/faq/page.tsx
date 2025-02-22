// - Common client questions
// - Pricing structure
// - Project timelines
// - Technology choices
// - Maintenance services
// // - Support options 

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
    question: "Jak probíhá proces vývoje?",
    answer: (
      <>
        Proces začíná <Highlight>úvodní konzultací</Highlight>, kde společně probereme vaše požadavky a cíle. 
        Následně připravíme návrh řešení a časový harmonogram. Vývoj probíhá v iteracích s pravidelnými konzultacemi.
      </>
    ),
    category: "general",
  },
  {
    question: "Jaké technologie používáte?",
    answer: (
      <>
        Specializujeme se na moderní webové technologie jako <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, 
        <Highlight>TypeScript</Highlight> a <Highlight>Tailwind CSS</Highlight>. Pro každý projekt 
        vybíráme optimální technologický stack podle specifických požadavků.
      </>
    ),
    category: "development",
  },
  {
    question: "Jak se určuje cena projektu?",
    answer: (
      <>
        Cena se odvíjí od <Highlight>rozsahu projektu</Highlight>, požadované funkcionality a časového rámce. 
        Pro přesnější odhad můžete využít náš <Highlight>kalkulátor</Highlight> nebo nás kontaktovat pro 
        detailní konzultaci.
      </>
    ),
    category: "pricing",
  },
  {
    question: "Jaká je běžná doba realizace projektu?",
    answer: (
      <>
        Doba realizace závisí na komplexitě projektu. <Highlight>Menší projekty</Highlight> typicky 
        trvají 4-6 týdnů, <Highlight>středně velké</Highlight> 2-3 měsíce. U rozsáhlejších 
        projektů vytváříme detailní harmonogram na základě specifických požadavků.
      </>
    ),
    category: "general",
  },
  {
    question: "Poskytujete maintenance po dokončení?",
    answer: (
      <>
        Ano, nabízíme různé úrovně <Highlight>maintenance plánů</Highlight>. Od základní údržby 
        a monitoringu až po komplexní support včetně pravidelných updatů a optimalizací. 
        Plány lze přizpůsobit vašim potřebám.
      </>
    ),
    category: "support",
  },
  {
    question: "Jak řešíte SEO optimalizaci?",
    answer: (
      <>
        SEO je integrální součástí našeho vývojového procesu. Využíváme <Highlight>Next.js</Highlight> pro 
        optimální server-side rendering, implementujeme strukturovaná data a dbáme na technické 
        SEO best practices. Nabízíme také pokročilou SEO optimalizaci jako volitelnou službu.
      </>
    ),
    category: "development",
  },
  {
    question: "Jaké jsou možnosti platby?",
    answer: (
      <>
        Nabízíme flexibilní platební podmínky včetně <Highlight>milestone payments</Highlight> a 
        měsíčních splátek. U větších projektů je standardem záloha 30% na začátku projektu. 
        Akceptujeme bankovní převody i platby kartou.
      </>
    ),
    category: "pricing",
  },
  {
    question: "Poskytujete podporu po spuštění?",
    answer: (
      <>
        Ano, nabízíme <Highlight>30denní garanci</Highlight> na opravy bugů po launch. 
        Dále poskytujeme různé úrovně SLA pro dlouhodobou podporu, monitoring a pravidelné 
        aktualizace systému.
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
          opacity: { duration: 0.2, ease: "easeOut" }
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
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories | "all">("all");

  const filteredItems = faqItems.filter(
    item => selectedCategory === "all" || item.category === selectedCategory
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
              <span className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
                border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]">
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
                onClick={() => setSelectedCategory(key as keyof typeof categories | "all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === key
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
                Neváhejte nás kontaktovat pro další informace. Rádi zodpovíme všechny vaše dotazy 
                a pomůžeme vám s vaším projektem.
              </p>
              <div className="pt-8">
                <a
                  href="mailto:info@example.com"
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
