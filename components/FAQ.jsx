'use client';
import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué nivel de inglés necesito para empezar?',
    a: 'Trabajamos con profesionales desde nivel B1 en adelante. Durante la clase diagnóstica gratuita evaluamos tu nivel real y diseñamos el programa a partir de ahí. Si tu nivel es inferior a B1, podemos recomendarte el mejor camino para llegar al punto desde el que nuestro enfoque profesional es más efectivo.',
  },
  {
    q: '¿Las clases son online o presenciales?',
    a: 'Ofrezco ambas modalidades. Las clases online se realizan por Zoom o Google Meet con pizarra interactiva y material compartido en tiempo real. Las clases presenciales están disponibles en San José. La mayoría de mis alumnos en Costa Rica prefieren online por la flexibilidad de horarios.',
  },
  {
    q: '¿Cuánto tiempo tarda en verse resultados?',
    a: 'Con 2 clases semanales, la mayoría de alumnos notan mejora significativa en 2-3 meses. Para hitos concretos como superar una entrevista de trabajo, liderar reuniones o preparar una certificación, el plazo depende del punto de partida y del objetivo. En el plan personalizado siempre fijamos hitos medibles.',
  },
  {
    q: '¿Puedo cambiar de plan o cancelar cuando quiera?',
    a: 'Sí, completamente. No existe permanencia mínima. Puedes cambiar de plan o cancelar con un aviso de 7 días. Los pagos se realizan mensualmente por adelantado y se aceptan SINPE Móvil, transferencia bancaria y tarjetas.',
  },
  {
    q: '¿Preparas para certificaciones como TOEFL, IELTS o Cambridge?',
    a: 'Sí. Preparo para Cambridge B2 First, C1 Advanced, C2 Proficiency, IELTS Academic y General, y TOEFL iBT. La preparación para certificaciones se puede combinar con el enfoque de sector para que los conocimientos sean doblemente útiles.',
  },
  {
    q: '¿Ofrecen clases para empresas o grupos?',
    a: 'Sí. El plan Corporate está diseñado para departamentos o equipos de hasta 5 personas. Para grupos más grandes o programas de formación corporativa, contáctame directamente para recibir una propuesta con factura para empresa.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq">
      <div className="section-head">
        <span className="section-tag">FAQ</span>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-subtitle">Todo lo que necesitas saber antes de empezar.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
            <button className="faq-question" onClick={() => toggle(i)}>
              {faq.q}
              <div className="faq-icon">+</div>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">{faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
