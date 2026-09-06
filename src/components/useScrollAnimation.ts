"use client";

/**
 * useScrollAnimation hook
 * Khởi tạo IntersectionObserver toàn cục để trigger CSS class .visible
 * trên tất cả các element có class .fade-up hoặc .fade-in.
 * Dùng trong layout để chỉ chạy 1 lần duy nhất.
 */

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve sau khi đã hiển thị — performance optimization
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe tất cả elements có animation class
    const observe = () => {
      document.querySelectorAll(".fade-up, .fade-in").forEach((el) => {
        observer.observe(el);
      });
    };

    // Chạy ngay và sau 1 giây để catch các element render muộn
    observe();
    const t = setTimeout(observe, 1000);

    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);
}
