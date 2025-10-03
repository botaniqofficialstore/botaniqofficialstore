/* basic helpers: reveal on scroll + nav active highlighting + footer year */
document.addEventListener('DOMContentLoaded', () => {
  // footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal elements when they appear (IntersectionObserver)
  const reveals = document.querySelectorAll('.reveal');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // optionally unobserve to avoid repeated triggers
        ro.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => ro.observe(el));

  // Highlight active nav link while scrolling (observe sections)
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === ('#' + id)));
      }
    });
  }, { threshold: 0.55 });

  sections.forEach(s => sectionObserver.observe(s));

  // Smooth scroll fallback for older browsers (links already use CSS smooth behavior)
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', (e) => {
      // optional: close mobile nav if you add one later
      // do nothing special — css 'scroll-behavior: smooth' handles animation
    });
  });

});



