// ============================================================
// Banco de perguntas do Quiz Bíblico, organizadas por categoria:
// 'at' (Antigo Testamento), 'nt' (Novo Testamento), 'personagens'
// ============================================================
window.QUIZ_QUESTIONS = [
  // ----------------- ANTIGO TESTAMENTO -----------------
  { category: 'at', question: 'Quantos dias Deus levou para criar o mundo, segundo Gênesis?', options: ['6 dias', '7 dias', '5 dias', '40 dias'], answer: 0 },
  { category: 'at', question: 'Qual é o primeiro livro da Bíblia?', options: ['Êxodo', 'Gênesis', 'Levítico', 'Salmos'], answer: 1 },
  { category: 'at', question: 'Quantas pragas Deus enviou sobre o Egito?', options: ['7', '9', '10', '12'], answer: 2 },
  { category: 'at', question: 'Em que monte Moisés recebeu os Dez Mandamentos?', options: ['Monte Sinai', 'Monte Carmelo', 'Monte Ararate', 'Monte Nebo'], answer: 0 },
  { category: 'at', question: 'Quantos anos os israelitas vagaram pelo deserto?', options: ['10 anos', '20 anos', '40 anos', '70 anos'], answer: 2 },
  { category: 'at', question: 'Qual muro caiu após os israelitas marcharem ao seu redor por sete dias?', options: ['Muro de Jericó', 'Muro da Babilônia', 'Muro de Jerusalém', 'Muro de Nínive'], answer: 0 },
  { category: 'at', question: 'Quem sucedeu Moisés na liderança de Israel?', options: ['Calebe', 'Josué', 'Arão', 'Finéias'], answer: 1 },
  { category: 'at', question: 'Qual profeta foi engolido por um grande peixe?', options: ['Elias', 'Jonas', 'Isaías', 'Eliseu'], answer: 1 },
  { category: 'at', question: 'Quantos livros compõem o Antigo Testamento (cânon protestante)?', options: ['27', '39', '46', '66'], answer: 1 },
  { category: 'at', question: 'Qual foi o primeiro rei de Israel?', options: ['Davi', 'Salomão', 'Saul', 'Roboão'], answer: 2 },
  { category: 'at', question: 'Onde o povo de Israel viveu escravizado antes do Êxodo?', options: ['Babilônia', 'Egito', 'Assíria', 'Canaã'], answer: 1 },
  { category: 'at', question: 'Qual livro contém os Dez Mandamentos, além de Êxodo?', options: ['Levítico', 'Números', 'Deuteronômio', 'Josué'], answer: 2 },
  { category: 'at', question: 'Quem construiu a arca para escapar do dilúvio?', options: ['Adão', 'Noé', 'Abraão', 'Ló'], answer: 1 },
  { category: 'at', question: 'Qual era a capital do Reino do Norte, Israel, na maior parte de sua história?', options: ['Jerusalém', 'Samaria', 'Belém', 'Hebrom'], answer: 1 },
  { category: 'at', question: 'Que povo levou Judá ao exílio, destruindo o templo de Jerusalém?', options: ['Assírios', 'Egípcios', 'Babilônios', 'Persas'], answer: 2 },
  { category: 'at', question: 'Qual rei persa autorizou a reconstrução do templo após o exílio?', options: ['Nabucodonosor', 'Dario', 'Ciro', 'Xerxes'], answer: 2 },
  { category: 'at', question: 'Qual é o maior livro em número de capítulos do Antigo Testamento?', options: ['Isaías', 'Salmos', 'Jeremias', 'Ezequiel'], answer: 1 },
  { category: 'at', question: 'Quem foi jogado na cova dos leões por orar a Deus?', options: ['José', 'Daniel', 'Ezequiel', 'Neemias'], answer: 1 },

  // ----------------- NOVO TESTAMENTO -----------------
  { category: 'nt', question: 'Em que cidade Jesus nasceu?', options: ['Nazaré', 'Jerusalém', 'Belém', 'Cafarnaum'], answer: 2 },
  { category: 'nt', question: 'Quantos evangelhos há no Novo Testamento?', options: ['3', '4', '5', '12'], answer: 1 },
  { category: 'nt', question: 'Quantos apóstolos Jesus escolheu?', options: ['7', '10', '12', '70'], answer: 2 },
  { category: 'nt', question: 'Qual apóstolo negou Jesus três vezes?', options: ['João', 'Tiago', 'Pedro', 'André'], answer: 2 },
  { category: 'nt', question: 'Em que festa judaica Jesus foi crucificado?', options: ['Pentecostes', 'Páscoa', 'Tabernáculos', 'Purim'], answer: 1 },
  { category: 'nt', question: 'Qual foi o primeiro milagre público de Jesus, segundo João?', options: ['Multiplicação dos pães', 'Cura de um cego', 'Transformar água em vinho', 'Andar sobre as águas'], answer: 2 },
  { category: 'nt', question: 'Quem escreveu a maior parte das epístolas do Novo Testamento?', options: ['Pedro', 'Paulo', 'Tiago', 'João'], answer: 1 },
  { category: 'nt', question: 'Em que monte Jesus proferiu o famoso sermão que começa com as bem-aventuranças?', options: ['Monte das Oliveiras', 'Monte Sinai', 'Monte da Transfiguração', 'Monte (sermão da montanha)'], answer: 3 },
  { category: 'nt', question: 'Qual livro do Novo Testamento narra a história inicial da igreja após a ascensão de Jesus?', options: ['Romanos', 'Atos dos Apóstolos', 'Apocalipse', 'Hebreus'], answer: 1 },
  { category: 'nt', question: 'Quantos dias após a ressurreição Jesus subiu ao céu, segundo Atos?', options: ['3 dias', '10 dias', '40 dias', '50 dias'], answer: 2 },
  { category: 'nt', question: 'Em que dia o Espírito Santo desceu sobre os discípulos em Jerusalém?', options: ['Páscoa', 'Pentecostes', 'Tabernáculos', 'Dia da Expiação'], answer: 1 },
  { category: 'nt', question: 'Qual é o último livro da Bíblia?', options: ['Judas', 'Hebreus', 'Apocalipse', '3 João'], answer: 2 },
  { category: 'nt', question: 'Quem batizou Jesus no rio Jordão?', options: ['Pedro', 'João Batista', 'Filipe', 'Andres'], answer: 1 },
  { category: 'nt', question: 'Qual apóstolo era cobrador de impostos antes de seguir Jesus?', options: ['Mateus', 'Tomé', 'Bartolomeu', 'Simão'], answer: 0 },
  { category: 'nt', question: 'Onde Paulo teve o encontro que o converteu ao cristianismo?', options: ['Jerusalém', 'Roma', 'Estrada de Damasco', 'Antioquia'], answer: 2 },
  { category: 'nt', question: 'Qual é o número de cartas atribuídas ao apóstolo Paulo no Novo Testamento?', options: ['7', '10', '13', '21'], answer: 2 },

  // ----------------- PERSONAGENS -----------------
  { category: 'personagens', question: 'Quem foi vendido como escravo pelos próprios irmãos e depois se tornou governador do Egito?', options: ['Josué', 'José', 'Jó', 'Judá'], answer: 1 },
  { category: 'personagens', question: 'Quem derrotou o gigante Golias com uma funda e uma pedra?', options: ['Saul', 'Davi', 'Jônatas', 'Sansão'], answer: 1 },
  { category: 'personagens', question: 'Qual mulher escondeu os espias israelitas em Jericó?', options: ['Débora', 'Rute', 'Raabe', 'Ester'], answer: 2 },
  { category: 'personagens', question: 'Quem teve sua força ligada aos cabelos e foi traído por Dalila?', options: ['Sansão', 'Gideão', 'Ezequias', 'Boaz'], answer: 0 },
  { category: 'personagens', question: 'Qual rainha judia salvou seu povo de um extermínio no império persa?', options: ['Ester', 'Atalia', 'Jezabel', 'Sara'], answer: 0 },
  { category: 'personagens', question: 'Quem é considerado o "pai da fé", chamado por Deus a deixar sua terra?', options: ['Isaque', 'Jacó', 'Abraão', 'Ló'], answer: 2 },
  { category: 'personagens', question: 'Qual profeta enfrentou os profetas de Baal no Monte Carmelo?', options: ['Eliseu', 'Elias', 'Amós', 'Isaías'], answer: 1 },
  { category: 'personagens', question: 'Quem foi o rei mais sábio de Israel, autor de parte de Provérbios?', options: ['Davi', 'Salomão', 'Ezequias', 'Josias'], answer: 1 },
  { category: 'personagens', question: 'Qual discípulo duvidou da ressurreição até tocar as chagas de Jesus?', options: ['Tomé', 'Filipe', 'Judas Tadeu', 'Simão'], answer: 0 },
  { category: 'personagens', question: 'Quem foi a mãe de Jesus?', options: ['Marta', 'Maria', 'Isabel', 'Ana'], answer: 1 },
  { category: 'personagens', question: 'Qual mulher moabita se tornou bisavó do rei Davi?', options: ['Rute', 'Noemi', 'Orfa', 'Mical'], answer: 0 },
  { category: 'personagens', question: 'Quem foi lançado na fornalha ardente junto com Sadraque e Meseque?', options: ['Abednego', 'Daniel', 'Baltazar', 'Zorobabel'], answer: 0 },
  { category: 'personagens', question: 'Qual apóstolo era conhecido como "o discípulo amado"?', options: ['Pedro', 'Tiago', 'João', 'André'], answer: 2 },
  { category: 'personagens', question: 'Quem perseguiu os cristãos antes de se converter e se tornar apóstolo?', options: ['Barnabé', 'Paulo (Saulo)', 'Estêvão', 'Timóteo'], answer: 1 },
  { category: 'personagens', question: 'Qual juíza e profetisa liderou Israel antes da monarquia?', options: ['Débora', 'Miriã', 'Hulda', 'Ester'], answer: 0 }
];
