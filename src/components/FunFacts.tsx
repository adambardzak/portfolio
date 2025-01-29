"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { funFacts } from "@/data/funFacts";

const FunFacts = () => {
  const [factIndex, setFactIndex] = useState(0);

  const handleClick = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Who Am I?</h2>
      <motion.div
        key={factIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-medium max-w-2xl mx-auto mb-8"
      >
        {funFacts[factIndex]}
      </motion.div>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
      >
        Show Me Another!
      </button>
    </section>
  );
};

export default FunFacts;
