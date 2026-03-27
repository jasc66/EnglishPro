// Precios en Colones Costarricenses (₡)
const plans = [
  {
    tier: 'Básico',
    name: 'Enfoque',
    price: '₡25.000',
    period: '/ clase',
    desc: 'Ideal para empezar o practicar puntualmente. Clases individuales a demanda sin compromiso.',
    popular: false,
    features: [
      { text: '1 clase semanal (60 min)', active: true },
      { text: 'Material especializado de sector', active: true },
      { text: 'Acceso a recursos digitales', active: true },
      { text: 'Grabación de la sesión', active: true },
      { text: 'Plan de estudios personalizado', active: false },
      { text: 'Seguimiento mensual de progreso', active: false },
      { text: 'Soporte por WhatsApp', active: false },
    ],
    btnStyle: 'btn-plan btn-plan-outline',
    btnText: 'Empezar ahora',
  },
  {
    tier: 'Profesional',
    name: 'Intensivo',
    price: '₡95.000',
    period: '/ mes',
    desc: 'El plan estrella para profesionales con objetivos claros y tiempo limitado. Máxima eficiencia.',
    popular: true,
    features: [
      { text: '2 clases semanales (60 min c/u)', active: true },
      { text: 'Plan de estudios personalizado', active: true },
      { text: 'Material especializado de sector', active: true },
      { text: 'Grabación de todas las sesiones', active: true },
      { text: 'Informe mensual de progreso', active: true },
      { text: 'Soporte por WhatsApp (L-V)', active: true },
      { text: 'Preparación para certificaciones', active: true },
    ],
    btnStyle: 'btn-plan btn-plan-primary',
    btnText: 'Reservar ahora',
  },
  {
    tier: 'Empresa',
    name: 'Corporate',
    price: '₡235.000',
    period: '/ mes',
    desc: 'Para equipos y departamentos. Clases grupales o individuales con informe de empresa.',
    popular: false,
    features: [
      { text: 'Hasta 5 personas por grupo', active: true },
      { text: 'Curriculum adaptado al equipo', active: true },
      { text: '3 sesiones semanales', active: true },
      { text: 'Informe corporativo mensual', active: true },
      { text: 'Simulaciones de situaciones reales', active: true },
      { text: 'Soporte prioritario', active: true },
      { text: 'Factura para empresa', active: true },
    ],
    btnStyle: 'btn-plan btn-plan-outline',
    btnText: 'Solicitar propuesta',
  },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-head">
        <span className="section-tag">Precios</span>
        <h2 className="section-title">Planes transparentes</h2>
        <p className="section-subtitle">
          Sin permanencia, sin letra pequeña. Elige el plan que mejor se adapta a tu ritmo y
          objetivos. Precios en colones costarricenses.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`price-card fade-in${plan.popular ? ' popular' : ''}`}
            key={plan.name}
          >
            {plan.popular && <div className="popular-badge">Más popular</div>}
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
