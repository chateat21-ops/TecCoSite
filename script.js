// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.07}s`;
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));


// ── NAV BORDER ON SCROLL ──
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(255,255,255,0.04)';
});


// ── FORM SUBMIT HANDLER ──
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('button[type=submit]');
  const originalHTML = btn.innerHTML;

  // Success state
  btn.innerHTML = `
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M5 12l5 5L20 7"/>
    </svg>
    Mensagem enviada!
  `;
  btn.style.background = '#29e8a8';
  btn.style.color = '#080c10';
  btn.disabled = true;

  // Reset after 3s
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}


// ── SMOOTH ANCHOR SCROLL (fallback for older browsers) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});