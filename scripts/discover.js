async function loadDiscoverData() {
  try {
    const response = await fetch("/wdd231/chamber/data/discover.json");
    const items = await response.json();
    const container = document.getElementById("discover-cards");

    items.forEach(item => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" width="300" height="200">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading discover data:", error);
  }
}

loadDiscoverData();