// ============================================================
// APP — navegação entre abas e inicialização dos módulos
// ============================================================
(function () {
  function switchTab(tabName) {
    document.querySelectorAll('.view').forEach(v => {
      v.classList.toggle('active', v.dataset.view === tabName);
    });
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tabName);
    });
  }

  function bindTabBar() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
  }

  function bindDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
      const isDark = !document.documentElement.classList.contains('dark');
      Reader.applyDarkMode(isDark);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    Reader.init();
    Plans.init();
    Quiz.init();
    Timeline.init();
    bindTabBar();
    bindDarkModeToggle();
    switchTab('leitura');
  });
})();
