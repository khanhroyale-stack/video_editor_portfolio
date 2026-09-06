"use client";

/**
 * NAVBAR COMPONENT
 * Sticky navigation with transparent→frosted-glass transition on scroll.
 * Links smoothly scroll to each section via CSS scroll-behavior on <html>.
 */

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Works",   href: "#works"   },
  { label: "About",   href: "#about"   },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Đóng menu khi bấm vào link trên mobile
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">

        {/* Logo / Name */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Về trang chủ"
        >
          MINH<span className="accent-dot">.</span>FRAME
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#aaa] hover:text-white transition-colors relative group"
            >
              {link.label}
              {/* Underline accent on hover */}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-md bg-[var(--accent)] text-black text-sm font-bold
                       hover:bg-[#ff8a55] transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-[var(--border)]
                    transition-all duration-300 overflow-hidden ${
                      menuOpen ? "max-h-64 py-4" : "max-h-0"
                    }`}
      >
        <nav className="flex flex-col items-center gap-4 px-6" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-[#ccc] hover:text-[var(--accent)] transition-colors w-full text-center py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 w-full text-center px-5 py-2.5 rounded-md bg-[var(--accent)] text-black font-bold"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
