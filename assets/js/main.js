//Validation
var btnInicio = document.getElementById("inicio-sesion");
btnInicio.addEventListener("click", validateForm);

function validateForm(){
	var nombre = document.getElementById("name").value;
	var pass = document.getElementById("password").value;

	var valNombre = document.getElementsByClassName("input-group")[0];
	var valPass = document.getElementsByClassName("input-group")[1];
	var btn = document.getElementsByClassName("input-group")[2];

	if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
		var nombreSpan = document.createElement("span");
		var nombreText = document.createTextNode("Nombre de usuario incorrecto");
		nombreSpan.appendChild(nombreText);
		valNombre.appendChild(nombreSpan);
	}
	if((pass == "") || (pass == 123456) || (pass.length <= 6)){
		var passSpan = document.createElement("span");
		var passText = document.createTextNode("Contraseña incorrecta");
		passSpan.appendChild(passText);
		valPass.appendChild(passSpan);
	}
	else{
		document.getElementById("inicio-sesion").setAttribute("href", "collage.html");
	}

	clear(); //resetear campos 
}

function clear(){
	document.getElementById("name").value = "";
	document.getElementById("password").value = "";
}

//Drag and Drop
function drag(event){
	event.dataTransfer.setData("text", event.target.id); 
}

function finalDrop(event){
	event.preventDefault(); 
}

function drop(event){
	event.preventDefault();

	var dato = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(dato));
}
