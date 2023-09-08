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
}, 1 * 1000);

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

