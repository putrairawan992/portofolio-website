'use client';

import ScrollReveal from './ScrollReveal';

const SKILL_GROUPS = [
  { icon: '◐', title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Angular', 'Vue', 'Nuxt', 'Tailwind CSS'] },
  { icon: '⬢', title: 'Backend & Architecture', items: ['Node.js', 'NestJS', 'Express', 'Java', 'Spring Boot', 'Python', 'FastAPI', 'Laravel', 'Go', 'REST', 'gRPC', 'Microservices'] },
  { icon: '▣', title: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'SwiftUI', 'UIKit', 'Kotlin'] },
  { icon: '✦', title: 'AI & Automation', items: ['OpenAI API', 'Claude API', 'Gemini API', 'n8n', 'LLM Workflows', 'AI Agents', 'RAG'] },
  { icon: '◈', title: 'Enterprise & Data', items: ['Salesforce (Apex, LWC, SOQL, Flow)', 'ERP', 'WMS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'HL7', 'FHIR'] },
  { icon: '☁', title: 'Cloud & Quality', items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'CI/CD', 'OAuth2', 'JWT', 'Jest', 'XCTest'] },
];

const CERTS = [
  { name: 'Golang', by: 'Hacktiv8', year: '2022' },
  { name: 'DevOps Pemula', by: 'Dicoding', year: '2023' },
  { name: 'Android Developer', by: 'Dicoding', year: '2020' },
  { name: 'CompTIA Network+', by: 'CompTIA', year: '2015' },
];

/**
 * About — summary, skill bento grid, education / certifications / languages.
 */
export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-inner">
        <ScrollReveal>
          <div className="about-head">
            <div>
              <div className="section-tag">About me</div>
              <h2 className="section-title" id="about-heading">
                Engineer for systems
                <br />
                that <span className="accent">actually ship</span>
              </h2>
            </div>
            <p className="about-text">
              Full Stack Engineer with <strong>9+ years</strong> across enterprise
              software, fintech, web and mobile products. I&apos;ve delivered warehouse
              and ERP modules, workflow and CRM integrations, event platforms,
              healthcare interoperability services and AI/IoT applications. Day to day
              that means solution architecture, REST APIs, microservices, data
              integration, security and production delivery, with native iOS as an
              extra specialty.
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-bento" role="list" aria-label="Technical skills">
          {SKILL_GROUPS.map((g, i) => (
            <ScrollReveal key={g.title} delay={i * 0.06}>
              <div className="skill-card glass" role="listitem">
                <div className="skill-card-head">
                  <span className="skill-icon" aria-hidden="true">{g.icon}</span>
                  <h3>{g.title}</h3>
                </div>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="about-extra">
          <ScrollReveal>
            <div className="extra-card glass">
              <div className="extra-label">Education</div>
              <div className="extra-title">Bachelor of Informatics (S1 Informatika)</div>
              <div className="extra-sub">Universitas Indo Global Mandiri, Palembang · 2011 – 2015</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="extra-card glass">
              <div className="extra-label">Certifications</div>
              <ul className="cert-list">
                {CERTS.map((c) => (
                  <li key={c.name}>
                    <span>{c.name}</span>
                    <span className="cert-meta">{c.by} · {c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="extra-card glass">
              <div className="extra-label">Languages</div>
              <ul className="cert-list">
                <li><span>Indonesian</span><span className="cert-meta">Native</span></li>
                <li><span>English</span><span className="cert-meta">Professional working</span></li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--bg2);
          border-top: 1px solid var(--border);
        }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          margin-bottom: 3.5rem;
        }
        .about-text {
          color: var(--text2);
          font-size: 1rem;
          line-height: 1.8;
        }
        .about-text :global(strong) {
          color: var(--text);
          font-weight: 500;
        }

        .skills-bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .skill-card {
          padding: 1.5rem;
          height: 100%;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }
        .skill-card:hover {
          border-color: rgba(var(--accent-rgb), 0.4);
          background: var(--surface2);
          transform: translateY(-3px);
        }
        .skill-card-head {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .skill-card-head h3 {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
        }
        .skill-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(var(--accent-rgb), 0.12);
          color: var(--accent);
          font-size: 1rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .skill-tag {
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 0.25rem 0.65rem;
          border-radius: 8px;
          font-size: 0.75rem;
          color: var(--text2);
        }

        .about-extra {
          display: grid;
          grid-template-columns: 1.1fr 1fr 0.9fr;
          gap: 1rem;
          margin-top: 1rem;
        }
        .extra-card {
          padding: 1.5rem;
          height: 100%;
        }
        .extra-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent2);
          margin-bottom: 0.85rem;
        }
        .extra-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 0.35rem;
        }
        .extra-sub {
          color: var(--text2);
          font-size: 0.85rem;
        }
        .cert-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .cert-list li {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.88rem;
        }
        .cert-meta {
          color: var(--text3);
          font-size: 0.78rem;
          text-align: right;
        }

        @media (max-width: 900px) {
          .about-head,
          .about-extra {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .skills-bento {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .skills-bento {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
