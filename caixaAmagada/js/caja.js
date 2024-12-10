// Quant facis click damunt del cuadre la caixa ha de desapareixer i quant tornis ha d’apareixer. 
// També el text del botó ha de canviar amb “Ocultar caja”/”Mostrar Caja”:
// Heu de buscar la propietat per fer visible un element
// I per anar intercanvia, aquell mateix element haureu de preguntar si és visible o no, i fer el contrari.
let boton = document.getElementById("toggleBtn");
let caixa = document.getElementById("box");
function ocultar_mostrar (){
    if (caixa.style.visibility == "hidden"){
        caixa.style.visibility = "visible";
        boton.innerHTML = "Ocultar Caja"
    } else {
    caixa.style.visibility = "hidden";
    boton.innerHTML = "Mostrar Caja"
    }
}
boton.addEventListener("click", ocultar_mostrar);


// let botoncss = document.getElementById("botonCSS");
// //let paragraf = document.getElementsByClassName("p");
// function cambiarEstilo(){
//     caixa.textContent = "cambiado";
//     caixa.classList.add = "nuevoEstilo";
// }
// botoncss.addEventListener("click", cambiarEstilo);
// // function mostrar (){
//     caixa.style.visibility = "visible";
//     boton.innerHTML = "Ocultar Caja"
// }