"use client";

/**
 * CONTACT SECTION — Paint Drawing Style
 * Large sketch-border card: left text note + right CTA button
 */

const CONTACT_INFO = {
  email: "kennyhoang.media24@gmail.com",
  instagram: "@kennyhoang24",
  instagramUrl: "https://instagram.com/kennyhoang24",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-6 pt-4 pb-8"
      aria-labelledby="contact-heading"
    >
      <div
        className="contact-card fade-up bg-canvas-card p-6 md:p-12 flex flex-col items-center gap-8 relative overflow-hidden"
        style={{
          backgroundColor: "#FFFDF5",
          border: "2px solid #2B2621",
          boxShadow: "4px 6px 0px #2B2621"
        }}
      >
        <div className="flex flex-col items-center text-center gap-3 relative z-10 w-full max-w-4xl">
          <h2
            id="contact-heading"
            className="font-serif-display text-2xl md:text-4xl font-normal leading-snug"
            style={{ fontFamily: "var(--font-newsreader), serif", color: "#23201C" }}
          >
            Turn views into attention. Turn attention into results.
          </h2>

          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1 font-mono-art text-sm"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#59544D" }}
          >
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-email-link"
              className="hover:text-terracotta transition-colors underline underline-offset-4 decoration-sketch-border/40"
              style={{ color: "#23201C", textDecorationColor: "rgba(43,38,33,0.4)" }}
            >
              {CONTACT_INFO.email}
            </a>
            <span style={{ color: "#8C867C" }}>//</span>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram-link"
              className="hover:text-terracotta transition-colors underline underline-offset-4 decoration-sketch-border/40"
              style={{ color: "#23201C", textDecorationColor: "rgba(43,38,33,0.4)" }}
            >
              {CONTACT_INFO.instagram}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 relative z-10 pt-2">
          <a
            href="https://ig.me/m/kennyhoang24"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-cta-btn"
            className="sketch-btn px-8 py-3.5 font-mono-art text-xs sm:text-sm uppercase tracking-widest flex items-center gap-3 hover:shadow-[4px_5px_0px_0px_#2B2621] transition-all"
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              backgroundColor: "#23201C",
              color: "#FAF5E8",
              textDecoration: "none",
            }}
          >
            <span>LET'S WORK TOGETHER</span>
            <span style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.1rem" }}>→</span>
          </a>
          <span
            className="font-handwriting text-lg"
            style={{ fontFamily: "var(--font-caveat), cursive", color: "#8C867C" }}
          >
            Fast turnaround · Reliable delivery · Built for retention
          </span>
        </div>
      </div>
    </section>
  );
}
