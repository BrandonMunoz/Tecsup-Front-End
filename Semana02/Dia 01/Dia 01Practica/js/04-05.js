"use strict";

var ahorroPorDia=0;
var ahorroPorAño=0;



for (var i = 1; i <= 365; i++) {
	ahorroPorDia=Math.pow(3, i);
	console.log("Ahorro el dia "+ i +" es de "+ahorroPorDia);
	ahorroPorAño=ahorroPorAño+ahorroPorDia;

}

console.log("Ahorro en el año "+ahorroPorAño);