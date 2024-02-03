const apiKey = 'E3BZfw6Ub3WLSk0IrGy2BI99iyIJWVVT';
const latitude = 34.686787;
const longitude = -118.154160;
const apiEndpoint = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=imperial&apikey=${apiKey}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const temperature = data.data.timelines[0].intervals[0].values.temperature;
            const condition = data.data.timelines[0].intervals[0].values.weatherCode;
            const location = 'Lancaster, CA';

            const weatherCard = document.querySelector('.weather-card');
            weatherCard.innerHTML = `
                <div class="weather-card-header">
                    <h2>Weather</h2>
                </div>
                <div class="weather-info">
                    <div class="temperature">${temperature}°F</div>
                    <div class="condition">${condition}</div>
                    <div class="location">${location}</div>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
