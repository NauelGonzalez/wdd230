/////////////////// weather ///////////////////////////////////////

const currentTemp = document.querySelector("#mars-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const foreCastTemp1 = document.querySelector("#foreCast1");
const foreCastTemp2 = document.querySelector("#foreCast2");
const foreCastTemp3 = document.querySelector("#foreCast3");

const foreCastTemp = document.querySelector("#forecast-temp");

const forecastFormat = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=34.8883606&lon=-56.0741786&units=metric&appid=3d13a5faf31421d6bc1ef85ff2ec23bd";

const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=-34.8883606&lon=-56.0741786&units=metric&appid=3d13a5faf31421d6bc1ef85ff2ec23bd";

async function apiFetch() {
  try {
    const weatherResponse = await fetch(weatherURL);
    if (weatherResponse.ok) {
      const weatherData = await weatherResponse.json();
      displayResults(weatherData);
    }
  } catch (error) {}

  try {
    const forecastResponse = await fetch(forecastURL);
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json();
      displayForecast(forecastData);
    }
  } catch (error) {}
}

function displayResults(weather_data) {
  currentTemp.innerHTML = `${parseFloat(weather_data.main.temp).toFixed(2)} C°`;
  const iconsrc = `https://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`;
  const iconalt = `${weather_data.weather[0].main}`;
  let desc = weather_data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", iconalt);
  captionDesc.textContent = `${desc}`;
}
function displayForecast(forecast_data) {
  var timeZone = forecast_data.timezone * 1000;
  var foreCast1 = new Date(parseInt(forecast_data.list[5].dt) * 1000);
  var foreCast2 = new Date(parseInt(forecast_data.list[13].dt) * 1000);
  var foreCast3 = new Date(parseInt(forecast_data.list[21].dt) * 1000);

  let pd1 = document.createElement("p");
  let pt1 = document.createElement("p");
  let div1 = document.createElement("div");
  let pd2 = document.createElement("p");
  let pt2 = document.createElement("p");
  let div2 = document.createElement("div");
  let pd3 = document.createElement("p");
  let pt3 = document.createElement("p");
  let div3 = document.createElement("div");

  pd1.innerHTML =
    "<b>" + foreCast1.toLocaleString("en-US", forecastFormat) + "</b>";
  pt1.innerHTML =
    "Max: " +
    forecast_data.list[5].main.temp_max +
    " C° / Min: " +
    forecast_data.list[5].main.temp_min +
    " C°";
  div1.appendChild(pd1);
  div1.appendChild(pt1);
  foreCastTemp.appendChild(div1);

  pd2.innerHTML =
    "<b>" + foreCast2.toLocaleString("en-US", forecastFormat) + "</b>";
  pt2.innerHTML =
    "Max: " +
    forecast_data.list[13].main.temp_max +
    " C° / Min: " +
    forecast_data.list[13].main.temp_min +
    " C°";
  div2.appendChild(pd2);
  div2.appendChild(pt2);
  foreCastTemp.appendChild(div2);

  pd3.innerHTML =
    "<b>" + foreCast1.toLocaleString("en-US", forecastFormat) + "</b>";
  pt3.innerHTML =
    "Max: " +
    forecast_data.list[21].main.temp_max +
    " C° / Min: " +
    forecast_data.list[21].main.temp_min +
    " C°";
  div3.appendChild(pd3);
  div3.appendChild(pt3);
  foreCastTemp.appendChild(div3);
}

apiFetch();
