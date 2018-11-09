"use strict";
//debugger;
//CamelCase
// var miVariable = 90;
// var miVariable2 = 100;


// if(miVariable>90){
// 	console.log(miVariable +" es mayor a 9");
// }

// if(miVariable<90){
// 	console.log(miVariable +" es menor a 90");
// }

// if(miVariable==90){
// 	console.log(miVariable +" es menor a 90");
// }
// p && q
// V -> V | V
// V -> F | F
// F -> V | F
// F -> F | F

// if(miVariable>=90 && miVariable2 >=80 ){
// 	console.log("Se cumple la condición");
// }
// 
// 
// var a=90;
// var b=100;
// var promedio=10;
// var aprueba =false;

// if(promedio>13){
// 	aprueba=true;
// }

// if(aprueba){
// 	console.log("aprueba");
// }else{
// 	console.log("desaprueba");
// }


// if((a>=90 || b>=500)&&(a % 9==0)){
// 	console.log("Se cumple la condicion");
// }

// if(!(a>500){
// 	console.log("Se cumple la condicion");
// }

// var dia=7;
// var nombreDia="";
// var diasSemana=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

// if(dia>=1 && dia <=7 ){
// 	nombreDia=diasSemana[dia-1];
// }else{
// 	nombreDia="El día no existe";
// }

// console.log(nombreDia);

var dia=4;
var nombreDia="";

switch(dia){
	case 1:
		nombreDia="Lunes";
		break
	case 2:
		nombreDia="Martes";
		break
	case 3:
		nombreDia="Miercoles";
		break
	case 4:
		nombreDia="Jueves";
		break
	case 5:
		nombreDia="Viernes";
		break
	case 6:
		nombreDia="Sábado";
		break
	case 7:
		nombreDia="Domingo";
		break
	default:
		nombreDia="Día Inválido";
}

console.log(nombreDia);