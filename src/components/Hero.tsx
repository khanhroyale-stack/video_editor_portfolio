"use client";

/**
 * HERO SECTION — Paint Drawing Style
 * Hand-crafted badge, serif headline, italic subtitle, wavy SVG flourish
 */

export default function Hero() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-start gap-6"
      aria-label="Hero section"
    >
      <div className="flex flex-col items-start gap-6 max-w-3xl pt-2">
        {/* Hand-crafted badge */}
        <div
          className="inline-flex items-center gap-2.5 px-3 py-1 sketch-box shadow-[2px_2px_0px_#2B2621]"
          style={{ backgroundColor: "#FFFDF5" }}
        >
          <span
            className="font-handwriting text-base font-bold"
            style={{ fontFamily: "var(--font-caveat), cursive", color: "#C8553D" }}
          >
            hand-cut &amp; graded
          </span>
          <span style={{ color: "#23201C" }}>•</span>
          <span
            className="font-mono-art text-xs"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#59544D" }}
          >
            Exclusively DaVinci Resolve
          </span>
        </div>

        {/* Main headline */}
        <div className="flex flex-col gap-3">
          <h1
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] tracking-tight"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#23201C" }}
          >
            Hi, I'm Kenny Hoang.
          </h1>
          <p
            className="font-serif-display text-2xl sm:text-3xl font-normal italic leading-snug"
            style={{ fontFamily: "var(--font-newsreader), Georgia, serif", color: "#23201C" }}
          >
            I exclusively edit Talking Head Videos. Mastered in DaVinci Resolve.
          </p>
        </div>

        {/* Subtitle + wavy SVG flourish */}
        <div className="flex flex-col gap-3 pt-2">
          <p
            className="font-sans-body text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-bricolage), sans-serif", color: "#59544D" }}
          >
            Pacing, clean micro-cuts, authentic presence, and grade DaVinci color.
          </p>

          {/* Wavy hand-drawn flourish */}
          <svg
            className="w-44 h-4 mt-1"
            style={{ color: "rgba(200,85,61,0.7)" }}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            viewBox="0 0 160 12"
            aria-hidden="true"
          >
            <path d="M2 7 C25 2, 40 11, 70 6 C100 1, 125 10, 158 5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
