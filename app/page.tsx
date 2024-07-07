import Baner from "@/components/Baner";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MarqueeLogos from "@/components/MarqueeLogos";
import Navbar from "@/components/Navbar";
import PricingCards from "@/components/PricingCards";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className="relative">
        <Services />
        <Features />
        <MarqueeLogos />
        <Baner />
        <FAQ />
        <PricingCards />
      </div>
    </>
  );
}
