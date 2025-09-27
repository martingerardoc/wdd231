// Setting the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Setting the last modified date
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

 // Mobile nav toggle
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });