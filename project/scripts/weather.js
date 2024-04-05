const apiKey = 'd37ea842bd5f666f7754bde201845d81';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.4230&lon=86.9223&appid=${apiKey}&units=imperial`;
const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=86.9223&appid=${apiKey}&units=imperial`;

// Function to format date
function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Function to format time
function formatTime(date) {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString('en-US', options);
}

// Function to fetch current weather data
function fetchCurrentWeather() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      const formattedTime = formatTime(currentDate);
      document.getElementById('current-date').innerText = `Today is ${formattedDate}, ${formattedTime}`;

      const currentWeatherInfo = `
        <p><strong>Currently:</strong> ${data.main.temp}°F</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Weather:</strong> ${data.weather[0].main} - ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
      `;
      document.getElementById('current-weather').innerHTML = currentWeatherInfo;
    })
    .catch(error => console.log('Error fetching current weather data:', error));
}

// Function to fetch forecast data for the current day
function fetchForecastCurrentWeather() {
  fetch(apiForecastUrl)
    .then(response => response.json())
    .then(data => {
      const currentDate = new Date();
      const forecastToday = data.list.find(item => {
        const forecastDate = new Date(item.dt * 1000);
        return forecastDate.getDate() === currentDate.getDate();
      });

      const forecastHTML = `
        <p><strong>High:</strong> ${forecastToday.main.temp_max}°F (Forecast) / <strong>Low:</strong> ${forecastToday.main.temp_min}°F (Forecast)</p>
      `;
      document.getElementById('current-weather-forecast').innerHTML = forecastHTML;
    })
    .catch(error => console.log('Error fetching forecasted current weather data:', error));
}

function fetchForecastWeather() {
  fetch(apiForecastUrl)
    .then(response => response.json())
    .then(data => {
      const currentTime = new Date(); // Get current time
      const currentDay = currentTime.getDate(); // Get current day
      const currentHour = currentTime.getHours(); // Get current hour
      const timezoneOffset = currentTime.getTimezoneOffset() * 60; // Get timezone offset in seconds

      const forecastItems = data.list.filter(item => {
        const forecastDate = new Date((item.dt + timezoneOffset) * 1000); // Adjust forecast date with timezone offset
        const forecastDay = forecastDate.getDate(); // Get forecast day
        const forecastHour = forecastDate.getHours(); // Get forecast hour
        return forecastDay !== currentDay && forecastHour === 15; // Filter by date and time (3:00 pm)
      }).slice(0, 3); // Limit to the next 3 days

      forecastItems.forEach((item, index) => {
        const forecastDate = new Date((item.dt + timezoneOffset) * 1000); // Adjust forecast date with timezone offset
        const formattedDate = formatDate(forecastDate);
        const forecastHTML = `
          <div class="forecast-item">
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Temperature:</strong> ${item.main.temp}°F</p>
            <p><strong>Humidity:</strong> ${item.main.humidity}%</p>
            <p><strong>Weather:</strong> ${item.weather[0].main} - ${item.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt="Weather Icon">
          </div>
        `;
        document.getElementById(`day${index + 1}`).innerHTML = forecastHTML; // Start from day1 to display forecast for the consecutive days
      });
    })
    .catch(error => console.log('Error fetching forecast weather data:', error));
}

// Call functions to fetch weather data
fetchCurrentWeather();
fetchForecastCurrentWeather();
fetchForecastWeather();

// Function to fetch current weather data
function fetchCurrentWeatherForMessage() {
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const temperatureValue = data.main.temp_max;
          document.getElementById('temperature-value').textContent = `High Temperature Today: ${temperatureValue}°F`;
          document.getElementById('temperature-message').style.display = 'block'; // Show the temperature message
      })
      .catch(error => console.log('Error fetching current weather data for message:', error));
}

// Function to close the temperature message
function closeTemperatureMessage() {
  document.getElementById('temperature-message').style.display = 'none'; // Hide the temperature message
}

// Call function to fetch current weather data for the message
fetchCurrentWeatherForMessage();
