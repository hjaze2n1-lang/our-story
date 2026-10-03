/* ===============================
   استيراد المكوّنات
   =============================== */
import { renderNavbar }   from './components/navbar.js';
import { renderFooter }   from './components/footer.js';
import { renderHero }     from './components/hero.js';
import { renderStory }    from './components/story.js';
import { renderTimeline } from './components/timeline.js';
import { renderGallery }  from './components/gallery.js';
import { renderCounter }  from './components/counter.js';
import { renderLetter }   from './components/letter.js';

/* ===============================
   دوال التهيئة والعرض
   =============================== */
function initLayout() {
  renderNavbar();
  renderHero();
  renderStory();
  renderTimeline();
  renderGallery();
  renderLetter();
  renderCounter();
  renderFooter();
}

/* ===============================
   تأثير الظهور عند التمرير
   =============================== */
function initRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll('.reveal')
    .forEach((el) => observer.observe(el));
}

/* ===============================
   نقطة البداية
   =============================== */
function init() {
  initLayout();
  initRevealOnScroll();
}

init();
