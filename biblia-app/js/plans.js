// ============================================================
// PLANO DE LEITURA — gera um plano de N dias cobrindo os 1189
// capítulos da Bíblia em ordem canônica, e acompanha o progresso
// ============================================================
const Plans = {
  els: {},
  flatChapters: null, // [{bookIndex, chapter}] para toda a Bíblia
  plan: null,          // {durationDays, startDate, segments: [[{bookIndex,start,end}], ...]}
  progress: null,      // {done: [bool,...]}

  init() {
    this.els = {
      planSetup: document.getElementById('planSetup'),
      planDuration: document.getElementById('planDuration'),
      generatePlanBtn: document.getElementById('generatePlanBtn'),
      planDashboard: document.getElementById('planDashboard'),
      planRingFg: document.getElementById('planRingFg'),
      planPercentLabel: document.getElementById('planPercentLabel'),
      planDaysDone: document.getElementById('planDaysDone'),
      planDaysTotal: document.getElementById('planDaysTotal'),
      planStreak: document.getElementById('planStreak'),
      resetPlanBtn: document.getElementById('resetPlanBtn'),
      planTodayTitle: document.getElementById('planTodayTitle'),
      planTodayReading: document.getElementById('planTodayReading'),
      planTodayDoneBtn: document.getElementById('planTodayDoneBtn'),
      planChecklist: document.getElementById('planChecklist'),
    };

    this.buildFlatChapters();

    this.plan = Store.get('readingPlan', null);
    this.progress = Store.get('readingPlanProgress', null);

    this.bindEvents();

    if (this.plan && this.progress) {
      this.showDashboard();
    } else {
      this.showSetup();
    }
  },

  buildFlatChapters() {
    this.flatChapters = [];
    BOOKS_META.forEach((b, bookIndex) => {
      for (let c = 1; c <= b.chapters; c++) {
        this.flatChapters.push({ bookIndex, chapter: c });
      }
    });
  },

  bindEvents() {
    this.els.generatePlanBtn.addEventListener('click', () => this.generatePlan());
    this.els.resetPlanBtn.addEventListener('click', () => {
      if (confirm('Recomeçar o plano de leitura? Todo o progresso será apagado.')) {
        Store.remove('readingPlan');
        Store.remove('readingPlanProgress');
        this.plan = null;
        this.progress = null;
        this.showSetup();
      }
    });
    this.els.planTodayDoneBtn.addEventListener('click', () => {
      const idx = this.todayIndex();
      this.setDayDone(idx, !this.progress.done[idx]);
    });
  },

  generatePlan() {
    const durationDays = parseInt(this.els.planDuration.value, 10);
    const total = this.flatChapters.length;
    const base = Math.floor(total / durationDays);
    const extra = total % durationDays;

    const segments = [];
    let cursor = 0;
    for (let day = 0; day < durationDays; day++) {
      const size = base + (day < extra ? 1 : 0);
      const dayChapters = this.flatChapters.slice(cursor, cursor + size);
      cursor += size;
      segments.push(this.compressToSegments(dayChapters));
    }

    this.plan = {
      durationDays,
      startDate: new Date().toISOString().slice(0, 10),
      segments
    };
    this.progress = { done: new Array(durationDays).fill(false) };

    Store.set('readingPlan', this.plan);
    Store.set('readingPlanProgress', this.progress);
    this.showDashboard();
  },

  // agrupa capítulos consecutivos do mesmo livro em intervalos legíveis
  compressToSegments(dayChapters) {
    const segs = [];
    dayChapters.forEach(({ bookIndex, chapter }) => {
      const last = segs[segs.length - 1];
      if (last && last.bookIndex === bookIndex && chapter === last.end + 1) {
        last.end = chapter;
      } else {
        segs.push({ bookIndex, start: chapter, end: chapter });
      }
    });
    return segs;
  },

  segmentsLabel(segs) {
    return segs.map(s => {
      const name = BOOKS_META[s.bookIndex].name;
      return s.start === s.end ? `${name} ${s.start}` : `${name} ${s.start}-${s.end}`;
    }).join('; ');
  },

  todayIndex() {
    const start = new Date(this.plan.startDate + 'T00:00:00');
    const now = new Date();
    const diffDays = Math.floor((now - start) / 86400000);
    return Math.min(Math.max(diffDays, 0), this.plan.durationDays - 1);
  },

  setDayDone(index, value) {
    this.progress.done[index] = value;
    Store.set('readingPlanProgress', this.progress);
    this.renderDashboard();
  },

  showSetup() {
    this.els.planSetup.style.display = 'flex';
    this.els.planDashboard.style.display = 'none';
  },

  showDashboard() {
    this.els.planSetup.style.display = 'none';
    this.els.planDashboard.style.display = 'flex';
    this.renderDashboard();
  },

  renderDashboard() {
    const { durationDays, segments } = this.plan;
    const done = this.progress.done;
    const doneCount = done.filter(Boolean).length;
    const pct = Math.round((doneCount / durationDays) * 100);

    const circumference = 2 * Math.PI * 52;
    this.els.planRingFg.style.strokeDasharray = circumference;
    this.els.planRingFg.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    this.els.planPercentLabel.textContent = pct + '%';
    this.els.planDaysDone.textContent = doneCount;
    this.els.planDaysTotal.textContent = durationDays;
    this.els.planStreak.textContent = this.computeStreak();

    const todayIdx = this.todayIndex();
    this.els.planTodayTitle.textContent = `Dia ${todayIdx + 1}`;
    this.els.planTodayReading.textContent = this.segmentsLabel(segments[todayIdx]);
    this.els.planTodayDoneBtn.textContent = done[todayIdx] ? '✓ Dia concluído' : 'Marcar dia como concluído';
    this.els.planTodayDoneBtn.style.background = done[todayIdx] ? 'var(--sage)' : '';

    this.renderChecklist(todayIdx);
  },

  computeStreak() {
    const done = this.progress.done;
    const todayIdx = this.todayIndex();
    let streak = 0;
    for (let i = todayIdx; i >= 0; i--) {
      if (done[i]) streak++;
      else break;
    }
    return streak;
  },

  renderChecklist(todayIdx) {
    const { segments } = this.plan;
    const done = this.progress.done;
    this.els.planChecklist.innerHTML = '';
    segments.forEach((segs, i) => {
      const box = document.createElement('div');
      box.className = 'day-box' + (done[i] ? ' done' : '') + (i === todayIdx ? ' today' : '');
      box.textContent = i + 1;
      box.title = `Dia ${i + 1}: ${this.segmentsLabel(segs)}`;
      box.addEventListener('click', () => this.setDayDone(i, !done[i]));
      this.els.planChecklist.appendChild(box);
    });
  }
};
