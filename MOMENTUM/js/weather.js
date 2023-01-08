const API_KEY = "c42649bab147cb65d78694d6903d23b8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then((date) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name;
        weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
    });
}
function onGeoError() {
    alert("위치 정보를 찾을수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);