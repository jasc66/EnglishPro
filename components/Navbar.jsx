'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Navbar() {
  const { lang, toggle } = useLang();
  const tx = t[lang].nav;
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
          {tx.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            {lang === 'es' ? '🇺🇸 EN' : '🇨🇷 ES'}
          </button>
          <a href="#contact" className="nav-cta">
            {tx.cta}
          </a>
        </div>

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
        {tx.links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          {tx.cta}
        </a>
        <button className="lang-toggle lang-toggle-mobile" onClick={() => { toggle(); closeMenu(); }}>
          {lang === 'es' ? '🇺🇸 Switch to English' : '🇨🇷 Cambiar a Español'}
        </button>
      </div>
    </>
  );
}
