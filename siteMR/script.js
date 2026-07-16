// ============================================================
// Condomínio Miquéias Rodrigues — interações do site
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const toTop = document.getElementById('toTop');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  // Ano no rodapé
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
      });
    });
  }

  // Marca o link ativo conforme a seção visível
  const sections = document.querySelectorAll('section[id]');
  const setActiveLink = () => {
    let current = sections[0]?.id;
    const offset = 140;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top - offset <= 0) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  // Botão "voltar ao topo"
  const onScroll = () => {
    if (window.scrollY > 500) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
    setActiveLink();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Formulário de contato (demonstração — sem backend)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      formNote.textContent = `Obrigado, ${nome.split(' ')[0]}! Sua mensagem foi registrada e a administração retornará em breve.`;
      form.reset();
    });
  }

  // Revelação suave dos cartões ao rolar a página
  const revealTargets = document.querySelectorAll('.card, .panel-card, .timeline-item, .strip-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
});
