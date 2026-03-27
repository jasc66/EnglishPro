'use client';
import { useLang } from '@/context/LangContext';
import t from '@/lib/translations';

export default function TrustBar() {
  const { lang } = useLang();
  const items = t[lang].trust;

  return (
    <div id="trust">
      {items.map((item) => (
        <div className="trust-item" key={item.text}>
          <span className="trust-icon">{item.icon}</span>
          {item.text}
        </div>
      ))}
    </div>
  );
}
