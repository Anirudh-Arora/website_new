/* ============================================================
   MAIN.JS — Anirudh Arora Portfolio
   Works with content.js (window.CONTENT + window.RENDER)
   Handles: dark mode, nav, hamburger, scroll reveal,
            scroll progress bar, pub/project filters
   ============================================================ */

/* ── Ensure all content visible (override any reveal CSS) ── */
(function() {
  var style = document.createElement('style');
  style.textContent = '[data-reveal],[data-reveal-stagger],[data-reveal="left"],[data-reveal="right"]{opacity:1!important;transform:none!important;transition:none!important;}';
  document.head.appendChild(style);
})();

/* ── Dark / Light Mode ───────────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch(e) {}
}

(function() {
  var saved;
  try { saved = localStorage.getItem('theme'); } catch(e) {}
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
})();

if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
}

/* ── Nav scroll shadow ───────────────────────────────────── */
var siteNav = document.querySelector('.site-nav');
window.addEventListener('scroll', function() {
  if (siteNav) siteNav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Hamburger ───────────────────────────────────────────── */
var hamburger  = document.getElementById('nav-hamburger');
var mobileMenu = document.getElementById('nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Scroll Progress Bar ─────────────────────────────────── */
var progressBar = document.getElementById('scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
  }, { passive: true });
}

/* ── Scroll Reveal ───────────────────────────────────────── */
var _revealObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      _revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

window._revealObs = _revealObs;

document.querySelectorAll('[data-reveal], [data-reveal-stagger], [data-reveal="left"], [data-reveal="right"]').forEach(function(el) {
  _revealObs.observe(el);
});

/* ── Publications Filter ─────────────────────────────────── */
function initPubFilter() {
  var btns  = document.querySelectorAll('.pub-filter-btn');
  var cards = document.querySelectorAll('.pub-card');
  if (!btns.length || !cards.length) return;
  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      btns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      cards.forEach(function(card) {
        var show = f === 'all' || card.dataset.status === f || card.dataset.type === f || card.dataset.year === f;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ── DOM Ready ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initPubFilter();

  /* Typing — uses CONTENT from content.js if available,
     otherwise falls back to old SITE_DATA */
  var phrases = null;
  if (window.CONTENT && CONTENT.typingRoles) {
    phrases = CONTENT.typingRoles;
  } else if (window.SITE_DATA && SITE_DATA.typingRoles) {
    phrases = SITE_DATA.typingRoles;
  }

  if (phrases) {
    var el = document.getElementById('typing-text');
    if (el) {
      var pi = 0, ci = 0, del = false;
      function tick() {
        var cur = phrases[pi];
        if (del) { ci--; el.textContent = cur.slice(0, ci); }
        else     { ci++; el.textContent = cur.slice(0, ci); }
        var d = del ? 45 : 80;
        if (!del && ci === cur.length)  { d = 2200; del = true; }
        else if (del && ci === 0)       { del = false; pi = (pi + 1) % phrases.length; d = 400; }
        setTimeout(tick, d);
      }
      setTimeout(tick, 700);
    }
  }

  /* Re-observe anything rendered dynamically after DOMContentLoaded */
  setTimeout(function() {
    document.querySelectorAll('[data-reveal], [data-reveal-stagger], [data-reveal="left"], [data-reveal="right"]').forEach(function(el) {
      if (!el.classList.contains('revealed')) _revealObs.observe(el);
    });
  }, 300);
});
