"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Input from "@/components/ui/Input";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Reset form and show success
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("success");

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");

      // Reset status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  // Add status messages
  const statusMessages = {
    submitting: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-text-muted-light dark:text-text-muted-dark"
      >
        Odesílám...
      </motion.div>
    ),
    success: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-blue-500 dark:text-blue-400"
      >
        Zpráva byla úspěšně odeslána. Brzy se vám ozvu.
      </motion.div>
    ),
    error: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-red-600 dark:text-red-400"
      >
        Došlo k chybě. Zkuste to prosím znovu.
      </motion.div>
    ),
  };

  return (
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
              className="font-monument text-sm text-blue-500 dark:text-blue-400 tracking-wide"
            >
              Začněme spolupráci
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
              className="font-monument text-4xl md:text-5xl text-text-light dark:text-text-dark max-w-2xl"
            >
              Máte zajímavý projekt? Pojďme ho společně realizovat
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8 max-w-xl"
          >
            <Input
              label="Jméno"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="Vaše jméno"
            />
            <Input
              label="E-mail"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              placeholder="vas@email.cz"
            />
            <div className="space-y-2">
              <label className="block text-sm text-text-muted-light dark:text-text-muted-dark">
                Zpráva
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                placeholder="Vaše zpráva..."
                className="w-full p-3 rounded-lg bg-hover-light dark:bg-hover-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark focus:outline-none focus:border-text-light dark:focus:border-text-dark transition-colors min-h-[150px] resize-y"
              />
            </div>
            <div className="space-y-4">
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`
                  flex items-center justify-center gap-2 w-full px-8 py-4 
                  bg-blue-500 dark:bg-blue-400
                  text-white rounded-lg font-medium transition-all duration-300 
                  ${
                    formStatus === "submitting"
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
                  }
                `}
              >
                {formStatus === "submitting" ? (
                  <>
                    Odesílám
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                  </>
                ) : (
                  <>
                    Odeslat poptávku
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status message */}
              {formStatus !== "idle" && statusMessages[formStatus]}
            </div>
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="font-monument text-2xl text-text-light dark:text-text-dark mb-4">
                Pojďme si promluvit o vašem projektu
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
                Ať už máte konkrétní představu nebo jen nápad, rád vám pomohu s
                jeho realizací. Nabízím komplexní řešení od návrhu až po finální
                implementaci.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-monument text-sm text-blue-500 dark:text-blue-400 mb-2">
                  E-mail
                </h4>
                <a
                  href="mailto:info@example.com"
                  className="text-text-muted-light dark:text-text-muted-dark hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg"
                >
                  info@example.com
                </a>
              </div>
              <div>
                <h4 className="font-monument text-sm text-blue-500 dark:text-blue-400 mb-2">
                  Dostupnost
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  Odpovídám zpravidla do 24 hodin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
