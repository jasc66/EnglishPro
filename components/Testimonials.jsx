const testimonials = [
  {
    featured: true,
    stars: '★★★★★',
    text: '"En seis meses pasé de evitar reuniones con clientes angloparlantes a liderar presentaciones para inversores internacionales. El enfoque en mi sector marcó toda la diferencia. No perdí tiempo con gramática básica: cada clase era relevante para mi trabajo del día siguiente."',
    name: 'Carlos Mendoza',
    role: 'CFO · Empresa Fintech, San José',
    avatarBg: 'rgba(245,158,11,.2)',
    avatarEmoji: '👨‍💼',
  },
  {
    stars: '★★★★★',
    text: '"Como médica necesitaba comunicarme con colegas en congresos internacionales y con pacientes extranjeros. Las clases con vocabulario clínico específico me dieron la confianza que necesitaba en pocos meses."',
    name: 'Dra. Ana Ruiz',
    role: 'Médica Especialista · CCSS, Heredia',
    avatarBg: '#ECFDF5',
    avatarEmoji: '👩‍⚕️',
  },
  {
    stars: '★★★★★',
    text: '"Trabajo en un equipo 100% remoto con compañeros en UK y EEUU. Ahora me expreso con fluidez en los daily stand-ups y code reviews. Fue un antes y un después para mi carrera como desarrollador."',
    name: 'Luis Torres',
    role: 'Senior Dev · Startup tecnológica, Alajuela',
    avatarBg: '#EFF6FF',
    avatarEmoji: '👨‍💻',
  },
  {
    stars: '★★★★★',
    text: '"Necesitaba redactar contratos y negociar con firmas internacionales. El programa de inglés legal fue exactamente lo que necesitaba: preciso, práctico y aplicado desde el primer día."',
    name: 'Marta Sanz',
    role: 'Abogada Socia · Despacho internacional, San José',
    avatarBg: '#FEF3C7',
    avatarEmoji: '👩‍⚖️',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-head">
        <span className="section-tag">Testimonios</span>
        <h2 className="section-title">Lo que dicen los profesionales</h2>
        <p className="section-subtitle">
          Historias reales de personas en Costa Rica que ya hablan el inglés de su sector con
          confianza.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div
            className={`testimonial-card fade-in${t.featured ? ' testi-featured' : ''}`}
            key={t.name}
          >
            <div className="testimonial-stars">{t.stars}</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div
                className="author-avatar"
                style={{ background: t.avatarBg }}
              >
                {t.avatarEmoji}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
