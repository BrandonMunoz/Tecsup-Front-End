"use strict";

/*
Realice y represente mediante diagrama de flujo y pseudocódigo un
algoritmo que lea un arreglo de M filas y N columnas y que calcule la*/

/*
Definimos una matriz de 3 x 3 como
	1	0	0
	0	2	0
	0	0	3
 */

var matriz=[[1,0,0],[0,2,0],[0,0,3]];
var sumaDiagonal=0;

for (var i = 0; i < matriz.length; i++) {		
	console.log(matriz[i][i]);
	sumaDiagonal=sumaDiagonal+matriz[i][i];		
}

	console.log("La suma de la diagonal es ",sumaDiagonal);
