import React, { useState } from 'react';
import './LeadForm.css';

export default function LeadForm() {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [negocio, setNegocio] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const NUMERO_DESTINO = '5554992977120';

  const handlePhoneInput = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    
    if (val.length <= 2) {
      val = val.replace(/^(\d{0,2})/, '($1');
    } else if (val.length <= 6) {
      val = val.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
    } else if (val.length <= 10) {
      val = val.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      val = val.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    if (e.target.value.length === 1 && e.target.value === '(') val = '';
    setWhatsapp(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!nome.trim()) newErrors.nome = true;
    if (!empresa.trim()) newErrors.empresa = true;
    if (!negocio) newErrors.negocio = true;
    
    const phoneDigits = whatsapp.replace(/\D/g, '');
    if (phoneDigits.length > 0 && phoneDigits.length < 10) newErrors.whatsapp = true;
    if (phoneDigits.length === 0) newErrors.whatsapp = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      const mensagem = `Olá, meu nome é ${nome.trim()}.\nTenho um ${negocio} chamado ${empresa.trim()}.\nMeu WhatsApp é ${whatsapp}.\nQuero entender melhor como funciona o sistema.`;
      const url = `https://wa.me/${NUMERO_DESTINO}?text=${encodeURIComponent(mensagem)}`;
      
      setTimeout(() => {
        window.open(url, '_blank');
        setTimeout(() => setIsSubmitting(false), 500);
      }, 400);
    }
  };

  return (
    <div id="lead-form" className="lead-form-container animate-fade-in delay-200">
      <div className="lead-form-header">
        <h3>Fale com um Especialista</h3>
        <p>Descubra como transformar a gestão do seu negócio hoje mesmo.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Nome completo</label>
          <input 
            type="text" 
            className={`form-control ${errors.nome ? 'invalid' : ''}`} 
            value={nome} 
            onChange={e=>setNome(e.target.value)} 
            placeholder="Ex: João Silva" 
          />
          {errors.nome && <div className="error-message" style={{display: 'block'}}>Por favor, informe seu nome.</div>}
        </div>
        
        <div className="form-group">
          <label>Nome da Empresa</label>
          <input 
            type="text" 
            className={`form-control ${errors.empresa ? 'invalid' : ''}`} 
            value={empresa} 
            onChange={e=>setEmpresa(e.target.value)} 
            placeholder="Ex: Mercado Silva" 
          />
          {errors.empresa && <div className="error-message" style={{display: 'block'}}>Por favor, informe a empresa.</div>}
        </div>
        
        <div className="form-group">
          <label>Tipo de negócio</label>
          <select 
            className={`form-control ${errors.negocio ? 'invalid' : ''}`} 
            value={negocio} 
            onChange={e=>setNegocio(e.target.value)}
          >
            <option value="" disabled>Selecione uma opção...</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Mercado">Mercado</option>
            <option value="Conveniência">Conveniência</option>
            <option value="Loja">Loja</option>
          </select>
          {errors.negocio && <div className="error-message" style={{display: 'block'}}>Selecione o tipo do seu negócio.</div>}
        </div>
        
        <div className="form-group">
          <label>WhatsApp</label>
          <input 
            type="tel" 
            className={`form-control ${errors.whatsapp ? 'invalid' : ''}`} 
            value={whatsapp} 
            onChange={handlePhoneInput} 
            placeholder="(11) 99999-9999" 
            maxLength="15"
          />
          {errors.whatsapp && <div className="error-message" style={{display: 'block'}}>Informe um WhatsApp válido.</div>}
        </div>
        
        <button type="submit" className="submit-btn-form" disabled={isSubmitting}>
          {isSubmitting ? 'Redirecionando...' : 'Falar com especialista'}
        </button>
        
        <div className="help-text">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 6v6l4 2"></path>
          </svg>
          Resposta em até 5 minutos (horário comercial)
        </div>
      </form>
    </div>
  );
}
