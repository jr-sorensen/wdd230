const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=34.7039&longitude=-118.1481&current=temperature_2m,wind_speed_10m";

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;


const calculateWindChill = (temperature, windSpeed) => {
    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + " °F";
    } else {
        return "N/A";
    }
};

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const currentTemperatureCelsius = data.current.temperature_2m;
        const currentWindSpeed = data.current.wind_speed_10m;
        
        const currentTemperatureFahrenheit = celsiusToFahrenheit(currentTemperatureCelsius);
        
        const windChillValue = calculateWindChill(currentTemperatureFahrenheit, currentWindSpeed);

    
        const weatherInfoContainer = document.querySelector('.weather-info');
        weatherInfoContainer.innerHTML = `
            <div class="temperature"> Current Temp: ${currentTemperatureFahrenheit.toFixed(2)} °F</div>
            <div class="wind-speed"> Wind Speed: ${currentWindSpeed} m/s</div>
            <div class="wind-chill"> Wind Chill: ${windChillValue}</div>
            <div class="Location"> Lancaster, CA </div>
        `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
