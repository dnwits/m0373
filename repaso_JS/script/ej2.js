// Descripción: Crea una lista de botones. Cuando hagas clic en un botón, cambia el color de fondo del 
//cuerpo a un color específico.
let botones = document.querySelectorAll('button'); // Selecciona todos los botones
let fondo = document.getElementsByTagName('body')[0]; // Obtiene el <body>
// devuelve una lista de elementos, aunque contenga solo uno. Debes seleccionar el primer elemento de la lista

// Función que cambia el color del fondo
function cambiarFondo(evento) {
    let color = evento.target.dataset.color; // Obtiene el color del atributo "data-color"
    fondo.style.backgroundColor = color; // Cambia el fondo
}

// Añade el evento "click" a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', cambiarFondo);
});
