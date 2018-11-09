 
// var total = 0


// for (var i = 0; i < 10; i++) {
// 	// console.log("valor de i = " + i +"x2 =" + (i*2));
// 	total = total + i;
// }

// console.log("total = " + total); // colocamos al final para que nos de solo el total final

var miArreglo = [7,4,7,3,66,4,3,23];
//length devuelve la cantidad de elementos del arreglo
// console.log(miArreglo.length);
// for (var i = 0; i < miArreglo.length; i++) {
// 	console.log("posicion "  + i + " => " + miArreglo[i]);
// }

//imprimir todos los valores diferentes de 7
for (var i = 0; i < miArreglo.length; i++) {
	if (miArreglo[i] != 7) {
		console.log(miArreglo[i])
	}
}