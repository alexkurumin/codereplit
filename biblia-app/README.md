# Estudando a Bíblia Sagrada

App web local (HTML + CSS + JS puro, sem build, sem backend) para leitura e estudo da Bíblia.

## Como usar
Abra `index.html` num navegador (duplo clique ou "Abrir com" → navegador).
Funciona 100% offline depois de carregado — só a fonte (Google Fonts) precisa de internet na primeira vez.
Todos os dados (progresso, marcador, plano, recordes do quiz) ficam salvos no `localStorage` do navegador, no seu próprio aparelho.

## O que tem dentro
- **Leitura**: os 66 livros da Bíblia (versão Almeida Corrigida Fiel, domínio público), com seletor de livro/capítulo, ajuste de fonte, modo noturno, marcador automático de página e Modo Foco (leitura em tela cheia).
- **Plano de Leitura**: gera um plano de 30, 90, 180 ou 365 dias cobrindo a Bíblia inteira, com checklist diário, sequência (streak) e barra de progresso.
- **Quiz**: perguntas filtráveis por Antigo Testamento, Novo Testamento ou Personagens, com cronômetro e recorde pessoal.
- **Cronologia**: linha do tempo dos 11 grandes períodos bíblicos, com filtros e cards expansíveis.

## Estrutura de arquivos
```
index.html
css/style.css
js/
  storage.js       → camada sobre localStorage
  books-meta.js     → metadados dos 66 livros
  bible-data.js     → texto completo da Bíblia (ACF)
  reader.js         → leitor, fonte, modo noturno, marcador, modo foco
  plans.js          → gerador e acompanhamento do plano de leitura
  quiz.js           → lógica do quiz
  timeline.js        → renderização da cronologia
  app.js            → navegação entre abas
data/
  quiz-questions.js → banco de perguntas do quiz
  timeline-data.js  → períodos da cronologia bíblica
```

## Publicar online (opcional)
Como é só HTML/CSS/JS estático, dá para publicar de graça em serviços como GitHub Pages, Netlify ou Vercel — basta subir a pasta inteira.

## Créditos do texto bíblico
Texto: Almeida Corrigida Fiel (ACF), de domínio público, obtido do repositório aberto
`thiagobodruk/biblia` no GitHub.
