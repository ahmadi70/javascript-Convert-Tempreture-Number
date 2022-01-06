var cel = document.querySelector("#celcius input");
var fah = document.querySelector("#fahrenheite input");
var kalv = document.querySelector("#kalvin input");

function round(num){
	return Math.round(num * 100) / 100;
}

function celConverToK_F(){
	var celcius = parseFloat(cel.value);
	var fahrenheite = (celcius * ( 9 / 5) ) + 32;
	var kalvin = celcius + 273.15;
	fah.value = round(fahrenheite);
	kalv.value = round(kalvin);
}

function fConverToK_C(){
	var fahrenheite = parseFloat(fah.value);
	var celcius = (fahrenheite - 32) * ( 5 / 9);
	var kalvin = fahrenheite + 459.67 * ( 5 / 9);
	kalv.value = round(kalvin);
	cel.value = round(celcius);
}

function kalConverToC_F(){
	var kalvin = parseFloat(kalv.value);
	var fahrenheite = 9 / 5 * (kalvin - 273 ) + 32;
	var celcius = kalvin - 273.15;
	fah.value = round(fahrenheite);
	cel.value = round(celcius);
}

function tempreture() {
	cel.addEventListener("input", celConverToK_F);
	fah.addEventListener("input", fConverToK_C);
	kalvin.addEventListener("input", kalConverToC_F);
}

tempreture();