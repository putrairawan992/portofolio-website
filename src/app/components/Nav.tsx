'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Nav — fixed top navigation with backdrop blur.
 * Accessible with proper ARIA roles, keyboard navigation support.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="nav"
      style={{
        background: scrolled
          ? 'rgba(10,10,11,0.85)'
          : 'rgba(10,10,11,0.7)',
      }}
    >
      <a href="#" className="nav-logo" aria-label="Putra Irawan home">
        PI<span>.</span>
      </a>

      <ul className="nav-links" role="list">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={(e) => handleClick(e, item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:putrairawan992@yahoo.com"
        className="nav-cta"
        aria-label="Get in touch via email"
      >
        Get in touch
      </a>

      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: background 0.3s ease;
        }
        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
          text-decoration: none;
        }
        .nav-logo span {
          color: var(--accent);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-links a {
          color: var(--text2);
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .nav-cta {
          background: var(--accent);
          color: #0A0A0B;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.04em;
          font-family: var(--font-display);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 20px rgba(200, 255, 0, 0.4);
        }

        @media (max-width: 900px) {
          nav {
            padding: 1rem 1.5rem;
          }
          .nav-links {
            display: none;
          }
          .nav-cta {
            font-size: 0.72rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style>
    </nav>
  );
}
