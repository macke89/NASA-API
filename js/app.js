("use strict");

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
  // picOfDay();
  // marsRover();
  // infoBoxes();
  // gallery();
}, 2000); //wait 2 seconds
