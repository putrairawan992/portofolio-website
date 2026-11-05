'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

type Category = 'AI & Smart Systems' | 'Enterprise & CRM' | 'Marketplace & Events' | 'Finance & Retail';

interface Project {
  name: string;
  period: string;
  org: string;
  role: string;
  desc: string;
  stack: string[];
  category: Category;
  href?: string;
  highlights?: string[];
}

const FEATURED: Project[] = [
  {
    name: 'AI Sleep Hotel Management',
    period: 'Jul 2026 – Present',
    org: 'Project-based',
    role: 'Full Stack / AI Engineer',
    desc: 'Multi-tenant AI/IoT SaaS spanning web dashboard, guest mobile app, sleep analytics and IoT room control.',
    highlights: [
      'Spring Boot SaaS core: auth, roles, guest/staff flows, device registry',
      'FastAPI sleep scoring, recommendations and anomaly detection',
      'Nuxt dashboard, Flutter guest app, MQTT + ESP32, monitoring',
    ],
    stack: ['Spring Boot 3', 'FastAPI', 'Nuxt 4', 'Flutter', 'MQTT', 'ESP32', 'Kubernetes', 'Grafana'],
    category: 'AI & Smart Systems',
  },
  {
    name: 'Image Floor Convert 3D',
    period: 'Feb 2026 – Mar 2026',
    org: 'Holistor Software House',
    role: 'AI Engineer',
    desc: 'AI-assisted workflow that turns 2D floor plan images into 3D visualizations.',
    stack: ['Python', 'Java', 'OpenAI API', 'n8n', 'AI Agents'],
    category: 'AI & Smart Systems',
  },
  {
    name: 'The Gaia Bandung',
    period: 'Mar 2026 – Jun 2026',
    org: 'Project-based',
    role: 'Full Stack Engineer',
    desc: 'Hotel and resort reservation, operational dashboards and customer-facing service flows.',
    stack: ['Next.js', 'NestJS', 'Laravel', 'React Native', 'PostgreSQL', 'AWS'],
    category: 'AI & Smart Systems',
  },
  {
    name: 'Gunanusa Enterprise Suite',
    period: 'Nov 2025 – May 2026',
    org: 'PT Gunanusa Utama Fabricators',
    role: 'Enterprise Systems & Automation',
    desc: 'Warehouse Management System, Salesforce CRM, approval Workflow Dashboard and a WhatsApp alert gateway.',
    stack: ['React', 'Laravel', 'Salesforce LWC', 'Python', 'Go', 'n8n'],
    category: 'Enterprise & CRM',
  },
];

const PROJECTS: Project[] = [
  { name: 'SEMA Rewards', period: '2026', org: 'SEMA Rewards', role: 'Product Operations Support', desc: 'Creator economy platform. Set up a standardized bug and issue reporting workflow with severity, area and status tags.', stack: ['Discord ops workspace', 'Issue triage'], category: 'AI & Smart Systems' },
  { name: 'ERP Salesforce', period: 'Apr 2026 – May 2026', org: 'PT Gunanusa Utama Fabricators', role: 'Salesforce CRM Developer', desc: 'Apex classes, triggers, LWC, Flow automation and external REST integrations.', stack: ['Apex', 'LWC', 'SOQL', 'REST API'], category: 'Enterprise & CRM' },
  { name: 'Warehouse Management System', period: 'Dec 2025 – Jan 2026', org: 'PT Gunanusa Utama Fabricators', role: 'Full Stack Engineer', desc: 'Stock balance, inbound/outbound and inventory movement dashboards.', stack: ['React', 'TypeScript', 'Laravel', 'PostgreSQL'], category: 'Enterprise & CRM' },
  { name: 'Access Management Dashboard', period: 'Dec 2025', org: 'Internal / enterprise', role: 'Frontend / Full Stack', desc: 'Central control panel for users, roles, applications, menus and permissions.', stack: ['Next.js', 'Laravel', 'MySQL', 'ETL'], category: 'Enterprise & CRM' },
  { name: 'Workflow Dashboard', period: 'Nov 2025 – Dec 2025', org: 'PT Gunanusa Utama Fabricators', role: 'Full Stack / Automation', desc: 'Monitoring of approval states, retries, failures and system health.', stack: ['React', 'Laravel', 'Go', 'n8n', 'AI Agents'], category: 'Enterprise & CRM' },
  { name: 'WhatsApp Gateway', period: 'Nov 2025', org: 'Internal / enterprise', role: 'Backend / Integration', desc: 'Real-time approval, escalation, SLA breach and overdue alerts to people and groups.', stack: ['Node.js', 'Express', 'MySQL', 'Flutter'], category: 'Enterprise & CRM' },
  { name: 'ICOS BCA', period: 'Jun 2025 – Dec 2025', org: 'BCA', role: 'Frontend Engineer', desc: 'Migration of an internal administration system to a newer Angular architecture.', stack: ['Angular', 'TypeScript', 'Laravel'], category: 'Enterprise & CRM' },
  { name: 'TEKAD MIS', period: 'Jul 2023 – Dec 2023', org: 'Kementerian Desa', role: 'Full Stack Engineer', desc: 'Weekly dashboards to monitor national program performance.', stack: ['Laravel', 'Flutter', '.NET'], category: 'Enterprise & CRM' },
  { name: 'JKT SMARTAX', period: 'Sep 2023 – Dec 2023', org: 'Bapenda DKI Jakarta', role: 'Full Stack Engineer', desc: 'Regional tax administration and tax data platform, web and mobile.', stack: ['Vue.js', 'Angular', 'Laravel', 'Flutter'], category: 'Enterprise & CRM' },
  { name: 'NG MIS Amartha', period: 'Jul 2022 – Jan 2023', org: 'Amartha', role: 'Frontend Engineer', desc: 'Admin modules for the next-generation MIS with REST integration and unit tests.', stack: ['Next.js', 'Angular', 'TypeScript'], category: 'Enterprise & CRM' },
  { name: 'My Ads', period: 'Jan 2022 – Apr 2022', org: 'Telkomsel', role: 'Frontend Engineer', desc: 'Self-service advertising platform with user and admin applications.', stack: ['React', 'JavaScript', 'REST API'], category: 'Enterprise & CRM' },
  { name: 'ESG Data Set', period: 'Sep 2020 – Dec 2020', org: 'Universitas Airlangga', role: 'Frontend Engineer', desc: 'Internal ESG dataset management with validation logic.', stack: ['React', 'REST API'], category: 'Enterprise & CRM' },
  { name: 'Healthcare Data Integration', period: 'Jan 2024 – May 2024', org: 'Yaz Venture', role: 'Healthcare Integration Engineer', desc: 'FHIR/HL7 exchange for Patient, Observation and Encounter records with secure APIs.', stack: ['NestJS', 'PostgreSQL', 'FHIR', 'HL7 v2', 'OAuth2'], category: 'Enterprise & CRM' },
  { name: 'gamemarket.gg', period: 'Jul 2025 – Dec 2025', org: 'Project-based', role: 'Frontend Engineer', desc: 'Marketplace for game accounts, currencies, digital items and top-ups.', stack: ['Next.js', 'Tailwind CSS', 'SSR', 'Google Auth'], category: 'Marketplace & Events', href: 'https://gamemarket.gg' },
  { name: 'Talent X ID', period: 'Jul 2025 – Dec 2025', org: 'Project-based', role: 'Frontend Engineer', desc: 'Recruitment platform: home, registration, blog and dynamic admin forms.', stack: ['Angular', 'Laravel', 'MySQL'], category: 'Marketplace & Events' },
  { name: 'CHI Ecosystem', period: 'Aug 2024 – Dec 2025', org: 'CHI Ecosystem', role: 'Senior Frontend / Full Stack', desc: 'Event OS for ticketing, payments, attendee management and real-time analytics.', stack: ['React Native', 'Next.js', 'Go', 'Spring Boot', 'gRPC', 'Kubernetes'], category: 'Marketplace & Events', href: 'https://chi.app/en' },
  { name: 'Pa Tungan Property', period: 'Aug 2024 – Sep 2024', org: 'Project-based', role: 'Mobile Engineer', desc: 'Property app with live chat and push notifications.', stack: ['React Native', 'TypeScript'], category: 'Marketplace & Events' },
  { name: 'Bomber Web', period: '2024', org: 'Taiwan client', role: 'Frontend Engineer', desc: 'Nightlife admin dashboard for reservations, venue operations and POS.', stack: ['Next.js', 'Angular', 'TypeScript'], category: 'Marketplace & Events' },
  { name: 'Bomber App', period: 'Jan 2024 – Sep 2024', org: 'Nightlife platform', role: 'Mobile Engineer', desc: 'Venue discovery, table selection and booking confirmation flows.', stack: ['React Native', 'TypeScript', 'Design tokens'], category: 'Marketplace & Events' },
  { name: 'Deposito Syariah', period: 'Nov 2023 – Jan 2024', org: 'Project-based', role: 'Full Stack / Mobile', desc: 'Sharia deposit mobile app and admin dashboard with Firebase.', stack: ['Angular', 'React Native', 'Firebase'], category: 'Finance & Retail' },
  { name: 'Egg Reat', period: 'Jan 2023 – Jun 2023', org: 'Project-based', role: 'Web & Mobile Engineer', desc: 'Food ordering app with a web-based admin system.', stack: ['React', 'React Native'], category: 'Marketplace & Events' },
  { name: 'Studio Kado', period: 'Jan 2023 – Feb 2023', org: 'Project-based', role: 'Web Engineer', desc: 'Gift and hamper e-commerce with admin dashboard.', stack: ['Vue.js', 'Laravel'], category: 'Marketplace & Events' },
  { name: 'Tokopolis', period: 'Dec 2022 – May 2023', org: 'PT ISTPRO INTI NUSA', role: 'Full Stack Engineer', desc: 'Vehicle insurance comparison with backend services and payment integration.', stack: ['Vue.js', 'Payment gateway'], category: 'Marketplace & Events' },
  { name: 'Ventoorhub', period: 'Nov 2022 – Dec 2022', org: 'wildgoatstudio', role: 'Frontend Engineer', desc: 'Service marketplace with client website and admin dashboard.', stack: ['React', 'Node.js', 'Express'], category: 'Marketplace & Events' },
  { name: 'AYO SRC Kelontong', period: 'Sep 2019 – Dec 2019', org: 'Sampoerna', role: 'Mobile Engineer', desc: 'Inventory app for small grocery stores, published on Play Store.', stack: ['React Native', 'REST API'], category: 'Finance & Retail' },
  { name: 'AYO SRC Kasir', period: 'Jun 2019 – Aug 2019', org: 'Sampoerna', role: 'Mobile Engineer', desc: 'Point-of-sale app for retail stores.', stack: ['React Native', 'REST API'], category: 'Finance & Retail' },
  { name: 'AYO SRC Toko', period: 'Jan 2019 – Jun 2019', org: 'Sampoerna', role: 'Mobile Engineer', desc: 'Store ordering app linking retailers to suppliers, with SRC loyalty.', stack: ['React Native', 'REST API'], category: 'Finance & Retail' },
  { name: 'iPay88', period: 'Jul 2018 – Oct 2018', org: 'Project-based', role: 'Frontend Engineer', desc: 'Payment gateway platform serving merchants across Southeast Asia.', stack: ['React', 'Next.js', 'TypeScript', 'Payment SDK'], category: 'Finance & Retail', href: 'https://www.ipay88.com' },
  { name: 'Umrahajj', period: 'Mar 2018 – Sep 2018', org: 'Yaz Venture', role: 'Web Engineer', desc: 'Travel and pilgrimage booking site with client dashboard.', stack: ['WordPress', 'Laravel', 'React'], category: 'Finance & Retail' },
  { name: 'Hobijam', period: 'Jun 2017 – Dec 2017', org: 'Project-based', role: 'Web Engineer', desc: 'Luxury watch dealer e-commerce with admin dashboard.', stack: ['Laravel'], category: 'Finance & Retail' },
  { name: 'Consignment Management System', period: 'Independent', org: 'Independent', role: 'Full Stack Engineer', desc: 'Microservices ERP module for stock, receiving, orders, delivery, returns and billing.', stack: ['Microservices', 'ERP'], category: 'Enterprise & CRM' },
];

const FILTERS: ('All' | Category)[] = ['All', 'AI & Smart Systems', 'Enterprise & CRM', 'Marketplace & Events', 'Finance & Retail'];

const linkProps = (href?: string) =>
  href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

/**
 * Work — featured bento cards plus a filterable grid of every project from the CV.
 */
export default function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [showAll, setShowAll] = useState(false);
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const list = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="work-inner">
        <ScrollReveal>
          <div className="work-header">
            <div>
              <div className="section-tag">Selected work</div>
              <h2 className="section-title" id="work-heading">
                Projects & <span className="accent">products</span>
              </h2>
            </div>
            <p>
              From AI/IoT SaaS and enterprise ERP to fintech, government and
              consumer apps. {FEATURED.length + PROJECTS.length} projects in total.
            </p>
          </div>
        </ScrollReveal>

        <div className="featured">
          {FEATURED.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08} className={i === 0 ? 'feat-wide' : ''}>
              <article className={`feat-card glass ${i === 0 ? 'big' : ''}`}>
                <div className="feat-top">
                  <span className="feat-cat">{p.category}</span>
                  <span className="feat-period">{p.period}</span>
                </div>
                <h3 className="feat-name">{p.name}</h3>
                <div className="feat-role">{p.role} · {p.org}</div>
                <p className="feat-desc">{p.desc}</p>
                {p.highlights && (
                  <ul className="feat-hl">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="tags">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="filters" role="tablist" aria-label="Filter projects by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`filter ${filter === f ? 'active' : ''}`}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid">
          {list.map((p) => (
            <a
              key={p.name}
              className={`card ${p.href ? 'linked' : ''}`}
              {...linkProps(p.href)}
              aria-label={p.href ? `${p.name}, opens in a new tab` : undefined}
              role={p.href ? undefined : 'article'}
            >
              <div className="card-top">
                <span className="card-period">{p.period}</span>
                {p.href && <span className="card-arrow" aria-hidden="true">↗</span>}
              </div>
              <h3 className="card-name">{p.name}</h3>
              <div className="card-role">{p.role} · {p.org}</div>
              <p className="card-desc">{p.desc}</p>
              <div className="tags">
                {p.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {filtered.length > 9 && (
          <div className="more-wrap">
            <button className="more" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
              {showAll ? 'Show less' : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
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
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .work-header p {
          color: var(--text2);
          max-width: 360px;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .featured {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .featured :global(.feat-wide) {
          grid-column: 1 / -1;
        }
        .feat-card {
          padding: 1.75rem;
          height: 100%;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s;
        }
        .feat-card:hover {
          border-color: rgba(var(--accent-rgb), 0.45);
          transform: translateY(-3px);
        }
        .feat-card.big {
          padding: 2.25rem;
          background:
            radial-gradient(600px circle at 100% 0%, rgba(124, 58, 237, 0.22), transparent 60%),
            radial-gradient(500px circle at 0% 100%, rgba(8, 145, 178, 0.16), transparent 60%),
            var(--surface);
        }
        .feat-top {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .feat-cat {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .feat-period,
        .card-period {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text3);
        }
        .feat-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
        }
        .big .feat-name {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
        }
        .feat-role,
        .card-role {
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 0.85rem;
        }
        .feat-desc {
          color: var(--text2);
          font-size: 0.92rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          max-width: 640px;
        }
        .feat-hl {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .feat-hl li {
          font-size: 0.85rem;
          color: var(--text);
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          line-height: 1.5;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .tag {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          background: var(--surface2);
          border: 1px solid var(--border);
          padding: 0.18rem 0.55rem;
          border-radius: 6px;
          color: var(--text2);
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .filter {
          font: inherit;
          font-size: 0.82rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text2);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter:hover {
          color: var(--text);
          border-color: var(--border2);
        }
        .filter.active {
          background: var(--grad);
          border-color: transparent;
          color: #0B0B11;
          font-weight: 600;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .card {
          display: flex;
          flex-direction: column;
          padding: 1.4rem;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--surface);
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
          animation: fade-in 0.4s both;
        }
        .card:hover {
          border-color: var(--border2);
          background: var(--surface2);
        }
        .card.linked:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--accent-rgb), 0.45);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .card-arrow {
          color: var(--accent);
        }
        .card-name {
          font-family: var(--font-display);
          font-size: 1.08rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .card-role {
          font-size: 0.75rem;
          margin-bottom: 0.65rem;
        }
        .card-desc {
          color: var(--text2);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 0.9rem;
          flex: 1;
        }

        .more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }
        .more {
          font: inherit;
          font-size: 0.88rem;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border2);
          background: var(--surface);
          color: var(--text);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .more:hover {
          background: var(--surface2);
          transform: translateY(-2px);
        }

        @media (max-width: 1000px) {
          .featured,
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .feat-hl {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .featured,
          .grid {
            grid-template-columns: 1fr;
          }
          .feat-card.big {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
