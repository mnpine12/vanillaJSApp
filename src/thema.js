const bgImage = document.createElement("img");
const IMAGES_PATH = "./public/images";

const selectThema = "blue" //document.querySelector("#thema-blue");

const images = ["01.jpg", "02.jpg", "01.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `${IMAGES_PATH}/${chosenImage}`;
console.log(bgImage.src);
document.body.appendChild(bgImage);

// function changeImage(changeImage) {
//   const todoList = document.querySelector("#todolist-wrap");
//   chosenImage += IMAGES_PATH+changeImage;
//   if(todoList) {
//     todoList.style.backgroundImage(changeImage);
//   }
// }

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