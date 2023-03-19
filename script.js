window.onload = function() {
	var boton = document.getElementById("boton");
	var mensaje = document.getElementById("mensaje");

	boton.onclick = function() {
		mensaje.classList.toggle("mostrar");
	};
}