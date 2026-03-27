'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  return (
    <section id="hero">
      {/* Left */}
      <div className="hero-content">
        <div className="hero-tag">{tx.tag}</div>
        <h1 className="hero-title">
          {tx.title[0]}<br />
          <em>{tx.title[1]}</em>
        </h1>
        <p className="hero-desc">{tx.desc}</p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">{tx.btnPrimary}</a>
          <a href="#sectors" className="btn-secondary">{tx.btnSecondary}</a>
        </div>
        <div className="hero-stats">
          {tx.stats.map((s) => (
            <div key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="hero-visual">
        {tx.cards.map((c) => (
          <div className="hero-card" key={c.title}>
            <div className="hero-card-label">{c.label}</div>
            <div className="hero-card-title">
              <span className="hero-card-icon">{c.icon}</span> {c.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
