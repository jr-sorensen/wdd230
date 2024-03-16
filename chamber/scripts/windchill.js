// weather.js

const apiKey = 'd37ea842bd5f666f7754bde201845d81';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=34.6453&lon=-118.2181&appid=${apiKey}`;
const apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=34.6453&lon=-118.2181&appid=${apiKey}`;

// Function to convert temperature from Kelvin to Celsius and Fahrenheit
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to fetch current weather data
async function fetchCurrentWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Extract current weather data
    const temperatureF = celsiusToFahrenheit(kelvinToCelsius(data.main.temp)).toFixed(2);
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const capitalizedDescription = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Display current weather information
    document.querySelector('.temperature').innerHTML = `${temperatureF}°F <img src="${iconUrl}" alt="${capitalizedDescription}" title="${capitalizedDescription}" style="width: 40px; height: 40px;">`;
    document.querySelector('.condition').textContent = capitalizedDescription;
  } catch (error) {
    console.error('Error fetching current weather:', error);
  }
}
// Function to fetch three-day forecast data
// Function to fetch three-day forecast data
// Function to fetch three-day forecast data
async function fetchThreeDayForecast() {
  try {
    const response = await fetch(apiForecastUrl);
    const data = await response.json();

    // Calculate dates for the next three days
    const currentDate = new Date();
    const nextThreeDays = Array.from({ length: 3 }, (_, index) => {
      const date = new Date();
      date.setDate(currentDate.getDate() + index + 1); // Start from tomorrow
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    });

    // Extract forecast data and update HTML
    const forecastDays = data.list.slice(0, 3).map((item, index) => {
      const date = nextThreeDays[index];
      const temperatureF = celsiusToFahrenheit(kelvinToCelsius(item.main.temp)).toFixed(2);
      const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      const capitalizedDescription = item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1);
      return `<div class="forecast-day">
                <p class="day-name">${date} - ${temperatureF}°F <img src="${iconUrl}" alt="${capitalizedDescription}" title="${capitalizedDescription}" style="width: 20px; height: 20px;"</p> 
                
              </div>`;
    });

    // Display forecast days and temperatures
    document.querySelector('.three-day-forecast').innerHTML = forecastDays.join('');
  } catch (error) {
    console.error('Error fetching three-day forecast:', error);
  }
}


  

// Fetch weather data when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchCurrentWeather();
  fetchThreeDayForecast();
});
