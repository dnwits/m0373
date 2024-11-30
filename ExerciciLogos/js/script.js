// Quant facis click damunt de cada imatge, canviar la imatge central.
// En aquest cas has de seleccionar totes les imatges dins (#images)
// Recorrer tots i afegir-li un eventListener
// El eventlistener ha de cridar a una funció que faci el següent
// Recuperi la imatge principal
// Canvi el atribut src, per el src de event , amb les funcions setAttribute i getAttribute
// Seleccionar todas las imágenes dentro del div "images"


// Quant facis click damunt de cada color, canviar el border al color pertinent.
// En aquest cas has de seleccionar tots els divs dintre colors (#colors)
// Recorrer tots i afegir-li un eventListener
// El eventlistener ha de recuperar el color de fons del event.
// Fica aquell color al bordeColor del element picture.


// let borde = document.getElementById('picture');
// borde.addEventListener("click", elemento =>{
//     elemento.target.style.border = 'pink';
// })
// Seleccionamos todas las imágenes pequeñas
const imagenesPequeñas = document.querySelectorAll('#images img');

// Función para cambiar la imagen central
function cambiarImagenCentral(event) {
  // Obtenemos la imagen central
  const imagenCentral = document.getElementById('picture img');

  // Actualizamos el atributo src de la imagen central con el src de la imagen clicada
  imagenCentral.src = event.target.src;
}

// Agregamos el evento click a cada imagen pequeña
imagenesPequeñas.forEach(imagen => {
  imagen.addEventListener('click', cambiarImagenCentral);
});


// Quant facis click damunt de les lupes augmenti o disminueixi el zoom. 
// Fer zoom vol dir augmentar el width i el height amb 50px
