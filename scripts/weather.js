// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL
// Using Current Weather API for San Nicolás, Argentina with your coordinates
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.3309149702017&lon=-60.213933880121644&units=metric&appid=833cfed2902780df868c23d866f97e4b';

// Asynchronous function to fetch weather data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // display on page
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to display weather data on the page
function displayResults(data) {
  // Current temperature
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;

  // Weather icon URL
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Weather description
  let desc = data.weather[0].description;

  // Set icon src and alt
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Set caption text
  captionDesc.textContent = `${desc}`;
}

// Call the fetch function
apiFetch();