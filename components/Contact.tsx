"use client";

/**
 * CONTACT SECTION COMPONENT
 * Email CTA + social media links grid.
 * Không cần backend — tất cả là href mailto: và links ngoài.
 */

// TODO: Thay tất cả thông tin liên lạc bên dưới bằng thông tin thật của bạn
const CONTACT_INFO = {
  email: "minhframe@gmail.com", // ← Thay email của bạn
  phone: "+84 909 123 456",     // ← Thay số điện thoại
};

const SOCIAL_LINKS = [
  {
    id: "social-instagram",
    platform: "Instagram",
    handle: "@minhframe",
    url: "https://instagram.com/minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "social-youtube",
    platform: "YouTube",
    handle: "Minh Frame",
    url: "https://youtube.com/@minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="none" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "social-tiktok",
    platform: "TikTok",
    handle: "@minhframe",
    url: "https://tiktok.com/@minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.54V6.78a4.85 4.85 0 01-1.04-.09z" />
      </svg>
    ),
  },
  {
    id: "social-vimeo",
    platform: "Vimeo",
    handle: "Minh Frame",
    url: "https://vimeo.com/minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21.9 7.1c-.1 2.2-1.6 5.3-4.6 9.2-3.1 4-5.7 6-7.9 6-1.3 0-2.5-1.2-3.4-3.7L4.8 12c-.6-2.5-1.3-3.7-2-3.7-.2 0-.7.3-1.7 1L0 8.1c1.1-1 2.2-1.9 3.2-2.9 1.5-1.3 2.6-2 3.4-2.1 1.8-.2 2.9 1.1 3.3 3.8.5 2.9.8 4.7 1 5.4.5 2.4 1.1 3.6 1.7 3.6.5 0 1.2-.8 2.1-2.3.9-1.6 1.4-2.8 1.4-3.6.1-1.4-.4-2.1-1.4-2.1-.5 0-1 .1-1.5.3.9-3.1 2.8-4.6 5.6-4.5 2 .1 3 1.4 2.9 4.3" />
      </svg>
    ),
  },
  {
    id: "social-behance",
    platform: "Behance",
    handle: "minhframe",
    url: "https://behance.net/minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 11.25c1.24 0 2.25-1.01 2.25-2.25S8.74 6.75 7.5 6.75H3v4.5h4.5zm.5 1.5H3V18h5.25a2.625 2.625 0 000-5.25zM16.5 9h5.25M3 6.75h6.75M14.625 15.375a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25z" stroke="currentColor" fill="none" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "social-facebook",
    platform: "Facebook",
    handle: "Minh Frame",
    url: "https://facebook.com/minhframe", // ← Thay link thật
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,107,43,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center">

        {/* Section header */}
        <div className="mb-14 fade-up">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 id="contact-heading" className="section-title mb-4">
            Hãy làm việc cùng nhau
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-[#888] max-w-lg mx-auto leading-relaxed">
            Bạn có dự án cần một video editor chuyên nghiệp? Tôi luôn sẵn sàng lắng nghe
            ý tưởng và biến nó thành hiện thực.
          </p>
        </div>

        {/* Email CTA */}
        <div className="fade-up mb-14">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            id="contact-email-btn"
            className="email-cta inline-flex"
            aria-label={`Gửi email đến ${CONTACT_INFO.email}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {CONTACT_INFO.email}
          </a>
          <p className="text-[#555] text-sm mt-3">hoặc qua các kênh bên dưới</p>
        </div>

        {/* Social links grid */}
        <div
          className="fade-up grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto"
          aria-label="Social media links"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`${link.platform}: ${link.handle}`}
            >
              <span aria-hidden="true">{link.icon}</span>
              <span className="font-medium">{link.platform}</span>
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div className="fade-up mt-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)]">
            {/* Green pulse dot */}
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-sm text-[#aaa]">
              Hiện đang{" "}
              <strong className="text-white font-semibold">nhận dự án mới</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
