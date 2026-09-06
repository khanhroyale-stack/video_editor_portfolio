"use client";

/**
 * MAIN PAGE — Portfolio Website
 * Single-page layout: Hero → Portfolio → About → Contact → Footer
 * useScrollAnimation hook kích hoạt CSS animation khi scroll
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/components/useScrollAnimation";

export default function Home() {
  // Khởi động IntersectionObserver cho toàn bộ trang
  useScrollAnimation();

  return (
    <main>
      {/* Sticky navigation */}
      <Navbar />

      {/* Full-screen hero */}
      <Hero />

      {/* Portfolio works grid */}
      <PortfolioGrid />

      {/* About section */}
      <About />

      {/* Contact + social links */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
