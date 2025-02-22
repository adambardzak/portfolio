"use client";

import { ContentSection } from "@/components/blog/ContentSection";
import { showCookieBar } from "@/components/CookieBar";

const cookiesList = [
  {
    name: "_ga",
    purpose: "Google Analytics",
    duration: "2 roky",
  },
  {
    name: "_ga_*",
    purpose: "Google Analytics",
    duration: "2 roky",
  },
  {
    name: "_gid",
    purpose: "Google Analytics",
    duration: "24 hodin",
  },
  {
    name: "_clsk",
    purpose: "Microsoft Clarity",
    duration: "1 rok",
  },
  {
    name: "_clck",
    purpose: "Microsoft Clarity",
    duration: "1 rok",
  },
];

export default function CookiesPage() {
  return (
    <section className="py-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          <div className="space-y-8">
            <span
              className="text-sm tracking-wider text-text-light dark:text-text-dark font-medium px-4 py-2 rounded-full 
              border border-blue-500/10 dark:border-blue-400/10 bg-blue-500/[0.02] dark:bg-blue-400/[0.02]"
            >
              Cookies
            </span>
            <h1 className="font-monument text-4xl lg:text-5xl text-text-light dark:text-text-dark">
              Zásady používání cookies
            </h1>
          </div>

          <ContentSection>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600 dark:text-text-muted-dark">
                Zde najdete přehled všech cookies, které používáme.
              </p>
              <button
                onClick={() => showCookieBar()}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
              >
                Upravit nastavení cookies
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="py-4 px-4 text-left text-sm font-semibold text-gray-900 dark:text-text-dark">
                      Cookie
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-gray-900 dark:text-text-dark">
                      Účel
                    </th>
                    <th className="py-4 px-4 text-left text-sm font-semibold text-gray-900 dark:text-text-dark">
                      Expirace
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cookiesList.map((cookie, index) => (
                    <tr
                      key={cookie.name}
                      className={`border-b border-gray-200 dark:border-gray-800 ${
                        index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : ""
                      }`}
                    >
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-text-muted-dark font-mono">
                        {cookie.name}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-text-muted-dark">
                        {cookie.purpose}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-text-muted-dark">
                        {cookie.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentSection>
        </div>
      </div>
    </section>
  );
}
