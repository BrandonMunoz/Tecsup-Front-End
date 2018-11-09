"use strict";
/*
Realice un algoritmo para obtener una matriz como el resultado de la
resta de dos matrices de orden M x N. Represéntelo mediante diagrama
de flujo y pseudocódigo.
 */

/*
Definimos una matriz de 3 x 3 como
	1	4	7
	2	5	8
	3	6	9

La segunda matriz tambien de 3 x 3
	11	14	17
	12	15	18
	13	16	19
 */


var matriz1=[[1,4,7],[2,5,8],[3,6,9]];
var matriz2=[[11,14,17],[12,15,18],[13,16,19]];
var matriz3=new Array();

var columnas=0;
for (var i = 0; i < matriz1.length; i++) {
	matriz3[i]=new Array();
	columnas=matriz1[i].length;


	for (var j = 0; j < columnas; j++) {
		matriz3[i][j]= matriz2[i][j]-matriz1[i][j];
	}
}


console.log("matriz 1" , matriz1);
console.log("matriz 2" , matriz2);
console.log("La resta de las dos matrices es ",matriz3);