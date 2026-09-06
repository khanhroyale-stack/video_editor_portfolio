"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact", isSolid: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="navbar">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo — DaVinci Resolve color-wheel doodle + name */}
        <a href="#" className="flex items-center gap-3 no-underline group" aria-label="Về trang chủ">
          {/* Hand-drawn logo icon */}
          <div
            className="relative w-9 h-9 sketch-box flex items-center justify-center bg-canvas-card border-2 border-sketch-border shadow-[2px_2px_0px_#2B2621] group-hover:rotate-12 transition-transform duration-300"
            style={{ backgroundColor: "#FFFDF5" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="#2B2621" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9.5" strokeDasharray="2 2" />
              <path d="M12 2.5 C12 7, 7 12, 2.5 12" stroke="#C8553D" strokeWidth="2.5" />
              <path d="M12 2.5 C14 7, 21.5 12, 21.5 12" stroke="#E49852" strokeWidth="2.5" />
              <path d="M2.5 12 C7 14, 12 21.5, 12 21.5" stroke="#7A8471" strokeWidth="2.5" />
              <circle cx="12" cy="12" fill="#2B2621" r="2" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif-display text-xl font-bold tracking-tight text-ink" style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#23201C" }}>
              Kenny Hoang
            </span>
            <span className="font-mono-art text-[11px] text-ink-soft tracking-wider flex items-center gap-1.5" style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#59544D" }}>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta" style={{ backgroundColor: "#C8553D" }} />
              Video Editor
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sketch-btn px-4 py-1.5 font-mono-art text-xs uppercase tracking-wider hover:shadow-[3px_4px_0px_0px_#2B2621]"
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                color: link.isSolid ? "#FAF5E8" : "#23201C",
                backgroundColor: link.isSolid ? "#23201C" : "#FAF5E8",
                textDecoration: "none"
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[2px] w-6 bg-ink transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} style={{ backgroundColor: "#23201C" }} />
          <span className={`block h-[2px] w-6 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "#23201C" }} />
          <span className={`block h-[2px] w-6 bg-ink transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ backgroundColor: "#23201C" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden border-t-2 border-sketch-border transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-48 py-4" : "max-h-0"}`} style={{ borderColor: "#2B2621" }}>
        <nav className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={link.isSolid ? "sketch-btn px-5 py-2 text-xs font-mono-art uppercase tracking-wider w-full text-center" : "text-sm font-mono-art uppercase tracking-wider text-ink-soft transition-colors"}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                color: link.isSolid ? "#FAF5E8" : "#59544D",
                backgroundColor: link.isSolid ? "#23201C" : "transparent",
                textDecoration: "none"
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
