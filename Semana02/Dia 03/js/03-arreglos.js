function llenarFrutas(){
	var nroFrutas = parseInt(prompt("¿Cuántas Frutas desea registrar?"));
	if (!isNaN(nroFrutas)  && nroFrutas > 0) {
		for (var i = 0; i < nroFrutas; i++) {
			var fruta = prompt("Ingrese la fruta");
			arreglo3.push(fruta);
		}

		var eliminado = arreglo3.pop();

		arreglo3.forEach((elemento,index,arr)=>{
			document.write(`${index} => ${elemento} => ${arr}<br>`);
		});

		document.write("elemento eliminado "+ eliminado);
	}
	else{
		alert("Ingreso inválido siñorsh");
	}
}
var arreglo = [1,2,4,2];
var arreglo1 = new Array(4);
var arreglo3 = new Array();

arreglo3.push("Pera");
arreglo3.push("Manzana A Lt.3");
arreglo3.push("Naranja");

//llenarFrutas();

// arreglo3.sort();//ordenar arreglo

// arreglo3.forEach((elemento,index,arr)=>{
// 	document.write(`${index} => ${elemento} => ${arr}<br>`);
// });

