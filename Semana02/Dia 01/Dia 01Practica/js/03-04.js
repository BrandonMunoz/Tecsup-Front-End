"use strict";

var numeroHoras=3;
var primerasDosHoras=5.00;
var siguientesTresHoras=4.00;
var siguientesCincoHoras=3.00;

var importeCobro=0.00;


	if(numeroHoras>2){
		importeCobro=2*primerasDosHoras;
		numeroHoras=numeroHoras-2;
	}else{
		importeCobro=numeroHoras*primerasDosHoras;
		numeroHoras=0;
	}

	if(numeroHoras>3){
		importeCobro=importeCobro+(3*siguientesTresHoras);
		numeroHoras=numeroHoras-3;
	}else{
		importeCobro=importeCobro+(numeroHoras*siguientesTresHoras);
		numeroHoras=0;
	}

	if(numeroHoras>1){
		importeCobro=importeCobro+(numeroHoras*siguientesCincoHoras);
		numeroHoras=0;
	}

	console.log(importeCobro);