const hamburger_menu = document.querySelector(".hamburger-menu");

const container = document.querySelector(".container1");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;