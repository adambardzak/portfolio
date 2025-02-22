"use client";

import { FramedHeading } from "@/components/ui/FramedHeading";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-16">
          {/* Header */}
          <section>
            <FramedHeading size="lg" className="mb-6">
              Project Calculator
            </FramedHeading>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Estimate the cost and timeline for your web development project.
              Select the features and requirements you need, and get an instant
              quote.
            </p>
          </section>

          {/* Calculator */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Options Panel */}
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="font-monument text-2xl mb-8">
                Project Requirements
              </h2>
              {/* Add calculator options here */}
            </div>

            {/* Results Panel */}
            <div className="space-y-8">
              <div className="p-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <h2 className="font-monument text-2xl mb-8">Estimate</h2>
                {/* Add estimate results here */}
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500">
                  Note: This is an estimated cost based on typical project
                  requirements. The final price may vary depending on specific
                  needs and complexity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
