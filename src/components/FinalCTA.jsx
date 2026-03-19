import React from 'react';

const scrollToForm = () => {
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default function FinalCTA() {
  return (
    <section className="container" style={{ padding: 'clamp(40px, 8vw, 80px) 24px clamp(60px, 10vw, 120px)' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', borderRadius: 'var(--radius-lg)', padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 60px)', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-primary)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)', zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', color: '#fff', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
            Você não precisa de mais um sistema.<br/>
            Você precisa de um sistema que funcione.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
            <button
              onClick={scrollToForm}
              style={{ backgroundColor: '#fff', color: 'var(--primary-color)', padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 36px)', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', transition: 'transform 0.3s', border: 'none', cursor: 'pointer', flex: '1 1 200px', maxWidth: '280px' }}
              onMouseOver={e => e.currentTarget.style.transform='translateY(-3px)'} 
              onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}
            >
              Falar com Especialista
            </button>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '40px', padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-xl)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>⚡</span>
            <p style={{ color: '#fff', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', margin: 0, fontWeight: 500, textAlign: 'left', lineHeight: '1.4' }}>
              Um consultor vai entrar em contato em <strong style={{ color: '#FFE0B2' }}>até 5 minutos</strong> (horário comercial) para sua reunião.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
