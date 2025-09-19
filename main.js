// Nova Landing Page interactions
// - Scroll reveal animations (IntersectionObserver)
// - Mobile nav toggle
// - Dynamic year

(function () {
  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => io.observe(el));

  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    header.style.boxShadow = y > 10 ? '0 6px 20px rgba(0, 0, 0, 0.25)' : 'none';
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '16px';
      nav.style.background = 'rgba(20,20,30,0.95)';
      nav.style.border = '1px solid rgba(255,255,255,0.1)';
      nav.style.padding = '0.5rem';
      nav.style.borderRadius = '12px';
    });
  }

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
