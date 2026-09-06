import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cho phép next/image load ảnh từ domain ngoài nếu cần dùng thumbnail URL trực tiếp
  // (Hiện tại thumbnails đặt trong /public nên không bắt buộc)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
