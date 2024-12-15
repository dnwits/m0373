// Descripción: Cuando hagas clic en un botón, cambia el texto de un párrafo.
const boton = document.getElementById('cambiarTexto');
const parrafo = document.getElementById('texto');

function cambiar (){
    parrafo.innerHTML= "Texto nuevo :3";
}
boton.addEventListener('click',cambiar);