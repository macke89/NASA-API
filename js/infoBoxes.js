// FETCH DATA
async function infoBoxes() {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?count=7&api_key=${API_KEY}`
  );
  let data = await response.json();
  console.log(data);
  // INSERT DATA
  set_infoBoxes(data);
  // CREATE MODALS
  set_popup(data);
}

// CREATE MODALS
function set_popup(data) {
  let popup = document.querySelector("#infoBox_window");
  data.forEach((item, index) => {
    let html = `
    <div class="IB_modal -inset-x-full opacity-0" id="slide-${index}">
      <div class="w-full max-h-screen p-2 bg-white rounded IB_modal_window md:w-3/4">
        ${item.explanation}
        <button class="block w-full px-4 py-1 mt-4 font-semibold text-black transition-all duration-300 rounded hover:bg-gray-200 close-button" onclick="moreInfo('slide-${index}')">Close</button>
      </div>
    </div>
    `;
    popup.insertAdjacentHTML("beforeend", html);
  });
}

// INSERT DATA INTO SLIDER
function set_infoBoxes(data) {
  let slider = document.querySelector(".glide__slides");
  let loader = document.querySelector("#infoBox_loader");

  const dataApi = data;

  data.forEach((item, index) => {
    let html = `
      <li class="relative w-full glide__slide">
        <img class="cursor-pointer object-cover w-full h-64 IB_popup" src="${item.url}" alt="${item.url}">
        <button class="white-button" onclick="moreInfo('slide-${index}')">More Info</button>
      </li>
      `;

    slider.insertAdjacentHTML("beforeend", html);
  });

  // ADD EVENTS TO IMAGES
  const popup = document.querySelector(".popup-window");
  let images = document.querySelectorAll(".IB_popup");
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

  // REMOVE LOADER
  loader.parentNode.removeChild(loader);

  // CAROUSEL OPTIONS
  var glide = new Glide(".glide", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    breakpoints: {
      800: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  });

  glide.mount();
}

// SHOWS MODAL
function moreInfo(id) {
  let popup = document.getElementById(id);

  popup.classList.toggle("-inset-x-full");
  popup.classList.toggle("opacity-0");
}
