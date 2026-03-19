import React from 'react';

export default function InteractiveShowcase() {
  return (
    <section id="showcase" className="container" style={{ padding: '60px 24px 80px', textAlign: 'center' }}>
      <h2 className="text-gradient animate-fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', fontWeight: 800 }}>
        Controle total da sua operação em um só lugar
      </h2>
      <p className="animate-fade-in delay-100" style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Do caixa ao delivery, da cozinha ao financeiro — tudo integrado para rodar sem erro no dia a dia.
      </p>
    </section>
  );
}
