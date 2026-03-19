import React from 'react';

export default function SocialProof() {
  return (
    <section className="container" style={{ padding: '80px 24px', borderTop: '1px solid var(--surface-border)' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '16px', maxWidth: '700px', margin: '0 auto' }}>
          Mais de 65 empresas já usam a Set Tecnologia no dia a dia
        </h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '60px' }}>
        <span style={{ fontSize: '1.2rem', color: '#E0E0E0' }}><span style={{ color: '#2ed573', marginRight: '16px' }}>✔️</span> Operações rodando com sistema bem configurado</span>
        <span style={{ fontSize: '1.2rem', color: '#E0E0E0' }}><span style={{ color: '#2ed573', marginRight: '16px' }}>✔️</span> Menos erro de caixa e estoque</span>
        <span style={{ fontSize: '1.2rem', color: '#E0E0E0' }}><span style={{ color: '#2ed573', marginRight: '16px' }}>✔️</span> Equipes treinadas</span>
        <span style={{ fontSize: '1.2rem', color: '#E0E0E0' }}><span style={{ color: '#2ed573', marginRight: '16px' }}>✔️</span> Suporte humano e rápido</span>
      </div>
      
      <div className="animate-pulse" style={{ textAlign: 'center', padding: '30px', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-md)', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--surface-border)' }}>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontWeight: 600, margin: 0, lineHeight: '1.5' }}>
          Não é sobre vender sistema.<br/><span style={{ color: 'var(--primary-color)' }}>É sobre fazer funcionar.</span>
        </p>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>Você não contrata um sistema.</h2>
        <h2 className="text-gradient" style={{ fontSize: '3rem', margin: '10px 0 0 0', fontWeight: 800 }}>Você contrata controle e tranquilidade.</h2>
      </div>
    </section>
  );
}
