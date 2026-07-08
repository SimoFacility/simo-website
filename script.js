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

// Kontaktformular: mailto per JS (vermeidet Chrome-Warnung bei action="mailto:")
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const leistung = contactForm.querySelector('#leistung').value;
    const nachricht = contactForm.querySelector('#nachricht').value.trim();
    const subject = 'Anfrage über simo-facility.de – ' + leistung;
    const body = 'Name: ' + name + '\nE-Mail: ' + email + '\nGewünschte Leistung: ' + leistung + '\n\nNachricht:\n' + nachricht;
    window.location.href = 'mailto:info@simo-facility.de?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
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
