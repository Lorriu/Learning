
//Promp for this week:
//Use the values in weather object. Ask the user "Enter a city" (example: Paris), 
//alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"

//round up the temperatures to whole numbers.

//If the city doesn't exist in the object (i.e: Sydney), 
//alert "Sorry, we don't know the weather for this city, 
//try going to https://www.google.com/search?q=weather+sydney" 



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

// My code is written below

let city = prompt("Enter a city");
city = city.toLowerCase();
city = city.trim();

if (weather[city] !== undefined) {

let temp = weather[city].temp;
let tempC = Math.round(temp);
let tempF = Math.round((temp * 9/5) + 32);
let humidity = weather[city].humidity;



alert(`It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${humidity}%`)
}
else {
    alert(`Sorry, we don't know the weather for this city, try going 
    to https://www.google.com/search?q=weather+${city}`)
}
    
  
