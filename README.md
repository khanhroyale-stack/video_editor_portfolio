# 🎬 Kenny Hoang — Portfolio Website

Website portfolio cá nhân cho video editor freelance. Xây dựng với **Next.js 16**, **TypeScript**, **Tailwind CSS v4**. Sẵn sàng deploy lên Vercel.

**Demo:** [kennyhoang.vercel.app](https://kennyhoang.vercel.app) *(sau khi deploy)*

---

## ✨ Tính năng

- **Single-page** scroll qua các section: Hero → Works → About → Contact
- **Video Modal** — click thumbnail → xem video YouTube/Vimeo ngay trên trang, không rời trang
- **Category Filter** — lọc portfolio theo TVC, MV, Wedding, Travel...
- **Dark cinematic theme** — nền đen, accent cam, animation fade-up khi scroll
- **Responsive** — mobile-first, ưu tiên trải nghiệm điện thoại
- **SEO** — Open Graph tags, Twitter Card, metadata đầy đủ
- **Typing effect** hero tagline luân phiên

---

## 🚀 Chạy local

```bash
# 1. Cài dependencies
npm install

# 2. Khởi động dev server
npm run dev

# 3. Mở trình duyệt
# http://localhost:3000
```

**Yêu cầu:** Node.js ≥ 18

---

## 📝 Cách thêm / sửa project video

> **Chỉ cần sửa 1 file duy nhất:** `data/projects.ts`

### Bước 1 — Upload video lên YouTube hoặc Vimeo

| Platform | Ưu điểm | Hướng dẫn |
|----------|---------|-----------|
| **YouTube** | Miễn phí, không giới hạn dung lượng | Upload → Chọn "Unlisted" để ẩn khỏi tìm kiếm |
| **Vimeo** | Player đẹp hơn, không quảng cáo | Upload → Copy link video |

### Bước 2 — Thêm thumbnail

1. Chụp/xuất 1 frame đẹp từ video (tỷ lệ 16:9)
2. Đặt file vào thư mục: `public/thumbnails/`
3. Đặt tên file gợi nhớ, ví dụ: `thumb-ten-project.jpg`

### Bước 3 — Thêm project vào data file

Mở `data/projects.ts` và thêm object mới vào mảng `projects`:

```typescript
{
  id: "ten-project-unique",        // ID duy nhất, không dấu, không cách
  title: "Tên Project Hiển Thị",
  category: "TVC",                 // Chọn: TVC | Music Video | Wedding | Travel | Brand Film | Short Film | Documentary | Event
  thumbnail: "/thumbnails/thumb-ten-project.jpg",
  videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXX",  // Link YouTube hoặc Vimeo
  description: "Mô tả ngắn về dự án này.",  // (tuỳ chọn)
  client: "Tên khách hàng",        // (tuỳ chọn)
  year: 2024,                      // (tuỳ chọn)
  featured: true,                  // true = hiển thị ✦ badge, ưu tiên lên đầu
},
```

**Định dạng videoUrl được hỗ trợ:**
```
https://www.youtube.com/watch?v=VIDEO_ID   ✅
https://youtu.be/VIDEO_ID                   ✅
https://vimeo.com/VIDEO_ID                  ✅
```

### Bước 4 — Lưu file và xem kết quả

Dev server tự reload. Không cần restart.

---

## 🎨 Tuỳ chỉnh nội dung

| Muốn thay đổi | Sửa ở đâu |
|---------------|-----------|
| Tên / tagline hero | `components/Hero.tsx` → `TAGLINES` array |
| Thông tin giới thiệu | `components/About.tsx` → phần bio |
| Email, số điện thoại | `components/Contact.tsx` → `CONTACT_INFO` |
| Link social media | `components/Contact.tsx` → `SOCIAL_LINKS` |
| Accent color (cam) | `app/globals.css` → `--accent: #ff6b2b;` |
| SEO title / description | `app/layout.tsx` → `metadata` object |
| Domain website | `app/layout.tsx` → `metadataBase` |

---

## 🌐 Deploy lên Vercel

### Cách 1 — Qua GitHub (khuyến nghị)

1. Tạo repo mới trên [github.com](https://github.com)
2. Push code lên:
   ```bash
   git remote add origin https://github.com/username/portfolio-website.git
   git push -u origin main
   ```
3. Truy cập [vercel.com](https://vercel.com) → **Add New Project**
4. Chọn repo vừa push → **Deploy**
5. Vercel tự nhận diện Next.js, không cần cấu hình gì thêm

### Cách 2 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Sau khi deploy

- Cập nhật `metadataBase` trong `app/layout.tsx` với domain thật:
  ```typescript
  metadataBase: new URL("https://your-domain.vercel.app"),
  ```
- Thêm ảnh Open Graph tại `public/og-image.png` (kích thước 1200×630px)

---

## 📁 Cấu trúc thư mục

```
PORTFOLIO_WEBSITE/
├── app/
│   ├── globals.css          # CSS tổng thể, dark theme, animations
│   ├── layout.tsx           # Root layout, SEO metadata
│   └── page.tsx             # Main page, ghép các section
├── components/
│   ├── Navbar.tsx           # Navigation sticky
│   ├── Hero.tsx             # Full-screen hero section
│   ├── PortfolioGrid.tsx    # Grid portfolio + filter
│   ├── VideoModal.tsx       # Modal embed YouTube/Vimeo
│   ├── About.tsx            # Giới thiệu + skills
│   ├── Contact.tsx          # Email + social links
│   ├── Footer.tsx           # Footer
│   └── useScrollAnimation.ts # Hook fade-up animation
├── data/
│   └── projects.ts          # ⭐ FILE DUY NHẤT cần sửa để thêm video
├── public/
│   ├── thumbnails/          # Ảnh thumbnail của các project
│   ├── hero-bg.png          # Ảnh nền hero (thay bằng video showreel)
│   └── about-portrait.png   # Ảnh chân dung
└── next.config.ts           # Cấu hình Next.js
```

---

## 🔄 Thêm showreel video vào Hero

Khi có video showreel, thay ảnh tĩnh trong `components/Hero.tsx`:

```tsx
// Thay <Image ... /> bằng:
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  {/* Upload video lên Cloudinary hoặc Bunny CDN — KHÔNG commit .mp4 vào git */}
  <source src="https://your-cdn.com/showreel.mp4" type="video/mp4" />
</video>
```

> ⚠️ **Không commit file .mp4 vào repo** — sẽ vượt giới hạn 100MB của GitHub và làm chậm Vercel deploy.

---

## 🛠 Scripts

```bash
npm run dev      # Dev server tại localhost:3000
npm run build    # Production build (kiểm tra lỗi)
npm run start    # Chạy production build local
npm run lint     # ESLint check
```

---

*Built with ❤️ using Next.js 16 + TypeScript + Tailwind CSS v4*
