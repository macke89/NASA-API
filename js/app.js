let scroll = document.querySelector("#scroll");
let target = document.querySelector("#main");

scroll.addEventListener("click", () => {
  // window.scrollTo({ target, behavior: "smooth" });
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

scroll.setTimeout(function () {
  console.log("setTime");
  picOfDay();
  marsRover();
  infoBoxes();
}, 2000); //wait 2 seconds
