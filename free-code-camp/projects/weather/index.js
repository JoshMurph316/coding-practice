const weather = document.querySelector('.weather');
const weatherBtn = document.querySelector('.weather-btn');

function getWeather() {

    let http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            let localWeather = JSON.parse(http.response);
            console.log(localWeather.list[0].weather[0].description);
            weather.innerHTML = `<p>Location: ${localWeather.city.name}, ${localWeather.city.country}</p>
                                 <p>descrition: ${localWeather.list[0].weather[0].description}</p>`;
        }
    };
    http.open("GET", "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=df712972cb4ab5fa9eca2a9e04c2511d", true);
    http.send();
}

weatherBtn.addEventListener('click', getWeather);