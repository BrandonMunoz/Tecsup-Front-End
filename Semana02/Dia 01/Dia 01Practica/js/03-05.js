"use strict";

var nombre1="Alan";
var edad1=17;


var nombre2="Jessica";
var edad2=26;


var nombre3="Carlos";
var edad3=21;

var nombreMayor="";
var edadMayor=0;

if(edad1>edad2){
	nombreMayor=nombre1;
	edadMayor=edad1;
}else{
	nombreMayor=nombre2;
	edadMayor=edad2;
}

if(edad3>edadMayor){
	nombreMayor=nombre3;
	edadMayor=edad3;
}

console.log("El mayor es "+nombreMayor +" con edad "+edadMayor);