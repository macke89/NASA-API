"use strict";

// POPUPS
const popups = document.querySelectorAll(".popup");
const modal = document.querySelector(".popup-window");
console.log(popups);
console.log(modal);

popups.forEach((item) => {
  item.addEventListener("click", function (event) {
    console.log("open");
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

new Glide(".glide").mount();

// let API_KEY = "abq6kLKrCDibA3obJuRVt3phoqie3msWIj3XfB4f";

// let searchButton = document.querySelector("#search");

// searchButton.addEventListener("click", () => {
//   // console.log("button pressed");
//   sendApiRequest();
// });

// async function sendApiRequest() {
//   let response = await fetch(
//     `https://api.nasa.gov/planetary/earth/imagery?lon=-220.090083&lat=35.661358&dim=0.3&api_key=${API_KEY}`
//   );
//   // let data = await response.json();
//   // console.log(data);
//   // useApiData(data);
// }

// function useApiData(data) {
//   // document.querySelector("#content").innerHTML += `<img src='${data}'>`;
//   document.querySelector("#content").innerHTML = "test";
// }
