function agregar(){
	var tabla = document.getElementById("miTabla");
	var selectProducto = document.getElementById("selectProducto");
	var inputCantidad = document.getElementById("inputCantidad");
	var inputPUnitario = document.getElementById("inputPUnitario");

	var fila = document.createElement("tr");

	var columnaProducto = document.createElement("td");
	var columnaCantidad = document.createElement("td");
	var columnaPUnitario = document.createElement("td");
	var columnaTotal = document.createElement("td");

	columnaProducto.innerHTML = selectProducto.options[selectProducto.selectedIndex].innerHTML;
	columnaCantidad.innerHTML = inputCantidad.value;
	columnaPUnitario.innerHTML = inputPUnitario.value;
	columnaTotal.innerHTML = parseFloat(parseFloat(inputCantidad.value)*parseFloat(inputPUnitario.value))
	fila.append(columnaProducto);
	fila.append(columnaCantidad);
	fila.append(columnaPUnitario);
	fila.append(columnaTotal);

	tabla.append(fila);

// window.addEventListener("load",()=>{

// }) 

	// console.log(selectProducto.options[selectProducto.selectedIndex].innerHTML);
	// console.log(inputCantidad.value);
	// console.log(inputPUnitario.value);
}
