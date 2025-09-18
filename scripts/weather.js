const apiKey = "YOUR_OPENWEATHERMAP_KEY"; // replace with your API key
const city = "San Nicolás,AR"; // your chamber location
const weatherContainer = document.getElementById("weather-data");

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    // Current weather
    const current = data.list[0];
    const temp = current.main.temp.toFixed(1);
    const description = current.weather[0].description;

    // 3-day forecast (every 8th item = ~24h)
    let forecastHTML = "";
    for (let i = 8; i <= 24; i += 8) {
      const day = data.list[i];
      const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      forecastHTML += `<p>${date}: ${day.main.temp.toFixed(1)}°C</p>`;
    }

    weatherContainer.innerHTML = `
      <p><strong>Now:</strong> ${temp}°C, ${description}</p>
      <h3>3-Day Forecast</h3>
      ${forecastHTML}
    `;
  } catch (error) {
    weatherContainer.innerHTML = `<p>Weather data unavailable.</p>`;
  }
}

getWeather();