//unidad 4 ejercicio 2


var pedidoCliente=['Simple','Triple'];

//carta
//
var t1='Simple';
var p1=20;

var t2='Doble';
var p2=25;

var t3='Triple';
var p3=28;

var tarjetaCredito=true;

var totalPagar=0;

for (var i = 0; i < pedidoCliente.length; i++) {
		if(pedidoCliente[i]==t1){
			totalPagar=totalPagar+p1;
			continue;
		}	

		if(pedidoCliente[i]==t2){
			totalPagar=totalPagar+p2;
			continue;
		}

		if(pedidoCliente[i]==t3){
			totalPagar=totalPagar+p3;
			continue;
		}


}

if(tarjetaCredito){
	totalPagar=totalPagar*1.05;
}

console.log("Total a Pagar "+totalPagar);





// var t = 2

// switch(t){
// 	case 1;
// 		console.log("Simple");
// 		break;
// 	case 2;
// 		console.log("Doble");
// 		break;
// 	case 3;
// 		console.log("Triple");
// 		break;
// }