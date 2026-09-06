import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/**
 * FONT — Inter (modern, readable, widely used in design tools)
 * TODO: Đổi thành Poppins hoặc Outfit nếu bạn muốn cảm giác mềm mại hơn
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* ============================================================
   SEO METADATA
   TODO: Cập nhật thông tin bên dưới theo thông tin thật của bạn
   ============================================================ */
export const metadata: Metadata = {
  title: {
    default: "Minh Frame — Video Editor & Filmmaker",
    template: "%s | Minh Frame",
  },
  description:
    "Portfolio của Minh Frame — Video Editor & Filmmaker freelance chuyên TVC, Music Video, Wedding Film và Brand Documentary tại Việt Nam.",
  keywords: [
    "video editor",
    "filmmaker",
    "freelance",
    "TVC",
    "music video",
    "wedding film",
    "Vietnam",
    "portfolio",
  ],
  authors: [{ name: "Minh Frame" }],
  creator: "Minh Frame",

  // Open Graph — hiển thị đẹp khi share lên Facebook/Zalo/LinkedIn
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://minhframe.vercel.app", // TODO: Thay bằng domain thật
    siteName: "Minh Frame Portfolio",
    title: "Minh Frame — Video Editor & Filmmaker",
    description:
      "Portfolio chuyên nghiệp của Minh Frame — TVC, MV, Wedding Film, Brand Documentary.",
    images: [
      {
        url: "/og-image.png", // TODO: Tạo ảnh OG 1200×630 và đặt vào /public/
        width: 1200,
        height: 630,
        alt: "Minh Frame Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Minh Frame — Video Editor & Filmmaker",
    description: "Xem portfolio video của Minh Frame.",
    images: ["/og-image.png"],
  },

  // metadataBase — dùng để resolve OG image URL tuyệt đối
  // TODO: Thay bằng domain thật khi deploy
  metadataBase: new URL("https://minhframe.vercel.app"),

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Favicon — Next.js tự động pick up /app/favicon.ico */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
