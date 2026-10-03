/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن معرض الذكريات (Gallery)
   =============================== */
export function renderGallery() {

  /* ---------- بناء بطاقات الذكريات ---------- */
  const memoryCards = siteData.memories
    .map((item) => `
      <article class="card memory-card reveal">
        <div class="memory-number">${item.number}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join('');

  /* ---------- هيكل القسم ---------- */
  document.querySelector('#memories').innerHTML = `
    <section class="page-section">
      <div class="container">

        <div class="section-head reveal">
          <span>Kept here</span>
          <h2>Memories</h2>
          <p>A small collection of moments we never want to lose.</p>
        </div>

        <div class="memory-grid">
          ${memoryCards}
        </div>

      </div>
    </section>
  `;

}
