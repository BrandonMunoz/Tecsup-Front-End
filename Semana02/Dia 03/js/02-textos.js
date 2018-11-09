var texto = "Anita Lava La Tina";
var arreglo = [3,4,5];

document.write(`Texto Inicial => ${texto} <br>`);
document.write(`Arreglo Inicial => ${arreglo.toString()} <br>`);

document.write(`Tamaño del texto => ${texto.length} <br>`);
document.write(`Tamaño del arreglo => ${arreglo.length} <br>`);

document.write(`Texto en Mayúscula => ${texto.toUpperCase()} <br>`);
document.write(`Texto en Minúscula => ${texto.toLowerCase()} <br>`);
document.write(`Remplazar un caracter => ${texto.replace('e','TEXTO')} <br>`);
document.write(`Extrae una porción de texto => ${texto.slice(-11)} <br>`);
document.write(`Devuelve un arreglo dado un separador => ${texto.split('e')[2]} <br>`);
document.write(`Ultima ocurrecncia => ${texto.lastIndexOf('a')} <br>`);
document.write(`Caracter en 5 => ${texto.charAt(5)} <br>`)

//Solucion 1
var arreglo = texto.split(' ');
//[hola,a,todos,amiguitos]
var tamanio_del_arreglo = arreglo.length;
// tamanio = 4
//document.write(arreglo[tamanio_del_arreglo-2]);

// document.write(texto.split(' ')[texto.split(' ').length-2]); nivel profe

// function obtenerPenultimaPalabra(texto){

// }

// function imprimirPosiciones(texto){
// 	for (var i = 0; i >= 0; i--) {
// 		Things[i]
// 	}
// }
// 
// 
// 
// 
var textoFinal = texto.replace(/ /g,'').toLowerCase();
var espalindromo = true;
// document.write(parseInt(textoFinal.length/2));
for (var i = 0; i < parseInt(textoFinal.length/2); i++) {
	if (textoFinal.charAt(i) != textoFinal.charAt(textoFinal.length-1-i)) {
		espalindromo = false;
		break;
	}
}
document.write(espalindromo ? "SI ES PALINDROMO" : "NO ES PALINDROMO");

// if (espalindromo) {
// 	document.write("SI ES PALINDROMO");
// }else{
// 	document.write("NO ES PALINDROMO");
// }