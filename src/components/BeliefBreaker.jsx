import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const errorItems = [
  'Sistema instalado sem entender a rotina do negócio',
  'Estoque desorganizado e sem controle',
  'Caixa com divergência frequente',
  'Equipe sem domínio do sistema',
  'Suporte lento quando o problema é urgente',
];

const redCards = [
  'Configuração feita de qualquer jeito',
  'Equipe sem saber usar',
  'Suporte que não resolve',
];

export default function BeliefBreaker() {
  const [sectionRef, sectionVisible] = useInView(0.1);

  return (
    <section ref={sectionRef} className="container" style={{ padding: 'clamp(60px, 8vw, 100px) 24px', textAlign: 'center' }}>

      {/* HEADLINE BLOCK */}
      <div style={{ marginBottom: '80px' }}>
        <h2
          className="text-gradient"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '24px',
            lineHeight: 1.1,
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          O problema não é o sistema.<br />É a forma como ele é implantado.
        </h2>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            maxWidth: '750px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s 0.1s ease, transform 0.7s 0.1s ease',
          }}
        >
          A maioria dos sistemas falha porque ninguém implanta, configura e acompanha de verdade no dia a dia.
        </p>

        <p
          style={{
            color: '#fff',
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            fontWeight: 600,
            marginBottom: '32px',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease',
          }}
        >
          O problema quase nunca é o sistema. É a execução:
        </p>

        {/* RED CARDS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {redCards.map((card, i) => (
            <div
              key={i}
              style={{
                padding: '14px 28px',
                backgroundColor: 'rgba(255, 71, 87, 0.06)',
                border: '1px solid rgba(255, 71, 87, 0.35)',
                borderRadius: 'var(--radius-xl)',
                color: '#ff4757',
                fontWeight: 700,
                letterSpacing: '0.5px',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                textTransform: 'uppercase',
                cursor: 'default',
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
                transition: `opacity 0.6s ${0.25 + i * 0.1}s ease, transform 0.6s ${0.25 + i * 0.1}s ease, box-shadow 0.3s ease, background-color 0.3s ease`,
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 71, 87, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 71, 87, 0.14)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'rgba(255, 71, 87, 0.06)';
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* ERROR BOX */}
      <div
        style={{
          backgroundColor: 'var(--surface-color)',
          padding: 'clamp(32px, 6vw, 60px) clamp(20px, 5vw, 40px)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--surface-border)',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-card)',
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s 0.5s ease, transform 0.8s 0.5s ease',
        }}
      >
        <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', color: '#fff', marginBottom: '36px' }}>
          O que normalmente dá errado:
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
          {errorItems.map((item, i) => (
            <div
              key={i}
              style={{
                width: '100%',
                padding: '18px 16px',
                borderBottom: i < errorItems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                color: '#C8C8D0',
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                textAlign: 'center',
                lineHeight: 1.5,
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.6s ${0.6 + i * 0.08}s ease, transform 0.6s ${0.6 + i * 0.08}s ease`,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* RESULT BOX */}
        <div
          style={{
            marginTop: '48px',
            padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 24px)',
            backgroundColor: 'rgba(255, 71, 87, 0.07)',
            borderRadius: 'var(--radius-md)',
            border: '1px dashed rgba(255, 71, 87, 0.4)',
            boxShadow: '0 0 30px rgba(255, 71, 87, 0.08)',
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s 1.1s ease, transform 0.7s 1.1s ease',
          }}
        >
          <h4
            style={{
              color: '#ff4757',
              fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            Resultado: erro no caixa, operação desorganizada e dinheiro sendo perdido todos os dias.
          </h4>
        </div>
      </div>
    </section>
  );
}
