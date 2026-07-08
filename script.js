// Header shadow on scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobilePanel = document.getElementById('mobilePanel');
if (navToggle && mobilePanel) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobilePanel.classList.toggle('open');
    document.body.style.overflow = mobilePanel.classList.contains('open') ? 'hidden' : '';
  });
  mobilePanel.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobilePanel.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Only one FAQ item open at a time
document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
