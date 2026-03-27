const sectors = [
  {
    icon: '🏥',
    name: 'Salud & Medicina',
    desc: 'Médicos, enfermeros y fisioterapeutas que atienden pacientes internacionales, escriben informes o asisten a congresos.',
    topics: ['Historia clínica', 'Diagnóstico', 'Comunicación con pacientes', 'Investigación'],
  },
  {
    icon: '💻',
    name: 'Tecnología & IT',
    desc: 'Desarrolladores, PMs y analistas que trabajan en equipos remotos globales o presentan proyectos en inglés.',
    topics: ['Stand-ups', 'Code review', 'Documentación', 'Pitch técnico'],
  },
  {
    icon: '📊',
    name: 'Finanzas & Banca',
    desc: 'Analistas y directivos que negocian con clientes internacionales, leen reportes y asisten a conferencias.',
    topics: ['Reportes financieros', 'Negociación', 'Due diligence', 'Earnings calls'],
  },
  {
    icon: '⚖️',
    name: 'Legal & Compliance',
    desc: 'Abogados que redactan contratos, corresponden con firmas internacionales o aparecen en procedimientos.',
    topics: ['Contratos', 'Litigación', 'Correspondencia legal', 'Compliance'],
  },
  {
    icon: '🏗️',
    name: 'Ingeniería & Arquitectura',
    desc: 'Ingenieros y arquitectos que trabajan en proyectos internacionales, licitaciones o equipos multiculturales.',
    topics: ['Especificaciones técnicas', 'BIM / AutoCAD', 'Reuniones de proyecto', 'Safety reports'],
  },
  {
    icon: '🎯',
    name: 'Marketing & Ventas',
    desc: 'Marketers y comerciales que crean contenido global, presentan campañas o negocian con partners extranjeros.',
    topics: ['Copywriting', 'Presentaciones', 'Negociación', 'Email marketing'],
  },
];

export default function Sectors() {
  return (
    <section id="sectors">
      <div className="section-head">
        <span className="section-tag">Sectores</span>
        <h2 className="section-title">Inglés adaptado a tu profesión</h2>
        <p className="section-subtitle">
          Cada sector tiene su propio lenguaje. Aprende el vocabulario, las expresiones y los
          contextos específicos de tu campo laboral.
        </p>
      </div>

      <div className="sectors-grid">
        {sectors.map((s) => (
          <div className="sector-card fade-in" key={s.name}>
            <div className="sector-icon">{s.icon}</div>
            <div className="sector-name">{s.name}</div>
            <div className="sector-desc">{s.desc}</div>
            <div className="sector-topics">
              {s.topics.map((t) => (
                <span className="topic-chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
