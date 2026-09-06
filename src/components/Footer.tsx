/**
 * FOOTER — Paint Drawing Style
 * Simple border-top footer with mono type
 */

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="w-full py-8 mt-10"
      style={{ borderTop: "2px solid #2B2621", backgroundColor: "#FAF5E8" }}
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div
          className="flex items-center gap-2 font-mono-art text-xs"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#59544D" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#23201C" }}
          />
          <span>Kenny Hoang • Video Editor</span>
        </div>

        {/* Copyright */}
        <p
          className="font-mono-art text-xs"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "#8C867C" }}
        >
          © {currentYear} — Mastered with DaVinci Resolve
        </p>
      </div>
    </footer>
  );
}
