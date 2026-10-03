/* ===============================
   مكوّن شريط التنقل (Navbar)
   =============================== */
export function renderNavbar() {

  /* ---------- هيكل الشريط ---------- */
  document.querySelector('#navbar').innerHTML = `
    <header class="navbar">
      <div class="container nav-inner">
        <a class="logo" href="#home">Our Story</a>

        <button class="menu-btn" aria-label="Open menu">☰</button>

        <nav class="nav-links">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#timeline">Timeline</a>
          <a href="#memories">Memories</a>
          <a href="#letter">Letter</a>
          <a href="#us">Us</a>
        </nav>
      </div>
    </header>
  `;

  /* ---------- عناصر التحكم ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  /* ---------- فتح / إغلاق القائمة ---------- */
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  /* ---------- إغلاق القائمة عند الضغط على رابط ---------- */
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

}
