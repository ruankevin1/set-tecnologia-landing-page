import React from 'react';

const differentials = [
  'Implantação rápida (sem travar sua operação)',
  'Suporte direto (sem robô, sem fila longa)',
  'Sistema simples e prático',
  'Foco em resultado real'
];

export default function Differentials() {
  return (
    <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '50px' }}>Por que escolher a Set Tecnologia?</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {differentials.map((diff, i) => (
          <div key={i} style={{ 
            backgroundColor: 'var(--surface-color)', 
            border: '1px solid var(--surface-border)', 
            padding: '40px 24px', 
            borderRadius: 'var(--radius-lg)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: 'var(--shadow-card)' 
          }}>
             <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', marginBottom: '24px', boxShadow: '0 0 15px var(--primary-color)' }}></span>
            <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{diff}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
