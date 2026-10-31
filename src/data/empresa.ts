// Dados da empresa usados no site inteiro e nos dados estruturados para o Google.
// Nome, telefone e área atendida precisam ser IGUAIS aos do Perfil da Empresa no Google.

export const empresa = {
  nome: 'Set Tecnologia',
  razaoSocial: '53.323.285 Kevin Ruan Bagatini Pires de Lima',
  cnpj: '53.323.285/0001-68',
  site: 'https://www.settecnologia.app.br',
  whatsapp: '5554992977120',
  telefoneExibicao: '(54) 99297-7120',
  telefoneE164: '+55-54-99297-7120',
  pdvPlus: 'https://pdv.settecnologia.app.br',
  catalogoDemo: 'https://reis-restaurante.enviarpedido.com.br',
};

export function linkWhatsApp(mensagem = 'Olá! Vim pelo site da Set Tecnologia e quero conhecer o sistema.') {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export type Cidade = {
  slug: string;
  nome: string;
  regiao: string;
  titulo: string;
  descricao: string;
  abertura: string;
  cena: string;
  atendimento: string;
  vizinhas: string[];
  perguntas: { p: string; r: string }[];
};

export const cidades: Cidade[] = [
  {
    slug: 'erechim',
    nome: 'Erechim',
    regiao: 'Alto Uruguai',
    titulo: 'Sistema para restaurante em Erechim/RS',
    descricao:
      'Sistema para restaurantes, bares e lanchonetes em Erechim e no Alto Uruguai: caixa, garçom no celular, delivery próprio e NFC-e, com implantação no local.',
    abertura:
      'A implantação em Erechim é feita no próprio estabelecimento: cadastro do cardápio, impressoras da cozinha e do bar, tablets de mesa, celulares dos garçons e a configuração fiscal da NFC-e.',
    cena:
      'Restaurantes de almoço com movimento concentrado, lancherias de fim de semana, bares e pizzarias com delivery: em cada operação o sistema é configurado de acordo com a rotina da casa, do primeiro pedido ao fechamento do caixa.',
    atendimento:
      'Visita para diagnóstico, implantação no local e treinamento da equipe no horário de menor movimento. Depois disso, suporte por WhatsApp e acesso remoto, com visita quando o problema pede.',
    vizinhas: [
      'Getúlio Vargas', 'Estação', 'Gaurama', 'Barão de Cotegipe', 'Marcelino Ramos', 'Aratiba',
      'Severiano de Almeida', 'Campinas do Sul', 'Jacutinga', 'Viadutos', 'Três Arroios',
      'Paulo Bento', 'Áurea', 'São Valentim', 'Erval Grande', 'Itatiba do Sul',
    ],
    perguntas: [
      {
        p: 'A implantação em Erechim é presencial?',
        r: 'Sim. Diagnóstico, instalação e treinamento são feitos no próprio estabelecimento.',
      },
      {
        p: 'Atendem cidades do Alto Uruguai fora de Erechim?',
        r: 'Sim. Getúlio Vargas, Gaurama, Barão de Cotegipe, Marcelino Ramos, Aratiba e as demais cidades da região são atendidas com implantação no local.',
      },
    ],
  },
  {
    slug: 'passo-fundo',
    nome: 'Passo Fundo',
    regiao: 'Planalto Médio',
    titulo: 'Sistema para restaurante em Passo Fundo/RS',
    descricao:
      'Sistema para restaurantes e bares em Passo Fundo e região: caixa, comandas, garçom no celular, delivery sem comissão e NFC-e, com suporte da Set Tecnologia.',
    abertura:
      'Passo Fundo concentra o maior volume de bares, restaurantes e lancherias do norte do estado, com movimento puxado pelo público universitário e pelo comércio regional. Operação com esse ritmo precisa de caixa rápido e pedido que não se perde entre o salão e a cozinha.',
    cena:
      'Bares com comanda individual, restaurantes com salão e delivery ao mesmo tempo, hamburguerias que recebem pedido pelo WhatsApp: o Set Tecnologia junta salão, balcão e delivery na mesma tela de caixa, e cada pedido sai impresso no setor certo.',
    atendimento:
      'Implantação agendada no estabelecimento, com cadastro, instalação e treinamento da equipe. O suporte do dia a dia é por WhatsApp e acesso remoto.',
    vizinhas: [
      'Marau', 'Carazinho', 'Tapejara', 'Sertão', 'Coxilha', 'Pontão', 'Mato Castelhano',
      'Casca', 'Soledade', 'Não-Me-Toque', 'Ernestina', 'Ciríaco', 'David Canabarro', 'Lagoa Vermelha',
    ],
    perguntas: [
      {
        p: 'A Set Tecnologia atende Passo Fundo?',
        r: 'Sim. A implantação é agendada no estabelecimento e o suporte do dia a dia é feito por WhatsApp e acesso remoto.',
      },
      {
        p: 'Dá para usar comanda individual no bar?',
        r: 'Sim. O sistema trabalha com mesas e comandas, inclusive comandas de papel numeradas, e a conta pode ser dividida entre as pessoas da mesa.',
      },
    ],
  },
  {
    slug: 'caxias-do-sul',
    nome: 'Caxias do Sul',
    regiao: 'Serra Gaúcha',
    titulo: 'Sistema para restaurante em Caxias do Sul/RS',
    descricao:
      'Sistema para restaurantes, galeterias e pizzarias em Caxias do Sul e na Serra: caixa, salão, cozinha, delivery próprio e NFC-e, com suporte da Set.',
    abertura:
      'Na maior cidade da Serra, galeterias, restaurantes de rodízio, pizzarias e bares dividem a mesma necessidade: muitos pedidos em pouco tempo e cozinha recebendo cada item sem erro.',
    cena:
      'Rodízio e sequência com itens que saem várias vezes por mesa, pizzaria com meio a meio e taxa de entrega, restaurante de almoço com balcão cheio: o pedido lançado no salão sai na impressora da cozinha ou do bar, e o caixa fecha a conta da mesa sem redigitar nada.',
    atendimento:
      'Implantação agendada, com visita ou a distância conforme a operação. Cadastro do cardápio, configuração fiscal e treinamento da equipe incluídos; suporte por WhatsApp e acesso remoto.',
    vizinhas: ['Farroupilha', 'Flores da Cunha', 'São Marcos', 'Nova Pádua', 'Antônio Prado', 'Gramado', 'Canela', 'Nova Petrópolis'],
    perguntas: [
      {
        p: 'Atendem restaurantes em Caxias do Sul?',
        r: 'Sim. A implantação é agendada com visita ou a distância, conforme a operação, e o suporte é por WhatsApp e acesso remoto.',
      },
      {
        p: 'O delivery próprio cobra comissão por pedido?',
        r: 'Não. O catálogo online da Set Tecnologia não cobra comissão sobre os pedidos.',
      },
    ],
  },
  {
    slug: 'bento-goncalves',
    nome: 'Bento Gonçalves',
    regiao: 'Serra Gaúcha',
    titulo: 'Sistema para restaurante em Bento Gonçalves/RS',
    descricao:
      'Sistema para restaurantes, cafés e comércio em Bento Gonçalves e região: caixa, mesas, estoque e NFC-e, com implantação e suporte da Set Tecnologia.',
    abertura:
      'Em Bento Gonçalves o movimento muda com o turismo: fim de semana cheio, grupos grandes e conta dividida entre muitas pessoas. Restaurantes, cafés e lojas de vinícola precisam de caixa que aguente o pico e de estoque que feche no fim do dia.',
    cena:
      'Mesa de doze pessoas pagando cada uma a sua parte, loja de vinícola vendendo no balcão com nota fiscal, café com fila na hora do almoço: a divisão da conta fecha no centavo e cada venda baixa o estoque na hora.',
    atendimento:
      'Implantação agendada, com visita ou a distância conforme a operação. Suporte por WhatsApp e acesso remoto.',
    vizinhas: ['Garibaldi', 'Carlos Barbosa', 'Monte Belo do Sul', 'Pinto Bandeira', 'Veranópolis', 'Cotiporã', 'Santa Tereza', 'Farroupilha'],
    perguntas: [
      {
        p: 'O sistema divide a conta entre várias pessoas?',
        r: 'Sim. A conta pode ser dividida por pessoa, por item ou em partes iguais, e o total fecha no centavo.',
      },
      {
        p: 'Serve para loja de vinícola e café, além de restaurante?',
        r: 'Sim. O balcão vende com leitor de código, emite NFC-e e baixa o estoque de cada venda.',
      },
    ],
  },
];
