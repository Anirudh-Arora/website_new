/* ============================================================
   MAIN.JS — Anirudh Arora Portfolio  (path-safe version)
   ============================================================ */

/* ── Dark / Light Mode ───────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch(e) {}
}
(function() {
  let saved = 'light';
  try { saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); } catch(e){}
  applyTheme(saved);
})();
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', function() {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
});

/* ── Nav scroll shadow ───────────────────────────────────── */
window.addEventListener('scroll', function() {
  const nav = document.querySelector('.site-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Hamburger ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  const ham  = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-mobile');
  if (!ham || !menu) return;
  ham.addEventListener('click', function() {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      ham.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});

/* ── Scroll Progress Bar ─────────────────────────────────── */
window.addEventListener('scroll', function() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

/* ── Scroll Reveal ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(function(el) {
      el.classList.add('revealed');
    });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(function(el) { obs.observe(el); });
  // expose so dynamic content can reuse
  window._revealObs = obs;
});

/* ── Typing Animation ────────────────────────────────────── */
window.startTyping = function(elementId, phrases, speed, pause, delSpeed) {
  speed    = speed    || 80;
  pause    = pause    || 2200;
  delSpeed = delSpeed || 45;
  var el = document.getElementById(elementId);
  if (!el || !phrases || !phrases.length) return;
  var pi = 0, ci = 0, deleting = false;
  function tick() {
    var cur = phrases[pi];
    if (deleting) { ci--; el.textContent = cur.slice(0, ci); }
    else          { ci++; el.textContent = cur.slice(0, ci); }
    var delay = deleting ? delSpeed : speed;
    if (!deleting && ci === cur.length)      { delay = pause; deleting = true; }
    else if (deleting && ci === 0)           { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 800);
};

/* ── Filter helper (pub + project) ──────────────────────── */
document.addEventListener('DOMContentLoaded', function() {

  /* Publications filter */
  function initPubFilter() {
    document.querySelectorAll('.pub-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.pub-filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        document.querySelectorAll('.pub-card').forEach(function(card) {
          var show = f === 'all' || card.dataset.status === f || card.dataset.type === f;
          card.style.display = show ? '' : 'none';
        });
        var vc = document.getElementById('visible-count');
        if (vc) vc.textContent = document.querySelectorAll('.pub-card:not([style*="none"])').length;
      });
    });
  }

  /* Projects filter */
  function initProjFilter() {
    document.querySelectorAll('.proj-filter-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.proj-filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(function(card) {
          card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
        });
      });
    });
  }

  initPubFilter();
  initProjFilter();
});
