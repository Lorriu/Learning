//Feature #1, display the current date and time using JavaScript


setInterval(() => {
let now = new Date();
let yourId = document.querySelector("#yourId");
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[now.getMonth()];


yourId.innerHTML = `${day} ${date} ${month} 
<div> ${hour}:${minutes}</div>`;

if (hour < 10) {
        hour = `0${hour}`;
    }
  
if (minutes < 10) {
        minutes = `0${minutes}`;
    }

}, 1 * 1000);

 // Add an if statements to add '0' if the minutes or hour are below 10



// Feature #2, Add a search engine: a search bar with a button. 
//When searching for a city, display the city name on the page after the user submits the form.

function typeCity(event){
    event.preventDefault();
    let cityInput = document.querySelector("#cityName");

    let cityText = document.querySelector("#head");
    cityText.innerHTML = `${cityInput.value}`;

}

let city = document.querySelector("#enterName");
city.addEventListener("submit", typeCity)



// Feature #3 convert Celcius and Fahrenheit


 function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let temperatureText = temperatureElement.innerText; // Get the numeric part
    let temperature = parseFloat(temperatureText); // Convert to a floating-point number
    if (!isNaN(temperature)) { // Check if it's a valid number
      temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32) + '<span class="changeC">ºF</span>';
    }
  }

  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", convertToFahrenheit);
    

  //Feature #4, Add an API which displays current weather based on city typed

function displayWeather(response){

    console.log(response.data)

    document.querySelector("#head").textContent = response.data.name;
    document.querySelector("#temperature").textContent = `${Math.round(response.data.main.temp)}ºC`;
    document.querySelector("#description").textContent = response.data.weather[0].main;
    document.querySelector("#max").textContent = Math.round(response.data.main.temp_max); //issue here
    document.querySelector("#min").textContent = Math.round(response.data.main.temp_min); // issue here

}

//this function will create a seach for a city

function search(city){
    let apiKey = "9ad2f8816512fa8c931b77f26c050d93";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
    axios.get(apiUrl).then(displayWeather);
}

// this function takes the city name from the search bar typed and inserts in function above 

function searchWeather(event){
    event.preventDefault();
    let city = document.querySelector("#cityName").value;

    search(city) // this creates a call for default city to load screen
    console.log(axios)
}

 let searchForm = document.querySelector("#enterName");
  searchForm.addEventListener("submit", searchWeather);

  search("London") // this makes London the default city when you load the page.

//Feature #5, Add current location button displays current weather

// Function to get weather latitude and longitude
function getWeatherByCoordinates(latitude, longitude) {
    const apiKey = "9ad2f8816512fa8c931b77f26c050d93"; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    console.log(apiUrl)
    axios.get(apiUrl).then(displayWeather);
}

// Function for the Current Location button click
function getCurrentLocationWeather() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeatherByCoordinates(latitude, longitude);
        });
    } else {
        alert(" Current location is not supported in your browser.");
    }
}

// Event listener to the "Current Location" button
const currentLocationButton = document.getElementById("current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocationWeather);

