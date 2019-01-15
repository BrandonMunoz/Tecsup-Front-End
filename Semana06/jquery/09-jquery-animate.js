$(function(){
	// alert(window.height);
	var miDiv = $("#miDiv");
	var btnMostrar = $("#btnMostrar");
	var btnOcultar = $("#btnOcultar");
	var btnToogle = $("#btnToogle");
	var btnAnimar = $("#btnAnimar");
	miDiv.hide();

	btnMostrar.click(function() {
		// miDiv.show("slow");
		// miDiv.fadeIn("slow");
		// miDiv.fadeTo("slow",1);
		miDiv.show("slow", function(){
			alert('Ya se acabo la animacion');
		})
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

	btnAnimar.click(function(){
		var animacion1 = {
			marginLeft: '+=100px',
			marginTop: '0px',
			fontsize: '1rem',
		}
		var animacion2 = {
			marginTop: '+=100px',
		}
		var animacion3 = {
			marginLeft: '+=100px',
		}
		var animacion4 = {
			marginTop: '+=200px',
			fontsize: '2rem',
		}
		var animacion5 = {
			marginLeft: '+=100px',
		}
		var animacion6 = {
			marginTop: '+=200px',
			fontsize: '2rem',
		}
		var animacion7 = {
			marginLeft: '+=100px',
		}
		var animacion8 = {
			marginLeft: '+=450px',
		}
		var animacion9 = {
			marginTop: '0px',
			fontsize: '2rem',
		}

		miDiv.animate(animacion1,"slow").animate(animacion2,"slow").animate(animacion3,"slow")
			.animate(animacion4,"slow").animate(animacion5,"slow").animate(animacion6,"slow")
			.animate(animacion7,"slow").animate(animacion8,"slow").animate(animacion9,"slow");
	});




});