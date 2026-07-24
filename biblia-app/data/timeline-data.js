// ============================================================
// Cronologia Bíblica — períodos históricos, do Éden ao Apocalipse.
// Datas são aproximações amplamente aceitas, já que a cronologia
// bíblica antiga é debatida entre estudiosos.
// ============================================================
window.TIMELINE_DATA = [
  {
    id: 'criacao',
    title: 'Criação e Origens',
    dates: 'Origens',
    summary: 'A criação do mundo, a queda do homem, o dilúvio e a dispersão das nações.',
    detail: 'Gênesis 1–11 narra a criação do universo e da humanidade, a entrada do pecado no mundo, o dilúvio de Noé e a Torre de Babel, que explica a origem das línguas e povos. É um período sem datação histórica precisa, servindo de pano de fundo teológico para toda a Escritura.',
    books: ['Gênesis 1-11']
  },
  {
    id: 'patriarcas',
    title: 'Período dos Patriarcas',
    dates: 'c. 2100–1800 a.C.',
    summary: 'Abraão, Isaque, Jacó e José — o início da nação de Israel através de uma família.',
    detail: 'Deus chama Abraão para deixar sua terra e promete fazer dele uma grande nação. A história segue por Isaque e Jacó (renomeado Israel) e seus doze filhos, culminando na descida da família para o Egito por meio de José, vendido como escravo e depois exaltado a governador egípcio.',
    books: ['Gênesis 12-50']
  },
  {
    id: 'exodo',
    title: 'Escravidão e Êxodo',
    dates: 'c. 1800–1400 a.C.',
    summary: 'Israel escravizado no Egito, libertado por Moisés e formado como nação no deserto.',
    detail: 'Após séculos de escravidão, Deus levanta Moisés para libertar o povo através de dez pragas e da travessia do Mar Vermelho. No Monte Sinai, Israel recebe a Lei e o tabernáculo é construído. O povo vagueia quarenta anos pelo deserto antes de chegar às fronteiras de Canaã.',
    books: ['Êxodo', 'Levítico', 'Números', 'Deuteronômio']
  },
  {
    id: 'conquista-juizes',
    title: 'Conquista e Juízes',
    dates: 'c. 1400–1050 a.C.',
    summary: 'Josué conquista Canaã; depois, ciclos de infidelidade, opressão e libertação sob juízes.',
    detail: 'Sob a liderança de Josué, as tribos de Israel conquistam e distribuem a terra prometida. Segue-se um período turbulento sem rei, em que o povo repetidamente se afasta de Deus, é oprimido por povos vizinhos e libertado por juízes como Débora, Gideão e Sansão.',
    books: ['Josué', 'Juízes', 'Rute']
  },
  {
    id: 'reino-unido',
    title: 'Reino Unido',
    dates: 'c. 1050–930 a.C.',
    summary: 'Saul, Davi e Salomão governam um Israel unificado, com Jerusalém como capital.',
    detail: 'Israel pede um rei e recebe Saul, sucedido por Davi, que estabelece Jerusalém como capital e centraliza a adoração. Seu filho Salomão constrói o templo e leva o reino ao auge de prosperidade, mas suas alianças e idolatria semeiam a divisão que viria depois.',
    books: ['1-2 Samuel', '1 Reis 1-11', '1 Crônicas', 'Salmos', 'Provérbios', 'Cânticos']
  },
  {
    id: 'reino-dividido',
    title: 'Reino Dividido',
    dates: 'c. 930–586 a.C.',
    summary: 'Israel se divide em Reino do Norte e Reino de Judá; os profetas alertam ambos.',
    detail: 'Após a morte de Salomão, o reino se rompe em Israel (norte, dez tribos) e Judá (sul, capital Jerusalém). Uma sucessão de reis, em sua maioria infiéis, governa enquanto profetas como Elias, Eliseu, Isaías, Oséias, Amós e Miquéias denunciam a idolatria e anunciam o juízo.',
    books: ['1-2 Reis', '2 Crônicas', 'Isaías', 'Jeremias', 'Oséias', 'Amós', 'Miquéias e outros profetas']
  },
  {
    id: 'exilio',
    title: 'Exílio na Babilônia',
    dates: 'c. 586–538 a.C.',
    summary: 'Jerusalém e o templo são destruídos; o povo de Judá é levado cativo para a Babilônia.',
    detail: 'O Reino do Norte já havia caído para a Assíria em 722 a.C. Em 586 a.C., os babilônios destroem Jerusalém e o templo de Salomão, deportando a elite de Judá. É um período de lamento e reflexão, mas também de esperança profética, como nas visões de Ezequiel e Daniel.',
    books: ['Lamentações', 'Ezequiel', 'Daniel']
  },
  {
    id: 'restauracao',
    title: 'Restauração e Pós-Exílio',
    dates: 'c. 538–400 a.C.',
    summary: 'O rei persa Ciro permite o retorno dos judeus; o templo e os muros são reconstruídos.',
    detail: 'Com a ascensão do Império Persa, Ciro autoriza o retorno dos judeus a Jerusalém. Esdras lidera a reforma espiritual e Neemias reconstrói os muros da cidade. Ester narra a preservação do povo judeu na diáspora persa, enquanto os últimos profetas encerram o Antigo Testamento.',
    books: ['Esdras', 'Neemias', 'Ester', 'Ageu', 'Zacarias', 'Malaquias']
  },
  {
    id: 'intertestamentario',
    title: 'Período Intertestamentário',
    dates: 'c. 400–4 a.C.',
    summary: 'Quatrocentos "anos de silêncio" entre o Antigo e o Novo Testamento, sem novos livros bíblicos.',
    detail: 'Nenhum livro do cânon bíblico protestante foi escrito neste período, mas eventos históricos importantes moldaram o mundo em que Jesus nasceria: a helenização sob os gregos, a revolta dos macabeus e a ascensão do Império Romano, que dominava a região no início do Novo Testamento.',
    books: ['Nenhum livro canônico — pano de fundo histórico']
  },
  {
    id: 'ministerio-jesus',
    title: 'Ministério de Jesus',
    dates: 'c. 4 a.C.–30 d.C.',
    summary: 'O nascimento, ministério, morte e ressurreição de Jesus Cristo.',
    detail: 'Jesus nasce em Belém, é batizado por João Batista e inicia um ministério público de ensino, cura e milagres por cerca de três anos. É crucificado em Jerusalém durante a Páscoa judaica e, segundo o testemunho dos evangelhos, ressuscita ao terceiro dia.',
    books: ['Mateus', 'Marcos', 'Lucas', 'João']
  },
  {
    id: 'igreja-primitiva',
    title: 'Igreja Primitiva e Cartas Apostólicas',
    dates: 'c. 30–95 d.C.',
    summary: 'A igreja nasce em Pentecostes e se espalha pelo Império Romano através dos apóstolos.',
    detail: 'Após a ascensão de Jesus, o Espírito Santo desce sobre os discípulos em Pentecostes, e a igreja cristã nasce em Jerusalém. Paulo e outros apóstolos levam o evangelho pelo Mediterrâneo, fundando igrejas e escrevendo cartas que orientam a fé e a prática cristã, encerrando com as visões apocalípticas de João em Patmos.',
    books: ['Atos dos Apóstolos', 'Epístolas paulinas', 'Epístolas gerais', 'Apocalipse']
  }
];
