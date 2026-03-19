import React from 'react';

const steps = [
  { title: 'Diagnóstico', desc: 'Entendemos sua operação antes de qualquer configuração.' },
  { title: 'Implantação completa', desc: 'Tudo ajustado para sua realidade.' },
  { title: 'Treinamento da equipe', desc: 'Uso prático no dia a dia.' },
  { title: 'Suporte contínuo', desc: 'Resposta rápida quando você precisa.' }
];

export default function Solution() {
  return (
    <section className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px', maxWidth: '800px', margin: '0 auto' }}>
          Na Set Tecnologia, o sistema não é só instalado. Ele é implantado.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
        {steps.map((step, i) => (
          <div key={i} className="animate-fade-in" style={{ backgroundColor: 'var(--surface-color)', padding: '40px 24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', textAlign: 'center', animationDelay: `${i * 0.1}s` }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginBottom: '16px' }}>{step.title}</h3>
            <p style={{ color: '#E0E0E0', fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
