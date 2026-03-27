'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Sectors() {
  const { lang } = useLang();
  const tx = t[lang].sectors;

  return (
    <section id="sectors">
      <div className="section-head">
        <span className="section-tag">{tx.tag}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>
      </div>

      <div className="sectors-grid">
        {tx.items.map((s) => (
          <div className="sector-card fade-in" key={s.name}>
            <div className="sector-icon">{s.icon}</div>
            <div className="sector-name">{s.name}</div>
            <div className="sector-desc">{s.desc}</div>
            <div className="sector-topics">
              {s.topics.map((topic) => (
                <span className="topic-chip" key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
