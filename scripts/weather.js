const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');

const apiKey = 'd37ea842bd5f666f7754bde201845d81'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function apiFetch() {
  try {
    const queryString = '?lat=34.6453&lon=-118.2181&units=imperial&appid=' + apiKey;
    const url = apiUrl + queryString;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data); 

      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;

  const description = data.weather.map(event => capitalizeWords(event.description)).join(', ');

  weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

document.addEventListener('DOMContentLoaded', apiFetch);
