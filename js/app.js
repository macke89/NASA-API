"use strict";

// POPUPS
const popups = document.querySelectorAll(".popup");
const modal = document.querySelector(".popup-window");

popups.forEach((item) => {
  item.addEventListener("click", function (event) {
    // console.log("open");
    modal.classList.toggle("-inset-x-full");
    modal.classList.toggle("opacity-0");
    let url = event.target.src;
    modal.innerHTML = `
      <img class="popup-image object-contain inset-center w-full h-full popup-close cursor-pointer transition-all duration-1000" src="${url}" />
    `;
    const close = document.querySelector(".popup-close");
    close.addEventListener("click", function () {
      modal.classList.toggle("opacity-0");
      window.setTimeout(function () {
        modal.classList.toggle("-inset-x-full");
      }, 700);
      console.log("close");
      modal.innerHTML = "";
    });
  });
});

// INFO BOX
function showInfo() {
  const modal = document.querySelector(".popup-window");
  modal.classList.toggle("-inset-x-full");
  modal.classList.toggle("opacity-0");
}

// IMAGE OF THE DAY
async function picOfDay() {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  let data = await response.json();
  // console.log(data);
  use_picOfDay(data);
}

function use_picOfDay(data) {
  document.querySelector("#picOfDay_img").src = data.url;
  document.querySelector("#picOfDay_title").innerHTML = data.title;
  document.querySelector("#picOfDay_dscr").innerHTML = data.explanation;
  document.querySelector("#picOfDay_date").innerHTML = data.date;
}

// MARS ROVER
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

async function marsRover() {
  let response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  let data = await response.json();
  // console.log(data.photos[0].img_src);
  console.log(data.photos[0].img_src);
  console.log(data);
  // console.log(data.random());
  use_marsRover(data);
}

function use_marsRover(data) {
  document.querySelector("#marsRover1").src = data.photos[855].img_src;
  document.querySelector("#marsRover2").src = data.photos[118].img_src;
  document.querySelector("#marsRover3").src = data.photos[849].img_src;
  document.querySelector("#marsRover4").src = data.photos[25].img_src;
  document.querySelector("#marsRover5").src = data.photos[0].img_src;
}

// INFO BOXES
async function infoBoxes() {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?count=5&api_key=${API_KEY}`
  );
  let data = await response.json();
  console.log(data);
  use_infoBoxes(data);
}

function use_infoBoxes(data) {
  let slider = document.querySelector(".glide__slides");
  data.forEach((item) => {
    let html = `
    <li class="relative w-full glide__slide">
      <img class="object-cover w-full h-64 popup" src="${item.url}" alt="test">
      <button class="white-button" onclick="moreInfo('slide-0')">More Info</button>
    </li>
    `;

    slider.insertAdjacentHTML("beforeend", html);
  });

  let moreInfoPopup = document.querySelector("#moreInfoWindow");
  data.forEach((item, index) => {
    let html = `
    <div id="slide-${index}"
      class="fixed top-0 z-50 w-full h-screen text-white transition-all duration-500 ease-in bg-black opacity-0 cursor-pointer -inset-x-full"
      onclick="moreInfo('slide-${index}')">
      ${item.explanation}
      sapiente nisi voluptatibus magnam?
    </div>
    `;

    moreInfoPopup.insertAdjacentHTML("beforeend", html);
  });

  // CAROUSEL
  new Glide(".glide").mount();
}

function moreInfo(id) {
  let popup = document.getElementById(id);
  console.log(popup);

  popup.classList.toggle("-inset-x-full");
  popup.classList.toggle("opacity-0");
}

// GALLERY
async function gallery() {
  let response = await fetch(`https://images-api.nasa.gov/search?q=airplane`);
  let data = await response.json();
  console.log(data.collection.items);
  use_gallery(data);
}

function use_gallery(data) {
  let pics = data.collection.items;
}

setTimeout(function () {
  picOfDay();
  marsRover();
  infoBoxes();
  // gallery();
}, 2000); //wait 2 seconds
