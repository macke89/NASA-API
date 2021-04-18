("use strict");

document.querySelector("#search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    gallery();
  }
});

// FETCH DATA
async function gallery() {
  let input = document.querySelector("#search").value;
  console.log(input);
  let response = await fetch(`https://images-api.nasa.gov/search?q=${input}`);
  let data = await response.json();
  use_gallery(data);
}

function use_gallery(data) {
  let loader = document.querySelector("#gallery_loader");
  let gallery = document.getElementById("gallery");

  if (loader) {
    loader.parentNode.removeChild(loader);
  } else {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.lastChild);
    }
  }

  for (let i = 0; i < 40; i++) {
    let type = data.collection.items[i].data[0].media_type;
    if (type == "image") {
      let url = data.collection.items[i].links[0].href;
      let image = `
            <img src="${url}" class="h-36 flex-auto object-cover g_popup cursor-pointer">
          `;

      gallery.insertAdjacentHTML("beforeend", image);
    }
  }

  // ADD EVENTS TO IMAGES
  const popup = document.querySelector(".popup-window");
  let images = document.querySelectorAll(".g_popup");
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
