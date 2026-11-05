'use client';

/**
 * TechMarquee — infinite scrolling tech stack ticker.
 * Duplicates children to create a seamless loop.
 * 2026: intentional imperfection with marquee pattern.
 */
const TECH_STACK = [
  'Next.js',
  'Spring Boot',
  'FastAPI',
  'NestJS',
  'TypeScript',
  'Flutter',
  'React Native',
  'Salesforce',
  'n8n',
  'AI Agents',
  'Go',
  'Kubernetes',
  'FHIR / HL7',
  'PostgreSQL',
];

export default function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK]; // Duplicate for seamless loop

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <div className="marquee-item" key={`${tech}-${i}`}>
            <span className="marquee-dot" />
            {tech}
          </div>
        ))}
      </div>
      <style jsx>{`
        .marquee-section {
          padding: 2.5rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg2);
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marquee 32s linear infinite;
          white-space: nowrap;
          width: max-content;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0 2rem;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text2);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .marquee-dot {
          width: 6px;
          height: 6px;
          background: var(--grad);
          border-radius: 50%;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
