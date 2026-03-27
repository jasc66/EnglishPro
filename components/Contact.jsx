'use client';
import { useState } from 'react';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

const WHATSAPP_NUMBER = '50660120806';
const TEACHER_EMAIL = 'jean_pierre_schmidt_calvo@hotmail.com';

export default function Contact() {
  const { lang } = useLang();
  const tx = t[lang].contact;

  const [fields, setFields] = useState({
    nombre: '', email: '', sector: '', nivel: '', objetivo: '',
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg =
      tx.waGreeting +
      `${tx.waName} ${fields.nombre}%0A` +
      `${tx.waEmail} ${fields.email}%0A` +
      `${tx.waSector} ${fields.sector}%0A` +
      `${tx.waNivel} ${fields.nivel}%0A` +
      `${tx.waObj} ${fields.objetivo}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(tx.emailSubject);
    const body = encodeURIComponent(
      tx.emailGreeting +
      `Name / Nombre: ${fields.nombre}\n` +
      `Email: ${fields.email}\n` +
      `Sector: ${fields.sector}\n` +
      `Level / Nivel: ${fields.nivel}\n` +
      `Goal / Objetivo: ${fields.objetivo}`
    );
    window.open(`mailto:${TEACHER_EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h2 className="contact-info-title">
            {tx.title[0]}<br />{tx.title[1]}
          </h2>
          <p className="contact-info-desc">{tx.desc}</p>
          <div className="contact-perks">
            {tx.perks.map((p) => (
              <div className="contact-perk" key={p.title}>
                <div className="perk-icon">{p.icon}</div>
                <div>
                  <div className="perk-title">{p.title}</div>
                  <div className="perk-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-direct">
            <div className="contact-direct-title">{tx.directTitle}</div>
            <a href="https://wa.me/50660120806" className="contact-direct-item">
              <span>📱</span> +506 6012-0806 (WhatsApp)
            </a>
            <a href="mailto:jean_pierre_schmidt_calvo@hotmail.com" className="contact-direct-item">
              <span>✉️</span> jean_pierre_schmidt_calvo@hotmail.com
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form">
          <div className="form-title">{tx.formTitle}</div>
          <div className="form-subtitle">{tx.formSubtitle}</div>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">{tx.labels.nombre}</label>
                <input
                  id="nombre" type="text"
                  placeholder={tx.placeholders.nombre}
                  value={fields.nombre} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{tx.labels.email}</label>
                <input
                  id="email" type="email"
                  placeholder={tx.placeholders.email}
                  value={fields.email} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sector">{tx.labels.sector}</label>
                <select id="sector" value={fields.sector} onChange={handleChange} required>
                  <option value="" disabled>{tx.placeholders.sector}</option>
                  {tx.sectors.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nivel">{tx.labels.nivel}</label>
                <select id="nivel" value={fields.nivel} onChange={handleChange} required>
                  <option value="" disabled>{tx.placeholders.nivel}</option>
                  {tx.levels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="objetivo">{tx.labels.objetivo}</label>
              <textarea
                id="objetivo"
                placeholder={tx.placeholders.objetivo}
                value={fields.objetivo} onChange={handleChange} required
              />
            </div>

            <div className="form-actions">
              <button type="button" className="form-submit" onClick={handleWhatsApp}>
                {tx.btnWhatsapp}
              </button>
              <button type="button" className="form-submit form-submit-email" onClick={handleEmail}>
                {tx.btnEmail}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
