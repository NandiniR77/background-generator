var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");




function Gradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ","+ color2.value +", " + color3.value +")";
	css.textContent= body.style.background + ";";
}

color1.addEventListener("input", Gradient);

color2.addEventListener("input", Gradient);

color3.addEventListener("input", Gradient);