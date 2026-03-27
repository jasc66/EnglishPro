'use client';
import { useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Aquí puedes conectar con tu API route: fetch('/api/contact', { method: 'POST', body: ... })
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
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
            Jean Pierre te escribe en menos de 24 horas para confirmar horario.
          </div>

          {!success ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input id="nombre" type="text" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" type="email" placeholder="tu@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sector">Tu sector *</label>
                  <select id="sector" required defaultValue="">
                    <option value="" disabled>Selecciona tu sector</option>
                    <option value="salud">Salud & Medicina</option>
                    <option value="tech">Tecnología & IT</option>
                    <option value="finanzas">Finanzas & Banca</option>
                    <option value="legal">Legal & Compliance</option>
                    <option value="ingenieria">Ingeniería & Arquitectura</option>
                    <option value="marketing">Marketing & Ventas</option>
                    <option value="educacion">Educación</option>
                    <option value="rrhh">Recursos Humanos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nivel">Nivel aproximado *</label>
                  <select id="nivel" required defaultValue="">
                    <option value="" disabled>Selecciona tu nivel</option>
                    <option value="b1">B1 – Intermedio</option>
                    <option value="b2">B2 – Intermedio-Alto</option>
                    <option value="c1">C1 – Avanzado</option>
                    <option value="c2">C2 – Casi nativo</option>
                    <option value="nose">No sé mi nivel</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="objetivo">¿Cuál es tu objetivo principal? *</label>
                <textarea
                  id="objetivo"
                  placeholder="Ej: Necesito hablar inglés con fluidez en reuniones con clientes internacionales…"
                  required
                />
              </div>

              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? 'Enviando…' : 'Reservar mi clase gratuita →'}
              </button>
            </form>
          ) : (
            <div className="form-success">
              🎉 ¡Perfecto! Jean Pierre te escribirá antes de 24 horas para confirmar horario. ¡Hasta pronto!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
