var	persona = {
	nombre: "Carlitos",
	edad: 40,
	apellido: "Malaga",
	gustos: {
		comida: "cebiche",
		color: "verde",
		curso: "matematicas"
	},
	getNombre : function(){
		return this.nombre;
	},
	setNombre : function(nuevoNombre){
		this.nombre = nuevoNombre;
	}
};

document.write(`<h1>Nombre => ${persona.getNombre()}</h1>`);
//cambiar nombre
var respuesta = persona.setNombre("Pepito");
document.write(`<h1>Nombre => ${persona.getNombre()}</h1>`);
document.write(`<h1>Apellido => ${persona.apellido}/h1>`);
document.write(`<h1>Curso => ${persona.gustos.curso}/h1>`);

