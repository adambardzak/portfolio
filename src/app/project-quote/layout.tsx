import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nezávazná poptávka | Webový vývoj a služby",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ProjectQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
