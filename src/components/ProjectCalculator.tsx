"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, Globe, ShoppingCart } from "lucide-react";
import Input from "@/components/ui/Input";

const projectTypes = [
  {
    name: "Webová prezentace",
    description: "Ideální pro menší firmy a podnikatele",
    gradient: "from-purple-500/80 via-purple-400/70 to-purple-300/80",
    icon: Globe,
    basePrice: 80000,
  },
  {
    name: "E-shop",
    description: "Pro online prodej produktů a služeb",
    gradient: "from-purple-400/80 via-purple-300/70 to-purple-200/80",
    icon: ShoppingCart,
    basePrice: 150000,
  },
];

const features = [
  { name: "CMS", description: "Systém pro správu obsahu", price: 25000 },
  { name: "Blog", description: "Sekce pro články a novinky", price: 20000 },
  {
    name: "Newsletter",
    description: "Systém pro e-mailové kampaně",
    price: 15000,
  },
  {
    name: "Vícejazyčnost",
    description: "Podpora více jazykových verzí",
    price: 30000,
  },
  {
    name: "SEO Optimalizace",
    description: "Optimalizace pro vyhledávače",
    price: 25000,
  },
  { name: "Analytika", description: "Sledování návštěvnosti", price: 15000 },
];

export default function ProjectCalculator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [pagesCount, setPagesCount] = useState(5);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState("");

  const toggleFeature = (featureName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureName)
        ? prev.filter((f) => f !== featureName)
        : [...prev, featureName]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const basePrice = selectedType.basePrice;
    const pagesPrice = Math.max(0, pagesCount - 5) * 15000;
    const featuresPrice = features
      .filter((f) => selectedFeatures.includes(f.name))
      .reduce((sum, feature) => sum + feature.price, 0);

    const projectDetails = {
      type: selectedType.name,
      pages: pagesCount,
      features: selectedFeatures,
      email,
      basePrice,
      pagesPrice,
      featuresPrice,
      totalPrice: basePrice + pagesPrice + featuresPrice,
      selectedFeatureDetails: features
        .filter((f) => selectedFeatures.includes(f.name))
        .map((feature) => ({
          name: feature.name,
          price: feature.price,
        })),
    };

    try {
      await fetch("/api/collect-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, projectDetails }),
      });

      const encodedDetails = encodeURIComponent(JSON.stringify(projectDetails));
      window.location.href = `/project-quote?details=${encodedDetails}`;
    } catch (error) {
      console.error("Error:", error);
      const encodedDetails = encodeURIComponent(JSON.stringify(projectDetails));
      window.location.href = `/project-quote?details=${encodedDetails}`;
    }
  };

  return (
    <>
      <style jsx global>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 3px;
          outline: none;
          margin: 10px 0;
        }

        .dark input[type="range"] {
          background: #374151;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: #000000;
          border: 2px solid #ffffff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark input[type="range"]::-webkit-slider-thumb {
          background: #ffffff;
          border-color: #000000;
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #000000;
          border: 2px solid #ffffff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .dark input[type="range"]::-moz-range-thumb {
          background: #ffffff;
          border-color: #000000;
        }

        input[type="range"]::-webkit-slider-thumb:hover,
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>

      <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300 py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          {/* Section Header */}
          <div className="space-y-4 mb-24">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="font-monument text-sm text-text-muted-light dark:text-text-muted-dark tracking-wide"
              >
                Kalkulace
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="font-monument text-4xl text-text-light dark:text-text-dark max-w-xl"
              >
                Sestavte si svůj projekt
              </motion.h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Options */}
            <div className="space-y-12">
              {/* Project Type */}
              <div className="space-y-6">
                <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                  Typ projektu
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.name}
                      onClick={() => setSelectedType(type)}
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-2xl border text-left transition-colors duration-300 ${
                        selectedType.name === type.name
                          ? "border-text-light dark:border-text-dark"
                          : "border-border-light dark:border-border-dark"
                      }`}
                    >
                      <div className="space-y-2">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${type.gradient} backdrop-blur-sm flex items-center justify-center`}
                        >
                          <type.icon className="w-6 h-6 text-text-light dark:text-text-dark" />
                        </div>
                        <div className="font-monument text-text-light dark:text-text-dark">
                          {type.name}
                        </div>
                        <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {type.description}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Pages Count */}
              <div className="space-y-6">
                <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                  Počet stránek
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={pagesCount}
                      onChange={(e) => setPagesCount(Number(e.target.value))}
                      className="flex-grow"
                    />
                    <span className="font-monument text-xl text-text-light dark:text-text-dark min-w-[3ch] text-right">
                      {pagesCount}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-text-muted-light dark:text-text-muted-dark">
                    <span>1 stránka</span>
                    <span>{pagesCount} stránek</span>
                  </div>
                </div>
              </div>

              {/* Features - Simplified */}
              <div className="space-y-6">
                <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                  Doplňkové funkce
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <button
                      key={feature.name}
                      onClick={() => toggleFeature(feature.name)}
                      className="group flex items-center gap-3 w-full p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                          selectedFeatures.includes(feature.name)
                            ? "bg-text-light dark:bg-text-dark"
                            : "border border-border-light dark:border-border-dark"
                        }`}
                      >
                        {selectedFeatures.includes(feature.name) && (
                          <Check className="w-3 h-3 text-light dark:text-dark" />
                        )}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium text-text-light dark:text-text-dark">
                          {feature.name}
                        </div>
                        <div className="text-xs text-text-muted-light dark:text-text-muted-dark">
                          {feature.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:sticky lg:top-32 space-y-8 h-fit">
              <div className="p-8 rounded-2xl bg-hover-light dark:bg-hover-dark border border-border-light dark:border-border-dark">
                <div className="space-y-6">
                  <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                    Shrnutí projektu
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        Typ projektu
                      </div>
                      <div className="text-text-light dark:text-text-dark">
                        {selectedType.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        Počet stránek
                      </div>
                      <div className="text-text-light dark:text-text-dark">
                        {pagesCount}
                      </div>
                    </div>
                    {selectedFeatures.length > 0 && (
                      <div>
                        <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          Vybrané funkce
                        </div>
                        <div className="text-text-light dark:text-text-dark">
                          {selectedFeatures.join(", ")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => setShowEmailDialog(true)}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-text-light dark:bg-text-dark text-light dark:text-dark rounded-lg font-medium transition-all duration-300"
              >
                Získat cenovou nabídku
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Email Dialog */}
        <AnimatePresence>
          {showEmailDialog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-light dark:bg-dark rounded-2xl p-8 max-w-lg w-full relative"
              >
                <button
                  onClick={() => setShowEmailDialog(false)}
                  className="absolute top-4 right-4 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="space-y-6">
                  <h3 className="font-monument text-xl text-text-light dark:text-text-dark">
                    Získat cenovou nabídku
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    Zadejte svůj e-mail a my vám zašleme detailní cenovou
                    nabídku.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label="E-mail"
                      placeholder="vas@email.cz"
                    />
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-text-light dark:bg-text-dark text-light dark:text-dark rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                    >
                      Odeslat poptávku
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
