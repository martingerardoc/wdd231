[
  {
    "name": "TechNova Solutions",
    "address": "123 Innovation Drive, Silicon Valley, CA",
    "phone": "(555) 123-4567",
    "website": "https://www.technova.com",
    "image": "./images/technovasolutions.jpeg",
    "membership": 3,
    "description": "Leading IT consulting and software development company."
  },
  {
    "name": "GreenFields Landscaping",
    "address": "456 Garden Ave, Portland, OR",
    "phone": "(555) 234-5678",
    "website": "https://www.greenfieldsland.com",
    "image": "greenfields.png",
    "membership": 2,
    "description": "Eco-friendly landscaping and outdoor design services."
  },
  {
    "name": "SkyNet Security",
    "address": "789 Secure Way, Chicago, IL",
    "phone": "(555) 345-6789",
    "website": "https://www.skynetsec.com",
    "image": "skynet.png",
    "membership": 3,
    "description": "Top-tier cybersecurity solutions for enterprises."
  },
  {
    "name": "BakeMeHappy",
    "address": "321 Cake Blvd, Austin, TX",
    "phone": "(555) 456-7890",
    "website": "https://www.bakemehappy.com",
    "image": "bakemehappy.png",
    "membership": 1,
    "description": "Artisan bakery specializing in gluten-free sweets."
  },
  {
    "name": "EcoMotors",
    "address": "654 Drive Lane, Detroit, MI",
    "phone": "(555) 567-8901",
    "website": "https://www.ecomotors.com",
    "image": "ecomotors.png",
    "membership": 2,
    "description": "Electric car manufacturer committed to sustainability."
  },
  {
    "name": "PixelPerfect Design",
    "address": "987 Art Street, Los Angeles, CA",
    "phone": "(555) 678-9012",
    "website": "https://www.pixelperfect.com",
    "image": "pixelperfect.png",
    "membership": 1,
    "description": "Creative design agency for digital and print media."
  },
  {
    "name": "WaterPure Co.",
    "address": "222 Aqua Road, Miami, FL",
    "phone": "(555) 789-0123",
    "website": "https://www.waterpure.com",
    "image": "waterpure.png",
    "membership": 3,
    "description": "Clean water filtration systems for home and business."
  }
]


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch members data");

    const members = await response.json();
    const container = document.getElementById("members");

    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" class="member-img">
        <h3>${member.name}</h3>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>Membership Level:</strong> ${getMembershipName(member.membership)}</p>
        <p>${member.description}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function getMembershipName(level) {
  switch (level) {
    case 1: return "Member";
    case 2: return "Silver";
    case 3: return "Gold";
    default: return "Unknown";
  }
}

loadMembers();