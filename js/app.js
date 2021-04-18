// SCROLL DOWN EFFECT
let scroll = document.querySelector("#scroll");
let target = document.querySelector("#main");

scroll.addEventListener("click", () => {
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// SEND REQUESTS
setTimeout(function () {
  console.log("setTime");
  picOfDay();
  marsRover();
  infoBoxes();
}, 2000);
