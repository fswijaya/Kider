'use client';

import { useEffect } from 'react';

export default function AnimationInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute('data-wow-delay') || '0s';
            const animClass = Array.from(el.classList).find(
              (c) =>
                c.startsWith('fade') ||
                c.startsWith('slide') ||
                c.startsWith('bounce') ||
                c.startsWith('zoom')
            );
            el.style.animationDelay = delay;
            el.classList.add('animate__animated');
            if (animClass) {
              el.classList.add(`animate__${animClass}`);
            } else {
              el.classList.add('animate__fadeIn');
            }
            el.style.visibility = 'visible';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.wow').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
