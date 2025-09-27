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

// Set timestamp hidden field
    document.getElementById("timestamp").value = new Date().toLocaleString();

    // Modal logic
    const modalLinks = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".modal");
    const closes = document.querySelectorAll(".close");

    modalLinks.forEach(link => {
      link.addEventListener("click", () => {
        document.getElementById(link.dataset.modal).style.display = "flex";
      });
    });

    closes.forEach(btn => {
      btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
      });
    });

    window.addEventListener("click", e => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
      }
    });