const bgImage = document.createElement("img");
const IMAGES_PATH = "../public/images/";

const selectThema = "blue" //document.querySelector("#thema-blue");

const images = ["bg_blue_02", "bg_blue_03", "bg_blue"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const themaInfo = {
//   name: "blue",
//   backColor: ,
//   todoimage: ,
//   todoborder: "double 5px ${lightslategray}",
// };

// function changeThema(selectThema) {
//   //json 파일 읽어오기
//   const fs = require('fs');
//   fs.readFile('imageInfo', (err, data) => {
//     if(err) throw err
//     const imageData = JSON.parse(data);});

// }