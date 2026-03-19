import React from 'react';

const videos = [
  { id: 'qPC9m45iPx0', title: 'Quem é a Set Tecnologia?' },
  { id: 'i9KSjEiKNZc', title: 'Quais são as soluções?' },
  { id: 'zJO04AlEWjM', title: 'Pra quem é a Set Tecnologia?' }
];

export default function Videos() {
  return (
    <section id="videos" className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient animate-fade-in" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
          Conheça a Set Tecnologia
        </h2>
        <p className="animate-fade-in delay-100" style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
          Entenda por que somos a escolha certa para o seu negócio em menos de 1 minuto.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', justifyContent: 'center' }}>
        {videos.map((vid, i) => (
          <div key={i} className="animate-fade-in" style={{ animationDelay: `${0.2 + (i * 0.1)}s`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#fff', textAlign: 'center', fontWeight: 600 }}>{vid.title}</h3>
            <div style={{ 
              width: '100%', 
              maxWidth: '315px', 
              aspectRatio: '9/16', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-card)',
              border: '1px solid rgba(255, 85, 0, 0.2)',
              backgroundColor: '#000'
            }}>
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${vid.id}`} 
                title={vid.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
