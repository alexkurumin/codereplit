// ============================================================
// QUIZ BÍBLICO — perguntas filtradas por categoria, cronômetro,
// pontuação e recorde pessoal salvos em localStorage
// ============================================================
const Quiz = {
  QUESTIONS_PER_ROUND: 10,
  els: {},
  pool: [],
  order: [],
  currentIndex: 0,
  score: 0,
  timerInterval: null,
  elapsedSeconds: 0,
  category: 'todas',
  highScores: null,

  init() {
    this.els = {
      quizIntro: document.getElementById('quizIntro'),
      quizPlay: document.getElementById('quizPlay'),
      quizResult: document.getElementById('quizResult'),
      quizCategory: document.getElementById('quizCategory'),
      startQuizBtn: document.getElementById('startQuizBtn'),
      quizHighScoreLabel: document.getElementById('quizHighScoreLabel'),
      quizProgressLabel: document.getElementById('quizProgressLabel'),
      quizTimer: document.getElementById('quizTimer'),
      quizScoreLabel: document.getElementById('quizScoreLabel'),
      quizQuestionText: document.getElementById('quizQuestionText'),
      quizOptions: document.getElementById('quizOptions'),
      quizNextBtn: document.getElementById('quizNextBtn'),
      quizResultTitle: document.getElementById('quizResultTitle'),
      quizResultDetail: document.getElementById('quizResultDetail'),
      quizPlayAgainBtn: document.getElementById('quizPlayAgainBtn'),
    };

    this.highScores = Store.get('quizHighScores', {});

    this.els.quizCategory.addEventListener('change', () => {
      this.category = this.els.quizCategory.value;
      this.updateHighScoreLabel();
    });
    this.els.startQuizBtn.addEventListener('click', () => this.startQuiz());
    this.els.quizNextBtn.addEventListener('click', () => this.nextQuestion());
    this.els.quizPlayAgainBtn.addEventListener('click', () => this.showIntro());

    this.updateHighScoreLabel();
  },

  updateHighScoreLabel() {
    const best = this.highScores[this.category] || 0;
    this.els.quizHighScoreLabel.textContent = best;
  },

  startQuiz() {
    this.category = this.els.quizCategory.value;
    this.pool = this.category === 'todas'
      ? QUIZ_QUESTIONS.slice()
      : QUIZ_QUESTIONS.filter(q => q.category === this.category);

    this.order = this.shuffle(this.pool).slice(0, Math.min(this.QUESTIONS_PER_ROUND, this.pool.length));
    this.currentIndex = 0;
    this.score = 0;
    this.elapsedSeconds = 0;

    this.els.quizIntro.style.display = 'none';
    this.els.quizResult.style.display = 'none';
    this.els.quizPlay.style.display = 'block';

    this.startTimer();
    this.renderQuestion();
  },

  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  startTimer() {
    clearInterval(this.timerInterval);
    this.updateTimerLabel();
    this.timerInterval = setInterval(() => {
      this.elapsedSeconds++;
      this.updateTimerLabel();
    }, 1000);
  },

  updateTimerLabel() {
    const m = Math.floor(this.elapsedSeconds / 60).toString().padStart(2, '0');
    const s = (this.elapsedSeconds % 60).toString().padStart(2, '0');
    this.els.quizTimer.textContent = `${m}:${s}`;
  },

  renderQuestion() {
    const q = this.order[this.currentIndex];
    this.els.quizProgressLabel.textContent = `Pergunta ${this.currentIndex + 1}/${this.order.length}`;
    this.els.quizScoreLabel.textContent = `${this.score} pts`;
    this.els.quizQuestionText.textContent = q.question;
    this.els.quizOptions.innerHTML = '';
    this.els.quizNextBtn.style.display = 'none';

    q.options.forEach((optText, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = optText;
      btn.addEventListener('click', () => this.answer(i));
      this.els.quizOptions.appendChild(btn);
    });
  },

  answer(selectedIndex) {
    const q = this.order[this.currentIndex];
    const buttons = this.els.quizOptions.querySelectorAll('.quiz-option');
    buttons.forEach((btn, i) => {
      btn.setAttribute('disabled', 'true');
      if (i === q.answer) btn.classList.add('correct');
      else if (i === selectedIndex) btn.classList.add('wrong');
    });
    if (selectedIndex === q.answer) {
      this.score += 10;
      this.els.quizScoreLabel.textContent = `${this.score} pts`;
    }
    this.els.quizNextBtn.style.display = 'block';
    this.els.quizNextBtn.textContent = (this.currentIndex === this.order.length - 1) ? 'Ver resultado' : 'Próxima pergunta';
  },

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.order.length) {
      this.finishQuiz();
    } else {
      this.renderQuestion();
    }
  },

  finishQuiz() {
    clearInterval(this.timerInterval);
    this.els.quizPlay.style.display = 'none';
    this.els.quizResult.style.display = 'block';

    const best = this.highScores[this.category] || 0;
    const isNewRecord = this.score > best;
    if (isNewRecord) {
      this.highScores[this.category] = this.score;
      Store.set('quizHighScores', this.highScores);
    }

    this.els.quizResultTitle.textContent = isNewRecord
      ? `Novo recorde! ${this.score} pts 🎉`
      : `Você fez ${this.score} pts`;
    this.els.quizResultDetail.textContent =
      `Tempo total: ${this.els.quizTimer.textContent} · Recorde pessoal: ${Math.max(best, this.score)} pts`;

    this.updateHighScoreLabel();
  },

  showIntro() {
    this.els.quizResult.style.display = 'none';
    this.els.quizPlay.style.display = 'none';
    this.els.quizIntro.style.display = 'flex';
    this.updateHighScoreLabel();
  }
};
