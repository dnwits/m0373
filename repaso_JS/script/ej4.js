//Descripción: Crea un botón que cuente cuántas veces ha sido clickeado y muestra el número en un párrafo.
let botonClick = document.getElementById('contador');
let mostrarClicks = document.getElementById('numeroClicks');
var contador = 0;

// function sumar(){
//     contador++;
//     mostrarClicks.innerHTML = "Clics: "+contador;
// }
// botonClick.addEventListener("click", sumar);
botonClick.addEventListener("click", () => {
    mostrarClicks.innerHTML = `Clics: ${++contador}`;
});