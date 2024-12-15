//Descripción: Crea un campo de texto y un botón. Cuando escribas algo y hagas clic en el botón, 
//añade el texto como un nuevo elemento de lista.
let nuevo = document.getElementById('nuevoElemento');
let boton = document.getElementById('agregar');
let listado = document.getElementById('lista');
let contador = document.getElementById('contador');

function actualizarContador() {
    contador.textContent = `Elementos en la lista: ${listado.children.length}`;
}

function agregarAlista(){
    let texto = nuevo.value;
    if (texto.trim() === "") return; 

    let elementoLista = document.createElement("li");
    elementoLista.textContent = texto;
    elementoLista.addEventListener('click', ()=> {
        elementoLista.remove();
        actualizarContador();
    }) 

    listado.appendChild(elementoLista);
    nuevo.value = '';
    actualizarContador();
}
boton.addEventListener("click", agregarAlista);
