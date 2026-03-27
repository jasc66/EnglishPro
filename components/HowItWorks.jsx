const steps = [
  {
    icon: '🔍',
    title: 'Diagnóstico gratuito',
    desc: 'Evaluamos tu nivel actual y tus objetivos profesionales concretos en una sesión de 30 minutos.',
  },
  {
    icon: '📐',
    title: 'Plan personalizado',
    desc: 'Diseñamos un programa a medida con el vocabulario, situaciones y habilidades de tu sector.',
  },
  {
    icon: '🎯',
    title: 'Clases prácticas',
    desc: 'Simulaciones reales de tu entorno laboral: reuniones, correos, presentaciones y negociaciones.',
  },
  {
    icon: '📈',
    title: 'Seguimiento continuo',
    desc: 'Informes de progreso mensuales y ajuste del plan según tu evolución y nuevas necesidades.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-head">
        <span className="section-tag">Metodología</span>
        <h2 className="section-title">¿Cómo funciona?</h2>
        <p className="section-subtitle">
          Un proceso pensado para que progreses rápido sin perder tiempo en lo que ya sabes o
          en lo que no necesitas.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((s) => (
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
