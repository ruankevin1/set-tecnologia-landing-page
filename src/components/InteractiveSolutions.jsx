import React, { useState } from 'react';

const solutions = [
  { 
    id: 'CAIXA E PAGAMENTO', 
    items: ['PDV rápido e estável', 'Redução de filas', 'Integração com pagamentos', 'Smart TEF: Chega de pinpad antigo. Pagamento direto na maquininha smart, mais rápido e integrado.'] 
  },
  { 
    id: 'ATENDIMENTO E COMANDAS', 
    items: ['Comanda digital', 'Tablets para atendimento ou mesa', 'Impressão de comandas em papel', 'Envio automático para cozinha/bar'] 
  },
  { 
    id: 'COZINHA E PRODUÇÃO', 
    items: ['KDS (tela de pedidos na cozinha)', 'Organização da fila de preparo', 'Pontos de impressão por setor (cozinha, bar, etc.)', 'Redução de erros de produção'] 
  },
  { 
    id: 'DELIVERY PRÓPRIO', 
    items: ['Sistema próprio de pedidos', 'Integração com WhatsApp', 'Controle total dos pedidos', 'Ferramentas de venda: Cashback, Cupons, Fidelização'] 
  },
  { 
    id: 'AUTOATENDIMENTO', 
    items: ['Totem de autoatendimento', 'Tablets para pedidos', 'Integração direta com cozinha', 'Pesagem automatizada: Integração com balança, Cálculo automático, Redução de erros'] 
  },
  { 
    id: 'GESTÃO COMPLETA', 
    items: ['Controle de estoque automático', 'Gestão financeira', 'Relatórios em tempo real', 'Visão clara do lucro'] 
  }
];

export default function InteractiveSolutions() {
  const [active, setActive] = useState(0);

  return (
    <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px', maxWidth: '800px', margin: '0 auto' }}>Uma estrutura completa para sua operação rodar sem falha</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', marginTop: '60px', maxWidth: '1000px', margin: '60px auto 0' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', width: '100%' }}>
          {solutions.map((sol, i) => (
            <button 
              key={i} 
              onClick={() => setActive(i)}
              style={{ 
                padding: '14px 24px', 
                backgroundColor: active === i ? 'var(--primary-color)' : 'rgba(255,255,255,0.03)', 
                border: `1px solid ${active === i ? 'var(--primary-color)' : 'var(--surface-border)'}`,
                borderRadius: 'var(--radius-xl)',
                color: active === i ? '#fff' : 'var(--text-muted)',
                fontWeight: active === i ? 700 : 500,
                transition: 'all 0.3s ease',
                fontSize: '1rem',
                boxShadow: active === i ? 'var(--shadow-primary)' : 'none'
              }}
            >
              {sol.id}
            </button>
          ))}
        </div>
        
        <div style={{ width: '100%', backgroundColor: 'var(--surface-color)', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-lg)', padding: '60px 40px', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,85,0,0.08), transparent)', filter: 'blur(50px)' }}></div>
          <div key={active} style={{ animation: 'fadeIn 0.4s ease', position: 'relative', zIndex: 1, width: '100%', maxWidth: '700px' }}>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '32px', textAlign: 'center' }}>{solutions[active].id}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              {solutions[active].items.map((item, idx) => (
                <div key={idx} style={{ fontSize: '1.2rem', color: '#E0E0E0', textAlign: 'center', lineHeight: 1.5, padding: '16px 24px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', width: '100%', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: 'var(--primary-color)', marginRight: '12px' }}>⚡</span> 
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
