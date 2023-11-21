"use strict";

const photos = [
  { img: "img/hn.jpg", pfotog: "Хельмут Ньютон", id: 1 },
  { img: "img/Mario.jpg", pfotog: "Mario Testino", id: 2 },
];
const datePrevious = new Date("2023-11-20");
const ACCESS_KEY = "0S4LqYsxBTgs8b753nrAaCr9TCzTMJI5eWtvqEa-zGQ";
let single = true,
  rndNum = Math.floor(Math.random()* 10);
const imageContainerEl = document.querySelector(".img-container");
TimeCurrent(datePrevious, imageContainerEl, photos);

function TimeCurrent(datePrevious, container, array) {
  const dateCurrent = new Date();
  if (
    (dateCurrent.getDate() === datePrevious.getDate() + 1 &&
      dateCurrent.getMonth() + 1 === datePrevious.getMonth() + 1) ||
    (dateCurrent.getDate() == 1 &&
      dateCurrent.getMonth() + 1 === datePrevious.getMonth() + 1 + 1)
  ) {
    showImg(container, array);
    datePrevious = dateCurrent;
  }
  return datePrevious;
}

function showImg(container, array) {
  fetch("https://api.unsplash.com/photos/?random/", {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    })
    .then((response) => response.json())
     .then((data) => {
       data.forEach((element, i) => {
         if (i == rndNum || !single) {
            console.log(element);
          const imgEl = element.urls.regular;
          const photographer = element.user.name;
          const id = element.id;
          console.log(id);
          array.push({ img: imgEl, pfotog: photographer, id: id});
          array.forEach((element) => {
            const boxEl = document.createElement("div");
            boxEl.classList.add("box");
            boxEl.style.width = "586px";
            boxEl.style.height = "500px";
            const imgBoxEl = document.createElement("div");
            imgBoxEl.classList.add("imgBox");
            imgBoxEl.style.width = "580px";
            imgBoxEl.style.height = "400px";
            const imgEl = document.createElement("img");
            imgEl.src = element.img;
            imgBoxEl.append(imgEl);
            boxEl.appendChild(imgBoxEl);
            const photographer = document.createElement("span");
            photographer.classList.add("photographer");
            photographer.textContent = element.pfotog;
            const title = document.createElement("h5");
            title.textContent = `Фотограф: `;
            title.appendChild(photographer);
            boxEl.appendChild(title);
            const link = document.createElement("button");
            link.classList.add("link");
            link.textContent = "Лайк";
            boxEl.appendChild(link);
            container.appendChild(boxEl);
          })
        }
     })
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.target.closest("div").style.borderStyle = "solid";
          e.target.closest("div").style.borderColor = "pink";
          const a = e.target.closest('div');
          console.log(a);
          const b = a.div
          console.log(b);
        });
      });
     })
     .catch((err) => console.log(err))
 }

