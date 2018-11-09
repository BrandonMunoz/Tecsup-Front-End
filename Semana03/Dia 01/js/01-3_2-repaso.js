var nroHoras= 0;
var sPorHora=10;
var total=0;

nroHoras= prompt("Ingrese el numero de horas");

if(nroHoras>40){
	total= (40*sPorHora)+((nroHoras-40)*(2*sPorHora))
}else{
	total= nroHoras*sPorHora
}

alert("Su sueldo a la semana es: "+total)