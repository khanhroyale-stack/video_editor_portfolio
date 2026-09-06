"use client";

/**
 * ABOUT SECTION COMPONENT
 * Ảnh chân dung + giới thiệu + skills + stats.
 * Scroll-triggered animation cho từng element.
 */

import Image from "next/image";

const SOFTWARE_SKILLS = [
  { name: "Premiere Pro",    icon: "🎬" },
  { name: "After Effects",   icon: "✨" },
  { name: "DaVinci Resolve", icon: "🎨" },
  { name: "Photoshop",       icon: "🖼️" },
  { name: "Audition",        icon: "🎵" },
  { name: "Cinema 4D",       icon: "🔮" },
];

const STATS = [
  { number: "50+",  label: "Projects Completed" },
  { number: "30+",  label: "Happy Clients"       },
  { number: "5+",   label: "Years Experience"    },
  { number: "12",   label: "Awards & Mentions"   },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0d0d0d] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,43,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="section-label mb-3">About Me</p>
          <h2 id="about-heading" className="section-title mb-4">
            Behind the Lens
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Portrait image */}
          <div className="fade-up relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Accent border effect */}
              <div
                className="absolute -inset-1 rounded-lg opacity-60 blur-sm"
                style={{
                  background: "linear-gradient(135deg, var(--accent), transparent)",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
                <Image
                  src="/about-portrait.png"
                  alt="Minh Frame — Video Editor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating tag */}
              <div
                className="absolute -bottom-5 -right-5 bg-[var(--accent)] text-black
                           px-4 py-2.5 rounded-lg shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-wider">Available for</p>
                <p className="text-lg font-extrabold leading-tight">Freelance Work</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">

            {/* Bio */}
            <div className="fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Xin chào, tôi là{" "}
                <span className="gradient-text">Minh Frame</span> 👋
              </h3>
              {/* TODO: Thay nội dung giới thiệu bên dưới bằng thông tin thật của bạn */}
              <p className="text-[#999] leading-relaxed mb-4">
                Tôi là một video editor &amp; filmmaker freelance với hơn 5 năm kinh nghiệm trong
                lĩnh vực quảng cáo, music video và phim điện ảnh. Tôi đam mê kể chuyện thông qua
                hình ảnh và âm thanh — mỗi khung hình đều phải có sức mạnh cảm xúc riêng.
              </p>
              <p className="text-[#999] leading-relaxed">
                Từng hợp tác với các thương hiệu lớn như Highlands Coffee, Samsung Việt Nam, và
                nhiều nghệ sĩ độc lập. Tôi luôn đặt storytelling lên hàng đầu, sau đó mới đến
                kỹ thuật — bởi vì một video đẹp nhưng không có câu chuyện thì chỉ là những
                hình ảnh trống rỗng.
              </p>
            </div>

            {/* Software skills */}
            <div className="fade-up">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#666] mb-4">
                Phần mềm sử dụng
              </h4>
              <div className="flex flex-wrap gap-2">
                {SOFTWARE_SKILLS.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <span role="img" aria-label={skill.name}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[var(--border)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="stat-number">{stat.number}</p>
                  <p className="text-xs text-[#666] mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
