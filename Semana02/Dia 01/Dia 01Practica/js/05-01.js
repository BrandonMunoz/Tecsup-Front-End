"use strict";
//debugger;
/*

Realice y represente mediante un diagrama de flujo el algoritmo para
obtener la matriz transpuesta de cualquier matriz de orden M x N.
 */

/*
Definimos una matriz de 3 x 3 como
	1	4	7
	2	5	8
	3	6	9
*/


var matriz1=[[1,4,7],[2,5,8],[3,6,9]];
var matriz2=[[0,0,0],[0,0,0],[0,0,0]];

var columnas=0;
for (var i = 0; i < matriz1.length; i++) {
	
	columnas=matriz1[i].length;


	for (var j = 0; j < columnas; j++) {
		matriz2[j][i]= matriz1[i][j];
	}
	
	

}

console.log("Matriz original ",matriz1);
console.log("Matriz Transpuesta ",matriz2);
