/* ===============================
   استيراد البيانات
   =============================== */
import { siteData } from '../data.js';

/* ===============================
   مكوّن العدّاد (Counter)
   =============================== */
export function renderCounter() {

  /* ---------- هيكل القسم ---------- */
  document.querySelector('#us').innerHTML = `
    <section class="page-section">
      <div class="container">

        <div class="section-head reveal">
          <span>Since</span>
          <h2>Us</h2>
          <p>Time passed since the beginning of our relationship.</p>
        </div>

        <div class="counter">

          <div class="stat reveal">
            <strong id="days">0</strong>
            <span>Days</span>
          </div>

          <div class="stat reveal">
            <strong id="hours">0</strong>
            <span>Hours</span>
          </div>

          <div class="stat reveal">
            <strong id="months">0</strong>
            <span>Months</span>
          </div>

        </div>

      </div>
    </section>
  `;

  /* ---------- التشغيل والتحديث التلقائي ---------- */
  updateCounter();
  setInterval(updateCounter, 60000);

}

/* ===============================
   تحديث قيم العدّاد
   =============================== */
function updateCounter() {

  const start   = new Date(siteData.startDate);
  const now     = new Date();
  const diffMs  = Math.max(0, now - start);

  const days    = Math.floor(diffMs / 86_400_000);   // 1000 * 60 * 60 * 24
  const hours   = Math.floor(diffMs / 3_600_000);    // 1000 * 60 * 60

  /* ---------- حساب الأشهر بشكل دقيق ---------- */
  let months = (now.getFullYear() - start.getFullYear()) * 12
             + (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    months--;
  }

  /* ---------- عرض القيم ---------- */
  document.querySelector('#days').textContent   = days.toLocaleString();
  document.querySelector('#hours').textContent  = hours.toLocaleString();
  document.querySelector('#months').textContent = Math.max(0, months).toLocaleString();

}
