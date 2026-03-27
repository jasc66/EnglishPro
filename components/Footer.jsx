const footerLinks = [
  {
    title: 'Sectores',
    links: [
      { label: 'Salud & Medicina', href: '#sectors' },
      { label: 'Tecnología', href: '#sectors' },
      { label: 'Finanzas', href: '#sectors' },
      { label: 'Legal', href: '#sectors' },
      { label: 'Ingeniería', href: '#sectors' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Clases individuales', href: '#pricing' },
      { label: 'Plan Intensivo', href: '#pricing' },
      { label: 'Plan Corporativo', href: '#pricing' },
      { label: 'Metodología', href: '#how' },
      { label: 'Clase gratuita', href: '#contact' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'jean_pierre_schmidt_calvo@hotmail.com', href: 'mailto:jean_pierre_schmidt_calvo@hotmail.com' },
      { label: '+506 6012-0806 · WhatsApp', href: 'https://wa.me/50660120806' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jean-pierre-s-0094a034/' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            English<span>Pro</span>
          </a>
          <p>
            Inglés especializado para profesionales en Costa Rica que quieren comunicarse con
            confianza en su sector.
          </p>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <ul className="footer-links">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EnglishPro Costa Rica · Todos los derechos reservados</p>
        <div className="footer-socials">
          <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
          <a href="#" className="social-btn" aria-label="Instagram">ig</a>
          <a href="#" className="social-btn" aria-label="YouTube">yt</a>
        </div>
      </div>
    </footer>
  );
}
