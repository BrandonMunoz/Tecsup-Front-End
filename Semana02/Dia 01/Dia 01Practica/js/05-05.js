"use strict";

//matriz diagonal 
/*
Realice un diagrama de flujo que represente el algoritmo para determinar
si una matriz es de tipo diagonal: es una matriz cuadrada en la
cual todos sus elementos son cero, excepto los electos de la diagonal
principal.
*/

/*
Definimos una matriz de 3 x 3 como
	1	0	0
	0	2	0
	0	0	3
 */

var matriz=[[1,0,0],[0,2,0],[0,0,3]];
var esDiagonal=false;

for (var i = 0; i < matriz.length; i++) {		
		console.log(matriz[i][i]);
		if(matriz[i][i]!=0){
			esDiagonal=true;
		}else{
			esDiagonal=false;
			//si no es diagonal salimos del bucle for
			break;
		}
}

if(esDiagonal){
	console.log("La matriz SI es diagonal");
}else{
	console.log("La matriz NO es diagonal");
}
