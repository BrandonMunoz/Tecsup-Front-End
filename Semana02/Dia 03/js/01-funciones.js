function imprimirEnConsola(dato){
	console.log("Dato ingresado => " + dato);
}
function imprimirEnPagina(dato){
	document.write("<h1>Dato ingresado => " + dato + "</h1>");
	document.write("<h2>Dato ingresado => " + dato + "</h2>");
}

//parametros opcionales
//REST
function mostrarLibros(l1,l2="S/N",...libros){


	texto = "";
	texto = texto + "<ul>";
	texto = texto + "<li style='list-style-type: square;'>";
	texto = texto + l1;
	texto = texto + "</li>";
	texto = texto + "<li>";
	texto = texto + l2;
	texto = texto + "</li>";
	
	for (var i = 0; i < libros.length; i++) {
		texto = texto + "<li>";
		texto = texto + libros[i];
		texto = texto + "</li>";
	}
	texto = texto + "</ul>";
	document.write(texto);
}

//funciones anonimas

var variable = function (dato1, dato2){
	document.write("<h1>"+dato1+"</h1>");
};

// variable(1,90);

// variable = 7;

// CallBacks // Closure
//arreglo de funciones
function sumar(n1,n2,doble,triple){
	console.log(n1+n2);
	doble(n1);
	triple(n2);
}

sumar(9,2, (parametro) => {
	console.log(parametro*2);
},
function(parametro){
	console.log(parametro*3);
});

// sumar(90,4,)

//plantillas de texto

function mostrarLibrosV2(l1,l2){
	var texto = `
		<ul>
			<li> ${l1} </li>
			<li> ${l2} </li>
		</ul>
	`;

	document.write(texto);
}
mostrarLibrosV2("LIBRO 1","LIVRO 2");