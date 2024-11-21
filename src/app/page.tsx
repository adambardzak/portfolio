import Hero from "@/components/Hero";
import TunnelSection from "@/components/TunnelSection";

export default function Home() {
  const bioText = `Hey! 👋 I'm Skibidi Ohio Σ, a developer from the Czech Republic 🇨🇿. I build cool apps with Next.js and React ⚛️. Let's make something awesome! 🚀`;
  return (
    <>
      <Hero text={bioText} />
      <TunnelSection />
    </>
  );
}
