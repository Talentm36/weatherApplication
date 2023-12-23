function updateWeather(response)
{let temperatureElement=document.querySelector("#app-temperature");
let appTemperature=response.data.temperature.current;
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind-speed");
windElement.innerHTML=`${response.data.wind.speed}km/h`
humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
descriptionElement.innerHTML=response.data.condition.description;
temperatureElement.innerHTML=Math.round(appTemperature);
getForecast(response.data.city);}

function searchCity(city)
{let apiKey="87d8tfb7621601o0c3b65f9a2b473214";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event)
{event.preventDefault();
let inputSearch =document.querySelector("#app-search-input");
let  cityElement=document.querySelector("#weather-city");
cityElement.innerHTML=inputSearch.value;
searchCity(inputSearch.value)
}
let searchFormElement= document.querySelector("#search-input");
searchFormElement.addEventListener("submit",handleSearchSubmit);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function formatDay(timestamp){
    let date = new Date(timestamp * 1000);
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    return days[date.getDay()];
}



function getForecast(city){let apiKey="87d8tfb7621601o0c3b65f9a2b473214";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
axios(apiUrl).then(displayforecast);
console.log(apiUrl);}

function displayforecast(response)
{
let forecastElement = document.querySelector("#forecast");
let forecastHtml = "";
response.data.daily.forEach(function(day, index)
{if(index < 5)
{forecastHtml =forecastHtml + `<div class = "weather-forecast-day">
    <div class ="weather-forecast-date">${formatDay(day.time)}</div>
    <div class= "weather-forecast-icon"><img src ="${day.condition.icon_url}" /></div>
    <div class="weather-forecast-temperatures">
    <div class= "weather-forecast-temperature"><strong>${Math.round(day.temperature.maximum)}°C</strong></div>
    <div class= "weather-forecast-temperature">${Math.round(day.temperature.minimum)}°C</div>
    </div>
</div>`;}})
forecastElement.innerHTML = forecastHtml;}
