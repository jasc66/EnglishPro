import Image from 'next/image';

const credentials = [
  'Hablante nativo de inglés',
  'Certificación Cambridge CELTA',
  '10+ años formando profesionales en Costa Rica',
  'Experiencia con empresas multinacionales',
  'Especialización en 12 sectores profesionales',
  'Metodología comunicativa 100% en inglés',
];

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        {/* Visual */}
        <div className="about-visual">
          <div className="about-img-wrapper">
            <Image
              src="/jeanpierre.jpeg"
              alt="Jean Pierre Schmidt Calvo — Profesor nativo de inglés"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 280px, 420px"
              priority
            />
            <div className="about-badge">⭐ 4.9 / 5.0 · 500+ alumnos</div>
          </div>
          <div className="about-floating fl1">🎓 Cambridge CELTA</div>
          <div className="about-floating fl2">🌍 Nativo de inglés</div>
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="about-tag">Sobre el profesor</div>
          <h2 className="about-title">
            Jean Pierre Schmidt Calvo,<br />hablante nativo de inglés
          </h2>
          <p className="about-desc">
            Como hablante nativo de inglés con más de 10 años formando profesionales en Costa Rica,
            te enseño el inglés real que se usa en tu sector: el acento, el ritmo, las expresiones
            idiomáticas y la confianza que solo un nativo puede transmitir.
          </p>
          <div className="credentials-list">
            {credentials.map((c) => (
              <div className="cred-item" key={c}>
                <div className="cred-check">✓</div>
                <div className="cred-text">{c}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
              Reservar clase diagnóstico →
            </a>
            <a
              href="https://www.linkedin.com/in/jean-pierre-s-0094a034/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-linkedin"
            >
              Ver perfil en LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
