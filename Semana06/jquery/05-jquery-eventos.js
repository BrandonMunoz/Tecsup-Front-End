$(function(){
	var divBolita = $("#bolita");
	divBolita.hide();
	var miDiv = $("#miDiv");
	// miDiv.mouseover(function() {
	// 	miDiv.css("background-color","green")
	// 		 .css("cursor","progress");
	// });

	// miDiv.mouseout(function() {
	// 	miDiv.css("background-color","yellow");
	// });

	function amarillo(){
		$(this).css("background-color","green")
			 .css("cursor","progress");
	}
	function verde(){
		$(this).css("background-color","yellow");
	}

	miDiv.hover(amarillo,verde);

	miDiv.click(function(){
		divBolita.show();
	});

	miDiv.dblclick(function(){
		divBolita.hide();
	});

});