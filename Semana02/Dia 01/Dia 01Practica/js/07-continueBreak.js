"use strict";

//continue

//Mostrar el triple de los numeros impares comprendidos entre 0 y 10 
// for (var i = 1; i <=10; i++) {
		
// 		if(i%2==1){
// 			console.log( i + " el triple es " +i*3);
// 			continue;
// 		}
// 		console.log("vuelta = "+1);
// }




//break
for (var i = 1; i <=9000; i++) {
		
		if(i>6){
			console.log("numero "+i +" mayor a 6 ");
			console.log("fin del programa");
			break;
		}
		console.log("numero "+i);
}
