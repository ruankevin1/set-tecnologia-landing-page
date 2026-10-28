# Aparecer no Google nas cidades atendidas

O site resolve a parte técnica: páginas em HTML pronto, título e descrição por página, uma página por cidade,
sitemap, dados estruturados (empresa de área de atendimento) e carregamento rápido.
Quem decide o "mapa" que aparece no topo de uma busca como "sistema para restaurante Erechim" é o
**Perfil da Empresa no Google**. Sem ele, o site disputa só os resultados de baixo.

Ninguém garante primeira posição. O que dá resultado, em ordem de peso:

## 1. Perfil da Empresa no Google (hoje não existe)

1. Acessar https://business.google.com com a conta Google da empresa.
2. Nome: **Set Tecnologia** (exatamente assim; sem palavras-chave no nome, o Google pune).
3. Categoria principal: **Empresa de software**. Secundárias: **Consultor de informática**, **Serviço de suporte técnico de informática**.
4. "Você atende clientes no seu endereço?" → **Não**. O endereço fica oculto e a empresa vira "área de atendimento".
5. Áreas atendidas (até 20): Erechim, Passo Fundo, Caxias do Sul, Bento Gonçalves, Getúlio Vargas, Marau,
   Carazinho, Tapejara, Farroupilha, Garibaldi, Gaurama, Barão de Cotegipe, Aratiba, Marcelino Ramos, Flores da Cunha,
   Carlos Barbosa, Soledade, Lagoa Vermelha, Sertão, Estação.
6. Telefone: **(54) 99297-7120**. Site: **https://www.settecnologia.app.br**.
7. Verificação: o Google pede vídeo ou carta. Seguir o que ele oferecer.
8. Depois de verificado:
   - descrição com as palavras que o cliente busca (sistema para restaurante, PDV, NFC-e, delivery, cardápio digital);
   - fotos reais: equipe implantando, caixa instalado num cliente, tablet na mesa, impressora da cozinha;
   - produtos/serviços: Sistema para restaurante, Cardápio digital e delivery, Smart TEF, PDV+;
   - horário de atendimento.

## 2. Avaliações

O fator que mais separa o 1º do 4º lugar no mapa. Meta: pedir avaliação a cada cliente ativo.
Link curto de avaliação: no Perfil, "Pedir avaliações". Mandar pelo WhatsApp depois de uma implantação ou de um
suporte resolvido. Responder todas, inclusive as negativas.

## 3. Google Search Console

1. https://search.google.com/search-console → adicionar a propriedade de **domínio** `settecnologia.app.br`.
2. Verificar com o registro TXT no Registro.br (DNS do domínio).
3. Em "Sitemaps", enviar `https://www.settecnologia.app.br/sitemap-index.xml`.
4. Em "Inspeção de URL", pedir indexação da página inicial e das quatro páginas de cidade.

## 4. Mesmo nome e telefone em todo lugar

Instagram, Facebook, WhatsApp Business, landing do PDV+ e catálogo: **Set Tecnologia** e **(54) 99297-7120**.
Dados diferentes entre os lugares diminuem a confiança do Google.

## 5. Conteúdo que só um negócio real tem

- Depoimento real de cliente, com nome, estabelecimento e cidade (com autorização). Entra na página da cidade.
- Logos ou fotos de clientes atendidos em cada cidade.
- Quando abrir atendimento numa cidade nova: acrescentar em `src/data/empresa.ts` (a página nasce sozinha).

## Onde mexer no site

| O quê | Arquivo |
|---|---|
| Telefone, WhatsApp, número de empresas | `src/data/empresa.ts` (`empresa`) |
| Cidades, cidades vizinhas, textos por cidade | `src/data/empresa.ts` (`cidades`) |
| Página inicial | `src/pages/index.astro` |
| Prints do sistema | `src/assets/telas/` |
