"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Website",
    price: "2,999",
    description: "Perfect for small businesses and personal brands",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "3 Rounds of Revisions",
      "2 Weeks Delivery",
    ],
  },
  {
    name: "Professional",
    price: "4,999",
    description: "Ideal for growing businesses and e-commerce",
    features: [
      "Everything in Basic",
      "E-commerce Integration",
      "Up to 10 Pages",
      "Blog Setup",
      "Advanced SEO",
      "Social Media Integration",
      "Analytics Dashboard",
      "3 Weeks Delivery",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large businesses with specific needs",
    features: [
      "Everything in Professional",
      "Custom Functionality",
      "Unlimited Pages",
      "Priority Support",
      "Performance Optimization",
      "Security Hardening",
      "Custom Integrations",
      "Training Sessions",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300 py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-8">
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
                Pricing Plans
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
                className="font-monument text-4xl text-text-light dark:text-text-dark"
              >
                Choose Your Website Package
              </motion.h2>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl ${
                  plan.highlighted
                    ? "bg-text-light dark:bg-text-dark text-light dark:text-dark"
                    : "bg-hover-light dark:bg-hover-dark"
                }`}
              >
                <div className="space-y-6">
                  <h3 className="font-monument text-2xl">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="font-monument text-4xl">${plan.price}</div>
                    <p className="text-text-muted-light dark:text-text-muted-dark">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 px-6 rounded-lg bg-text-light dark:bg-text-dark text-light dark:text-dark font-monument hover:opacity-90 transition-opacity">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
