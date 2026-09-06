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

      </div>
    </section>
  );
}
