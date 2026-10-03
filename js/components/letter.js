/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن الرسالة (Letter)
   =============================== */
export function renderLetter() {

  /* ---------- بناء فقرات الرسالة ---------- */
  const paragraphs = siteData.letter
    .map((text) => `<p>${text}</p>`)
    .join('');

  /* ---------- هيكل القسم ---------- */
  document.querySelector('#letter').innerHTML = `
    <section class="page-section">
      <div class="container">

        <div class="section-head reveal">
          <span>For you</span>
          <h2>A Letter</h2>
        </div>

        <article class="letter reveal">
          ${paragraphs}

          <div class="signature">Always, me.</div>
        </article>

      </div>
    </section>
  `;

}
