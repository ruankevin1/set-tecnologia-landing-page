import React from 'react';

export default function Qualification() {
  return (
    <section className="container" style={{ padding: '80px 24px' }}>
      <div style={{ backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-lg)', padding: '60px 40px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', boxShadow: 'var(--shadow-card)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '40px', fontWeight: 800 }}>Isso é para você se:</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '100%', padding: '18px 24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', color: '#E0E0E0', fontSize: '1.15rem', fontWeight: 500, transition: 'background-color 0.3s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.08)'} onMouseOut={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}>
            Tem restaurante ou comércio
          </div>
          <div style={{ width: '100%', padding: '18px 24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', color: '#E0E0E0', fontSize: '1.15rem', fontWeight: 500, transition: 'background-color 0.3s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.08)'} onMouseOut={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}>
            Já se frustrou com sistema
          </div>
          <div style={{ width: '100%', padding: '18px 24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', color: '#E0E0E0', fontSize: '1.15rem', fontWeight: 500, transition: 'background-color 0.3s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.08)'} onMouseOut={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}>
            Precisa de controle de verdade
          </div>
          <div style={{ width: '100%', padding: '18px 24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', color: '#E0E0E0', fontSize: '1.15rem', fontWeight: 500, transition: 'background-color 0.3s' }} onMouseOver={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.08)'} onMouseOut={e=>e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}>
            Não pode parar operação por erro
          </div>
        </div>
      </div>
    </section>
  );
}
