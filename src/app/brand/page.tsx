"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Logo } from "@/components/Logo";
import { useState } from "react";

// Minimal logo variations
const logoVariations = [
  {
    id: 1,
    name: "Primary Mark",
    element: (
      <div className="relative w-16 h-16">
        <div className="absolute inset-0">
          {/* Frame corners */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gray-900 dark:border-gray-100" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gray-900 dark:border-gray-100" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gray-900 dark:border-gray-100" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gray-900 dark:border-gray-100" />
          {/* Center content */}
          <div className="absolute inset-4 flex items-center justify-center">
            <span className="font-monument text-2xl text-gray-900 dark:text-gray-100">b</span>
          </div>
        </div>
      </div>
    ),
    usage: "Primary logo mark",
  },
  {
    id: 2,
    name: "Wordmark",
    element: (
      <div className="flex items-center space-x-6">
        {/* Small mark */}
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-900 dark:border-gray-100" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-900 dark:border-gray-100" />
          <div className="absolute inset-2 flex items-center justify-center">
            <span className="font-monument text-sm text-gray-900 dark:text-gray-100">b</span>
          </div>
        </div>
        {/* Type */}
        <span className="font-monument text-2xl tracking-wide text-gray-900 dark:text-gray-100">
          bardzak<span className="text-gray-400 dark:text-gray-500">.dev</span>
        </span>
      </div>
    ),
    usage: "Main logotype",
  },
  {
    id: 3,
    name: "Compact",
    element: (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gray-900 dark:border-gray-100" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gray-900 dark:border-gray-100" />
          <div className="absolute inset-2 flex items-center justify-center">
            <span className="font-monument text-base text-gray-900 dark:text-gray-100">b</span>
          </div>
        </div>
      </div>
    ),
    usage: "Small spaces, favicon",
  },
  {
    id: 4,
    name: "Framed Type",
    element: (
      <div className="relative inline-block px-8 py-4">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-900 dark:border-gray-100" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-900 dark:border-gray-100" />
        <span className="font-monument text-xl text-gray-900 dark:text-gray-100">
          bardzak<span className="text-gray-500 dark:text-gray-400">.dev</span>
        </span>
      </div>
    ),
    usage: "Headers, titles",
  },
  {
    id: 5,
    name: "Developer Tag",
    element: (
      <div className="flex items-center space-x-3">
        <div className="relative w-8 h-8">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-gray-900 dark:border-gray-100" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-gray-900 dark:border-gray-100" />
          <div className="absolute inset-1.5 flex items-center justify-center">
            <span className="font-monument text-xs text-gray-900 dark:text-gray-100">b</span>
          </div>
        </div>
        <div className="font-mono text-sm text-gray-500 dark:text-gray-400">fullstack developer</div>
      </div>
    ),
    usage: "Signatures, captions",
  },
];

// Minimal color schemes
const colorSchemes = [
  {
    id: 1,
    name: "VSCode Dark+",
    colors: {
      text: "#D4D4D4",
      muted: "#808080",
      accent: "#569CD6",
      border: "#1E1E1E",
      background: "#1E1E1E",
    },
  },
  {
    id: 2,
    name: "GitHub Light",
    colors: {
      text: "#24292E",
      muted: "#6A737D",
      accent: "#0366D6",
      border: "#E1E4E8",
      background: "#FFFFFF",
    },
  },
  {
    id: 3,
    name: "Terminal",
    colors: {
      text: "#00FF00",
      muted: "#00BB00",
      accent: "#00DD00",
      border: "#000000",
      background: "#000000",
    },
  },
];

// Social Media Variations
const socialVariations = [
  {
    id: "profile",
    name: "Profile Picture",
    element: (
      <div className="relative w-32 h-32 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 dark:bg-gray-100" />
        <div className="absolute inset-[3px] bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
          <span className="font-monument text-4xl text-gray-900 dark:text-gray-100">B</span>
        </div>
      </div>
    ),
    usage: "LinkedIn, GitHub, Twitter profile pictures",
  },
  {
    id: "banner",
    name: "Social Banner",
    element: (
      <div className="relative w-full aspect-[3/1] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            <span className="font-monument text-3xl text-gray-900 dark:text-gray-100">bardzak.dev</span>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            <span className="text-gray-500 dark:text-gray-400 font-medium">Frontend Developer</span>
          </div>
        </div>
      </div>
    ),
    usage: "LinkedIn banner, Twitter header",
  },
];

// Document Templates
const documentTemplates = [
  {
    id: "proposal",
    name: "Proposal Header",
    element: (
      <div className="w-full bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
        <div className="flex items-start justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 dark:bg-gray-100 rounded-sm flex items-center justify-center">
                <span className="font-monument text-sm text-white dark:text-gray-900">B</span>
              </div>
              <span className="font-monument text-xl text-gray-900 dark:text-gray-100">bardzak.dev</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Project Proposal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Prepared for: Client Name</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Ref: PROP-2024-001</p>
          </div>
        </div>
      </div>
    ),
    usage: "PDF proposals, documents",
  },
];

// Brand Assets
const brandAssets = [
  {
    id: "favicon",
    name: "Favicon",
    element: (
      <div className="relative w-8 h-8 bg-gray-900 dark:bg-gray-100 rounded-sm flex items-center justify-center">
        <span className="font-monument text-xs text-white dark:text-gray-900">B</span>
      </div>
    ),
    sizes: ["16x16", "32x32", "64x64"],
    format: "PNG, ICO",
  },
  {
    id: "signature",
    name: "Email Signature",
    element: (
      <div className="space-y-3 p-4 border-l-2 border-gray-900 dark:border-gray-100">
        <div className="flex items-center space-x-2">
          <span className="font-monument text-base text-gray-900 dark:text-gray-100">Adam Bardzak</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>bardzak.dev</p>
          <p>adam@bardzak.dev</p>
        </div>
      </div>
    ),
    usage: "Email communications",
  },
];

// Print Materials
const printMaterials = [
  {
    id: "business-card",
    name: "Business Card",
    element: (
      <div className="relative w-[3.5in] h-[2in] bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 flex items-center">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-900 dark:bg-gray-100 rounded-sm flex items-center justify-center">
              <span className="font-monument text-sm text-white dark:text-gray-900">B</span>
            </div>
            <div>
              <p className="font-monument text-lg text-gray-900 dark:text-gray-100">Adam Bardzak</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>bardzak.dev</p>
            <p>adam@bardzak.dev</p>
            <p>+420 XXX XXX XXX</p>
          </div>
        </div>
      </div>
    ),
    specs: "3.5\" × 2\", 300 DPI, CMYK",
  },
];

const LogoShowcase = () => {
  const [activeVariant, setActiveVariant] = useState<"default" | "compact" | "framed-type">("default");

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="space-y-32">
          {/* Interactive Logo Demo */}
          <section>
            <h2 className="text-2xl font-monument mb-8">Logo System</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Hover and interact with the logo to see animations and variations.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Logo Preview */}
              <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                <Logo variant={activeVariant} className="scale-150" />
              </div>

              {/* Controls */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-monument text-lg">Variants</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {["default", "compact", "framed-type"].map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setActiveVariant(variant as any)}
                        className={`relative p-4 rounded-lg ${
                          activeVariant === variant
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "hover:bg-gray-50 dark:hover:bg-gray-900"
                        }`}
                      >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-900 dark:border-gray-100" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-900 dark:border-gray-100" />
                        <span className="text-sm font-medium capitalize">{variant}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Usage Examples */}
                <div className="space-y-4">
                  <h3 className="font-monument text-lg">Usage Examples</h3>
                  <div className="grid gap-4">
                    {/* Navbar Example */}
                    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-between">
                        <Logo variant="compact" />
                        <div className="flex space-x-6">
                          <span className="text-sm text-gray-500">Menu</span>
                          <span className="text-sm text-gray-500">Contact</span>
                        </div>
                      </div>
                    </div>

                    {/* Document Header */}
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                      <Logo variant="default" />
                      <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-800 rounded w-2/3" />
                      <div className="mt-2 h-2 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Frame System */}
          <section>
            <h2 className="text-2xl font-monument mb-8">Frame System</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              A consistent framing system used across all brand elements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frame Sizes */}
              <div className="space-y-6">
                <h3 className="font-monument text-lg">Frame Sizes</h3>
                <div className="space-y-8">
                  {["sm", "md", "lg"].map((size) => (
                    <div key={size} className="relative">
                      <div className={`relative aspect-video bg-gray-50 dark:bg-gray-900 rounded-lg ${
                        size === "sm" ? "p-2" : size === "md" ? "p-3" : "p-4"
                      }`}>
                        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-900 dark:border-gray-100" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-900 dark:border-gray-100" />
                        <span className="text-sm font-medium capitalize">{size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frame Animations */}
              <div className="space-y-6">
                <h3 className="font-monument text-lg">Hover Effects</h3>
                <div className="space-y-8">
                  <motion.div
                    className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer"
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-900 dark:border-gray-100"
                      variants={{
                        hover: { width: 24, height: 24 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-900 dark:border-gray-100"
                      variants={{
                        hover: { width: 24, height: 24 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-sm">Hover me</span>
                  </motion.div>
                </div>
              </div>

              {/* Frame Applications */}
              <div className="space-y-6">
                <h3 className="font-monument text-lg">Applications</h3>
                <div className="space-y-4">
                  <button className="relative px-6 py-3 w-full group">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-900 dark:border-gray-100 transition-all group-hover:w-3 group-hover:h-3" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-900 dark:border-gray-100 transition-all group-hover:w-3 group-hover:h-3" />
                    <span>Button Example</span>
                  </button>

                  <div className="relative p-4">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-900 dark:border-gray-100" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-900 dark:border-gray-100" />
                    <span>Card Example</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase; 