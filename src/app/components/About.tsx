'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const SKILLS = [
  'Next.js', 'NestJS', 'TypeScript', 'React / RN', 'Node.js', 'Go',
  'PostgreSQL', 'Docker', 'GraphQL', 'FHIR / HL7', 'CI/CD', 'AWS',
  'Angular', 'Laravel', 'Rust', 'Flutter',
];

/**
 * About — profile card + bio + skills grid.
 * 2026: dark editorial with acid-green accent, textured card.
 */
export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-inner">
        {/* Profile Card */}
        <ScrollReveal>
          <div className="about-card" role="region" aria-label="Profile card">
            <div className="about-avatar">
              <Image
                src="/images/profile.jpg"
                alt="Putra Irawan"
                width={80}
                height={80}
                className="about-avatar-img"
              />
            </div>
            <div className="about-name">Putra Irawan</div>
            <div className="about-role">// full_stack_engineer.ts</div>
            <hr className="about-divider" />
            <div className="about-detail-row">
              <span>Location</span><span>Jakarta, Indonesia</span>
            </div>
            <div className="about-detail-row">
              <span>Experience</span><span>9+ years</span>
            </div>
            <div className="about-detail-row">
              <span>Availability</span><span>Open to remote</span>
            </div>
            <div className="about-detail-row">
              <span>Speciality</span><span>Full Stack / NestJS</span>
            </div>
            <div className="float-badge" aria-label="9 years of experience">9 yrs+</div>
          </div>
        </ScrollReveal>

        {/* Bio + Skills */}
        <ScrollReveal delay={0.15}>
          <div className="section-tag" aria-label="Section: About me">About me</div>
          <h2 className="section-title" id="about-heading">
            I build things<br />that{' '}
            <span className="accent">actually work</span>
          </h2>
          <p className="about-text">
            From <strong>Traveloka&apos;s booking engine</strong> to KoinWorks&apos;
            fintech platform, from government information systems to healthcare data
            interoperability — I&apos;ve spent 9+ years solving real-world complexity
            with clean, scalable code.
          </p>
          <p className="about-text">
            I&apos;m most at home in <strong>NestJS + TypeScript backends</strong>,
            Next.js frontends, and the architecture decisions that make both scale.
            I&apos;ve led engineering teams, mentored developers, and shipped products
            used by hundreds of thousands of users.
          </p>
          <div className="skills-grid" role="list" aria-label="Technical skills">
            {SKILLS.map((skill) => (
              <span className="skill-tag" role="listitem" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .about {
          background: var(--bg2);
          border-top: 1px solid var(--border);
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Card */
        .about-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2rem;
          padding-bottom: 3rem;
          position: relative;
          overflow: visible;
        }
        .about-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200, 255, 0, 0.04), transparent 60%);
          pointer-events: none;
          border-radius: 20px;
        }
        .about-avatar {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent2), var(--accent));
          margin-bottom: 1.25rem;
        }
        .about-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .about-role {
          color: var(--text2);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }
        .about-divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 1.25rem 0;
        }
        .about-detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          margin-bottom: 0.6rem;
          color: var(--text2);
        }
        .about-detail-row :global(span:first-child) {
          color: var(--text3);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .about-detail-row :global(span:last-child) {
          color: var(--text);
          font-weight: 500;
        }
        .float-badge {
          position: absolute;
          bottom: -0.75rem;
          right: 1.5rem;
          background: var(--accent);
          color: #0A0A0B;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.9rem;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(200, 255, 0, 0.4);
        }

        /* Text */
        .about-text {
          color: var(--text2);
          font-size: 1rem;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .about-text :global(strong) {
          color: var(--text);
          font-weight: 500;
        }

        /* Skills */
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .skill-tag {
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          color: var(--text2);
          font-family: var(--font-mono);
          transition: all 0.2s;
          cursor: default;
        }
        .skill-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(200, 255, 0, 0.05);
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
