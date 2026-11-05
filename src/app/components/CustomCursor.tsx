'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * CustomCursor — 2026 immersive interaction pattern.
 * Magnetic cursor with blend-mode difference effect.
 * Hidden on touch devices; respects prefers-reduced-motion.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const followPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const animateFollow = useCallback(() => {
    const { x: mx, y: my } = mouseRef.current;
    const fx = followPosRef.current.x;
    const fy = followPosRef.current.y;

    followPosRef.current.x = fx + (mx - fx) * 0.12;
    followPosRef.current.y = fy + (my - fy) * 0.12;

    if (followRef.current) {
      followRef.current.style.left = followPosRef.current.x - 20 + 'px';
      followRef.current.style.top = followPosRef.current.y - 20 + 'px';
    }
    rafRef.current = requestAnimationFrame(animateFollow);
  }, []);

  useEffect(() => {
    // Skip on touch devices or if reduced motion is preferred
    const mqPointer = window.matchMedia('(pointer: coarse)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mqPointer.matches || mqMotion.matches) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      if (followRef.current) followRef.current.style.display = 'none';
      document.documentElement.style.cursor = 'auto';
      return;
    }

    const cursor = cursorRef.current;
    const follow = followRef.current;
    if (!cursor || !follow) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      cursor.style.left = e.clientX - 6 + 'px';
      cursor.style.top = e.clientY - 6 + 'px';
    };

    // Elements that trigger hover state
    const interactableSelector =
      'a, button, .skill-tag, .project-item, .exp-card, [role="button"]';
    const interactables = document.querySelectorAll(interactableSelector);

    const onEnter = () => {
      cursor.classList.add('hovering');
      follow.classList.add('hovering');
    };
    const onLeave = () => {
      cursor.classList.remove('hovering');
      follow.classList.remove('hovering');
    };

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateFollow);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, [animateFollow]);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot"
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '12px',
          height: '12px',
          background: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease',
          mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
        }}
      />
      <div
        ref={followRef}
        className="cursor-follow"
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(167,139,250,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'transform 0.25s ease, width 0.2s, height 0.2s',
        }}
      />
      <style jsx>{`
        .cursor-dot.hovering { transform: scale(2.5); }
        .cursor-follow.hovering { width: 60px; height: 60px; border-color: rgba(167,139,250,0.6); }
      `}</style>
    </>
  );
}
