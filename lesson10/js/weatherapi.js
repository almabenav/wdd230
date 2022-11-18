const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = '//api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=c3e03e142bc240cc1eac2f7fdabc06c3&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    let capDesc = "";
    for (let i = 0; i < desc.length; i++) {
        if (desc[i-1] == " " || desc[i] == desc[0]) {
            capDesc += desc[i].toUpperCase();
        } else {
            capDesc += desc[i];
        }
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', capDesc);
    captionDesc.textContent = capDesc;
  }