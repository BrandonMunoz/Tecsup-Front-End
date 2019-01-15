$(function(){
	var miDiv = $("#miDiv");
	var btnMostrar = $("#btnMostrar");
	var btnOcultar = $("#btnOcultar");
	var btnToogle = $("#btnToogle");
	miDiv.hide();

	btnMostrar.click(function() {
		// miDiv.show("slow");
		// miDiv.fadeIn("slow");
		miDiv.fadeTo("slow",1);
	});
	btnOcultar.click(function() {
		// miDiv.hide("fast");
		// miDiv.fadeOut("slow");
		miDiv.fadeTo("slow",0.001);
	});

	btnToogle.click(function(){
		// miDiv.toggle();
		// miDiv.slideToggle("slow");
		miDiv.fadeToggle("slow");
	});




});