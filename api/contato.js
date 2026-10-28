// Formulário de contato do site: valida e envia o pedido por e-mail (Resend).
// Variáveis na Vercel: RESEND_API_KEY, EMAIL_FROM (ex.: "Set Tecnologia <contato@settecnologia.app.br>")
// e NOTIFY_EMAIL (quem recebe). As mesmas da landing do PDV+.

// As mesmas listas de src/components/Formulario.astro.
const TIPOS = ['Restaurante', 'Bar', 'Pizzaria', 'Lanchonete ou hamburgueria', 'Café ou padaria', 'Sorveteria ou açaí', 'Mercado ou conveniência', 'Outro'];
const FAIXAS = ['Até R$ 30 mil', 'R$ 30 mil a R$ 80 mil', 'R$ 80 mil a R$ 200 mil', 'Acima de R$ 200 mil'];

const limpo = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
const html = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function validar(corpo) {
  const d = {
    nome: limpo(corpo.nome, 80),
    empresa: limpo(corpo.empresa, 100),
    whatsapp: String(corpo.whatsapp ?? '').replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '').slice(0, 11),
    cidade: limpo(corpo.cidade, 60),
    tipo: limpo(corpo.tipo, 40),
    faturamento: limpo(corpo.faturamento, 40),
    pagina: limpo(corpo.pagina, 120),
  };
  const erros = {};
  if (d.nome.length < 2) erros.nome = 'Informe o nome.';
  if (d.empresa.length < 2) erros.empresa = 'Informe a empresa.';
  if (d.whatsapp.length < 10) erros.whatsapp = 'WhatsApp com DDD.';
  if (d.cidade.length < 2) erros.cidade = 'Informe a cidade.';
  if (!TIPOS.includes(d.tipo)) erros.tipo = 'Escolha o tipo.';
  if (!FAIXAS.includes(d.faturamento)) erros.faturamento = 'Escolha a faixa.';
  return { d, erros };
}

function telefone(n) {
  return n.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3');
}

export function montarEmail(d) {
  const linha = (rotulo, valor) =>
    `<tr><td style="padding:9px 0;color:#807b73;width:150px;vertical-align:top">${rotulo}</td><td style="padding:9px 0;color:#1c1b19">${valor}</td></tr>`;
  const tel = telefone(d.whatsapp);
  return {
    subject: `Contato pelo site: ${d.empresa} (${d.tipo}, ${d.cidade})`,
    html: `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1c1b19">
  <p style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#807b73;margin:0 0 6px">settecnologia.app.br</p>
  <h2 style="margin:0 0 18px;font-size:22px">Novo contato pelo site</h2>
  <table style="width:100%;border-collapse:collapse;font-size:15px;border-top:1px solid #1c1b19">
    ${linha('Nome', `<b>${html(d.nome)}</b>`)}
    ${linha('Empresa', `<b>${html(d.empresa)}</b>`)}
    ${linha('Tipo', html(d.tipo))}
    ${linha('Faturamento', html(d.faturamento))}
    ${linha('Cidade', html(d.cidade))}
    ${linha('WhatsApp', `<a href="https://wa.me/55${d.whatsapp}" style="color:#1c1b19">${tel}</a>`)}
    ${linha('Página', html(d.pagina || '/'))}
  </table>
  <p style="margin:24px 0 0">
    <a href="https://wa.me/55${d.whatsapp}" style="background:#f36812;color:#fff;padding:12px 20px;border-radius:6px;text-decoration:none;font-weight:bold;display:inline-block">Responder no WhatsApp</a>
  </p>
</div>`,
    text: [
      'Novo contato pelo site', '',
      `Nome: ${d.nome}`, `Empresa: ${d.empresa}`, `Tipo: ${d.tipo}`, `Faturamento: ${d.faturamento}`, `Cidade: ${d.cidade}`,
      `WhatsApp: ${tel}`, `Página: ${d.pagina || '/'}`,
    ].join('\n'),
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, erro: 'Método não permitido.' });
  }
  let corpo = req.body;
  if (typeof corpo === 'string') {
    try { corpo = JSON.parse(corpo); } catch { corpo = {}; }
  }
  corpo = corpo || {};

  // Campo escondido: robô preenche, pessoa não vê. Responde como sucesso e não envia.
  if (String(corpo.site ?? '').trim()) return res.status(200).json({ ok: true });

  const { d, erros } = validar(corpo);
  if (Object.keys(erros).length) return res.status(400).json({ ok: false, erros });

  const chave = process.env.RESEND_API_KEY;
  const para = process.env.NOTIFY_EMAIL;
  if (!chave || !para) return res.status(503).json({ ok: false, erro: 'Envio indisponível no momento.' });

  const email = montarEmail(d);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${chave}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || 'Set Tecnologia <contato@settecnologia.app.br>',
      to: para.split(',').map((s) => s.trim()),
      ...email,
    }),
  }).catch(() => null);

  if (!r || !r.ok) return res.status(502).json({ ok: false, erro: 'Não foi possível enviar agora.' });
  return res.status(200).json({ ok: true });
}
