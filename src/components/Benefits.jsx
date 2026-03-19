import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    title: 'Redução de Erros',
    description: 'Automatize processos e elimine falhas manuais no caixa, estoque e financeiro.',
    icon: '⚡'
  },
  {
    title: 'Mais Controle Financeiro',
    description: 'Saiba exatamente quanto entra, quanto sai e onde está seu lucro.',
    icon: '💰'
  },
  {
    title: 'Gestão Centralizada',
    description: 'Controle toda sua operação em um único sistema, de qualquer lugar.',
    icon: '🌐'
  }
];

export default function Benefits() {
  return (
    <section className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '16px' }}>
          Sua operação sob controle
        </h2>
        <p className="animate-fade-in delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Tecnologia pensada para o dia a dia de quem precisa de agilidade e precisão.
        </p>
      </div>
      
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-card animate-fade-in" style={{ animationDelay: `${0.2 + (index * 0.1)}s`, textAlign: 'center' }}>
            <div className="icon-wrapper" style={{ margin: '0 auto 24px auto' }}>{benefit.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 700 }}>{benefit.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
