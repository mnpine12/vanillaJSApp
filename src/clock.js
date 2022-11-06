const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digital = document.querySelector("#digital");

const DEG = 6;

setInterval (()=> {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  digital.innerText = `${hours}:${minutes}:${seconds}`;
})

setInterval (()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * DEG;
    let ss = day.getSeconds() * DEG;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}DEG)`;
    mn.style.transform = `rotateZ(${mm}DEG)`;
    sc.style.transform = `rotateZ(${ss}DEG)`;
})