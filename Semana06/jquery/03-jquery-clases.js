
$(function(){

	$("#btnJuegos").click(function(){
		var ulJuegos = $("ul:eq(1)");
		if (ulJuegos.hasClass("juegos")) {
			ulJuegos.removeClass("juegos");
		}else{
			ulJuegos.addClass("juegos");
		}
	});

});