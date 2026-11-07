export const dadosDoSite = {
  nav: {
    marca: "Sahtein",
    marcaAriaLabel: "Sahtein: ir para o início",
    pularConteudo: "Pular para o conteúdo",
    ariaLabel: "Navegação principal",
    ariaLabelMobile: "Navegação mobile",
    // Seções observadas para marcar o item ativo da navbar (ordem de aparição na página)
    secoes: ["inicio", "donos", "historia", "restaurantes", "avaliacao", "contato"],
    itens: [
      { id: "donos", rotulo: "Os donos" },
      { id: "historia", rotulo: "História" },
      { id: "restaurantes", rotulo: "Restaurantes" },
      { id: "contato", rotulo: "Contato", destaque: true },
    ],
  },
  hero: {
    titulo: "Esfiha primeiro. Pizza depois.",
    descricao:
      "Em Itaipu, a mesma família cuida de duas casas na Estrada Francisco da Cruz Nunes: a Sahtein Rotisseria, de cozinha árabe, e o Forno Sahtein, de pizzas artesanais.",
  },
  owners: {
    intro: "A Família",
    titulo: "Conheça os donos",
    tituloDestaque: "donos",
    paragrafo1:
      "Há mais de vinte anos, abrimos a Sahtein Rotisseria em Itaipu para servir as receitas árabes da nossa família: esfiha assada na hora, kibe, shawarma e charuto de folha de uva.",
    paragrafo2:
      "Anos depois, abrimos o Forno Sahtein na mesma estrada, com pizzas artesanais e paninis. Foi o jeito de continuar a história da Rotisseria com outra cozinha.",
    paragrafo3:
      "Hoje dá para começar o jantar com uma esfiha na Rotisseria e terminar com uma pizza de pistache no Forno. São duas cozinhas, tocadas pela mesma família.",
    linksRestaurantes: [
      {
        nome: "Sahtein Rotisseria (Cozinha Árabe)",
        ancora: "#sahtein-rotisseria",
        classe: "link-arabic",
      },
      {
        nome: "Forno Sahtein (Cozinha Italiana)",
        ancora: "#forno-sahtein",
        classe: "link-italian",
      },
    ],
  },
  history: {
    intro: "A história",
    titulo: "De um restaurante a dois",
    tituloDestaque: "dois",
    itens: [
      {
        periodo: "O início",
        titulo: "Sahtein Rotisseria",
        texto:
          "A Sahtein Rotisseria abriu em Itaipu com as receitas árabes da família: esfiha aberta, kibe, shawarma e charuto de folha de uva.",
      },
      {
        periodo: "A expansão",
        titulo: "Nasce o Forno Sahtein",
        texto:
          "A família abriu o Forno Sahtein na mesma Estrada Francisco da Cruz Nunes, com pizzas artesanais e paninis.",
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
        url: "#", // TODO: substituir pela URL do Instagram unificado do grupo
        ariaLabel: "Instagram do Grupo Sahtein (abre em nova aba)",
      },
      {
        id: "facebook",
        url: "#", // TODO: substituir pela URL do Facebook unificado do grupo
        ariaLabel: "Facebook do Grupo Sahtein (abre em nova aba)",
      },
      {
        id: "whatsapp",
        url: "#", // TODO: substituir pelo link wa.me oficial do grupo
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
