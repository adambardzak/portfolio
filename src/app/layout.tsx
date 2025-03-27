import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "../components/theme-script";
import Footer from "@/components/Footer";
import AnimatedCursor from "@/components/AnimatedCursor";
import TransitionLayout from "./TransitionLayout";
import CookieBar from "@/components/CookieBar";
import { Background } from "@/components/Background";
import { generateMetadata } from "@/components/SEO";
import type { Metadata } from "next";
import { MotionConfigProvider } from "@/components/motion-config";
import Analytics from "@/components/analytics/Analytics";

// Load Space Grotesk with all weights
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// const inter = Inter({
//   subsets: ["latin", "latin-ext"],
//   display: "swap",
// });

// // Register the Monument font
// const monument = localFont({
//   src: [
//     {
//       path: "../../public/fonts/MonumentExtended-Regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-monument",
// });

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning className={spaceGrotesk.className}>
      <head>
        <ThemeScript />
        {/* Dynamic favicon that changes based on theme */}
        <link
          rel="icon"
          href="/favicon-light.svg"
          media="(prefers-color-scheme: light)"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adam Bardzák",
              url: "https://adambardzak.cz",
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/adambardzak",
                "https://linkedin.com/in/adambardzak",
              ],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
              ],
            }),
          }}
        />
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="YOUR_VERIFICATION_CODE_HERE" 
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <MotionConfigProvider>
            {/* <div className="relative min-h-screen"> */}
              <Background />
              <TransitionLayout>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <AnimatedCursor />
                <CookieBar />
              </TransitionLayout>
            {/* </div> */}
          </MotionConfigProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
