"use client";

/**
 * PORTFOLIO GRID COMPONENT
 * Grid responsive với category filter.
 * Mỗi card có thumbnail, hover overlay, play button.
 * Scroll-triggered fade-up animation.
 */

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { projects, categories, type Project } from "@/data/projects";
import VideoModal from "./VideoModal";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Lọc danh sách project theo category đang chọn
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Intersection Observer — fade-up animation khi scroll vào viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up, .fade-in");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]); // re-observe khi filter thay đổi

  return (
    <section
      id="works"
      className="py-24 px-6"
      aria-labelledby="works-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14 fade-up">
          <p className="section-label mb-3">Portfolio</p>
          <h2 id="works-heading" className="section-title mb-4">
            Selected Works
          </h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-[#888] max-w-lg mx-auto text-sm leading-relaxed">
            Một số dự án tiêu biểu trong các lĩnh vực TVC, Music Video, Wedding &amp; Brand Film.
            Click vào thumbnail để xem video ngay trên trang.
          </p>
        </div>

        {/* Category filter pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 fade-up"
          role="group"
          aria-label="Lọc theo thể loại"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-pill ${activeFilter === cat ? "active" : ""}`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          aria-label="Portfolio projects"
        >
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              className={`project-card fade-up stagger-${Math.min(idx + 1, 6)}`}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`Xem video: ${project.title}`}
              id={`project-card-${project.id}`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`Thumbnail: ${project.title}`}
                  fill
                  className="card-img object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />

                {/* Hover overlay + play button */}
                <div className="card-overlay" aria-hidden="true">
                  <div className="play-btn" aria-hidden="true">
                    {/* Play triangle icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M5 3.5l12 6.5-12 6.5V3.5z"
                        fill="#000"
                      />
                    </svg>
                  </div>
                </div>

                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold
                             bg-black/60 backdrop-blur-sm text-white border border-white/10"
                >
                  {project.category}
                </span>

                {/* Featured star */}
                {project.featured && (
                  <span
                    className="absolute top-3 right-3 text-[var(--accent)]"
                    title="Featured project"
                    aria-label="Featured"
                  >
                    ✦
                  </span>
                )}
              </div>

              {/* Card info */}
              <div className="p-4">
                <h3 className="font-semibold text-white text-base leading-tight mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#666]">{project.client || "—"}</span>
                  {project.year && (
                    <span className="text-xs text-[#555]">{project.year}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-[#555] mt-16">
            Không có project nào trong danh mục này.
          </p>
        )}
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
