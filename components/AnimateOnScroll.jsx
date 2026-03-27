'use client';
import { useEffect } from 'react';
import { useLang } from '@/context/LangContext';

export default function AnimateOnScroll() {
  const { lang } = useLang();

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

    // Small delay so the new DOM elements are painted before observing
    const timeout = setTimeout(() => {
      const els = document.querySelectorAll('.fade-in');
      els.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [lang]);

  return null;
}
