'use client';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function About() {
  const { lang } = useLang();
  const tx = t[lang].about;

  return (
    <section id="about">
      <div className="about-grid">
        {/* Visual */}
        <div className="about-visual">
          <div className="about-img-wrapper">
            <Image
              src="/jeanpierre.jpeg"
              alt="Jean Pierre Schmidt Calvo — Native English teacher"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 280px, 420px"
              priority
            />
            <div className="about-badge">{tx.badge}</div>
          </div>
          <div className="about-floating fl1">{tx.floating1}</div>
          <div className="about-floating fl2">{tx.floating2}</div>
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="about-tag">{tx.tag}</div>
          <h2 className="about-title">
            {tx.title[0]}<br />{tx.title[1]}
          </h2>
          <p className="about-desc">{tx.desc}</p>
          <div className="credentials-list">
            {tx.credentials.map((c) => (
              <div className="cred-item" key={c}>
                <div className="cred-check">✓</div>
                <div className="cred-text">{c}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              {tx.cta}
            </a>
            <a
              href="https://www.linkedin.com/in/jean-pierre-s-0094a034/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-linkedin"
            >
              {tx.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
