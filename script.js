<<<<<<< HEAD
const colorBtns = document.querySelectorAll('.btn')

colorBtns.forEach(function (colorBtn) {

    colorBtn.addEventListener('click', function (event) {
        let btnColor = event.target.dataset.color

        document.documentElement.style.setProperty('--theme-color', btnColor)
    })
    
})
=======
window.onload = function() {
	var boton = document.getElementById("boton");
	var mensaje = document.getElementById("mensaje");

	boton.onclick = function() {
		mensaje.classList.toggle("mostrar");
	};
}
>>>>>>> 0448aaecaa51cf2a585d6f67643abc12ae20ecb7
