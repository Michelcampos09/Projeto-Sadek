const PROTOCOLOS_SEGUROS = new Set(["https:", "mailto:", "tel:"]);
const HOSTS_MAPA_PERMITIDOS = new Set(["www.google.com", "maps.google.com"]);

/**
 * Valida URLs externas ou de protocolo (https:, mailto:, tel:) para prevenir
 * injeção de esquemas perigosos (javascript:, data:, vbscript:) ou links quebrados ("#").
 */
export function obterUrlSegura(url, fallback = null) {
  if (typeof url !== "string") return fallback;
  const limpa = url.trim();
  if (!limpa || limpa === "#") return fallback;

  if (limpa.startsWith("/#") || (limpa.startsWith("#") && limpa.length > 1)) {
    return limpa;
  }

  try {
    const parsed = new URL(limpa);
    if (!PROTOCOLOS_SEGUROS.has(parsed.protocol)) return fallback;
    if (parsed.protocol === "mailto:" && parsed.pathname.toLowerCase().endsWith("@exemplo.com")) {
      return fallback;
    }
    return parsed.toString();
  } catch {
    return fallback;
  }
}

/**
 * Garante que apenas URLs HTTPS oficiais do Google Maps sejam carregadas em iframes.
 */
export function obterUrlMapaSegura(url) {
  if (typeof url !== "string") return null;
  try {
    const parsed = new URL(url.trim());
    if (parsed.protocol !== "https:") return null;
    if (!HOSTS_MAPA_PERMITIDOS.has(parsed.hostname)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export const dadosDoSite = {
  nav: {
    marca: "Sahtein",
    subtituloMarca: "Rotisseria & Forno",
    marcaAriaLabel: "Sahtein: ir para o início",
    pularConteudo: "Pular para o conteúdo",
    ariaLabel: "Navegação principal",
    ariaLabelMobile: "Navegação mobile",
    // Seções observadas para marcar o item ativo da navbar (ordem de aparição na página)
    secoes: ["inicio", "donos", "historia", "restaurantes", "avaliacao", "visite", "faq", "contato"],
    itens: [
      { id: "donos", rotulo: "A Família" },
      { id: "historia", rotulo: "História" },
      { id: "restaurantes", rotulo: "As Duas Casas" },
      { id: "visite", rotulo: "Como chegar" },
      { id: "faq", rotulo: "Dúvidas" },
      { id: "contato", rotulo: "Contato", destaque: true },
    ],
  },
  hero: {
    eyebrow: "Tradição familiar em Itaipu · Niterói",
    titulo: "Esfiha primeiro. Pizza depois.",
    descricao:
      "Em Itaipu, a mesma família cuida de duas casas na Estrada Francisco da Cruz Nunes: a Sahtein Rotisseria, de cozinha árabe, e o Forno Sahtein, de pizzas artesanais.",
    chamadaDescida: {
      rotulo: "Conheça nossa história",
      ancora: "#donos",
    },
  },
  owners: {
    intro: "A Família",
    titulo: "Conheça os donos",
    tituloDestaque: "donos",
    legendaFoto:
      "A família reunida no salão do Forno Sahtein, em Itaipu — ao fundo, o forno e o monograma que unem nossas duas cozinhas.",
    paragrafo1:
      "Há mais de vinte anos, abrimos a Sahtein Rotisseria em Itaipu para servir as receitas árabes da nossa família: esfiha assada na hora, kibe, shawarma e charuto de folha de uva.",
    paragrafo2:
      "Anos depois, abrimos o Forno Sahtein na mesma estrada, com pizzas artesanais e paninis. Foi o jeito de continuar a história da Rotisseria com outra cozinha.",
    paragrafo3:
      "Hoje dá para começar o jantar com uma esfiha na Rotisseria e terminar com uma pizza de pistache no Forno. São duas cozinhas, tocadas pela mesma família.",
    linksRestaurantes: [
      {
        nome: "Sahtein Rotisseria",
        cozinha: "Cozinha Árabe · A origem da família",
        ancora: "#sahtein-rotisseria",
        classe: "link-arabic",
      },
      {
        nome: "Forno Sahtein",
        cozinha: "Cozinha Italiana · Pizzas & Paninis",
        ancora: "#forno-sahtein",
        classe: "link-italian",
      },
    ],
  },
  history: {
    intro: "A história",
    titulo: "De um restaurante a dois",
    tituloDestaque: "dois",
    origemNome: {
      rotulo: "O nome da família",
      arabe: "صحتين",
      transliteracao: "Sahtein",
      traducao: "“Saúde em dobro”",
      explicacao:
        "Saudação árabe dita à mesa antes de comer para desejar bom apetite e mesa farta a quem divide a refeição. Escolhemos a palavra para batizar primeiro a Sahtein Rotisseria e, anos depois, o Forno Sahtein — mantendo o mesmo voto de hospitalidade nas duas cozinhas.", // TODO: confirmar com a família a história exata da escolha do nome
    },
    itens: [
      {
        periodo: "O início",
        titulo: "Sahtein Rotisseria",
        texto:
          "Sob o nome Sahtein (“saúde em dobro” em árabe), a família abriu a Rotisseria em Itaipu para servir receitas de casa: esfiha aberta na hora, kibe, shawarma e charuto de folha de uva.",
      },
      {
        periodo: "A expansão",
        titulo: "Nasce o Forno Sahtein",
        texto:
          "A família abriu o Forno Sahtein na mesma Estrada Francisco da Cruz Nunes, levando o mesmo nome para as pizzas artesanais e paninis.",
      },
      {
        periodo: "Atualmente",
        titulo: "Duas casas na mesma estrada",
        texto:
          "A Rotisseria abre de terça a sábado, das 16h às 22h. O Forno abre de terça a domingo, das 11h às 23h.",
      },
    ],
  },
  arabic: {
    id: "sahtein-rotisseria",
    capitulo: "Primeira Casa · A Origem",
    nome: "Sahtein Rotisseria",
    intro: "Sahtein Rotisseria · Cozinha Árabe",
    titulo: "Onde a família começou",
    subTitulo:
      "A Sahtein Rotisseria é onde tudo começou. Da cozinha saem esfihas assadas na hora, kibe de forno, shawarma e charutos de folha de uva, todos receitas da família. O cardápio ainda tem mini kibe, torre de kibe cru e ninhos de Galak, KitKat e Kinder Bueno.",
    menu: "Shawarma · Kibe de forno · Charutos de folha de uva",
    info: {
      endereco: "Estr. Francisco da Cruz Nunes, 1874 B - Itaipu, Niterói - RJ",
      linkMapa:
        "https://www.google.com/maps/search/?api=1&query=Sahtein+Rotisseria+Estr.+Francisco+da+Cruz+Nunes+1874+B+Itaipu+Niteroi",
      horario: "Terça a sábado, das 16h às 22h",
      telefone: "(21) 97301-1881",
    },
    textoBotaoPrimario: "Visitar Sahtein Rotisseria",
    textoBotaoSecundario: "Ver cardápio árabe",
    linkRestaurante: "https://sahteinrotisseria.com.br",
    linkMenu: "https://sahteinrotisseria.com.br",
  },
  italian: {
    id: "forno-sahtein",
    capitulo: "Segunda Casa · A Expansão",
    nome: "Forno Sahtein",
    intro: "Forno Sahtein · Cozinha Italiana",
    titulo: "Pizza artesanal, direto do forno",
    subTitulo:
      "O Forno Sahtein é a segunda casa da família, na mesma estrada da Rotisseria. As pizzas são artesanais, com sabores como salmão, camarão, calabresa e pistache, e o cardápio também tem paninis.",
    menu: "Pizza de salmão · Pizza de camarão · Pizza de calabresa · Pizza de pistache · Pizza de KitKat",
    info: {
      endereco: "Estr. Francisco da Cruz Nunes, 1980 A - Itaipu, Niterói - RJ",
      linkMapa:
        "https://www.google.com/maps/search/?api=1&query=Forno+Sahtein+Estr.+Francisco+da+Cruz+Nunes+1980+A+Itaipu+Niteroi",
      horario: "Terça a domingo, das 11h às 23h",
      telefone: "(21) 97301-1881",
    },
    textoBotaoPrimario: "Visitar Forno Sahtein",
    textoBotaoSecundario: "Ver cardápio italiano",
    linkRestaurante: "https://cardapio.takeat.app/fornosahtein",
    linkMenu: "https://cardapio.takeat.app/fornosahtein",
  },
  reviews: {
    intro: "Avaliações",
    titulo: "O que clientes dizem no Google",
    introducao: "Depoimentos reais de quem já visitou a Sahtein Rotisseria e o Forno Sahtein em Itaipu.",
    listaAriaLabel: "Depoimentos de visitantes",
    lerMaisLabel: "Ler mais",
    lerMenosLabel: "Ler menos",
    convite: "Já foi a uma das casas? Conte como foi no Google.",
    avaliarLink: "Avaliar {restaurant} no Google",
    notaLabel: "Nota {rating} de 5",
    perfisGoogle: [
      {
        restaurant: "Sahtein Rotisseria",
        url: "https://www.google.com/maps/search/?api=1&query=Sahtein+Rotisseria+Itaipu+Niteroi",
      },
      {
        restaurant: "Forno Sahtein",
        url: "https://www.google.com/maps/search/?api=1&query=Forno+Sahtein+Itaipu+Niteroi",
      },
    ],
    avaliacoes: [
      {
        text: "Uma das melhores comidas árabes que já provei em qualquer lugar do mundo, verdadeiramente excepcional. A comida não ficaria deslocada em nenhum grande destino gastronômico do mundo: Paris, Singapura, Tóquio ou qualquer outro lugar. Ouso dizer que é o melhor restaurante de Niterói? Ainda não comi nada melhor enquanto moro aqui. Muito obrigado, gente!",
        author: "Charlie Matthews",
        restaurant: "Sahtein Rotisseria",
        rating: 5,
        source: "Google · 4 meses atrás",
      },
      {
        text: "Pizza maravilhosa! Pedimos de frango cremoso e calabresa, uma delícia. Uma pizza atende bem um casal. No árabe já arrebentavam e na pizza estão oh 👌🏻 💜",
        author: "Priscila Moraes",
        restaurant: "Forno Sahtein",
        rating: 5,
        source: "Google · um mês atrás",
      },
      {
        text: "Conheci hoje e já virei cliente! Comida maravilhosa, sobremesas diferentes e sensacionais. Todos que nos atenderam foram muito atenciosos e simpáticos. Vou voltar sempre!!!",
        author: "Carla Sodré",
        restaurant: "Sahtein Rotisseria",
        rating: 5,
        source: "Google · 7 meses atrás",
      },
    ],
  },
  visit: {
    intro: "Visite-nos em Itaipu",
    titulo: "Como chegar às duas casas",
    tituloDestaque: "duas casas",
    descricao:
      "A Sahtein Rotisseria e o Forno Sahtein ficam na mesma Estrada Francisco da Cruz Nunes, em Itaipu (Niterói), a cerca de 100 metros uma da outra. Escolha por qual cozinha começar.",
    mapaAriaLabel: " Seleção de mapa das unidades Sahtein em Itaipu",
    casas: [
      {
        id: "rotisseria",
        modificador: "arabic",
        cozinha: "Cozinha Árabe · Unidade 1874 B",
        nome: "Sahtein Rotisseria",
        endereco: "Estr. Francisco da Cruz Nunes, 1874 B - Itaipu, Niterói - RJ",
        referencia: "Na via principal de Itaipu, a ~100 m do Forno Sahtein", // TODO: confirmar ponto de referência exato em frente à loja
        horario: "Terça a sábado, das 16h às 22h",
        folga: "Fechado aos domingos e segundas-feiras", // TODO: confirmar dias de fechamento da Rotisseria
        telefone: "(21) 97301-1881",
        whatsappUrl:
          "https://wa.me/5521973011881?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Sahtein%20Rotisseria.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Sahtein+Rotisseria+Estr.+Francisco+da+Cruz+Nunes+1874+B+Itaipu+Niteroi",
        wazeUrl:
          "https://waze.com/ul?q=Estr.%20Francisco%20da%20Cruz%20Nunes%2C%201874%20B%20-%20Itaipu%2C%20Niter%C3%B3i%20-%20RJ&navigate=yes",
        embedUrl:
          "https://www.google.com/maps?q=Estr.+Francisco+da+Cruz+Nunes,+1874+B+-+Itaipu,+Niteroi+-+RJ&z=17&output=embed",
      },
      {
        id: "forno",
        modificador: "italian",
        cozinha: "Cozinha Italiana · Unidade 1980 A",
        nome: "Forno Sahtein",
        endereco: "Estr. Francisco da Cruz Nunes, 1980 A - Itaipu, Niterói - RJ",
        referencia: "Na mesma Estrada Francisco da Cruz Nunes da Rotisseria", // TODO: confirmar ponto de referência exato em frente à loja
        horario: "Terça a domingo, das 11h às 23h",
        folga: "Fechado às segundas-feiras", // TODO: confirmar se abre em feriados às segundas
        telefone: "(21) 97301-1881",
        whatsappUrl:
          "https://wa.me/5521973011881?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Forno%20Sahtein.",
        mapsUrl:
          "https://www.google.com/maps/search/?api=1&query=Forno+Sahtein+Estr.+Francisco+da+Cruz+Nunes+1980+A+Itaipu+Niteroi",
        wazeUrl:
          "https://waze.com/ul?q=Estr.%20Francisco%20da%20Cruz%20Nunes%2C%201980%20A%20-%20Itaipu%2C%20Niter%C3%B3i%20-%20RJ&navigate=yes",
        embedUrl:
          "https://www.google.com/maps?q=Estr.+Francisco+da+Cruz+Nunes,+1980+A+-+Itaipu,+Niteroi+-+RJ&z=17&output=embed",
      },
    ],
    informacoesPraticas: [
      {
        id: "estacionamento",
        titulo: "Estacionamento",
        texto:
          "Há vagas de rua ao longo da Estrada Francisco da Cruz Nunes e nas vias laterais próximas aos números 1874 B e 1980 A.", // TODO: confirmar se alguma das unidades possui vagas próprias no recuo ou convênio
      },
      {
        id: "acessibilidade",
        titulo: "Acessibilidade e acesso",
        texto:
          "Ambas as casas ficam no piso térreo, com acesso direto pela calçada e circulação para cadeira de rodas e carrinhos de bebê.", // TODO: confirmar detalhes de rampa e banheiro adaptado em cada unidade
      },
      {
        id: "distancia",
        titulo: "Uma ao lado da outra",
        texto:
          "As duas cozinhas ficam a menos de 2 minutos de caminhada na mesma estrada — dá para buscar esfihas em uma e jantar pizza na outra.",
      },
    ],
  },
  faq: {
    intro: "Perguntas frequentes",
    titulo: "Dúvidas antes de vir à mesa",
    tituloDestaque: "mesa",
    descricao:
      "Reunimos as respostas rápidas sobre funcionamento, estrutura para famílias, reservas e pedidos nas duas casas.",
    itens: [
      {
        id: "reservas-atraso",
        escopo: "Ambas as casas",
        pergunta: "Preciso reservar mesa ou o atendimento é por ordem de chegada?",
        resposta:
          "Atendemos normalmente por ordem de chegada nas duas unidades. Se preferir garantir mesa para um horário específico, chame nossa equipe pelo WhatsApp com antecedência. Pedimos apenas que avise pelo WhatsApp caso haja atraso superior a 15 minutos ou necessidade de cancelamento.", // TODO: confirmar tempo exato de tolerância de reserva
      },
      {
        id: "grupos-grandes",
        escopo: "Comemorações",
        pergunta: "Vocês recebem grupos grandes e aniversários?",
        resposta:
          "Sim! Tanto a Sahtein Rotisseria quanto o Forno Sahtein recebem famílias e comemorações. Para mesas acima de 6 pessoas, recomendamos enviar mensagem no WhatsApp no dia anterior para organizarmos o espaço com conforto.", // TODO: confirmar número máximo de pessoas por reserva de grupo
      },
      {
        id: "criancas-cadeirinha",
        escopo: "Família",
        pergunta: "Há estrutura para crianças e cadeirinha infantil?",
        resposta:
          "Sim, o ambiente das duas casas é familiar, com espaço para carrinhos de bebê, cadeirinha infantil e opções no cardápio que as crianças adoram — como mini kibes, esfihas abertas, pizzas tradicionais e os ninhos e pizzas doces.", // TODO: confirmar quantidade de cadeirinhas disponíveis por casa
      },
      {
        id: "pets",
        escopo: "Pet friendly",
        pergunta: "Posso levar meu pet (animal de estimação)?",
        resposta:
          "Pets de estimação tranquilos e na guia são bem-vindos nas áreas externas e mesas próximas à entrada. Se quiser confirmar a disponibilidade de mesa ideal para ir com seu pet, fale conosco pelo WhatsApp antes de sair.", // TODO: confirmar regra exata de áreas pet friendly em cada unidade
      },
      {
        id: "estacionamento-faq",
        escopo: "Como chegar",
        pergunta: "Onde estacionar perto da Rotisseria e do Forno Sahtein?",
        resposta:
          "As duas unidades ficam na Estrada Francisco da Cruz Nunes (nº 1874 B e nº 1980 A), em Itaipu. É possível estacionar ao longo da própria via ou nas ruas transversais adjacentes, a poucos passos da entrada.", // TODO: confirmar se há vagas frontais próprias no recuo das lojas
      },
      {
        id: "delivery-retirada",
        escopo: "Delivery & Retirada",
        pergunta: "Como faço pedido para delivery ou retirada no balcão?",
        resposta:
          "Cada cozinha tem seu cardápio digital próprio para pedidos de delivery e retirada em Itaipu e Região Oceânica: você pode pedir direto pelo site da Sahtein Rotisseria (cozinha árabe) ou pelo cardápio online do Forno Sahtein (pizzas e paninis).",
      },
    ],
    ctaTexto: "Não encontrou sua dúvida? Fale diretamente com a nossa família pelo WhatsApp.",
    ctaRotulo: "Chamar no WhatsApp",
    ctaUrl:
      "https://wa.me/5521973011881?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20restaurantes%20Sahtein.",
  },
  contact: {
    dadosGrupo: {
      nome: "Grupo Sahtein",
      descricao:
        "Duas cozinhas em Itaipu — a Sahtein Rotisseria e o Forno Sahtein — cuidadas pela mesma família.",
      email: "contato@exemplo.com", // TODO: substituir pelo e-mail real do grupo
      telefone: "(21) 97301-1881",
      linkPrivacidade: "#privacidade", // TODO: substituir pela rota ou URL da Política de Privacidade
      linkCreditos: "#creditos", // TODO: substituir pela URL ou identificação dos créditos
    },
    linksRestaurantes: {
      arabe: "https://sahteinrotisseria.com.br",
      italiano: "https://cardapio.takeat.app/fornosahtein",
    },
    redesSociaisGrupo: [
      {
        id: "instagram",
        rotulo: "Instagram",
        url: "#", // TODO: substituir pela URL do Instagram unificado do grupo
        ariaLabel: "Instagram do Grupo Sahtein (abre em nova aba)",
      },
      {
        id: "facebook",
        rotulo: "Facebook",
        url: "#", // TODO: substituir pela URL do Facebook unificado do grupo
        ariaLabel: "Facebook do Grupo Sahtein (abre em nova aba)",
      },
      {
        id: "whatsapp",
        rotulo: "Falar no WhatsApp",
        url: "https://wa.me/5521973011881?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20restaurantes%20Sahtein.",
        ariaLabel: "WhatsApp do Grupo Sahtein (abre em nova aba)",
      },
    ],
    casas: [
      {
        chave: "arabic",
        modificador: "arabic",
        nome: "Sahtein Rotisseria",
        cozinha: "Cozinha Árabe",
        resumo:
          "Esfihas abertas na hora, kibe de forno, shawarma e charutos de folha de uva com receitas da família.",
        destaques: [
          "Shawarma · Kibe de forno · Charutos de folha de uva",
          "Terça a sábado, das 16h às 22h",
        ],
        endereco: "Estr. Francisco da Cruz Nunes, 1874 B - Itaipu, Niterói - RJ",
        linkMapa:
          "https://www.google.com/maps/search/?api=1&query=Sahtein+Rotisseria+Estr.+Francisco+da+Cruz+Nunes+1874+B+Itaipu+Niteroi",
      },
      {
        chave: "italian",
        modificador: "italian",
        nome: "Forno Sahtein",
        cozinha: "Cozinha Italiana",
        resumo:
          "Pizzas artesanais assadas no forno e paninis preparados na mesma estrada da Rotisseria.",
        destaques: [
          "Pizzas artesanais · Paninis · Sabores da casa",
          "Terça a domingo, das 11h às 23h",
        ],
        endereco: "Estr. Francisco da Cruz Nunes, 1980 A - Itaipu, Niterói - RJ",
        linkMapa:
          "https://www.google.com/maps/search/?api=1&query=Forno+Sahtein+Estr.+Francisco+da+Cruz+Nunes+1980+A+Itaipu+Niteroi",
      },
    ],
  },
};
