import React from 'react';
import './Showcase.css';

export default function Showcase() {
  return (
    <section className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient animate-fade-in" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
          Visão clara do seu negócio em tempo real
        </h2>
        <p className="animate-fade-in delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Acompanhe vendas, estoque e financeiro em um único painel. Sem planilhas, sem achismo, sem perda de controle.
        </p>
      </div>
      
      <div className="showcase-wrapper animate-fade-in delay-200">
        <div className="showcase-glow"></div>
        <img 
          src="/dashboard.png" 
          alt="Dashboard do Sistema Set Tecnologia" 
          className="showcase-img"
        />
      </div>
    </section>
  );
}
