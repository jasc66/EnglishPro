'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '#sectors', label: 'Sectores' },
  { href: '#how', label: 'Metodología' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#pricing', label: 'Precios' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          English<span>Pro</span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Clase Gratis →
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Clase Gratis →
        </a>
      </div>
    </>
  );
}
