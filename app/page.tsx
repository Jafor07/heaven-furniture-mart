import BespokeSection from "@/components/BespokeSection";
import BrandQuote from "@/components/BrandQuote";
import Collections from "@/components/Collections";
import Craftsmanship from "@/components/Craftsmanship";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Showroom from "@/components/Showroom";
import Timeline from "@/components/Timeline";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-2 focus:text-brown"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="bg-ivory text-brown">
        <Hero />
        <Intro />
        <BespokeSection />
        <Collections />
        <Showroom />
        <Craftsmanship />
        <TrustSection />
        <BrandQuote />
        <Timeline />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
