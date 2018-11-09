//CREAR MENU PARA QUE EL USUARIO ELIJA LA OPERACION 
//E INTRODUZCA 2 NUMEROS A OPERAR

function sumar(){
	var suma = n1 + n2;
	return suma;
}

function restar(){
	var resta = n1 - n2;
	return resta;
}

function dividir(){
	var dividir = n1 / n2;
	return dividir;
}

function multiplicar(){
	var multiplicar = n1 * n2;
	return multiplicar;
}

function imprimirResultado() {
	// body...
}

var menu = "////////////MENU//////////\n";
menu = menu + "'s' -  SUMAR\n";
menu = menu + "'r' -  RESTAR\n";
menu = menu + "'d' -  DIVIDIR\n";
menu = menu + "'m' -  MULTIPLICACION\n";
menu = menu + "/////////////////////\n";
menu = menu + "Ingrese la opcion Juventud";

var opcion = prompt(menu);
var n1 = parseInt(prompt("Ingrese el primer numero"));
var n2 = parseInt(prompt("Ingrese el segundo numero"));
var rpta = 0;

switch(opcion){
	case "s":
	rpta = sumar();
	console.log(rpta);
		break;
	case "r":
	rpta = resta();
	console.log(rpta);
		break;
	case "d":
	rpta = dividir();
	console.log(rpta);
		break;
	case "m":
	rpta = multiplicar();
	console.log(rpta);
		break;
}



// var	n1 = 10;
// var	n2 = 20;


// function sumar(){
// 	var suma = n1 + n2;
// 	console.log("la suma es: " + suma);
// }

// sumar();

// console.log("la suma es: " + (n1+n2));
// console.log("la resta es: " + (n1-n2));
// console.log("el producto es: " + (n1*n2));
// console.log("la division es: " + (n1/n2));


