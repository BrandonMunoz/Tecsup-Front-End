$(function () {
	var inputNombre = $("#nombre");
	var miDiv = $("#info");
	var miBolita = $("#bolita");

	inputNombre.focus(function(){
		$(this).css("width","600px")
		       .css("outline","none")
		       .css("border", "2px solid red")
		       .css("border-radius","40px");
	});

	inputNombre.blur(function(){

		$("#info").text($(this).val());
		$(this).val("");
		alert($("#info").text());
	})

	miDiv.mousedown(function(event) {
		console.log(miBolita.css("position"));
		console.log(miBolita.css("left"));
		console.log(miBolita.css("top"));
	});

	miDiv.mouseup(function(event) {
		console.log("x:" +event.clientX + " y:" +event.clientY);
	});

	$(document).mousemove(function(event) {

		miBolita.css("left",event.clientX)
		        .css("top",event.clientY);
		

		if (event.clientX>500 && event.clientX<670 && event.clientY > 530 && event.clientY<700) {
			alert("GANASTE!!!");
		}
	});


})