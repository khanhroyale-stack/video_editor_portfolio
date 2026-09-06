"use client";

/**
 * PORTFOLIO GRID — Paint Drawing Style
 * 4-column grid (desktop) of 9:16 vertical video cards with sketch borders.
 * Each card: thumbnail + cross play button + mono metadata + serif title.
 */

import { useState, useEffect } from "react";

import { projects, type Project } from "@/data/projects";
import VideoModal from "./VideoModal";



export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* Scroll animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const talkingHeads = projects.filter((p) => p.category === "Talking Head");
  const visualReveals = projects.filter((p) => p.category === "Visual Reveal");

  const renderCard = (project: Project, idx: number) => (
    <article
      key={project.id}
      id={`project-card-${project.id}`}
      className={`video-card fade-up stagger-${Math.min(idx + 1, 4)}`}
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
    >
      {/* 9:16 Thumbnail */}
      <div
        className="relative overflow-hidden border-2 bg-ink flex items-center justify-center"
        style={{ aspectRatio: "9/16", borderColor: "#2B2621" }}
      >
        <img
          src={project.thumbnail}
          alt={`Thumbnail: ${project.title}`}
          className="thumb-img object-cover w-full h-full absolute inset-0"
          style={{ filter: "saturate(0.85) contrast(1.08)" }}
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(35,32,28,0.8) 0%, transparent 40%, rgba(35,32,28,0.2) 100%)",
            mixBlendMode: "multiply",
          }}
          aria-hidden="true"
        />

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center z-10" aria-hidden="true">
          <div className="play-cross flex items-center justify-center">
            <svg
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <path d="M6 4l14 8-14 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card info below thumbnail */}
      <div className="pt-3.5 flex flex-col gap-1">
        <h3
          className="card-title font-serif-display text-lg font-bold leading-snug transition-colors text-center"
          style={{ fontFamily: "var(--font-newsreader), serif", color: "#23201C" }}
        >
          0{String(idx + 1)} // {project.title}
        </h3>
      </div>
    </article>
  );

  return (
    <section
      id="works"
      className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col gap-12"
      aria-labelledby="works-heading"
    >
      {/* --- TALKING HEADS SECTION --- */}
      <div className="flex flex-col gap-6">
        <div className="section-header fade-up">
          <h2
            id="works-heading"
            className="font-serif-display text-2xl sm:text-3xl tracking-tight font-normal text-center w-full"
            style={{ fontFamily: "var(--font-newsreader), serif", color: "#23201C" }}
          >
            <span className="brush-underline">Talking Heads</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-6"
          aria-label="Talking Heads projects"
        >
          {talkingHeads.map((project, idx) => renderCard(project, idx))}
        </div>
      </div>

      {/* --- VISUAL REVEAL SECTION --- */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="section-header fade-up">
          <h2
            className="font-serif-display text-2xl sm:text-3xl tracking-tight font-normal text-center w-full"
            style={{ fontFamily: "var(--font-newsreader), serif", color: "#23201C" }}
          >
            <span className="brush-underline">Visual Reveal</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-6"
          aria-label="Visual Reveal projects"
        >
          {visualReveals.map((project, idx) => renderCard(project, idx))}
        </div>
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
