"use client";

/**
 * HERO COMPONENT
 * Full-screen hero với background image/video cinematic.
 * Chứa tên, tagline động (typing effect) và CTA button.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";

// Các tagline luân phiên để tạo hiệu ứng typing
const TAGLINES = [
  "Kể chuyện bằng hình ảnh",
  "Turning moments into memories",
  "Crafting cinematic experiences",
  "Visual storytelling at its finest",
];

export default function Hero() {
  const taglineRef = useRef<HTMLSpanElement>(null);

  // Typing effect đơn giản — không cần thư viện ngoài
  useEffect(() => {
    let taglineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = TAGLINES[taglineIndex];
      const el = taglineRef.current;
      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          // Dừng ở cuối câu 2.5 giây rồi xóa
          timer = setTimeout(() => { isDeleting = true; type(); }, 2500);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          taglineIndex = (taglineIndex + 1) % TAGLINES.length;
        }
      }

      const speed = isDeleting ? 40 : 65;
      timer = setTimeout(type, speed);
    };

    timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image — thay bằng video showreel khi có */}
      <Image
        src="/hero-bg.png"
        alt="Cinematic film production background"
        fill
        priority
        className="object-cover object-center"
        quality={85}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Decorative noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Pre-title label */}
        <p
          className="section-label mb-6 fade-in visible"
          style={{ animationDelay: "0.1s" }}
        >
          ✦ Video Editor & Filmmaker
        </p>

        {/* Main title */}
        <h1 className="hero-title text-white mb-4">
          Minh<span className="accent-dot">.</span>Frame
        </h1>

        {/* Tagline with typing cursor */}
        <p className="text-lg md:text-2xl font-medium text-[#ccc] mb-10 h-9 flex items-center justify-center gap-1">
          <span ref={taglineRef} aria-live="polite" />
          <span className="cursor-blink" aria-hidden="true" />
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#works"
            id="hero-cta-works"
            className="px-8 py-3.5 rounded-md bg-[var(--accent)] text-black font-bold text-base
                       hover:bg-[#ff8a55] transition-all hover:shadow-[0_10px_40px_rgba(255,107,43,0.4)]
                       hover:-translate-y-0.5"
          >
            Xem Portfolio ↓
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="px-8 py-3.5 rounded-md border border-[rgba(255,255,255,0.2)] text-white font-semibold
                       text-base hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Liên hệ hợp tác
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#666]">Scroll</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 3v12M4 10l5 5 5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
