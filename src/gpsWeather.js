
const API_KEY = "3628d5189174adac073c32a94779ad10";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    //const br = document.createTextNode("<br>");
    city.appendChild(br);
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  });
}

function onGeoError() {
  alert("당신의 위치를 찾을 수 없어서 날씨를 제공해드릴 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

