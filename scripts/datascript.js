// Setting the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Setting the last modified date
document.getElementById("lastModified").textContent = `Last Update: ${document.lastModified}`;

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

async function getMembers() {
  const response = await fetch("data/members.json");
  const members = await response.json();
  displayMembers(members);
}

function displayMembers(members) {
  display.innerHTML = "";
  members.forEach((member) => {
    const section = document.createElement("section");
    section.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership}</p>
      <p>${member.info}</p>
    `;
    display.appendChild(section);
  });
}

getMembers();