"use client";

import { FramedHeading } from "@/components/ui/FramedHeading";
import ProjectCalculator from "@/components/ProjectCalculator";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          {/* Header */}
          <section>
            <FramedHeading size="lg" className="mb-6">
              Kalkulačka Projektu
            </FramedHeading>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Spočítejte si orientační cenu a časovou náročnost vašeho webového
              projektu. Vyberte požadované funkce a získejte okamžitý odhad.
            </p>
          </section>

          {/* Calculator */}
          <ProjectCalculator />
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
