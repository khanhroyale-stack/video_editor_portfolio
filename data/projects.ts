/**
 * ============================================================
 * DATA FILE — PROJECTS
 * ============================================================
 * Đây là file duy nhất bạn cần sửa để thêm / cập nhật video.
 *
 * Cách thêm project mới:
 * 1. Upload video lên YouTube (Unlisted) hoặc Vimeo
 * 2. Thêm object mới vào mảng `projects` bên dưới
 * 3. Đặt thumbnail vào /public/thumbnails/ rồi ghi đường dẫn
 *
 * Định dạng videoUrl được hỗ trợ:
 *   - YouTube: https://www.youtube.com/watch?v=VIDEO_ID
 *   - Vimeo:   https://vimeo.com/VIDEO_ID
 * ============================================================
 */

export type VideoCategory =
  | "TVC"
  | "Music Video"
  | "Wedding"
  | "Travel"
  | "Brand Film"
  | "Short Film"
  | "Documentary"
  | "Event";

export interface Project {
  id: string;
  title: string;
  category: VideoCategory;
  thumbnail: string; // đường dẫn tới ảnh trong /public/thumbnails/
  videoUrl: string;  // link YouTube hoặc Vimeo — THAY BẰNG VIDEO THẬT CỦA BẠN
  description?: string;
  client?: string;
  year?: number;
  featured?: boolean; // hiển thị ở đầu grid
}

// ============================================================
// DANH SÁCH DỰ ÁN — SỬA PHẦN NÀY ĐỂ CẬP NHẬT NỘI DUNG
// ============================================================
export const projects: Project[] = [
  {
    id: "tvc-highlands",
    title: "Highlands Coffee — TVC 30s",
    category: "TVC",
    // TODO: Thay bằng thumbnail thật của bạn (đặt vào /public/thumbnails/)
    thumbnail: "/thumbnails/thumb-tvc.png",
    // TODO: Thay bằng link YouTube/Vimeo thật của bạn
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Quảng cáo 30 giây cho chiến dịch ra mắt dòng sản phẩm mới của Highlands Coffee. Màu sắc ấm áp, nhịp cắt nhanh, âm nhạc sôi động.",
    client: "Highlands Coffee",
    year: 2024,
    featured: true,
  },
  {
    id: "mv-binz",
    title: "MV — Gái Ơi (Demo)",
    category: "Music Video",
    thumbnail: "/thumbnails/thumb-mv.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Music video theo phong cách Neo-noir, quay trên phim 16mm kỹ thuật số. Ánh sáng neon, bố cục đối xứng, màu sắc tím-xanh.",
    client: "Independent Artist",
    year: 2024,
    featured: true,
  },
  {
    id: "wedding-linh-huy",
    title: "Wedding Film — Linh & Huy",
    category: "Wedding",
    thumbnail: "/thumbnails/thumb-wedding.png",
    videoUrl: "https://vimeo.com/76979871",
    description:
      "Phim cưới cinematic dài 10 phút, quay tại Đà Lạt. Tone màu ấm, bokeh mềm, âm nhạc orchestral. Kỷ niệm trọn vẹn của cặp đôi.",
    client: "Linh & Huy",
    year: 2024,
  },
  {
    id: "travel-vietnam",
    title: "Vietnam from Above — Travel Vlog",
    category: "Travel",
    thumbnail: "/thumbnails/thumb-travel.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Hành trình xuyên Việt từ Hà Nội đến Mũi Né bằng drone và camera cầm tay. Màu sắc rực rỡ, nhịp điệu theo tiết tấu âm nhạc.",
    client: "Travel Creator",
    year: 2023,
  },
  {
    id: "brand-startup",
    title: "Founder Story — Brand Documentary",
    category: "Brand Film",
    thumbnail: "/thumbnails/thumb-brand.png",
    videoUrl: "https://vimeo.com/76979871",
    description:
      "Phim tài liệu thương hiệu 3 phút kể câu chuyện của founder startup công nghệ. Phỏng vấn kết hợp b-roll tối giản, chuyên nghiệp.",
    client: "TechStart VN",
    year: 2023,
    featured: true,
  },
  {
    id: "shortfilm-2023",
    title: "Khoảng Cách — Short Film",
    category: "Short Film",
    thumbnail: "/thumbnails/thumb-shortfilm.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:
      "Phim ngắn 12 phút về khoảng cách trong các mối quan hệ hiện đại. Phong cách noir, đen trắng, quay tại Sài Gòn.",
    client: "Independent",
    year: 2023,
  },
];

// Lấy danh sách category duy nhất để hiển thị filter
export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;
