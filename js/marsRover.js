("use strict");

// FETCH DATA
async function marsRover() {
  let response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  let data = await response.json();
  use_marsRover(data);
}

function use_marsRover(data) {
  // SELECT PICTURES
  let marsOne = document.querySelector("#mars-1");
  let marsTwo = document.querySelector("#mars-2");
  let marsThree = document.querySelector("#mars-3");
  let marsFour = document.querySelector("#mars-4");
  let marsFive = document.querySelector("#mars-5");

  let container = document.querySelector("#marsContainerOne");
  let containerTwo = document.querySelector("#marsContainerTwo");

  // CREATE IMAGES
  let htmlOne = `
      <img src="${data.photos[855].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56 MR_popup cursor-pointer">
    `;
  let htmlTwo = `
      <img src="${data.photos[118].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56 MR_popup cursor-pointer">
    `;
  let htmlThree = `
      <img src="${data.photos[849].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56 MR_popup cursor-pointer">
    `;
  let htmlFour = `
      <img src="${data.photos[25].img_src}" alt="mars" class="w-full sm:w-1/4 object-cover h-96 sm:h-56 MR_popup cursor-pointer">
    `;
  let htmlFive = `
      <img src="${data.photos[0].img_src}" alt="mars" class="w-full object-cover h-full MR_popup cursor-pointer">
    `;

  // INSERT IMAGES
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

  // ADD EVENTS TO IMAGES
  const popup = document.querySelector(".popup-window");
  let images = document.querySelectorAll(".MR_popup");
  images.forEach((image) => {
    image.addEventListener("click", (event) => {
      popup.classList.toggle("-inset-x-full");
      popup.classList.toggle("opacity-0");
      let url = event.target.src;
      popup.innerHTML = `
      <img class="popup-image object-contain inset-center w-full h-full popup-close cursor-pointer transition-all duration-1000" src="${url}" />
    `;
      const close = document.querySelector(".popup-close");
      close.addEventListener("click", function () {
        popup.classList.toggle("opacity-0");
        window.setTimeout(function () {
          popup.classList.toggle("-inset-x-full");
        }, 700);
        console.log("close");
        popup.innerHTML = "";
      });
    });
  });
}
