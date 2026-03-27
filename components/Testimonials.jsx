'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Testimonials() {
  const { lang } = useLang();
  const tx = t[lang].testimonials;

  return (
    <section id="testimonials">
      <div className="section-head">
        <span className="section-tag">{tx.tag}</span>
        <h2 className="section-title">{tx.title}</h2>
        <p className="section-subtitle">{tx.subtitle}</p>
      </div>

      <div className="testimonials-grid">
        {tx.items.map((item) => (
          <div
            className={`testimonial-card fade-in${item.featured ? ' testi-featured' : ''}`}
            key={item.name}
          >
            <div className="testimonial-stars">{item.stars}</div>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: item.avatarBg }}>
                {item.avatarEmoji}
              </div>
              <div>
                <div className="author-name">{item.name}</div>
                <div className="author-role">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
