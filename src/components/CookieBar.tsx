"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export const showCookieBar = () => {
  const event = new CustomEvent('showCookieBar');
  window.dispatchEvent(event);
};

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) setIsVisible(true);

    // Add listener for manual trigger
    const handleShowCookieBar = () => setIsVisible(true);
    window.addEventListener('showCookieBar', handleShowCookieBar);

    return () => window.removeEventListener('showCookieBar', handleShowCookieBar);
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(newConsent);
  };

  const handleSavePreferences = () => {
    saveConsent(consent);
  };

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm"
        >
          <div className="bg-white dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-lg">
            <div className="flex justify-between gap-4 mb-3">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                Používáme cookies pro zlepšení vašeho zážitku.{" "}
                <Link href="/cookies" className="text-blue-500 hover:underline">
                  Zjistit více
                </Link>
              </p>
              <button onClick={() => setIsVisible(false)} className="text-text-muted-light dark:text-text-muted-dark">
                <X size={20} />
              </button>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full px-4 py-2 mb-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md text-sm text-text-light dark:text-text-dark flex items-center justify-between"
            >
              <span>Nastavení cookies</span>
              {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mb-3 pt-2 border-t border-gray-200 dark:border-gray-800">
                    {[
                      { id: "necessary", label: "Nezbytné", required: true },
                      { id: "analytics", label: "Analytické" },
                      { id: "marketing", label: "Marketingové" },
                      { id: "preferences", label: "Preferenční" },
                    ].map((cookie) => (
                      <div key={cookie.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={cookie.id}
                          checked={consent[cookie.id as keyof CookieConsent]}
                          disabled={cookie.required}
                          onChange={(e) =>
                            setConsent(prev => ({
                              ...prev,
                              [cookie.id]: e.target.checked,
                            }))
                          }
                          className="rounded border-gray-300 dark:border-gray-700"
                        />
                        <label htmlFor={cookie.id} className="text-sm text-text-light dark:text-text-dark">
                          {cookie.label}
                          {cookie.required && (
                            <span className="text-xs text-text-muted-light dark:text-text-muted-dark ml-1">
                              (Vyžadováno)
                            </span>
                          )}
                        </label>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
              >
                Přijmout vše
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md text-sm text-text-light dark:text-text-dark"
              >
                Uložit
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBar; 