'use client';

import { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  desc: string;
  stack: string[];
  featured?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'amartha',
    company: 'PT Amartha Mikro Fintek',
    role: 'Engineering Manager & Developer',
    period: 'Jul 2021 — Sep 2025',
    desc: 'Led the engineering team building and maintaining core fintech web products. Architected the NG MIS admin platform, drove code reviews, set technical standards, and mentored developers. Delivered full stack features across Next.js, NestJS, Go, Flutter, and Vue.',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Go', 'Flutter', 'Vue', 'MySQL', 'Laravel'],
    featured: true,
  },
  {
    id: 'chi',
    company: 'CHI Ecosystem',
    role: 'Senior Front End / Heavy Full Stack Engineer',
    period: 'Aug 2024 — Dec 2025',
    desc: 'Built cross-platform mobile apps with React Native, scalable web interfaces with Next.js App Router + Streaming SSR, and Go microservices with gRPC. Implemented Docker/Kubernetes CI/CD pipelines and led front-to-backend technical decisions at scale.',
    stack: ['React Native', 'Next.js', 'TypeScript', 'Go', 'gRPC', 'Docker', 'Kubernetes'],
  },
  {
    id: 'koinworks',
    company: 'KoinWorks',
    role: 'Full Stack Engineer',
    period: 'Jan 2020 — Jun 2021',
    desc: "Delivered full stack features for Indonesia's leading P2P lending platform. Built responsive web UIs in React.js, mobile apps in React Native and Kotlin, backend services in Go and Laravel, and integrated Drupal JSON:API for complex content workflows.",
    stack: ['React.js', 'React Native', 'Go', 'Laravel', 'Drupal', 'Kotlin'],
  },
  {
    id: 'traveloka',
    company: 'Traveloka',
    role: 'Software Engineer',
    period: 'Jan 2017 — Dec 2018',
    desc: "Developed and maintained booking and payment module features for Southeast Asia's top travel platform. Integrated internal and third-party APIs, collaborated with QA, UI/UX, and PM teams to ensure responsive, reliable user experiences at scale.",
    stack: ['React.js', 'TypeScript', 'Go', 'GraphQL', 'AWS', 'Docker'],
  },
];

/**
 * Experience — sticky nav + timeline cards.
 * 2026: recognizable navigation paradigm with animated card accents.
 */
export default function Experience() {
  const [activeId, setActiveId] = useState('amartha');

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
                  {exp.company.split(' ')[0]}
                </button>
              ))}
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="exp-timeline">
            {EXPERIENCES.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 0.1}>
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
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-desc">{exp.desc}</p>
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
          border-radius: 16px;
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
          background: var(--accent);
          transition: height 0.4s ease;
          border-radius: 0 0 3px 3px;
        }
        .exp-card:hover::after,
        .exp-card.featured::after {
          height: 100%;
        }
        .exp-card.featured {
          border-color: rgba(200, 255, 0, 0.2);
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
          background: var(--bg3);
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          white-space: nowrap;
        }
        .exp-desc {
          color: var(--text2);
          font-size: 0.88rem;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 1rem;
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
          background: var(--bg3);
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
            background: rgba(200, 255, 0, 0.1);
            border-color: var(--accent);
            color: var(--accent);
          }
        }
      `}</style>
    </section>
  );
}
