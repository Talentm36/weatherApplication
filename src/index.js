function updateWeather(response)
{let temperatureElement=document.querySelector("#app-temperature");
let appTemperature=response.data.temperature.current;
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind-speed");
windElement.innerHTML=`${response.data.wind.speed}km/h`
humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
descriptionElement.innerHTML=response.data.condition.description;
temperatureElement.innerHTML=Math.round(appTemperature);}


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