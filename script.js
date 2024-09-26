let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = '31419b24bda1c16f0fdabe182b672eab'
let kelvinDif = 273.15


document.getElementById('searchButton').addEventListener('click', () =>{
    const city = document.getElementById('entryCity').value;
    if(city){
        weatherData(city)
    }
})



function weatherData(city){
    fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => showWeatherData(response))
}


function showWeatherData(response) {
    const weatherDataDiv = document.getElementById('weatherData')
    weatherDataDiv.innerHTML = ''

    const cityName = response.name
    const countryName = response.sys.country
    const temperature = response.main.temp
    const humidity = response.main.humidity
    const pressure = response.main.pressure
    const description = response.weather[0].description
    const icon = response.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${countryName}`

    const temperatureInfo = document.createElement('p')
    temperatureInfo.textContent = `Temperature: ${Math.floor(temperature-kelvinDif)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `Humidity: ${humidity}%`

    const pressureInfo = document.createElement('p')
    pressureInfo.textContent = `Pressure: ${pressure} hPa`
    
    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    
    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `Weather description: ${description}`


    weatherDataDiv.appendChild(cityTitle)
    weatherDataDiv.appendChild(temperatureInfo)
    weatherDataDiv.appendChild(humidityInfo)
    weatherDataDiv.appendChild(pressureInfo)
    weatherDataDiv.appendChild(iconInfo)
    weatherDataDiv.appendChild(descriptionInfo)
}
