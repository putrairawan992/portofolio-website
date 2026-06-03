'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — Intersection Observer wrapper for scroll-triggered animations.
 * Wraps children with the .reveal class and observes visibility.
 */
export default function ScrollReveal({
  children,
  className = '',
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ ...(delay ? { transitionDelay: `${delay}s` } : {}), ...style }}
    >
      {children}
    </div>
  );
}
