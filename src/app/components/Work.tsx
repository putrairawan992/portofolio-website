'use client';

import ScrollReveal from './ScrollReveal';

interface Project {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  href: string;
  delay: number;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'CHI Ecosystem',
    desc: 'Event OS for 10–100k+ attendees · ticketing, payments, real-time analytics',
    tags: ['Next.js', 'TypeScript', 'Go', 'Docker/K8s', 'gRPC'],
    href: 'https://chi.app/en',
    delay: 0,
  },
  {
    num: '02',
    name: 'Amartha Fintech',
    desc: 'Microfinance platform · NG MIS admin system · Engineering Manager role (4 yrs)',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Angular', 'Flutter'],
    href: '#',
    delay: 0.05,
  },
  {
    num: '03',
    name: 'Gunanusa Enterprise Suite',
    desc: 'WMS · ERP Salesforce · Approval Workflow Dashboard · WhatsApp Gateway',
    tags: ['React.js', 'Laravel', 'PostgreSQL', 'Salesforce LWC', 'Python'],
    href: '#',
    delay: 0.1,
  },
  {
    num: '04',
    name: 'GameMarket.gg',
    desc: 'Digital marketplace for game accounts, items & top-ups · SSR + Google Auth',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SSR'],
    href: 'https://gamemarket.gg',
    delay: 0.15,
  },
  {
    num: '05',
    name: 'Healthcare Data Integration',
    desc: 'FHIR & HL7 v2 patient data exchange · OAuth2 · clinical system interoperability',
    tags: ['NestJS', 'TypeScript', 'FHIR', 'HL7', 'OAuth2'],
    href: '#',
    delay: 0.2,
  },
  {
    num: '06',
    name: 'iPay88 Payment Gateway',
    desc: "Southeast Asia's leading payment platform · PCI-DSS compliant frontend",
    tags: ['React.js', 'TypeScript', 'Payment SDK', 'REST API'],
    href: 'https://www.ipay88.com',
    delay: 0.25,
  },
];

/**
 * Work — selected projects with hover reveal and live links.
 * 2026: familiar list pattern with editorial typography.
 */
export default function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="work-inner">
        <ScrollReveal>
          <div className="work-header">
            <div>
              <div className="section-tag">Selected work</div>
              <h2 className="section-title" id="work-heading">
                Projects &<br />
                Products
              </h2>
            </div>
            <p>
              A selection of the most impactful products I&apos;ve shipped — from
              startup to enterprise scale.
            </p>
          </div>
        </ScrollReveal>

        <nav className="projects-list" aria-label="Project list">
          {PROJECTS.map((project) => (
            <ScrollReveal key={project.num} delay={project.delay}>
              <a
                href={project.href}
                className="project-item"
                aria-label={`${project.name} — ${project.desc}`}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  project.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                <span className="project-num">{project.num}</span>
                <div className="project-info">
                  <div className="project-name">{project.name}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </ScrollReveal>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .work {
          border-top: 1px solid var(--border);
        }
        .work-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .work-header p {
          color: var(--text2);
          max-width: 320px;
          font-size: 0.9rem;
          line-height: 1.7;
          font-weight: 300;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
        }

        .project-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 2rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.25s;
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .project-item:first-child {
          border-top: 1px solid var(--border);
        }
        .project-item::before {
          content: '';
          position: absolute;
          left: -3rem;
          right: -3rem;
          top: 0;
          bottom: 0;
          background: var(--surface);
          opacity: 0;
          transition: opacity 0.2s;
          z-index: -1;
        }
        .project-item:hover::before {
          opacity: 1;
        }

        .project-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text3);
          letter-spacing: 0.06em;
          min-width: 2rem;
        }
        .project-item:hover .project-num {
          color: var(--accent);
        }

        .project-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          transition: color 0.2s;
        }
        .project-item:hover .project-name {
          color: var(--accent);
        }

        .project-desc {
          color: var(--text2);
          font-size: 0.85rem;
          font-weight: 300;
        }

        .project-tags {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        .project-tag {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          color: var(--text3);
        }

        .project-arrow {
          font-size: 1.2rem;
          color: var(--text3);
          transition: all 0.2s;
          transform: rotate(-45deg);
          display: inline-block;
        }
        .project-item:hover .project-arrow {
          color: var(--accent);
          transform: rotate(0deg);
        }

        @media (max-width: 900px) {
          .project-item {
            grid-template-columns: auto 1fr auto;
            gap: 1rem;
          }
          .project-item::before {
            left: -1.5rem;
            right: -1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
