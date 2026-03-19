import React from 'react';

const scrollToForm = () => {
  const el = document.getElementById('lead-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#020202', padding: 'clamp(40px, 8vw, 80px) 24px 40px', borderTop: '2px solid var(--surface-border)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
        boxShadow: '0 0 20px var(--primary-color)'
      }}></div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 900, marginBottom: '20px', letterSpacing: '1px' }}>SET TECNOLOGIA</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.6' }}>
          Mais de 65 empresas já utilizam nossa tecnologia para organizar e escalar suas operações com segurança e eficiência.
        </p>
        <button onClick={scrollToForm} className="btn-primary" style={{ padding: '14px 32px', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>Falar com Especialista</button>
      </div>
      
      <div className="container" style={{ paddingTop: '24px', textAlign: 'center', color: '#555', fontSize: '0.95rem', borderTop: '1px solid var(--surface-border)' }}>
        &copy; {new Date().getFullYear()} Set Tecnologia. Plataforma de Automação Comercial. Todos os direitos reservados.
      </div>
    </footer>
  );
}
