'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang].footer;

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            English<span>Pro</span>
          </a>
          <p>{tx.desc}</p>
        </div>

        {tx.cols.map((col) => (
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
        <p>© {new Date().getFullYear()} {tx.copy}</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/jean-pierre-s-0094a034/" className="social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
          <a href="#" className="social-btn" aria-label="Instagram">ig</a>
          <a href="#" className="social-btn" aria-label="YouTube">yt</a>
        </div>
      </div>
    </footer>
  );
}
