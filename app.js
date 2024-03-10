console.log("JS chargé");

let button = document.querySelector("button");
let neuille = new Audio("./assets/tete-de-neuille-frere.mp3");

button.addEventListener("click", function () {
  neuille.play();
});
