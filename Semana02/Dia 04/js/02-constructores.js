var constructor = function(newNombre="S/N", newEdad=0, newApellido="S/A"){
	var nombre= "Juan";
	var edad= 50;

	var	plantilla = {
		apellido: newApellido,
		gustos: {
			comida: "cebiche",
			color: "verde",
			curso: "matematicas"
		},
		getNombre : function(){
			return nombre;
		},
		setNombre : function(nuevoNombre){
			nombre = nuevoNombre;
		}
	};
	return plantilla;
}

var persona1= constructor();
persona1.setNombre("mario");
console.log(persona1.getNombre());



// var persona1 = constructor("Juan",45,"caceres");
// var persona2 = constructor();

// console.log(persona1.getNombre());
// console.log(persona2.nombre);
