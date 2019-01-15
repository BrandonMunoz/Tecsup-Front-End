$(function(){
	$("p").html("lkdfliawjfiawurbrfkil");
	
	function ocultar(){
		$("p").hide();
	}

	$("#btnHide , #btnHide1 ").click(ocultar);

	$("p").click(function(){
		$(this).css("color","red")
			   .css("border","1px solid #443322");
	});

	// $("#btnComida").click(function(){
	// 	$(".milista > li").addClass("comida");
	// });

	$("button:eq(1)").click(function(){
		$(".milista > li").addClass("comida");
	});

	$(".btnTabla").click(function(){
		$("#tabla1 tr:odd").css("background-color","#bbbbff");
		$("#tabla1 tr:even").css("background-color","#bb00ff");
	});

	$("[nombre='red_social']").css("color","#2233ee")
							  .css("text-decoration","none")
				    	      .css("font-size","20px");
	



	//hasClass
	//removeClass
	//addClass
	//selector multietiqueta ( , )
	//selectores de atributos
	//find
	//parent
	//------EVENTOS
	//mouseover
	//mouseout
	//hover
	//click
	//dblclick
	//blur
	//focus
	//show
	//hide
	//val()
	//text
	//mousedown
	//mouseup
	//mousemove event.clientX event.clientY
	//TEXTOS
	//each
	//attr getattribute
	//append
	//prepend
	//attr
	//removeAttr
	//EFECTOS
	//show(fast - normal)
	//fadeIn
	//fadeOut (slow)
	//fadeTo(slow,1)
	//toggle('slow')
	//fadeToggle
	//slideToggle
	//slideUp
	//slideDown
	//CUSTOM ANIMATIONS
	//elemento.animat(json de propiedades)
	//ejm $("as").animate({marginLeft: '500px'},slow);
	//callbacks con eventos
	//
});