import React from 'react';

const featuresList = [
  'PDV rápido e estável',
  'Controle de estoque automático',
  'Gestão financeira completa',
  'Emissão de NFC-e e NF-e',
  'Relatórios gerenciais',
  'Cadastro e controle de produtos',
  'Integração entre setores'
];

export default function Features() {
  return (
    <section className="container" style={{ padding: '60px 24px 100px' }}>
      <div style={{ backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-lg)', padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 700 }}>Tudo pronto para rodar</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {featuresList.map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.03)', padding: '12px 24px', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,85,0,0.2)' }}>
              <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginRight: '12px' }}>✓</span>
              <span style={{ color: '#E0E0E0', fontSize: '1.1rem', fontWeight: 500 }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
