const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const location = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDataDiv = document.getElementById('weatherData');
            if (data.cod === 200) {
                weatherDataDiv.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                weatherDataDiv.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = `<p>Error fetching weather data</p>`;
        });
}
