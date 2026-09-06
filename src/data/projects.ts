// Dummy data for the portfolio

export type Project = {
  id: string;
  title: string;
  client: string;
  category: "Talking Head" | "Visual Reveal";
  thumbnail: string;
  videoUrl: string;
  featured?: boolean;
};

// No categories needed anymore as requested
export const categories = ["Talking Heads"];

export const projects: Project[] = [
  {
    id: "the-creator-essay",
    title: "Talking Head 1",
    client: "Creator",
    category: "Talking Head",
    thumbnail: "/thumbnails/tommy1.jpg",
    videoUrl: "https://youtube.com/shorts/x7JxFQQD_iU",
    featured: true,
  },
  {
    id: "tech-founder-breakdown",
    title: "Talking Head 2",
    client: "Startup",
    category: "Talking Head",
    thumbnail: "/thumbnails/tommy2.jpg",
    videoUrl: "https://youtube.com/shorts/eZ4AFbzLG80",
  },
  {
    id: "visual-monologue",
    title: "Reveal Car 1",
    client: "Artist",
    category: "Visual Reveal",
    thumbnail: "/thumbnails/revealcar1.jpg",
    videoUrl: "https://youtube.com/shorts/ngZlIbAEnlc",
  },
  {
    id: "deep-dive-podcast-cut",
    title: "Reveal Car 2",
    client: "Podcast",
    category: "Visual Reveal",
    thumbnail: "/thumbnails/revealcar2.jpg",
    videoUrl: "https://youtube.com/shorts/5IkbuR_50h8",
  },
];
