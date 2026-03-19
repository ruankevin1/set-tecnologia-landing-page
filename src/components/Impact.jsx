import React from 'react';

export default function Impact() {
  return (
    <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px auto' }}>
        Seu negócio precisa de velocidade e segurança.
      </h2>
      <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '50px' }}>
        Quando o sistema falha, o prejuízo é real.
      </p>
      
      <div style={{ padding: '40px 24px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--surface-border)', maxWidth: '900px', margin: '0 auto 60px auto' }}>
        <p style={{ fontSize: '1.6rem', color: 'var(--primary-color)', fontWeight: 600, margin: 0 }}>
          Automatizar certo é diferente de só instalar.
        </p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(20px, 4vw, 60px)', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#E0E0E0' }}>Menos erro.</div>
        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#E0E0E0' }}>Mais controle.</div>
        <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--primary-color)' }}>Mais resultado.</div>
      </div>
    </section>
  );
}
