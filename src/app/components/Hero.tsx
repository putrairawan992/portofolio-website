'use client';

import Image from 'next/image';

/**
 * Hero — full-viewport hero with grid background, radial glows,
 * status badges, animated headline, live stats, and profile photo.
 * 2026: expressive typography, immersive interaction, intentional imperfection.
 */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
      </div>

      {/* Profile Photo — positioned visual anchor */}
      <div className="hero-profile" aria-hidden="true">
        <div className="hero-profile-glow" />
      </div>

      {/* Eyebrow */}
      <div className="hero-eyebrow">
        <div className="hero-badge" role="status" aria-live="polite">
          <span className="status-dot" aria-hidden="true" />
          Available for new projects
        </div>
        <div className="hero-badge" aria-label="Based in Jakarta, Indonesia">
          <span aria-hidden="true">📍</span> Jakarta, Indonesia
        </div>
      </div>

      {/* Headline */}
      <h1 className="hero-title" id="hero-heading">
        <span className="line">
          <span className="word">Full</span>{' '}
          <span className="word accent">Stack</span>
        </span>
        <span className="line">
          <span className="word stroke">Engineer</span>
        </span>
        <span className="line">
          <span className="word">&amp; Builder</span>
        </span>
      </h1>

      {/* Sub-content */}
      <div className="hero-sub">
        <p className="hero-desc">
          I craft high-performance digital products — from fintech platforms and
          government systems to event-tech at scale. 9+ years turning complex
          problems into elegant code.
        </p>
        <div className="hero-stats" role="list" aria-label="Career statistics">
          <div role="listitem">
            <span className="hero-stat-num">9+</span>
            <span className="hero-stat-label">Years exp.</span>
          </div>
          <div role="listitem">
            <span className="hero-stat-num">30+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div role="listitem">
            <span className="hero-stat-num">15+</span>
            <span className="hero-stat-label">Clients</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        Scroll
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 3rem 5rem;
          position: relative;
          overflow: hidden;
        }

        /* --- Background --- */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(200, 255, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 255, 0, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .hero-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(123, 97, 255, 0.12) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          border-radius: 50%;
          animation: pulse-glow 6s ease-in-out infinite;
        }
        .hero-glow2 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(200, 255, 0, 0.07) 0%, transparent 70%);
          bottom: 0;
          left: 200px;
          border-radius: 50%;
          animation: pulse-glow 8s ease-in-out infinite reverse;
        }

        /* --- Profile Photo --- */
        .hero-profile {
          position: absolute;
          right: 3rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          animation: fade-in 1.2s 0.4s both;
        }
        .hero-profile-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .hero-profile-glow {
          position: absolute;
          inset: -4px;
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            rgba(200, 255, 0, 0.15),
            rgba(123, 97, 255, 0.1),
            transparent 60%
          );
          z-index: -1;
          filter: blur(20px);
        }

        /* --- Eyebrow --- */
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.35rem 0.9rem;
          border-radius: 100px;
          font-size: 0.75rem;
          color: var(--text2);
          font-family: var(--font-mono);
          letter-spacing: 0.04em;
        }
        .status-dot {
          width: 7px;
          height: 7px;
          background: var(--accent);
          border-radius: 50%;
          animation: blink 1.8s ease-in-out infinite;
        }

        /* --- Title --- */
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 9vw, 8rem);
          font-weight: 800;
          line-height: 0.93;
          letter-spacing: -0.04em;
          position: relative;
          z-index: 2;
          margin-bottom: 1rem;
        }
        .hero-title .line {
          overflow: hidden;
          display: block;
        }
        .hero-title .word {
          display: inline-block;
          animation: slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-title .word:nth-child(1) { animation-delay: 0.1s; }
        .hero-title .word:nth-child(2) { animation-delay: 0.2s; }
        .hero-title .word:nth-child(3) { animation-delay: 0.3s; }
        .hero-title .accent {
          color: var(--accent);
        }
        .hero-title .stroke {
          -webkit-text-stroke: 2px var(--text);
          color: transparent;
        }

        /* --- Sub --- */
        .hero-sub {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-desc {
          max-width: 420px;
          color: var(--text2);
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 300;
          animation: fade-in 1s 0.6s both;
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          animation: fade-in 1s 0.8s both;
          background: rgba(10, 10, 11, 0.72);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1rem 1.75rem;
        }
        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          display: block;
          text-shadow: 0 0 20px rgba(200, 255, 0, 0.35);
        }
        .hero-stat-label {
          font-size: 0.75rem;
          color: var(--text2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 0.25rem;
          display: block;
        }

        /* --- Scroll indicator --- */
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          right: 3rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text3);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: var(--font-mono);
          z-index: 2;
          animation: fade-in 1s 1s both;
        }
        .scroll-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, var(--text3), transparent);
          animation: expand 2s 1s both;
        }

        /* --- Responsive --- */
        @media (max-width: 900px) {
          .hero {
            padding: 0 1.5rem 4rem;
          }
          .hero-scroll {
            display: none;
          }
          .hero-profile {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .hero-stats {
            gap: 1.5rem;
          }
          .hero-stat-num {
            font-size: 2rem;
          }
          .hero-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
