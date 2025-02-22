import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "../components/theme-script";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/AnimatedCursor";
import TransitionLayout from "./TransitionLayout";
import CookieBar from "@/components/CookieBar";
import dynamic from "next/dynamic";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const monument = localFont({
  src: "../../public/fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A modern Next.js app with parallax background",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${spaceGrotesk.className} ${monument.variable} bg-light dark:bg-dark`}
      >
        <ThemeProvider>
          <TransitionLayout>
            <Navbar />
            {children}
            <Footer />
            <AnimatedCursor />
            <CookieBar />
          </TransitionLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
