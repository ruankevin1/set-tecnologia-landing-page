import React from 'react';

const cards = [
  'Menos retrabalho na operação',
  'Redução de erros no caixa e pedidos',
  'Mais controle financeiro',
  'Mais velocidade no atendimento'
];

export default function DashboardCards() {
  return (
    <section className="container" style={{ padding: '0 24px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        {cards.map((label, i) => (
          <div key={i} className="animate-fade-in" style={{ 
            backgroundColor: 'var(--surface-color)', 
            border: '1px solid var(--surface-border)', 
            borderRadius: 'var(--radius-md)', 
            padding: '40px 24px', 
            textAlign: 'center',
            boxShadow: 'var(--shadow-card)',
            animationDelay: `${i * 0.1}s`,
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }} onMouseOver={e => {e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='var(--primary-color)';}} onMouseOut={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='var(--surface-border)';}}>
            <div style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>* Resultados variam de acordo com a operação.</span>
      </div>
    </section>
  );
}
