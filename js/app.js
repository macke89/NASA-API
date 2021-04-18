("use strict");

// MARS ROVER
async function marsRover() {
  let response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  let data = await response.json();
  use_marsRover(data);
}

function use_marsRover(data) {
  let marsOne = document.querySelector("#mars-1");
  let marsTwo = document.querySelector("#mars-2");
  let marsThree = document.querySelector("#mars-3");
  let marsFour = document.querySelector("#mars-4");
  let marsFive = document.querySelector("#mars-5");

  let container = document.querySelector("#marsContainerOne");
  let containerTwo = document.querySelector("#marsContainerTwo");

  let htmlOne = `
    <img src="${data.photos[855].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56">
  `;
  let htmlTwo = `
    <img src="${data.photos[118].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56">
  `;
  let htmlThree = `
    <img src="${data.photos[849].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56">
  `;
  let htmlFour = `
    <img src="${data.photos[25].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56">
  `;
  let htmlFive = `
    <img src="${data.photos[0].img_src}" alt="mars" class="w-full object-cover h-full">
  `;

  container.insertAdjacentHTML("beforeend", htmlOne);
  marsOne.parentNode.removeChild(marsOne);

  container.insertAdjacentHTML("beforeend", htmlTwo);
  marsTwo.parentNode.removeChild(marsTwo);

  container.insertAdjacentHTML("beforeend", htmlThree);
  marsThree.parentNode.removeChild(marsThree);

  container.insertAdjacentHTML("beforeend", htmlFour);
  marsFour.parentNode.removeChild(marsFour);

  containerTwo.insertAdjacentHTML("beforeend", htmlFive);
  marsFive.parentNode.removeChild(marsFive);
}

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
  console.log("setTime");
  picOfDay();
  // marsRover();
  // infoBoxes();
  // gallery();
}, 2000); //wait 2 seconds
