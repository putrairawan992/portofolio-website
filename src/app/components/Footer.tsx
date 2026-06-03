'use client';

/**
 * Footer — copyright + secondary navigation.
 * Clean, minimal, accessible.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo">
      <p>
        © {currentYear} Putra Irawan.
      </p>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a
          href="https://github.com/putrairawan992"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>

      <style jsx>{`
        footer {
          padding: 2rem 3rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        footer p {
          font-size: 0.75rem;
          color: var(--text3);
          font-family: var(--font-mono);
        }
        footer p :global(span) {
          color: var(--accent);
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          font-size: 0.75rem;
          color: var(--text3);
          text-decoration: none;
          transition: color 0.2s;
          font-family: var(--font-mono);
        }
        .footer-links a:hover {
          color: var(--text);
        }

        @media (max-width: 600px) {
          footer {
            padding: 1.5rem;
            flex-direction: column;
            text-align: center;
          }
          .footer-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
