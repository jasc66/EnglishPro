'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function HowItWorks() {
  const { lang } = useLang();
  const tx = t[lang].how;

  return (
    <section id="how">
      <div className="section-head">
        <span className="section-tag">{tx.tag}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>
      </div>

      <div className="steps-grid">
        {tx.steps.map((s) => (
          <div className="step fade-in" key={s.title}>
            <div className="step-num">{s.icon}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
