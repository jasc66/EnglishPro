'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Pricing() {
  const { lang } = useLang();
  const tx = t[lang].pricing;

  return (
    <section id="pricing">
      <div className="section-head">
        <span className="section-tag">{tx.tag}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>
      </div>

      <div className="pricing-grid">
        {tx.plans.map((plan) => (
          <div
            className={`price-card fade-in${plan.popular ? ' popular' : ''}`}
            key={plan.name}
          >
            {plan.popular && <div className="popular-badge">{tx.popular}</div>}
            <div className="price-tier">{plan.tier}</div>
            <div className="price-name">{plan.name}</div>
            <div className="price-amount">
              <span className="price-num">{plan.price}</span>
              <span className="price-period"> {plan.period}</span>
            </div>
            <div className="price-desc">{plan.desc}</div>
            <ul className="price-features">
              {plan.features.map((f) => (
                <li key={f.text} className={f.active ? '' : 'off'}>
                  {f.text}
                </li>
              ))}
            </ul>
            <a href="#contact" className={plan.btnStyle}>
              {plan.btnText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
