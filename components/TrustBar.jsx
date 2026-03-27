const items = [
  { icon: '🌍', text: 'Profesor nativo de inglés' },
  { icon: '🎓', text: 'Certificado Cambridge CELTA' },
  { icon: '🌐', text: 'Clases online o presencial' },
  { icon: '⏱', text: 'Horarios flexibles' },
  { icon: '🔒', text: 'Sin permanencia mínima' },
];

export default function TrustBar() {
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
