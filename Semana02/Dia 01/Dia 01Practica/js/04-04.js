"use strict";

var listaFocos=['verde','rojo','blanco','Blanco','Verde','Rojo','VERDE'];

var numeroFocoVerde=0;
var numeroFocoRojo=0;
var numeroFocoBlanco=0;

for(var i=0;i<listaFocos.length;i++){

	if(listaFocos[i].toUpperCase()=='VERDE'){
		numeroFocoVerde++;
		continue;
	}

	if(listaFocos[i].toUpperCase()=='ROJO'){
		numeroFocoRojo++;
		continue;
	}

	if(listaFocos[i].toUpperCase()=='BLANCO'){
		numeroFocoBlanco++;
		continue;
	}

}

console.log("FOCOS VERDE "+numeroFocoVerde);
console.log("FOCOS ROJO "+numeroFocoRojo);
console.log("FOCOS BLANCO "+numeroFocoBlanco);
