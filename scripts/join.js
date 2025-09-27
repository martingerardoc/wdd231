// Year & last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

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