
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=34.686787&longitude=-73.98529171943665&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

// Function to convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Update current weather information
        const currentTemperatureCelsius = data.current.temperature_2m;
        const currentWindSpeed = data.current.wind_speed_10m;

        // Convert Celsius to Fahrenheit
        const currentTemperatureFahrenheit = celsiusToFahrenheit(currentTemperatureCelsius);
        
        const weatherInfoContainer = document.querySelector('.weather-info');
        weatherInfoContainer.innerHTML = `
            <div class="temperature"> Current Temp: ${currentTemperatureFahrenheit.toFixed(2)} °F</div>
            <div class="wind-speed"> Wind Speed: ${currentWindSpeed} m/s</div>
            <div class="Location"> Lancaster, CA </div>
        `;

      
    })
    .catch(error => console.error('Error fetching weather data:', error));
