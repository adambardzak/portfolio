"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Download } from "lucide-react";
import { generatePDF } from "@/utils/pdfGenerator";

const ProjectQuotePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectDetails = JSON.parse(
    decodeURIComponent(searchParams.get("details") || "{}")
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const downloadQuote = async () => {
    try {
      const doc = generatePDF(projectDetails);
      doc.save(
        `kalkulace-${projectDetails.type
          .toLowerCase()
          .replace(/\s+/g, "-")}.pdf`
      );
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <section className="min-h-screen bg-light dark:bg-dark transition-colors duration-300 py-32">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="font-monument text-4xl text-text-light dark:text-text-dark">
              Kalkulace projektu
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark">
              Děkujeme za váš zájem. Níže najdete předběžnou kalkulaci vašeho
              projektu.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-hover-light dark:bg-hover-dark">
              <h2 className="font-monument text-2xl text-text-light dark:text-text-dark mb-6">
                Specifikace projektu
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border-light dark:border-border-dark">
                  <span className="text-text-muted-light dark:text-text-muted-dark">
                    Typ projektu
                  </span>
                  <span className="text-text-light dark:text-text-dark font-medium">
                    {projectDetails.type}
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-border-light dark:border-border-dark">
                  <span className="text-text-muted-light dark:text-text-muted-dark">
                    Počet stránek
                  </span>
                  <span className="text-text-light dark:text-text-dark font-medium">
                    {projectDetails.pages}
                  </span>
                </div>

                {projectDetails.features.length > 0 && (
                  <div className="py-3">
                    <span className="text-text-muted-light dark:text-text-muted-dark block mb-3">
                      Dodatečné funkce
                    </span>
                    <ul className="space-y-2">
                      {projectDetails.features.map((feature: string) => (
                        <li
                          key={feature}
                          className="text-text-light dark:text-text-dark"
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-text-light dark:bg-text-dark text-light dark:text-dark">
              <h2 className="font-monument text-2xl mb-6">Cenová kalkulace</h2>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-light/20 dark:border-dark/20">
                  <span>Základní cena ({projectDetails.type})</span>
                  <span>{formatPrice(projectDetails.basePrice)}</span>
                </div>

                {projectDetails.selectedFeatureDetails?.length > 0 && (
                  <div className="py-3 border-b border-light/20 dark:border-dark/20">
                    <div className="flex justify-between mb-2">
                      <span>Dodatečné funkce</span>
                      <span>{formatPrice(projectDetails.featuresPrice)}</span>
                    </div>
                    <div className="space-y-2 text-sm opacity-80 ml-4">
                      {projectDetails.selectedFeatureDetails.map(
                        (feature: { name: string; price: number }) => (
                          <div
                            key={feature.name}
                            className="flex justify-between"
                          >
                            <span>• {feature.name}</span>
                            <span>{formatPrice(feature.price)}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {projectDetails.pagesPrice > 0 && (
                  <div className="flex justify-between py-3 border-b border-light/20 dark:border-dark/20">
                    <span>
                      Stránky navíc ({projectDetails.pages - 5} stran)
                    </span>
                    <span>{formatPrice(projectDetails.pagesPrice)}</span>
                  </div>
                )}

                <div className="flex justify-between py-3 font-monument text-xl">
                  <span>Celková cena</span>
                  <span>{formatPrice(projectDetails.totalPrice)}</span>
                </div>

                <p className="text-sm opacity-80 mt-4">
                  * Tato kalkulace je předběžná a může se měnit v závislosti na
                  konkrétních požadavcích projektu. Finální cena bude stanovena
                  po detailní konzultaci.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 px-8 py-4 rounded-lg border border-text-light dark:border-text-dark text-text-light dark:text-text-dark font-monument hover:bg-hover-light dark:hover:bg-hover-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpět na kalkulátor
            </button>

            <button
              onClick={downloadQuote}
              className="flex items-center gap-2 px-8 py-4 border border-text-light dark:border-text-dark text-text-light dark:text-text-dark font-monument hover:bg-hover-light dark:hover:bg-hover-dark transition-colors"
            >
              <Download className="w-4 h-4" />
              Stáhnout kalkulaci
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="flex items-center gap-2 px-8 py-4 bg-text-light dark:bg-text-dark text-light dark:text-dark rounded-lg font-monument hover:opacity-90 transition-opacity ml-auto"
            >
              Nezávazně poptat
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectQuotePage;
