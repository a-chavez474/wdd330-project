// const weatherApiURL =
//   /*"https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=63078f13e56a697c7c482217dd416284";*/
//   "https://api.openweathermap.org/data/2.5/weather?q=bountiful&units=imperial&appid&appid=63078f13e56a697c7c482217dd416284";

// fetch(weatherApiURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
//     const desc = jsonObject.weather[0].description;
//     const finaldesc = desc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
//     if (document.querySelector("#temperature") !== null) {
//       document.querySelector("#temperature").textContent = jsonObject.main.temp.toFixed(0);
//       document.querySelector("#weather-icon").textContent = imagesrc;
//       document.querySelector("#weather-icon").setAttribute("src", imagesrc);
//       document.querySelector("#weather-icon").setAttribute("alt", desc);
//     }

//     if (document.querySelector("#chill") !== null) {
//       document.querySelector("#chill").textContent = jsonObject.main.feels_like.toFixed(0);
//     }

//     if (document.querySelector("#speed") !== null) {
//       document.querySelector("#speed").textContent = jsonObject.wind.speed.toFixed(0);
//     }
  
//     if (document.querySelector("#currently") !== null) {
//       document.querySelector("#currently").textContent = finaldesc;
//     }
//   });

let weather = {
  apiKey : "63078f13e56a697c7c482217dd416284",
  fetchWeather : function (city) {
    fetch (
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city + "&units=imperial&appid&appid=63078f13e56a697c7c482217dd416284"
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name, icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "m/h";
    document.querySelector(".weather").classList.remove("loading");
    document.container.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document
.querySelector(".search button")
.addEventListener("click", function () {
  weather.search();
});

document
.querySelector(".search button")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
  
});

weather.fetchWeather("Bountiful");




function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;
