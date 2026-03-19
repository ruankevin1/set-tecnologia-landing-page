import React from 'react';

const scrollToForm = () => {
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default function Pricing() {
  return (
    <section id="planos" className="container" style={{ padding: 'clamp(40px, 8vw, 80px) 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '16px' }}>
          Soluções adaptadas para cada tipo de negócio
        </h2>
        <p className="animate-fade-in delay-100" style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
          Trabalhamos com diferentes sistemas e configurações, de acordo com:
        </p>
      </div>
      
      <div className="animate-fade-in delay-200" style={{ 
        backgroundColor: 'var(--surface-color)', 
        border: '1px solid var(--primary-color)', 
        borderRadius: 'var(--radius-lg)', 
        padding: 'clamp(32px, 6vw, 60px) clamp(20px, 5vw, 40px)', 
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto',
        boxShadow: 'var(--shadow-primary)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {['Tipo de operação', 'Estrutura do negócio', 'Volume de vendas'].map((tag, i) => (
            <div key={i} style={{ padding: '10px 20px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-xl)', fontSize: 'clamp(0.85rem, 2vw, 1rem)', color: '#E0E0E0', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {tag}
            </div>
          ))}
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '40px' }}>
          Fale com um especialista e entenda qual solução faz mais sentido para você.
        </p>
        <button onClick={scrollToForm} className="btn-primary" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', width: '100%', padding: '18px 0' }}>
          Falar com Especialista
        </button>
      </div>
    </section>
  );
}
