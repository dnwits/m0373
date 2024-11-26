// a. Escriure per consola o per alert, "funció capturada"
// b. Canviar el color de fons al event.
// let position = 
function changeColor(elemento){
    console.log("funció capturada");
    elemento.target.style.backgroundColor = 'lightpink';
    elemento.target.style.color = 'green';
}

function changeColorListener(elemento){
    console.log("funció capturada por listener");
    elemento.target.style.color = 'red';
}
let eleHTML = document.getElementById('listener');

eleHTML.addEventListener("click",changeColorListener);

let eleHTML2 = document.getElementById('listener2');
eleHTML2.addEventListener("click", elemento =>{
    elemento.target.style.backgroundColor = 'black';
    elemento.target.style.color = 'pink';
})

function showMousePositios (e){
    let var_x = document.getElementById('X');
    let var_y = document.getElementById('Y');
    var_x.textContent = e.pageX;
    var_y.textContent = e.pageY;
}

document.querySelector("html").addEventListener("mousemove",showMousePositios);

let boton = document.getElementById("stop");

boton.addEventListener("click",e =>{
    document.querySelector("html").removeEventListener("mousemove", showMousePositios);
})