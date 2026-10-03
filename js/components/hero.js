/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن قسم البطل (Hero)
   =============================== */
export function renderHero() {

  document.querySelector('#home').innerHTML = `
    <section class="hero">
      <div class="container reveal">

        <div class="eyebrow">Our story</div>

        <h1>${siteData.title}</h1>

        <p>${siteData.subtitle}</p>

        <a class="btn" href="#story">Read our story</a>

      </div>
    </section>
  `;

}
