"use strict";
//debugger;
/*

Realice y represente mediante un diagrama de flujo el algoritmo para
obtener el producto de dos matrices de orden M x N y P x Q.

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
		matriz3[i][j]= matriz1[i][j]*matriz2[i][j];
	}
	
	

}

console.log("La multiplicación de las dos matrices es ",matriz3);
