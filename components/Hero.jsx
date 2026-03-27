import Link from 'next/link';

const cards = [
  { label: 'Sector activo ahora', icon: '🏥', title: 'Profesional de Salud' },
  { label: 'Enfoque personalizado', icon: '💻', title: 'Desarrollador de Software' },
  { label: 'Nivel avanzado', icon: '⚖️', title: 'Profesional Legal' },
  { label: 'Conversación ejecutiva', icon: '📈', title: 'Director Financiero' },
];

const stats = [
  { num: '500+', label: 'Profesionales formados' },
  { num: '12', label: 'Sectores especializados' },
  { num: '98%', label: 'Tasa de satisfacción' },
];

export default function Hero() {
  return (
    <section id="hero">
      {/* Left */}
      <div className="hero-content">
        <div className="hero-tag">★ Profesor nativo · Inglés especializado por sector</div>
        <h1 className="hero-title">
          Aprende inglés de un<br />
          <em>hablante nativo</em>
        </h1>
        <p className="hero-desc">
          Jean Pierre Schmidt Calvo, profesor nativo de inglés, te enseña el vocabulario,
          el acento y las situaciones reales de tu sector: medicina, tecnología, finanzas,
          derecho y más. El inglés auténtico que solo un nativo puede enseñar.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">🎯 Clase Diagnóstico Gratis</a>
          <a href="#sectors" className="btn-secondary">Ver sectores →</a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="hero-visual">
        {cards.map((c) => (
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
