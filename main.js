// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navlinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- scroll-spy: highlight current section in nav ----
const sections = document.querySelectorAll('main section, footer.contact');
const navItems = document.querySelectorAll('[data-nav]');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => spy.observe(section));

// ---- topbar shadow/border on scroll ----
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar.style.borderBottomColor = window.scrollY > 8
    ? 'var(--line)'
    : 'var(--line-soft)';
}, { passive: true });
