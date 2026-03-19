import React, { useState } from 'react';

const testimonials = [
  { author: 'João', type: 'Restaurante', text: 'Antes a gente tinha muito erro de pedido e retrabalho na cozinha. Depois da implantação, ficou organizado e mais rápido.' },
  { author: 'Fabio', type: 'Mercado', text: 'O estoque era desorganizado. Hoje temos controle real e muito menos erro.' },
  { author: 'Carlos', type: 'Hamburgueria', text: 'Agora consigo ver tudo com clareza e tomar decisões melhores.' },
  { author: 'Ricardo', type: 'Conveniência', text: 'O suporte resolve rápido, isso faz diferença no dia a dia.' }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="container" style={{ padding: '100px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
          Quem usa, recomenda.
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
        
        {/* Videos Placeholder oculto temporariamente */}

        {/* Carousel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', maxWidth: '800px' }}>
          <button onClick={prev} style={{ background: 'transparent', color: 'var(--primary-color)', fontSize: '2.5rem', transition: 'transform 0.2s', padding: '10px' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>❮</button>
          
          <div style={{ flex: 1, backgroundColor: 'var(--surface-color)', padding: '50px 40px', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--surface-border)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '10px', left: '20px', fontSize: '5rem', color: 'rgba(255, 85, 0, 0.1)', fontFamily: 'serif', lineHeight: 1 }}>"</span>
            <p style={{ fontSize: '1.3rem', color: '#fff', fontStyle: 'italic', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
              {testimonials[current].text}
            </p>
            <div style={{ padding: '24px 0 0', borderTop: '1px solid var(--surface-border)' }}>
              <h4 style={{ color: 'var(--secondary-color)', fontSize: '1.3rem', margin: '0 0 4px 0' }}>{testimonials[current].author}</h4>
              <span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{testimonials[current].type}</span>
            </div>
          </div>
          
          <button onClick={next} style={{ background: 'transparent', color: 'var(--primary-color)', fontSize: '2.5rem', transition: 'transform 0.2s', padding: '10px' }} onMouseOver={e=>e.currentTarget.style.transform='scale(1.2)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>❯</button>
        </div>
      </div>
    </section>
  );
}
