$(function () {
	//ajax get
	// var dato = {page:3};

	// $.get("https://reqres.in/api/users",dato,function (response) {
	// 	response.data.forEach(function (elemnent,index) {
	// 		$("#resultado").prepend(`<p>${index} ${elemnent.first_name} ${elemnent.last_name}</p>`)
	// 	});
	// });

	// var usuario = {name:"Carlos",job:"CodiGo"};

	// $.post("https://reqres.in/api/users",usuario,function(response){
	// 	console.log(response);
	// });

	var miForm = $("#frmCrearUsuario");

	miForm.submit(function (e) {
		
		e.preventDefault();

		var usuario = {
			name:$("input[name='name']").val(),
			job:$("input[name='job']").val()
		};
		// $.post(miForm.attr("action"),usuario,function(response){
		// console.log(response);
		// });

		$.ajax({
			type: "POST",
			url: miForm.attr("action"),
			data: usuario,
			timeout: 100,
			success: function (response) {
				console.log(response);
			},
			error: function () {
				console.log("Oops!, An error just happened");
			},
			beforeSend: function () {
				console.log("Sending a new user...");
			}

		});

	});


	$("miLink").click(function (e) {e.preventDefault();});



}); //cierra la function principal, no tocar