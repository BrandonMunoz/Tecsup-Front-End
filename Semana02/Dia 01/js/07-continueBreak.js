//continue

//mostrar el triple de los numeros impares comprendidos entre 0 y 10 (inclusive)
// for (var i = 1; i <= 10 ; i++){
// 	if (i % 2 == 1) { //lo que significa que es impar
// 		console.log("el triple es " + i*3);
// 		continue; //continue repite las acciones en las que esta contenido y evita continuar con la siguiente
// 	}

// 	console.log("numero par = " + i);
// }

//break

for (var i = 1; i <= 10 ; i++){

	if (i > 6) { 
		console.log("numero " + i + " numero mayor a 6 ");
		console.log("fin del programa ");
		break;
	}
	console.log("numero " + i);
}


//continue y break
