/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن الخط الزمني (Timeline)
   =============================== */
export function renderTimeline() {

  /* ---------- بناء عناصر الخط الزمني ---------- */
  const timelineItems = siteData.timeline
    .map((item) => `
      <article class="timeline-item reveal">
        <div class="timeline-date">${item.date}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join('');

  /* ---------- هيكل القسم ---------- */
  document.querySelector('#timeline').innerHTML = `
    <section class="page-section">
      <div class="container">

        <div class="section-head reveal">
          <span>Chapter by chapter</span>
          <h2>Timeline</h2>
          <p>The dates and moments that became part of our story.</p>
        </div>

        <div class="timeline">
          ${timelineItems}
        </div>

      </div>
    </section>
  `;

}
