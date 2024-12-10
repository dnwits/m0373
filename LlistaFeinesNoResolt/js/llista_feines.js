// Quan es doni click, el text de la caixa de text s’haurà d’afegir com un nou element de llista a la pàgina web. 
// Haureu d’utilitzar createElement, i afegir a la llista (el membre és afegir-fills, pero el mètode és amb angles), 
// al afegir el quadre de text ha de quedar amb blanc.
// V2.0 : Al element item de la llista, abans d’afegir-lo fes-li un botó amb la lletra X, que tingui un listener, 
// que borri el element li (.remove()).

// function addElement() {
//   // crea un nuevo div
//   // y añade contenido
//   var newLi = document.createElement(li);
//   var newContent = document.createTextNode(input);
//   newLi.appendChild(newContent); //añade texto al div creado.
//   // añade el elemento creado y su contenido al DOM
//   var lista = document.getElementById("taskList");
//   document.body.insertAdjacentText(newLi, lista);
// }
// boton.addEventListener("click", addElement);
let input = document.getElementById("newTaskInput"); //taskNew
let boton = document.getElementById("addTaskBtn");
let lista = document.getElementById("taskList");

function afegirTasca(){
    let tasca = input.value;
    let nuevo = document.createElement("li");
    nuevo.textContent = tasca;
    //let nuevoTexto = document.createTextNode(input.value)
    let borrarBoton = document.createElement("button");
    borrarBoton.textContent = "X";
    
    borrarBoton.addEventListener("click", ()=> {
        nuevo.remove();
    })   
    borrarBoton.classList.add("deleteBtn");
    nuevo.appendChild(borrarBoton); 

    lista.appendChild(nuevo);
    input.value = ' ';
}
boton.addEventListener("click", afegirTasca);
// boton.addEventListener("click", () => {
//     let nuevo = document.createElement("li");
//     let nuevoTexto = document.createTextNode(input.value);
//     nuevo.appendChild(nuevoTexto);

//     let botonEliminar = document.createElement("button");
//     botonEliminar.textContent = "X";
//     botonEliminar.style.background = "red";
//     botonEliminar.addEventListener("click", () => {
//         nuevo.remove();
//     });

//     nuevo.appendChild(botonEliminar);
//     lista.appendChild(nuevo);
//     input.value = "";
// });
