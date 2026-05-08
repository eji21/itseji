/* ============================================================
   EDGIE MAE P. BAYLON — PORTFOLIO SCRIPTS
   main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll fade-in observer ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.09 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  /* ── Active nav highlight on scroll ── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile hamburger ── */
  const toggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-links');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ── Contact form send button feedback ── */
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      sendBtn.innerHTML = `
        <svg class="ic" width="16" height="16"><use href="#i-check"/></svg>
        Message sent!
      `;
      sendBtn.style.background = '#1D9E75';
      sendBtn.disabled = true;

      setTimeout(() => {
        sendBtn.innerHTML = `
          <svg class="ic" width="16" height="16"><use href="#i-send"/></svg>
          Send message
        `;
        sendBtn.style.background = '';
        sendBtn.disabled = false;
      }, 3500);
    });
  }

});
