'use client';

import ScrollReveal from './ScrollReveal';

/**
 * Contact — bold gradient headline + CTA buttons.
 * 2026: expressive typography as emotional driver.
 */
export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <ScrollReveal>
          <div
            className="section-tag"
            style={{ justifyContent: 'center', marginBottom: '1.5rem' }}
          >
            Let&apos;s work together
          </div>
          <h2 className="contact-big" id="contact-heading">
            Let&apos;s build
            <br />
            something
            <br />
            great.
          </h2>

          <div className="contact-links" role="list">
            <a
              href="mailto:putrairawan992@yahoo.com"
              className="contact-link primary"
              role="listitem"
              aria-label="Send email to Putra Irawan"
            >
              <span aria-hidden="true">✉</span> Send email
            </a>
            <a
              href="https://github.com/putrairawan992"
              className="contact-link secondary"
              role="listitem"
              aria-label="View GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">⌥</span> GitHub
            </a>
            <a
              href="https://linkedin.com/in/putra-irawan-480766126"
              className="contact-link secondary"
              role="listitem"
              aria-label="View LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">↗</span> LinkedIn
            </a>
          </div>

          <p className="contact-email">
            or reach me at{' '}
            <a href="mailto:putrairawan992@yahoo.com">putrairawan992@yahoo.com</a>
          </p>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .contact {
          border-top: 1px solid var(--border);
          overflow: hidden;
        }
        .contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .contact-big {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin-bottom: 2.5rem;
          background: linear-gradient(135deg, var(--text) 40%, var(--text3));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.75rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          font-family: var(--font-display);
          letter-spacing: 0.02em;
        }
        .contact-link.primary {
          background: var(--accent);
          color: #0A0A0B;
        }
        .contact-link.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(200, 255, 0, 0.35);
        }
        .contact-link.secondary {
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text);
        }
        .contact-link.secondary:hover {
          border-color: var(--border2);
          background: var(--surface2);
          transform: translateY(-2px);
        }
        .contact-email {
          color: var(--text3);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          margin-top: 2.5rem;
        }
        .contact-email a {
          color: var(--text2);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }
        .contact-email a:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        @media (max-width: 600px) {
          .contact-links {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
