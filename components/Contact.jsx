'use client';
import { useState } from 'react';

const WHATSAPP_NUMBER = '50660120806';

const perks = [
  {
    icon: '🎯',
    title: 'Diagnóstico real de nivel',
    desc: 'No un test genérico, sino una evaluación contextualizada a tu sector.',
  },
  {
    icon: '📋',
    title: 'Plan de acción inmediato',
    desc: 'Saldrás con objetivos claros y un camino definido, lo contrates o no.',
  },
  {
    icon: '⏱',
    title: '30 minutos, sin presión',
    desc: 'Sesión informal por videollamada. Sin formularios eternos.',
  },
];

export default function Contact() {
  const [fields, setFields] = useState({
    nombre: '',
    email: '',
    sector: '',
    nivel: '',
    objetivo: '',
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hola Jean Pierre, me interesa una clase diagnóstico gratuita. Estos son mis datos:%0A%0A` +
      `👤 *Nombre:* ${fields.nombre}%0A` +
      `✉️ *Email:* ${fields.email}%0A` +
      `🏢 *Sector:* ${fields.sector}%0A` +
      `📊 *Nivel:* ${fields.nivel}%0A` +
      `🎯 *Objetivo:* ${fields.objetivo}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="contact">
      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h2 className="contact-info-title">
            Reserva tu clase diagnóstico<br />gratuita
          </h2>
          <p className="contact-info-desc">
            En 30 minutos evaluamos tu nivel, entendemos tus objetivos y te presentamos un plan
            concreto. Sin compromiso, sin venta agresiva.
          </p>
          <div className="contact-perks">
            {perks.map((p) => (
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
            <div className="contact-direct-title">Contacto directo</div>
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
          <div className="form-title">Reserva tu sesión gratuita</div>
          <div className="form-subtitle">
            Completa el formulario y se abrirá WhatsApp con tu consulta lista para enviar.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={fields.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="sector">Tu sector *</label>
                <select id="sector" value={fields.sector} onChange={handleChange} required>
                  <option value="" disabled>Selecciona tu sector</option>
                  <option value="Salud & Medicina">Salud & Medicina</option>
                  <option value="Tecnología & IT">Tecnología & IT</option>
                  <option value="Finanzas & Banca">Finanzas & Banca</option>
                  <option value="Legal & Compliance">Legal & Compliance</option>
                  <option value="Ingeniería & Arquitectura">Ingeniería & Arquitectura</option>
                  <option value="Marketing & Ventas">Marketing & Ventas</option>
                  <option value="Educación">Educación</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nivel">Nivel aproximado *</label>
                <select id="nivel" value={fields.nivel} onChange={handleChange} required>
                  <option value="" disabled>Selecciona tu nivel</option>
                  <option value="B1 – Intermedio">B1 – Intermedio</option>
                  <option value="B2 – Intermedio-Alto">B2 – Intermedio-Alto</option>
                  <option value="C1 – Avanzado">C1 – Avanzado</option>
                  <option value="C2 – Casi nativo">C2 – Casi nativo</option>
                  <option value="No sé mi nivel">No sé mi nivel</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="objetivo">¿Cuál es tu objetivo principal? *</label>
              <textarea
                id="objetivo"
                placeholder="Ej: Necesito hablar inglés con fluidez en reuniones con clientes internacionales…"
                value={fields.objetivo}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              📲 Enviar por WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
