'use client';
import { useState } from 'react';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function FAQ() {
  const { lang } = useLang();
  const tx = t[lang].faq;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="section-head">
        <span className="section-tag">{tx.tag}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>
      </div>

      <div className="faq-list">
        {tx.items.map((faq, i) => (
          <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
            <button className="faq-question" onClick={() => toggle(i)}>
              {faq.q}
              <div className="faq-icon">+</div>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
