import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Implantação',
    answer: 'Na maioria dos casos, em poucos dias sua operação já está rodando.'
  },
  {
    question: 'Suporte',
    answer: 'Atendimento direto via WhatsApp ou ligação.'
  },
  {
    question: 'Preciso de equipamentos novos?',
    answer: 'Na maioria dos casos, não precisa trocar. O sistema é leve e compatível.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container" style={{ padding: '80px 24px', borderTop: '1px solid var(--surface-border)' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 className="text-gradient animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Dúvidas Frequentes</h2>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }} onClick={() => toggleOpen(index)}>
            <div className="faq-question">
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>{faq.question}</h3>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p style={{ margin: 0 }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
