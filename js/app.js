"use strict";

let API_KEY = "abq6kLKrCDibA3obJuRVt3phoqie3msWIj3XfB4f";

let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  // console.log("button pressed");
  sendApiRequest();
});

async function sendApiRequest() {
  let response = await fetch(
    `https://api.nasa.gov/planetary/earth/imagery?lon=-220.090083&lat=35.661358&dim=0.3&api_key=${API_KEY}`
  );
  // let data = await response.json();
  // console.log(data);
  // useApiData(data);
}

function useApiData(data) {
  // document.querySelector("#content").innerHTML += `<img src='${data}'>`;
  document.querySelector("#content").innerHTML = "test";
}
