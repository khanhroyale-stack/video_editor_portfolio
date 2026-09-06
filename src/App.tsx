/**
 * MAIN PAGE — Talking Head Editor Portfolio
 * Paint Drawing Style: warm canvas, sketch borders, serif + mono + handwriting
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/components/useScrollAnimation";

export default function App() {
  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
        <PortfolioGrid />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
