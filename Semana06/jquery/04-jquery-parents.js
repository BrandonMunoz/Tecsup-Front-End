$(function(){
	var lis = $("li");
	console.log(lis);
	
	$("li.item-2").find(lis).css("background-color","black")
							 .css("color","white").parent();

	$("li.item-a").parent().parent().addClass("grande");

	
});