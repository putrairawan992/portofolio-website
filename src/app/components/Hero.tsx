'use client';

import Image from 'next/image';

const ROLES = ['Full Stack Engineer', 'AI Automation', 'Enterprise Systems'];

const STATS = [
  { num: '9+', label: 'Years experience' },
  { num: '35+', label: 'Projects shipped' },
  { num: '20+', label: 'Clients & companies' },
];

/**
 * Hero — split layout: headline + CTA on the left, profile card on the right,
 * soft gradient orbs and a masked grid behind.
 */
export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge" role="status">
            <span className="status-dot" aria-hidden="true" />
            Available for new projects · Jakarta, Indonesia
          </div>

          <h1 className="hero-title" id="hero-heading">
            Hi, I&apos;m Putra.
            <br />
            I build <span className="grad-text">software that runs</span>
            <br />
            real businesses.
          </h1>

          <ul className="hero-roles" aria-label="Focus areas">
            {ROLES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <p className="hero-desc">
            9+ years across enterprise software, fintech, web and mobile. I deliver
            ERP and warehouse modules, CRM and workflow integrations, healthcare
            interoperability and AI/IoT products from architecture to production.
          </p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              View my work <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card glass">
            <div className="profile-img-wrap">
              <Image
                src="/images/profile.jpg"
                alt="Putra Irawan"
                fill
                sizes="(max-width: 900px) 280px, 360px"
                priority
                className="profile-img"
              />
            </div>
            <div className="profile-meta">
              <div>
                <div className="profile-name">Putra Irawan</div>
                <div className="profile-role">Full Stack Engineer</div>
              </div>
              <span className="profile-chip">AI · ERP · Mobile</span>
            </div>
          </div>
          <div className="float-chip chip-a glass" aria-hidden="true">
            <span className="chip-dot" /> Spring Boot · FastAPI · Next.js
          </div>
          <div className="float-chip chip-b glass" aria-hidden="true">
            ✦ Salesforce · WMS · FHIR
          </div>
        </div>
      </div>

      <div className="hero-stats" role="list" aria-label="Career statistics">
        {STATS.map((s) => (
          <div role="listitem" key={s.label} className="stat glass">
            <span className="stat-num grad-text">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding: 8rem 3rem 4rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.45;
          animation: float 14s ease-in-out infinite;
        }
        .orb-1 { width: 520px; height: 520px; background: #7C3AED; top: -160px; right: -80px; }
        .orb-2 { width: 420px; height: 420px; background: #0891B2; bottom: -120px; left: -100px; animation-delay: -5s; opacity: 0.35; }
        .orb-3 { width: 260px; height: 260px; background: #DB2777; top: 40%; left: 45%; animation-delay: -9s; opacity: 0.18; }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          color: var(--text2);
          font-family: var(--font-mono);
          margin-bottom: 1.75rem;
          animation: fade-in 0.8s both;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: #34D399;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.18);
          animation: blink 1.8s ease-in-out infinite;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5.6vw, 4.75rem);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.035em;
          margin-bottom: 1.5rem;
          animation: fade-in 0.9s 0.1s both;
        }

        .hero-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          margin-bottom: 1.5rem;
          animation: fade-in 0.9s 0.2s both;
        }
        .hero-roles li {
          font-size: 0.8rem;
          padding: 0.35rem 0.85rem;
          border-radius: 100px;
          border: 1px solid rgba(var(--accent-rgb), 0.35);
          background: rgba(var(--accent-rgb), 0.08);
          color: #DDD6FE;
        }

        .hero-desc {
          max-width: 540px;
          color: var(--text2);
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 2.25rem;
          animation: fade-in 0.9s 0.3s both;
        }

        .hero-cta {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          animation: fade-in 0.9s 0.4s both;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.6rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.92rem;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s, border-color 0.2s;
        }
        .btn-primary {
          background: var(--grad);
          color: #0B0B11;
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.35);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);
        }
        .btn-ghost {
          border: 1px solid var(--border2);
          background: var(--surface);
          color: var(--text);
        }
        .btn-ghost:hover {
          background: var(--surface2);
          transform: translateY(-2px);
        }

        /* Visual */
        .hero-visual {
          position: relative;
          justify-self: center;
          animation: fade-in 1s 0.3s both;
        }
        .profile-card {
          width: 360px;
          padding: 12px;
          border-radius: 28px;
          position: relative;
        }
        .profile-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 28px;
          padding: 1px;
          background: var(--grad);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          pointer-events: none;
        }
        .profile-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 20px;
          overflow: hidden;
          background: var(--bg3);
        }
        .profile-img-wrap :global(.profile-img) {
          object-fit: cover;
        }
        .profile-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0.5rem 0.35rem;
          gap: 0.5rem;
        }
        .profile-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .profile-role {
          color: var(--text2);
          font-size: 0.8rem;
        }
        .profile-chip {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.3rem 0.65rem;
          border-radius: 100px;
          background: var(--surface2);
          border: 1px solid var(--border);
          color: var(--text2);
          white-space: nowrap;
        }
        .float-chip {
          position: absolute;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          padding: 0.55rem 0.9rem;
          border-radius: 12px;
          color: var(--text);
          white-space: nowrap;
          background: rgba(18, 18, 26, 0.75);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: float 9s ease-in-out infinite;
        }
        .chip-a { top: 12%; left: -70px; }
        .chip-b { bottom: 22%; right: -50px; animation-delay: -4s; }
        .chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent2);
        }

        /* Stats */
        .hero-stats {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          animation: fade-in 1s 0.6s both;
        }
        .stat {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: baseline;
          gap: 0.85rem;
        }
        .stat-num {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1;
        }
        .stat-label {
          color: var(--text2);
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .hero {
            padding: 7rem 1.5rem 3rem;
            gap: 3rem;
          }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-visual {
            order: -1;
          }
          .profile-card {
            width: 260px;
          }
          .float-chip {
            display: none;
          }
          .hero-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
