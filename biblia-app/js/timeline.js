// ============================================================
// CRONOLOGIA BÍBLICA — renderiza a linha do tempo com filtros
// por período e cards expansíveis
// ============================================================
const Timeline = {
  els: {},
  activeFilter: 'todos',

  init() {
    this.els = {
      filters: document.getElementById('timelineFilters'),
      river: document.getElementById('timelineRiver'),
    };
    this.renderFilters();
    this.renderRiver();
  },

  renderFilters() {
    this.els.filters.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.className = 'tl-filter-btn active';
    allBtn.textContent = 'Todos os períodos';
    allBtn.dataset.id = 'todos';
    allBtn.addEventListener('click', () => this.setFilter('todos'));
    this.els.filters.appendChild(allBtn);

    TIMELINE_DATA.forEach(period => {
      const btn = document.createElement('button');
      btn.className = 'tl-filter-btn';
      btn.textContent = period.title;
      btn.dataset.id = period.id;
      btn.addEventListener('click', () => this.setFilter(period.id));
      this.els.filters.appendChild(btn);
    });
  },

  setFilter(id) {
    this.activeFilter = id;
    this.els.filters.querySelectorAll('.tl-filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.id === id);
    });
    this.els.river.querySelectorAll('.tl-era').forEach(el => {
      el.hidden = !(id === 'todos' || el.dataset.id === id);
    });
  },

  renderRiver() {
    this.els.river.innerHTML = '';
    TIMELINE_DATA.forEach((period, i) => {
      const era = document.createElement('div');
      era.className = 'tl-era';
      era.dataset.id = period.id;
      era.setAttribute('data-index', i + 1);

      const booksHtml = period.books.map(b => `<span class="tl-book-chip">${b}</span>`).join('');

      era.innerHTML = `
        <div class="tl-card">
          <div class="tl-card-head">
            <h3>${period.title}</h3>
            <span class="tl-dates">${period.dates}</span>
          </div>
          <p class="tl-summary">${period.summary}</p>
          <div class="tl-detail">
            <p>${period.detail}</p>
            <div class="tl-books">${booksHtml}</div>
          </div>
        </div>
      `;

      era.querySelector('.tl-card').addEventListener('click', () => {
        era.classList.toggle('open');
      });

      this.els.river.appendChild(era);
    });
  }
};
