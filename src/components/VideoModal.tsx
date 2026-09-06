"use client";

/**
 * VIDEO MODAL — Paint Drawing Style
 * Warm dark overlay, sketch-border video player, metadata strip below
 */

import { useEffect, useCallback } from "react";
import type { Project } from "@/data/projects";

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

function toEmbedUrl(url: string): string {
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`;
  }
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=C8553D&title=0&byline=0&portrait=0`;
  }
  return url;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const embedUrl = toEmbedUrl(project.videoUrl);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Xem video: ${project.title}`}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Đóng video"
          id="modal-close-btn"
          style={{ fontFamily: "var(--font-newsreader), serif" }}
        >
          ✕
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

        {/* Metadata strip */}
        <div
          className="mt-0 flex flex-col sm:flex-row sm:items-center gap-3 p-4 border-l-2 border-r-2 border-b-2"
          style={{
            backgroundColor: "#FFFDF5",
            borderColor: "#2B2621",
            fontFamily: "var(--font-jetbrains), monospace",
          }}
        >
          <div className="flex-1 text-center sm:text-left">
            <h2
              className="font-serif-display text-lg font-bold leading-snug"
              style={{ fontFamily: "var(--font-newsreader), serif", color: "#23201C" }}
            >
              {project.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
