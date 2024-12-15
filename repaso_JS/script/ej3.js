//Descripción: Crea un selector de imágenes.
//Cuando elijas una imagen de una lista desplegable, muestra esa imagen en un lugar destacado.
let selector = document.getElementById('imageSelector'); // Selector de imágenes
let espacioImg = document.getElementById('displayImage'); // Imagen destacada

function cambiarImagen(e) {
    let nuevaSrc = e.target.value; // Obtén el valor de la opción seleccionada
    espacioImg.setAttribute("src", nuevaSrc); // Cambia el atributo "src" de la imagen
}

// Escucha el evento "change" en el selector
selector.addEventListener("change", cambiarImagen);

