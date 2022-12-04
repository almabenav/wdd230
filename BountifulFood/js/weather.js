const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description');
const windSpeed = document.querySelector('#speed');
const humidity = document.querySelector("#humidity");
const url = '//api.openweathermap.org/data/2.5/weather?id=5334223&appid=c3e03e142bc240cc1eac2f7fdabc06c3&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
  }
}

function  displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(0)
  currentTemp.innerHTML = `<strong>${Math.round((temp - 32) * 5/9)}</strong>`;

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

  humidity.textContent = weatherData.main.humidity;
  const speed = weatherData.wind.speed.toFixed(0)
  windSpeed.innerHTML = `${speed} mph`;
  calc_windChill(temp, speed);

}

function calc_windChill(temp, speed){
  if (temp <= 50  && speed >= 3.0) {
    const chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + 
    (0.4275 * temp * Math.pow(speed, 0.16));

    document.getElementById("chill").textContent = Math.round(chill);
  }
  else {
      document.getElementById("chill").textContent = " N/A";
  }
}
apiFetch();
  