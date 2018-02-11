var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var randomizer = document.querySelector("button");

function setGradient() {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

   css.textContent = body.style.background + ';';
}

function setRandomRGB() {
   var r = Math.floor(Math.random() * 255 + 1);
   var g = Math.floor(Math.random() * 255 + 1);
   var b = Math.floor(Math.random() * 255 + 1);
   var randomGradient = "rgb(" + r + ", " + g + ", " + b + ")";
   return randomGradient;
}

function setRandomGradient() {
   body.style.background = "linear-gradient(to right, " + setRandomRGB() + ", " + setRandomRGB() + ")";

   css.textContent = body.style.background + ';';
}

console.log(color1, color2, css, gradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizer.addEventListener("click", setRandomGradient);

setGradient();
