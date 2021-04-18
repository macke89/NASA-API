("use strict");
// FETCH DATA
async function picOfDay() {
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?date=2021-04-16&thumbs=true&api_key=${API_KEY}`
  );
  let data = await response.json();
  console.log(data);
  use_picOfDay(data);
}

function use_picOfDay(data) {
  let picOfDayImage = document.querySelector("#picOfDay_image");
  let loaderImage = document.querySelector("#picOfDay_image_loader");

  let picOfDayInfo = document.querySelector("#picOfDay_info");
  let loaderInfo = document.querySelector("#picOfDay_info_loader");

  let imageHtml = "";

  if (!data.thumbnail_url) {
    imageHtml = `
        <img src="${data.url}" alt="Pic the Of Day" class="object-cover w-full h-full cursor-pointer" id="POD_popup">
    `;
  } else {
    imageHtml = `
        <a href="${data.url}">
            <img src="${data.thumbnail_url}" class="object-cover w-full h-full">
        <a/>
     `;
  }

  let infoHtml = `
      <h1>${data.title}</h1>
      <br />
      <p>${data.explanation}</p>
      <br />
      <div>${data.date}</div>
    `;

  picOfDayImage.insertAdjacentHTML("afterbegin", imageHtml);
  loaderImage.parentNode.removeChild(loaderImage);

  picOfDayInfo.insertAdjacentHTML("beforeend", infoHtml);
  loaderInfo.parentNode.removeChild(loaderInfo);

  // ADD EVENT TO IMAGE
  const popup = document.querySelector(".popup-window");
  let image = document.querySelector("#POD_popup");

  image.addEventListener("click", (event) => {
    popup.classList.toggle("-inset-x-full");
    popup.classList.toggle("opacity-0");

    popup.innerHTML = `
        <img class="popup-image object-contain inset-center w-full h-full popup-close cursor-pointer transition-all duration-1000" src="${data.url}" />
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
}
