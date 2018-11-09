"use strict";

var horasTrabajadas=50;
var pagoPorHora=12;
var importePago=0


if(horasTrabajadas>40){
	importePago=40*pagoPorHora;
	horasTrabajadas=horasTrabajadas-40;

	importePago=importePago+(horasTrabajadas*pagoPorHora*2);

}else{
	importePago=horasTrabajadas*pagoPorHora;
}

console.log("PAGO ES DE "+importePago);