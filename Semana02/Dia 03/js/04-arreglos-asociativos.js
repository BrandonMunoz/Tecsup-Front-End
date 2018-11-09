function llenarNombre(){
	alert(document.getElementById("nombre").value);
}

var directorio = new Array();
var persona = new Array();
persona["nombre"]="Jorge";
persona["fecha"]="9 de Agosto";
persona["dni"]="90892822";
persona["direccion"]="Av. Siempre Viva";

var persona1 = new Array();
persona1["nombre"]="Alberto";
persona1["fecha"]="9 de Octubre";
persona1["dni"]="827342";
persona1["direccion"]="Calle Luna Calle Sol";

directorio.push(persona);
directorio.push(persona1);

var texto = "";
texto += "<table border='1'><tr><th>Nro</th><th>Nombre</th><th>Dirección</th><th>DNI</th></tr>";

for (var i = 0; i < directorio.length; i++) {
	texto += "<tr>";
	texto += `<td> ${i+1} </td>`;
	texto += `<td> ${directorio[i]["nombre"]} </td>`;
	texto += `<td> ${directorio[i]["direccion"]} </td>`;
	texto += `<td> ${directorio[i]["dni"]} </td>`;
	texto += "</tr>";
}
texto += "</table>";

document.write(texto);