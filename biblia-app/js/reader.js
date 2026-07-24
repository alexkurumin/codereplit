// ============================================================
// LEITOR — navegação de livros/capítulos, renderização de versículos,
// ajuste de fonte, marcador automático de página e modo foco
// ============================================================
const Reader = {
  OT_COUNT: 39, // primeiros 39 livros = Antigo Testamento

  els: {},
  settings: null,
  currentBookIndex: 0,
  currentChapter: 1, // 1-indexado

  init() {
    this.els = {
      bookSelect: document.getElementById('bookSelect'),
      chapterSelect: document.getElementById('chapterSelect'),
      readerPage: document.getElementById('readerPage'),
      chapterEyebrow: document.getElementById('chapterEyebrow'),
      chapterTitle: document.getElementById('chapterTitle'),
      verseContainer: document.getElementById('verseContainer'),
      progressLabel: document.getElementById('readerProgressLabel'),
      fontMinus: document.getElementById('fontMinus'),
      fontPlus: document.getElementById('fontPlus'),
      bookmarkBtn: document.getElementById('bookmarkBtn'),
      focusModeBtn: document.getElementById('focusModeBtn'),
      focusOverlay: document.getElementById('focusOverlay'),
      focusExitBtn: document.getElementById('focusExitBtn'),
      focusChapterTitle: document.getElementById('focusChapterTitle'),
      focusVerseContainer: document.getElementById('focusVerseContainer'),
      focusPrevBtn: document.getElementById('focusPrevBtn'),
      focusNextBtn: document.getElementById('focusNextBtn'),
      prevChapterBtn: document.getElementById('prevChapterBtn'),
      nextChapterBtn: document.getElementById('nextChapterBtn'),
    };

    this.settings = Store.get('readerSettings', {
      fontSize: 19,
      dark: false,
      lastBookIndex: 0,
      lastChapter: 1
    });

    this.currentBookIndex = this.settings.lastBookIndex || 0;
    this.currentChapter = this.settings.lastChapter || 1;

    this.applyFontSize();
    this.applyDarkMode(this.settings.dark, false);
    this.populateBookSelect();
    this.populateChapterSelect();
    this.render();
    this.bindEvents();
  },

  populateBookSelect() {
    this.els.bookSelect.innerHTML = '';
    const otGroup = document.createElement('optgroup');
    otGroup.label = 'Antigo Testamento';
    const ntGroup = document.createElement('optgroup');
    ntGroup.label = 'Novo Testamento';
    BOOKS_META.forEach((b, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = b.name;
      (i < this.OT_COUNT ? otGroup : ntGroup).appendChild(opt);
    });
    this.els.bookSelect.appendChild(otGroup);
    this.els.bookSelect.appendChild(ntGroup);
    this.els.bookSelect.value = this.currentBookIndex;
  },

  populateChapterSelect() {
    const book = BOOKS_META[this.currentBookIndex];
    this.els.chapterSelect.innerHTML = '';
    for (let c = 1; c <= book.chapters; c++) {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = 'Capítulo ' + c;
      this.els.chapterSelect.appendChild(opt);
    }
    this.els.chapterSelect.value = this.currentChapter;
  },

  bindEvents() {
    this.els.bookSelect.addEventListener('change', () => {
      this.currentBookIndex = parseInt(this.els.bookSelect.value, 10);
      this.currentChapter = 1;
      this.populateChapterSelect();
      this.render();
      this.persistPosition();
    });
    this.els.chapterSelect.addEventListener('change', () => {
      this.currentChapter = parseInt(this.els.chapterSelect.value, 10);
      this.render();
      this.persistPosition();
    });
    this.els.prevChapterBtn.addEventListener('click', () => this.step(-1));
    this.els.nextChapterBtn.addEventListener('click', () => this.step(1));
    this.els.focusPrevBtn.addEventListener('click', () => this.step(-1));
    this.els.focusNextBtn.addEventListener('click', () => this.step(1));

    this.els.fontMinus.addEventListener('click', () => this.changeFontSize(-1));
    this.els.fontPlus.addEventListener('click', () => this.changeFontSize(1));

    this.els.bookmarkBtn.addEventListener('click', () => this.toggleBookmark());

    this.els.focusModeBtn.addEventListener('click', () => this.enterFocusMode());
    this.els.focusExitBtn.addEventListener('click', () => this.exitFocusMode());
  },

  step(delta) {
    const book = BOOKS_META[this.currentBookIndex];
    let newChapter = this.currentChapter + delta;
    if (newChapter < 1) {
      if (this.currentBookIndex === 0) return; // já no início da Bíblia
      this.currentBookIndex -= 1;
      newChapter = BOOKS_META[this.currentBookIndex].chapters;
    } else if (newChapter > book.chapters) {
      if (this.currentBookIndex === BOOKS_META.length - 1) return; // fim da Bíblia
      this.currentBookIndex += 1;
      newChapter = 1;
    }
    this.currentChapter = newChapter;
    this.populateChapterSelect();
    this.els.bookSelect.value = this.currentBookIndex;
    this.render();
    this.persistPosition();
  },

  render() {
    const book = BOOKS_META[this.currentBookIndex];
    const verses = BIBLE_TEXT[book.abbrev][this.currentChapter - 1];
    const isOT = this.currentBookIndex < this.OT_COUNT;
    const titleText = `${book.name} ${this.currentChapter}`;

    this.els.chapterEyebrow.textContent = isOT ? 'Antigo Testamento' : 'Novo Testamento';
    this.els.chapterTitle.textContent = titleText;
    this.els.focusChapterTitle.textContent = titleText;

    const html = verses.map((v, idx) =>
      `<p class="verse"><span class="vnum">${idx + 1}</span><span class="vtext">${this.escapeHtml(v)}</span></p>`
    ).join('');
    this.els.verseContainer.innerHTML = html;
    this.els.focusVerseContainer.innerHTML = html;

    // progresso aproximado na Bíblia (posição do capítulo entre os 1189 capítulos)
    let chaptersBefore = 0;
    for (let i = 0; i < this.currentBookIndex; i++) chaptersBefore += BOOKS_META[i].chapters;
    chaptersBefore += this.currentChapter;
    const totalChapters = BOOKS_META.reduce((s, b) => s + b.chapters, 0);
    const pct = Math.round((chaptersBefore / totalChapters) * 100);
    this.els.progressLabel.textContent = `Capítulo ${chaptersBefore} de ${totalChapters} (${pct}%)`;

    this.updateBookmarkVisual();
    this.els.readerPage.scrollTop = 0;
    if (this.els.focusOverlay.classList.contains('active')) {
      this.els.focusOverlay.scrollTop = 0;
    }
  },

  escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  },

  persistPosition() {
    this.settings.lastBookIndex = this.currentBookIndex;
    this.settings.lastChapter = this.currentChapter;
    Store.set('readerSettings', this.settings);
  },

  changeFontSize(delta) {
    this.settings.fontSize = Math.min(28, Math.max(14, this.settings.fontSize + delta * 1));
    Store.set('readerSettings', this.settings);
    this.applyFontSize();
  },

  applyFontSize() {
    document.documentElement.style.setProperty('--reader-size', this.settings.fontSize + 'px');
  },

  applyDarkMode(isDark, save = true) {
    document.documentElement.classList.toggle('dark', isDark);
    document.getElementById('iconSun').style.display = isDark ? 'none' : 'block';
    document.getElementById('iconMoon').style.display = isDark ? 'block' : 'none';
    if (save) {
      this.settings.dark = isDark;
      Store.set('readerSettings', this.settings);
    }
  },

  toggleBookmark() {
    const bookmark = Store.get('bookmark', null);
    const book = BOOKS_META[this.currentBookIndex];
    const isSame = bookmark && bookmark.abbrev === book.abbrev && bookmark.chapter === this.currentChapter;
    if (isSame) {
      Store.remove('bookmark');
    } else {
      Store.set('bookmark', { abbrev: book.abbrev, chapter: this.currentChapter, bookIndex: this.currentBookIndex });
    }
    this.updateBookmarkVisual();
  },

  updateBookmarkVisual() {
    const bookmark = Store.get('bookmark', null);
    const book = BOOKS_META[this.currentBookIndex];
    const active = bookmark && bookmark.abbrev === book.abbrev && bookmark.chapter === this.currentChapter;
    this.els.readerPage.style.setProperty('--bookmark-visible', active ? 1 : 0);
    this.els.bookmarkBtn.style.color = active ? 'var(--wine)' : '';
  },

  goToBookmark() {
    const bookmark = Store.get('bookmark', null);
    if (!bookmark) return;
    this.currentBookIndex = bookmark.bookIndex;
    this.currentChapter = bookmark.chapter;
    this.els.bookSelect.value = this.currentBookIndex;
    this.populateChapterSelect();
    this.render();
    this.persistPosition();
  },

  goTo(bookIndex, chapter) {
    this.currentBookIndex = bookIndex;
    this.currentChapter = chapter;
    this.els.bookSelect.value = this.currentBookIndex;
    this.populateChapterSelect();
    this.render();
    this.persistPosition();
  },

  enterFocusMode() {
    this.els.focusOverlay.classList.add('active');
  },
  exitFocusMode() {
    this.els.focusOverlay.classList.remove('active');
  }
};
