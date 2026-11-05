'use client';

import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

interface ExperienceItem {
  id: string;
  short: string;
  company: string;
  role: string;
  period: string;
  type: 'Full-time' | 'Contract';
  points: string[];
  stack: string[];
  featured?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'gunanusa',
    short: 'Gunanusa',
    company: 'PT Gunanusa Utama Fabricators',
    role: 'Enterprise Systems & Automation Engineer',
    period: 'Nov 2025 – May 2026',
    type: 'Contract',
    points: [
      'Built WMS functionality for inventory visibility, plus approval monitoring, failure/retry visibility and SLA notifications.',
      'Customized Salesforce CRM, built REST integrations and delivered a WhatsApp notification gateway for operational alerts.',
    ],
    stack: ['React', 'TypeScript', 'Laravel', 'Python', 'Go', 'Salesforce', 'Node.js'],
    featured: true,
  },
  {
    id: 'chi',
    short: 'CHI Ecosystem',
    company: 'CHI Ecosystem',
    role: 'Senior Frontend / Full Stack Engineer',
    period: 'Aug 2024 – Dec 2025',
    type: 'Contract',
    points: [
      'Developed web and React Native experiences, real-time event interfaces and backend integrations for event operations.',
    ],
    stack: ['Next.js', 'React Native', 'TypeScript', 'Go', 'Java', 'Docker'],
  },
  {
    id: 'amartha',
    short: 'Amartha',
    company: 'PT Amartha Mikro Fintek',
    role: 'Engineering Manager',
    period: 'Jul 2021 – Sep 2025',
    type: 'Full-time',
    points: [
      'Developed and maintained product and operational fintech applications with reusable frontend components and API integrations.',
      'Worked with cross-functional teams on design feasibility, UI quality, performance, code review and technical documentation.',
      'Contributed to customer, lending, investment, MIS and operational workflows across enterprise modules.',
    ],
    stack: ['Next.js', 'TypeScript', 'Go', 'Vue', 'Angular', 'Flutter', 'Laravel', 'NestJS', 'MySQL'],
  },
  {
    id: 'yaz',
    short: 'Yaz Venture',
    company: 'Yaz Venture',
    role: 'Healthcare Integration Engineer',
    period: 'Jan 2024 – May 2024',
    type: 'Contract',
    points: [
      'Implemented FHIR/HL7 data exchange and mappings for Patient, Observation and Encounter records with validation and secure APIs.',
    ],
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'FHIR', 'HL7 v2', 'OAuth2'],
  },
  {
    id: 'bomber',
    short: 'Bomber',
    company: 'Bomber (Taiwan client)',
    role: 'Mobile & Web Engineer',
    period: '2024',
    type: 'Contract',
    points: [
      'Built customer mobile booking features, owner/admin web interfaces, API integrations and reservation flows for a nightlife reservation and POS platform.',
    ],
    stack: ['React Native', 'Next.js', 'TypeScript', 'Angular'],
  },
  {
    id: 'koinworks',
    short: 'KoinWorks',
    company: 'KoinWorks',
    role: 'Full Stack Engineer',
    period: 'Jan 2020 – Jun 2021',
    type: 'Full-time',
    points: [
      'Implemented responsive fintech web interfaces and worked with backend developers on features and integrations.',
      'Improved maintainability, performance and usability across customer-facing digital experiences.',
    ],
    stack: ['Laravel', 'React', 'Kotlin', 'React Native', 'Go', 'Python'],
  },
  {
    id: 'monggopesen',
    short: 'Monggopesen',
    company: 'PT Giyarto Manunggal Sejati Group / Monggopesen',
    role: 'Software Engineer',
    period: 'Dec 2018 – Dec 2019',
    type: 'Full-time',
    points: [
      'Built and maintained responsive web interfaces, integrated backend services and supported troubleshooting.',
      'Contributed to integrations supporting business and customer-data workflows.',
    ],
    stack: ['Laravel', 'React', 'Vue', 'Node.js', 'MySQL', 'MongoDB'],
  },
  {
    id: 'traveloka',
    short: 'Traveloka',
    company: 'Traveloka',
    role: 'Software Engineer (Programmer)',
    period: 'Jan 2017 – Dec 2018',
    type: 'Full-time',
    points: [
      'Worked on app and website features for booking and payment flows and internal/third-party APIs.',
      'Collaborated with QA, design and product teams to support stable transaction experiences.',
    ],
    stack: ['React', 'TypeScript', 'React Native', 'Go', 'AWS', 'MySQL', 'GraphQL'],
  },
  {
    id: 'harika',
    short: 'Harika',
    company: 'PT Harika Propertyndo Utama',
    role: 'IT Programmer and Network',
    period: 'Dec 2015 – Jan 2016',
    type: 'Full-time',
    points: [
      'Developed internal reporting and data-processing tools and supported database integrity and process improvements.',
    ],
    stack: ['Reporting', 'Database'],
  },
];

/**
 * Experience — sticky nav + timeline cards.
 * 2026: recognizable navigation paradigm with animated card accents.
 */
export default function Experience() {
  const [activeId, setActiveId] = useState('gunanusa');

  const scrollToExp = useCallback((id: string) => {
    setActiveId(id);
    const el = document.getElementById(`exp-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="experience-inner">
        <div className="exp-grid">
          {/* Sticky nav */}
          <div className="exp-nav" role="navigation" aria-label="Experience quick navigation">
            <ScrollReveal>
              <div className="section-tag">Career</div>
              <h2 className="section-title" id="experience-heading">
                Where<br />I&apos;ve<br />worked
              </h2>
              {EXPERIENCES.map((exp) => (
                <button
                  key={exp.id}
                  className={`exp-nav-item ${activeId === exp.id ? 'active' : ''}`}
                  onClick={() => scrollToExp(exp.id)}
                  aria-label={`Jump to ${exp.company} experience`}
                  aria-current={activeId === exp.id ? 'true' : undefined}
                >
                  {exp.short}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="exp-timeline">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={Math.min(idx, 3) * 0.08}>
                <div
                  className={`exp-card ${exp.featured ? 'featured' : ''}`}
                  id={`exp-${exp.id}`}
                  aria-labelledby={`${exp.id}-title`}
                >
                  <div className="exp-header">
                    <div>
                      <div className="exp-company" id={`${exp.id}-title`}>
                        {exp.company}
                      </div>
                      <div className="exp-role">{exp.role}</div>
                    </div>
                    <div className="exp-meta">
                      <span className={`exp-type ${exp.type === 'Contract' ? 'contract' : ''}`}>{exp.type}</span>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="exp-desc">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="exp-stack" role="list" aria-label="Technologies used">
                    {exp.stack.map((tech) => (
                      <span className="exp-stack-item" role="listitem" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience {
          background: var(--bg2);
          border-top: 1px solid var(--border);
        }
        .experience-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
          align-items: start;
        }

        /* Nav */
        .exp-nav {
          position: sticky;
          top: 7rem;
        }
        .exp-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          cursor: pointer;
          color: var(--text3);
          font-size: 0.85rem;
          transition: color 0.2s;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-family: var(--font-body);
        }
        .exp-nav-item::before {
          content: '';
          width: 24px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .exp-nav-item.active,
        .exp-nav-item:hover {
          color: var(--text);
        }
        .exp-nav-item.active::before {
          width: 40px;
          background: var(--accent);
        }

        /* Cards */
        .exp-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .exp-card:hover {
          border-color: var(--border2);
        }
        .exp-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 0;
          background: var(--grad);
          transition: height 0.4s ease;
          border-radius: 0 0 3px 3px;
        }
        .exp-card:hover::after,
        .exp-card.featured::after {
          height: 100%;
        }
        .exp-card.featured {
          border-color: rgba(var(--accent-rgb), 0.35);
          background: radial-gradient(500px circle at 100% 0%, rgba(124, 58, 237, 0.14), transparent 60%), var(--surface);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .exp-company {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .exp-role {
          color: var(--accent);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
        }
        .exp-period {
          font-size: 0.75rem;
          color: var(--text3);
          font-family: var(--font-mono);
          background: var(--surface2);
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          white-space: nowrap;
        }
        .exp-meta {
          display: flex;
          gap: 0.4rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .exp-type {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          padding: 0.3rem 0.65rem;
          border-radius: 100px;
          color: #6EE7B7;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.25);
        }
        .exp-type.contract {
          color: #67E8F9;
          background: rgba(34, 211, 238, 0.1);
          border-color: rgba(34, 211, 238, 0.25);
        }
        .exp-desc {
          color: var(--text2);
          font-size: 0.9rem;
          line-height: 1.7;
          margin: 0 0 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .exp-desc li::marker {
          color: var(--accent);
        }
        .exp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .exp-stack-item {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          color: var(--text3);
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .exp-nav {
            position: static;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }
          .exp-nav-item {
            padding: 0.4rem 0.9rem;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 100px;
            font-size: 0.78rem;
            width: auto;
          }
          .exp-nav-item::before {
            display: none;
          }
          .exp-nav-item.active {
            background: rgba(var(--accent-rgb), 0.12);
            border-color: var(--accent);
            color: var(--accent);
          }
        }
      `}</style>
    </section>
  );
}
