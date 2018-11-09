var nroHoras = prompt("Ingrese el numero de horas: ");
var total=0;

if(nroHoras<=2){
	total=nroHoras*5;
}else{
	if (nroHoras>2 && nroHoras<=5) {
		total= 10+ ((nroHoras-2)*4);
	}else{
		if (nroHoras>5 && nroHoras<=10) {
			total= 22+ ((nroHoras-5)*3);
		}else{
			total= 37+((nroHoras-10)*2);
		}
	}
}
alert("Total a pagar= "+total);