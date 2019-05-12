"use strict";

window.addEventListener("DOMContentLoaded", loadSVG);
window.addEventListener("DOMContentLoaded", loadSVG1);

function loadSVG() {
  fetch("strangerheading.svg")
    .then(response => response.text())
    .then(svgdata => {
      document
        .querySelector(".heading")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
}

function loadSVG1() {
  fetch("sttimeline1.svg")
    .then(response => response.text())
    .then(svgdata => {
      document
        .querySelector(".sttimeline")
        .insertAdjacentHTML("afterbegin", svgdata);
    });
}
