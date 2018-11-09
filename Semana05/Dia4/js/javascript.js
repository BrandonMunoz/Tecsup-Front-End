var miRequest = new XMLHttpRequest();
if (miRequest.readyState == 0){
	console.log("0 se creo el XMLHttpRequest pero no se uso aun");
}

miRequest.onreadystatechange = function(){
	if (miRequest.readyState == 1){
		console.log('1 SE INVOCO AL METODO OPEN()');
		console.log(miRequest.status);
	}
	if (miRequest.readyState == 2){
		console.log('2 Se enviaron datos SEND()');
		console.log(miRequest.status);
	}
	if (miRequest.readyState == 3){
		console.log('3 Se esta esperando respuesta del servidor');
		console.log(miRequest.status);
	}
	if (miRequest.readyState == 4){
		console.log('4 La operacion finalizo, se recibio una respuesta');
		console.log(miRequest.status);
		console.log(JSON.parse(miRequest.responseText)[1].address.zipcode);
	}
} 

miRequest.open("GET","https://jsonplaceholder.typicode.com/users");
miRequest.send(null);