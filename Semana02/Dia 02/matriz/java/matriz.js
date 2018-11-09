
var arreglo = [
				[1,2],
				[3,4],
				[5,6],			
];

var	fila = arreglo.length; //3
var columna = arreglo[0].length; //2

var arregloT=new Array();

for(var f = 0; f < columna; f++){
	arregloT[f]=new Array();

	for(var c = 0; c < fila; c++){
		arregloT[f][c]=arreglo[c][f];

	}	
}

var columna2=0;
var cadena="";
for(var i = 0; i < arregloT.length; i++){
	columna2=arregloT[i].length;
	cadena="";
	for(var c = 0; c < columna2; c++){
		 cadena=cadena+" " +arregloT[i][c];

	}	

	console.log(cadena);
}


