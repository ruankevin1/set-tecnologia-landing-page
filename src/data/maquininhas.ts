// Maquininhas smart compatíveis com o Smart TEF no Set, por adquirente (lista enviada pelo Kevin em 28/10/2026).
export const maquininhas: { adquirente: string; modelos: string[] }[] = [
  { adquirente: 'Rede', modelos: ['Laranjinha Positivo L400', 'N960K'] },
  { adquirente: 'Cielo', modelos: ['LIO 2', 'L300', 'L400', 'Axium DX8000'] },
  { adquirente: 'Getnet', modelos: ['P2', 'P3', 'N910', 'A8', 'Axium DX8000'] },
  { adquirente: 'Stone', modelos: ['A8', 'P2', 'P2 A11', 'L400', 'T8 Tectoy', 'L300', 'GPOS730', 'GPOS700X'] },
  { adquirente: 'PagBank', modelos: ['P2', 'A930', 'GPOS780'] },
  { adquirente: 'Mercado Pago', modelos: ['Point Smart 2'] },
  { adquirente: 'SafraPay', modelos: ['P2', 'A8', 'L300'] },
  { adquirente: 'Vero', modelos: ['L300', 'P2'] },
  { adquirente: 'Sipag', modelos: ['Axium DX8000', 'P2', 'X990'] },
  { adquirente: 'Sicredi', modelos: ['DX8000', 'Clover', 'P2', 'N950'] },
  { adquirente: 'Caixa', modelos: ['DX8000', 'Clover', 'P2', 'N950'] },
  { adquirente: 'BIN', modelos: ['DX8000', 'Clover', 'P2', 'N950'] },
  { adquirente: 'PicPay', modelos: ['P2'] },
  { adquirente: 'Phoebus', modelos: ['L300', 'A910', 'A920'] },
  { adquirente: 'Claro Pay', modelos: ['Clover'] },
];

export const adquirentes = maquininhas.map((m) => m.adquirente);
