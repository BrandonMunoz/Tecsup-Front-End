var numero;
var num;
var sonCero=0;
var menores=0;
var mayores=0;

var num= prompt(" cuantos numeros desea procesar: ");
for ( var i=1; i<=num; i++){
	numero=prompt("ingrese numero :");
	if (numero == 0) {
		sonCero++;
	}
	if (numero < 0) {
		menores++;
	}else{
		mayores++
	}

}
console.log("numeros iguales a cero:",sonCero);
console.log("numeros menores que cero",menores);
console.log("numeros mayores que cero",mayores);