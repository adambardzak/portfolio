"use client";

import { ContentSection } from "@/components/blog/ContentSection";
import { TextBlock } from "@/components/blog/TextBlock";

export default function LegalPage() {
  return (
    <section className="py-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          <div className="space-y-8">
            <span
              className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
              border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]"
            >
              Právní informace
            </span>
            <h1 className="font-monument text-4xl lg:text-5xl text-text-light dark:text-text-dark">
              Obchodní podmínky
            </h1>
          </div>

          <ContentSection>
            <TextBlock>
              <div className="space-y-8 text-gray-600 dark:text-text-muted-dark">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-text-dark mb-4">
                    1. Základní ustanovení
                  </h2>
                  <p>
                    Tyto obchodní podmínky upravují vztahy mezi poskytovatelem
                    služeb a zákazníkem. Poskytovatelem služeb je OSVČ Adam
                    Bardzák, IČO: 21389349, se sídlem Plzeň - Východní
                    Předměstí, Spojovací 1927/6, 32600. Není plátcem DPH.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-text-dark mb-4">
                    2. Ochrana osobních údajů
                  </h2>
                  <p>
                    Poskytovatel zpracovává osobní údaje v souladu s nařízením
                    GDPR a zákonem č. 110/2019 Sb., o zpracování osobních údajů.
                    Více informací o zpracování osobních údajů naleznete v sekci
                    Zásady ochrany osobních údajů.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-text-dark mb-4">
                    3. Autorská práva
                  </h2>
                  <p>
                    Veškerý obsah na těchto stránkách je chráněn autorským
                    právem. Jeho užití bez souhlasu poskytovatele je porušením
                    autorských práv a může být právně postihováno podle
                    autorského zákona č. 121/2000 Sb.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-text-dark mb-4">
                    4. Odpovědnost za obsah
                  </h2>
                  <p>
                    Poskytovatel nenese odpovědnost za obsah externích webů, na
                    které stránky odkazují. Veškeré informace jsou poskytovány
                    &quot;tak jak jsou&quot; bez jakýchkoliv záruk.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-text-dark mb-4">
                    5. Řešení sporů
                  </h2>
                  <p>
                    Všechny spory vznikající mezi poskytovatelem a zákazníkem
                    budou řešeny přednostně smírnou cestou. V případě, že
                    smírného řešení nebude dosaženo, bude spor řešen u
                    příslušného soudu České republiky.
                  </p>
                </div>
              </div>
            </TextBlock>
          </ContentSection>
        </div>
      </div>
    </section>
  );
}
