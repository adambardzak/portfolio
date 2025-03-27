import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Články a návody o webovém vývoji",
  description: "Odborné články, návody a případové studie o vývoji webových aplikací, React, Next.js, TypeScript a dalších moderních technologiích.",
  keywords: [
    "webový vývoj",
    "React",
    "Next.js",
    "TypeScript",
    "případové studie",
    "návody",
    "blog o programování",
    "frontend development",
  ],
  openGraph: {
    title: "Blog | Články a návody o webovém vývoji",
    description: "Odborné články, návody a případové studie o vývoji webových aplikací, React, Next.js, TypeScript a dalších moderních technologiích.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 