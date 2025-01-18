const weather = document.getElementById("weather");
const apiKey = "238b7afa7a1adbfcccbb4fa4a086858d";
const loader = document.getElementById("loader");

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (city) {
    weather(city);
  } else {
    alert("Please Enter a City Name!");
  }
});

function weather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  loader.classList.remove("hidden");
  weather.innerHTML = "";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loader.classList.add("hidden");
      displayWeather(data);
    })
    .catch((error) => {
      loader.classList.add("hidden");
      alert("Error weather data. Please try again");
      console.error("Error:", error);
    });
}

function display(data) {
  if (data === 200) {
    weather.innerHTML = `
    <h2>${data.name},${data.sys.country}</h2>
    <img src="" >
    <P>Temperature: ${data.main.temp}°C</p>
    <P>Weather: ${data.weather[0].main} (${data.weather[0].description})</p>
    <P>Humidity: ${data.main.humidity}%</p>
    <P>Wind Speed:</p>${data.wind.speed} m/s`;
  } else {
    weather.innerHTML = `<p>City not Found.Please try again!</p>`;
  }
}
