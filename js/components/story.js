/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن قسم القصة (Story)
   =============================== */
export function renderStory() {

  /* ---------- بناء بطاقات القصة ---------- */
  const storyCards = siteData.story
    .map((item) => `
      <article class="card reveal">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join('');

  /* ---------- هيكل القسم ---------- */
  document.querySelector('#story').innerHTML = `
    <section class="page-section">
      <div class="container">

        <div class="section-head reveal">
          <span>Where it started</span>
          <h2>Our Story</h2>
          <p>A few words for a story that is still being written.</p>
        </div>

        <div class="story-grid">
          ${storyCards}
        </div>

      </div>
    </section>
  `;

}
