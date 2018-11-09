// var miVariable = 90;
// var miVariable2 =100;

// if (miVariable > 90) {
// 	console.log(miVariable + " es mayor a 9");
// }
// if (miVariable < 90) {
// 	console.log(miVariable + " es mayor a 9");
// }
// if (miVariable == 90) {
// 	console.log(miVariable + " es mayor a 9");
// }
// if (miVariable >= 90) {
// 	console.log(miVariable + " es mayor a 9");
// }
// if (miVariable <= 90) {
// 	console.log(miVariable + " es mayor a 9");
// }

// p && q &&=and
// p || q ||=or

// var a = 90;
// var b = 100;
// var promedio = 10;
// var aprueba = false;

// if (promedio > 13) {
// 	aprueba = true
// }
// if (aprueba) { // si la variable aprueba es verdadera
// 	console.log("aprueba");
// }
// else{ // de lo contrario hacer esto de aqui
// 	console.log("desaprueba");
// }

// if (a >= 90 && b >= 80) {
// 	console.log("se cumple la condicion");
// }
// if ((a >= 90 || b >= 100) && (a % 9 == 0)) {
// 	console.log("se cumple la condicion")
// }
// if (!(a>500)) { //
// 	console.log("si");
// }

// var dia = 1; //lunes, 2 martes...
// var diaSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
// var nombreDia = '';

// if (dia >= 1 && dia <=7){
// 	nomobreDia = semanaDia [dia-1];
// else(nombreDia ='Dia Invalido';
// 	)
// }

// console.log(nombreDia)

//SWITCH CASE

var dia = 4;

switch(dia){
	case 1:
		console.log("Lunes");
		break;
	case 2:
		console.log("Martes");
		break;
	case 3:
		console.log("Miercoles");
		break;
	case 4:
		console.log("Jueves");
		break;
	case 5:
		console.log("Viernes");
		break;
	case 6:
		console.log("Sabado");
		break;
	case 7:
		console.log("Domingo");
		break;
	default:
		console.log("Dia invalid")
}