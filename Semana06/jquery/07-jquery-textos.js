$(function(){
	var listas = $("#miLista li");
	var miLista = $("#miLista");

	listas.each(function(index){
		$(this).text("nuevo texto " + index);
	});

	//each
	$.each(listas, function (index, elemento) {
		elemento.setAttribute("class","lista");//element html
	});

	console.log($("#miLista").attr("atributo"));//get atributo

	listas.attr("pagina","1");//set atrtibute

	listas.removeAttr("borrar");//borrar atribute

	$("btnAgregar").click(function() {
		miLista.prepend("<li class ='lista'>"+$("#miInput").val()+"</li>");
		$("#miInput").val();
	});



});