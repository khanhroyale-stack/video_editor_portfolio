/**
 * FOOTER COMPONENT
 * Copyright + social icon links nhỏ.
 */

const currentYear = new Date().getFullYear();

// Icon components nhỏ gọn
const Icons = {
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="none" fill="currentColor" />
    </svg>
  ),
  TikTok: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.54V6.78a4.85 4.85 0 01-1.04-.09z" />
    </svg>
  ),
  Vimeo: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21.9 7.1c-.1 2.2-1.6 5.3-4.6 9.2-3.1 4-5.7 6-7.9 6-1.3 0-2.5-1.2-3.4-3.7L4.8 12c-.6-2.5-1.3-3.7-2-3.7-.2 0-.7.3-1.7 1L0 8.1c1.1-1 2.2-1.9 3.2-2.9 1.5-1.3 2.6-2 3.4-2.1 1.8-.2 2.9 1.1 3.3 3.8.5 2.9.8 4.7 1 5.4.5 2.4 1.1 3.6 1.7 3.6.5 0 1.2-.8 2.1-2.3.9-1.6 1.4-2.8 1.4-3.6.1-1.4-.4-2.1-1.4-2.1-.5 0-1 .1-1.5.3.9-3.1 2.8-4.6 5.6-4.5 2 .1 3 1.4 2.9 4.3" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0a0a0a] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-base font-extrabold tracking-tight">
            MINH<span className="accent-dot">.</span>FRAME
          </span>
          <span className="text-[#444] text-sm hidden sm:block">—</span>
          <span className="text-[#555] text-sm hidden sm:block">Video Editor & Filmmaker</span>
        </div>

        {/* Copyright */}
        <p className="text-[#444] text-xs order-last sm:order-none text-center">
          © {currentYear} Minh Frame. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4" aria-label="Social media">
          {[
            { href: "https://instagram.com/minhframe", label: "Instagram", Icon: Icons.Instagram },
            { href: "https://youtube.com/@minhframe",  label: "YouTube",   Icon: Icons.YouTube   },
            { href: "https://tiktok.com/@minhframe",   label: "TikTok",    Icon: Icons.TikTok    },
            { href: "https://vimeo.com/minhframe",     label: "Vimeo",     Icon: Icons.Vimeo     },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
