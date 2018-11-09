function darFormato(){
	var parrafo= document.getElementById("parrafo");
	parrafo.style.fontSize = '5em';
	parrafo.style.border = '1px solid #ff5544';
}

function reducir(){
	var parrafo= document.getElementById("parrafo");
	var tamanio= window.getComputedStyle(parrafo).fontSize;
	var tamanioEnTexto= tamanio.toString();
	// var tamanioNumber= parseInt(tamanioEnTexto.split("p")[0]);
	var tamanioNumber= pasrseInt(tamanioEnTexto.slice(0, -2));
	tamanioNumber= tamanioNumber -2;
	parrafo.style.fontSize = tamanioNumber +"px";

}

function aumentar(){
	var parrafo= document.getElementById("parrafo");
	var tamanio= window.getComputedStyle(parrafo).fontSize;
	var tamanioEnTexto= tamanio.toString();
	//opcion 1// var tamanioNumber= pasrseInt(tamanioEnTexto.split("p")[0]);
	var tamanioNumber= pasrseInt(tamanioEnTexto.slice(0, -2));
	tamanioNumber= tamanioNumber +2;
	parrafo.style.fontsize = tamanioNumber +"px";
}

function negrita(){
	var parrafo = document.getElementById("parrafo");
	if(parrafo.style.fontWeight == 'bold'){
		parrafo.style.fontWeight = 'normal' 
	} else{
		parrafo.style.fontWeight = 'bold';
	}
}

function oblicua(){
	var parrafo = document.getElementById("parrafo");
	if(parrafo.style.fontStyle == 'italic'){
		parrafo.style.fontStyle = 'normal'
	} else{
		parrafo.style.fontStyle = 'italic'
	}
}

function subrayado(){
	var parrafo = document.getElementById("parrafo");
	if(parrafo.style.textDecoration == 'underline'){
		parrafo.style.textDecoration = 'none'
	}else{
		parrafo.style.textDecoration = 'underline'
	}
}

function cambiarTexto(){
	var input = document.getElementById("miInput");
	var parrafo = document.getElementById("parrafo");
	parrafo.innerHTML = input.value; 
}

function insertarLabel(){
	var miLabel = document.createElement("label");
	miLabel.innerHTML = "Mi etiqueta";
	var formulario = document.getElementById("formulario")
	formulario.appendChild(miLabel);
}