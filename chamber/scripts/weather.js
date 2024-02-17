
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=34.7039&longitude=-118.1481&current=temperature_2m,wind_speed_10m";


const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      
        const currentTemperatureCelsius = data.current.temperature_2m;
        const currentWindSpeed = data.current.wind_speed_10m;

        
        const currentTemperatureFahrenheit = celsiusToFahrenheit(currentTemperatureCelsius);
        
        const weatherInfoContainer = document.querySelector('.weather-info');
        weatherInfoContainer.innerHTML = `
            <div class="temperature"> Current Temp: ${currentTemperatureFahrenheit.toFixed(2)} °F</div>
            <div class="wind-speed"> Wind Speed: ${currentWindSpeed} m/s</div>
            <div class="Location"> Lancaster, CA </div>
        `;

      
    })
    .catch(error => console.error('Error fetching weather data:', error));
