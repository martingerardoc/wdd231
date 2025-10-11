document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // 🧭 Hamburger Menu
  // ================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ================================
  // 🕓 Footer Info
  // ================================
  const yearEl = document.getElementById("year");
  const lastModEl = document.getElementById("lastModified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModEl) lastModEl.textContent = `Last Update: ${document.lastModified}`;

  // ================================
  // 🎠 Carousel logic
  // ================================
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let index = 0;

    function showSlide(i) {
      if (i < 0) index = slides.length - 1;
      else if (i >= slides.length) index = 0;
      else index = i;
      imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => showSlide(index - 1));
      nextBtn.addEventListener('click', () => showSlide(index + 1));
    }

    setInterval(() => showSlide(index + 1), 4000);
  });

  // ================================
  // 💾 Contact Form Storage + Modal
  // ================================
  const form = document.querySelector(".feedback-form");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const topicSelect = document.getElementById("topic");
    const messageBox = document.getElementById("message");

    // Load saved data
    const savedData = JSON.parse(localStorage.getItem("gauchoFormData"));
    if (savedData) {
      nameInput.value = savedData.name || "";
      emailInput.value = savedData.email || "";
      phoneInput.value = savedData.phone || "";
      topicSelect.value = savedData.topic || "";
      messageBox.value = savedData.message || "";
      if (savedData.rating) {
        const selectedRating = document.querySelector(
          `input[name="rating"][value="${savedData.rating}"]`
        );
        if (selectedRating) selectedRating.checked = true;
      }
    }

    // Save automatically on input
    form.addEventListener("input", () => {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        topic: topicSelect.value,
        message: messageBox.value.trim(),
        rating: document.querySelector('input[name="rating"]:checked')?.value || ""
      };
      localStorage.setItem("gauchoFormData", JSON.stringify(formData));
    });

    // Modal setup
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>✅ Thank you!</h2>
        <p>Your feedback has been successfully sent.</p>
      </div>
    `;
    document.body.appendChild(modal);
    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.remove("show");
    });

    // On submit
    form.addEventListener("submit", e => {
      e.preventDefault();
      localStorage.removeItem("gauchoFormData");
      form.reset();
      modal.classList.add("show");
    });
  }

  // ================================
  // 🥩 Specials
  // ================================
  const specialsContainer = document.getElementById("specials-container");
  if (specialsContainer) {
    const specials = [
      { name: "Grilled Ribeye Steak", price: 25, isAvailable: true, emoji: "🥩" },
      { name: "Gaucho Empanadas", price: 12, isAvailable: true, emoji: "🥟" },
      { name: "Choripán with Chimichurri", price: 9, isAvailable: false, emoji: "🌭" },
      { name: "Dulce de Leche Flan", price: 8, isAvailable: true, emoji: "🍮" },
      { name: "Argentine Malbec (Glass)", price: 7, isAvailable: true, emoji: "🍷" }
    ];

    const availableSpecials = specials
      .filter(item => item.isAvailable)
      .map(item => `
        <div class="special-card">
          <h3>${item.emoji} ${item.name}</h3>
          <p>Price: <strong>$${item.price}</strong></p>
        </div>
      `)
      .join("");

    specialsContainer.innerHTML = availableSpecials;
  }

  // ================================
  // 🍽️ Full Menu
  // ================================
  const menuContainer = document.getElementById("menu-container");
  if (menuContainer) {
    const menuItems = [
      { name: "Grilled Ribeye Steak", category: "Main", price: 25, emoji: "🥩" },
      { name: "Gaucho Empanadas", category: "Appetizer", price: 12, emoji: "🥟" },
      { name: "Choripán with Chimichurri", category: "Main", price: 9, emoji: "🌭" },
      { name: "Mixed Green Salad", category: "Side", price: 7, emoji: "🥗" },
      { name: "Dulce de Leche Flan", category: "Dessert", price: 8, emoji: "🍮" },
      { name: "Glass of Argentine Malbec", category: "Drink", price: 7, emoji: "🍷" }
    ];

    const categories = [...new Set(menuItems.map(item => item.category))];

    const fullMenuHTML = categories
      .map(category => {
        const itemsHTML = menuItems
          .filter(item => item.category === category)
          .map(item => `
            <div class="menu-card">
              <h3>${item.emoji} ${item.name}</h3>
              <p>Price: <strong>$${item.price}</strong></p>
            </div>
          `).join("");

        return `
          <section class="menu-category">
            <h2>${category}</h2>
            <div class="menu-category-items">${itemsHTML}</div>
          </section>
        `;
      }).join("");

    menuContainer.innerHTML = fullMenuHTML;
  }
});