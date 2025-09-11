// Setting the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Setting the last modified date
document.getElementById(
  "lastModified"
).textContent = `Last Update: ${document.lastModified}`;

// Courses array
const courses = [
  { name: "CSE 110", type: "CSE", completed: true },
  { name: "WDD 130", type: "WDD", completed: true },
  { name: "CSE 111", type: "CSE", completed: true },
  { name: "CSE 210", type: "CSE", completed: true },
  { name: "WDD 131", type: "WDD", completed: true },
  { name: "WDD 231", type: "WDD", completed: false },
];

// Function to display courses
function displayCourses(courseList) {
  const coursesContainer = document.getElementById("courses");
  coursesContainer.innerHTML = ""; // Clear existing courses
  courseList.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.textContent = course.name;
    courseDiv.className = course.completed ? "completed" : "not-completed";
    coursesContainer.appendChild(courseDiv);
  });
}

// Filter courses based on type
function filterCourses(type) {
  let filteredCourses = courses;
  if (type !== "all") {
    filteredCourses = courses.filter((course) => course.type === type);
  }
  displayCourses(filteredCourses);
}

// Initial display of all courses
displayCourses(courses);

// Menu toggle functionality
const menuButton = document.getElementById("menu");
const navigationList = document.querySelector("ul.navigation");

menuButton.addEventListener("click", () => {
  navigationList.classList.toggle("open");
  menuButton.classList.toggle("open"); // Toggles icon between ☰ and ❎
});
// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll(".buttons button");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.getAttribute("data-type");
    filterCourses(type);
  });
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

// Toggle view
gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

// Load members
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

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;