'use client';
import { useEffect } from 'react';

/**
 * Mounts an IntersectionObserver that adds the 'visible' class to
 * any element with the 'fade-in' class, triggering the CSS animation.
 */
export default function AnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll('.fade-in');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
