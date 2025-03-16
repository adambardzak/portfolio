"use client";

import { motion } from "framer-motion";

const myServices = [
  {
    id: "development",
    title: "Vývoj webových aplikací",
    description:
      "Moderní a výkonné webové aplikace postavené na nejnovějších technologiích",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "GraphQL",
    ],
    features: [
      "Single Page Aplikace",
      "Server-side rendering",
      "Optimalizace výkonu",
      "Responzivní design",
      "API integrace",
      "Moderní animace",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce řešení",
    description:
      "Kompletní řešení pro váš online obchod s důrazem na konverze a uživatelský zážitek",
    techStack: [
      "Next.js Commerce",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "PayPal",
    ],
    features: [
      "Vlastní e-shop na míru",
      "Napojení na ERP systémy",
      "Integrace platebních bran",
      "Správa produktů",
      "Automatizace procesů",
      "Analytika a reporting",
    ],
  },
  {
    id: "websites",
    title: "Webové prezentace",
    description: "Reprezentativní webové stránky, které prodávají vaše služby",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Headless CMS",
      "SEO nástroje",
      "Analytics",
    ],
    features: [
      "Moderní design",
      "SEO optimalizace",
      "Správa obsahu",
      "Analytika návštěvnosti",
      "Rychlé načítání",
      "Zabezpečení",
    ],
  },
];

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32">
      <div className="max-w-3xl mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-monument text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark mb-6">
            Služby
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg md:text-xl">
            Specializuji se na vývoj moderních webových aplikací a e-commerce
            řešení. Díky spolupráci s talentovanými profesionály můžu nabídnout
            i kompletní řešení včetně designu a marketingu.
          </p>
        </motion.div>
      </div>

      {/* My Core Services */}
      {myServices.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-monument text-3xl text-text-light dark:text-text-dark">
                {service.title}
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="font-monument text-sm text-blue-500 dark:text-blue-400">
                  Technologie
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/5 dark:bg-blue-400/5 
                    text-blue-500 dark:text-blue-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="font-monument text-sm text-blue-500 dark:text-blue-400">
                Co získáte
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Additional Services */}
      <div className="max-w-3xl">
        <h2 className="font-monument text-3xl text-text-light dark:text-text-dark mb-6">
          Další služby
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
          Ve spolupráci s ověřenými profesionály nabízím také:
        </p>
        <ul className="mt-8 space-y-4 text-text-muted-light dark:text-text-muted-dark">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            UX/UI Design a branding
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            Obsahový marketing
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            Správa sociálních sítí
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
