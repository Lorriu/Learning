let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

//feature 1 create a live time and replace the fake time



let yourId = document.querySelector("#yourId");
setInterval(() => {
let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];

yourId.innerHTML = `${day} ${hour}: ${minutes}`;
}, 1 * 1000);

// feature 2, when a new city is typed in search bar replace the current city

function typeCity(event){
    event.preventDefault();
    let cityInput = document.querySelector("#cityName");

    let cityText = document.querySelector("#head");
    cityText.innerHTML = `${cityInput.value}`;

}

let city = document.querySelector("#enterName");
city.addEventListener("submit", typeCity)


city = city.toLowerCase();
city = city.trim();

if (weather[city] !== undefined) {

let temp = weather[city].temp;
let tempC = Math.round(temp);
let tempF = Math.round((temp * 9/5) + 32);
let humidity = weather[city].humidity;
