import React from 'react';
import LeadForm from './LeadForm';

export default function Hero() {
  return (
    <section className="container" id="hero" style={{ padding: 'clamp(80px, 10vw, 120px) 24px 80px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
      <div style={{ flex: '1 1 min(100%, 440px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
        <h1 className="animate-fade-in text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
          Sistema de gestão que funciona na prática
        </h1>
        <p className="animate-fade-in delay-100" style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', marginBottom: '32px', lineHeight: 1.6, maxWidth: '700px' }}>
          Implantação rápida e suporte de verdade para restaurantes e comércios. Mais de 65 empresas já utilizam a Set Tecnologia para ter controle real da operação.
        </p>
        
        <div className="animate-fade-in delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px', width: '100%' }}>
          {['Menos erro no caixa e no estoque', 'Sistema configurado corretamente desde o início', 'Suporte rápido quando você precisa'].map((item, i) => (
            <span key={i} style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#E0E0E0', display: 'flex', alignItems: 'center' }}>
              <span style={{ flexShrink: 0, display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', marginRight: '12px', boxShadow: '0 0 10px var(--primary-color)' }}></span>
              {item}
            </span>
          ))}
        </div>

      </div>
      
      <div style={{ flex: '1 1 min(100%, 380px)', width: '100%', maxWidth: '480px', margin: '0 auto' }} className="animate-fade-in delay-200">
        <LeadForm />
      </div>
    </section>
  );
}
