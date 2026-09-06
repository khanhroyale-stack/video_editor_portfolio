"use client";

/**
 * VIDEO MODAL COMPONENT
 * Hiển thị iframe YouTube/Vimeo khi người dùng click vào thumbnail.
 * Tự động convert URL thường sang embed URL.
 * Đóng bằng nút X, phím Escape, hoặc click backdrop.
 */

import { useEffect, useCallback } from "react";
import type { Project } from "@/data/projects";

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * Chuyển đổi URL YouTube/Vimeo thường sang embed URL
 * Ví dụ:
 *   https://www.youtube.com/watch?v=ABC123  →  https://www.youtube.com/embed/ABC123
 *   https://youtu.be/ABC123                 →  https://www.youtube.com/embed/ABC123
 *   https://vimeo.com/123456789             →  https://player.vimeo.com/video/123456789
 */
function toEmbedUrl(url: string): string {
  // YouTube watch URL
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=ff6b2b&title=0&byline=0&portrait=0`;
  }

  // Nếu đã là embed URL rồi, trả về nguyên
  return url;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const embedUrl = toEmbedUrl(project.videoUrl);

  // Đóng modal khi nhấn Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    // Khoá scroll của body khi modal mở
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="modal-backdrop"
      onClick={onClose} // click backdrop → đóng
      role="dialog"
      aria-modal="true"
      aria-label={`Xem video: ${project.title}`}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // click bên trong → không đóng
      >
        {/* Close button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Đóng video"
          id="modal-close-btn"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Video embed */}
        <div className="video-wrapper">
          <iframe
            src={embedUrl}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Thông tin project bên dưới video */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">{project.title}</h2>
            {project.description && (
              <p className="text-sm text-[#888] mt-1 line-clamp-2">{project.description}</p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {project.category && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(255,107,43,0.15)] text-[var(--accent)] border border-[rgba(255,107,43,0.3)]">
                {project.category}
              </span>
            )}
            {project.year && (
              <span className="text-sm text-[#666]">{project.year}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
