window.addEventListener("load",function(){
	var btnActualizar = document.getElementById('btnActualizar');
	
	btnActualizar.addEventListener('click', function(){
		getUsuarios();
		var divCargando= document.getElementById("divCargando");
		divCargando.removeAttribute("hidden");

		divCargando.setAttribute("hidden","hidden");
		
	});



	function getUsuarios(){
		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if (req.readyState == 3) {
				console.log('cargando...');

			}
			if (req.readyState == 4) {
				console.log('carga terminada!');
				llenarTabla(JSON.parse(req.responseText));

			}
		};
		req.open("GET","https://jsonplaceholder.typicode.com/users");
		req.send(null);
	}

	function llenarTabla(jsonUsuarios){
		console.log(jsonUsuarios);
		var miTabla = document.getElementById("miTabla");
		miTabla.removeChild(miTabla.childNodes[2]);
		var tbody = document.createElement("tbody");
		for(i = 0; i < jsonUsuarios.length ; i++){
			var tr = document.createElement("tr");
			
			var tdNumero = document.createElement("td");
			tdNumero.innerHTML = (i+1).toString();

			var tdId = document.createElement("td");
			tdId.innerHTML = jsonUsuarios[i].id;

			var tdName = document.createElement("td");
			tdName.innerHTML = jsonUsuarios[i].name;

			var tdUsername = document.createElement("td");
			tdUsername.innerHTML = jsonUsuarios[i].username;

			var tdEmail = document.createElement("td");
			tdEmail.innerHTML = jsonUsuarios[i].email;

			var tdPhone = document.createElement("td");
			tdPhone.innerHTML = jsonUsuarios[i].phone;

			var tdWebsite = document.createElement("td");
			tdWebsite.innerHTML = jsonUsuarios[i].website;

			tr.append(tdNumero);
			tr.append(tdId);
			tr.append(tdName);
			tr.append(tdUsername);
			tr.append(tdEmail);
			tr.append(tdPhone);
			tr.append(tdWebsite);
			console.log(tr);
			tbody.append(tr);
		}

		miTabla.append(tbody);	
	};

});

