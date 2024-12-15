// Quant facis click damunt de cada imatge, canviar la imatge central.
// En aquest cas has de seleccionar totes les imatges dins (#images)
// Recorrer tots i afegir-li un eventListener
// El eventlistener ha de cridar a una funció que faci el següent
// Recuperi la imatge principal
// Canvi el atribut src, per el src de event , amb les funcions setAttribute i getAttribute
// Seleccionar todas las imágenes dentro del div "images"
// Seleccionamos todas las imágenes pequeñas

//AMB ID'S
// let imgCentral = document.getElementById("principal"); //declarar fuera para no declarar tantas veces el mismo elemento
// let imgHTML = document.getElementById("html");
// imgHTML.addEventListener("click",e=> {
//     //let imgCentral = document.getElementById("principal");
//     imgCentral.setAttribute("src", e.target.getAttribute("src")); //setAttribute (tipo, event.target.getAttribute(tipo))
// })

// let imgB = document.getElementById("bootstrap");
// imgB.addEventListener("click",e=> {
//     //let imgCentral = document.getElementById("principal");
//     imgCentral.setAttribute("src", e.target.getAttribute("src"));
// })

// //imgJS.addEventListener("click", e=>{
//     //let imgCentral = document.getElementById("principal");
//     //imgCentral.setAttribute("src",e.target.getAttribute("src"));
// //})
//function changeImg (e){ //ordenado en función
//     imgCentral.setAttribute("src",e.target.getAttribute("src"));
// }
// let imgJS = document.getElementById("js"); //declarar elemento
// imgJS.addEventListener("click", changeImg); //lalmar a la función

//SENSE ID'S
let imgCentral = document.getElementById("principal"); //declarar img central
let imgTotes = document.querySelectorAll("#images img"); //declarar elementos dent4ro del div
console.log(imgTotes);
function changeImg (e){ //ordenado en función
    imgCentral.setAttribute("src",e.target.getAttribute("src"));
}
imgTotes.forEach(img => {
    img.addEventListener("click",changeImg); //llamar función
})

// Quant facis click damunt de cada color, canviar el border al color pertinent.
// En aquest cas has de seleccionar tots els divs dintre colors (#colors)
// Recorrer tots i afegir-li un eventListener
// El eventlistener ha de recuperar el color de fons del event.
// Fica aquell color al bordeColor del element picture.
let borde = document.getElementById("picture"); //declarar marco
let colores = document.querySelectorAll(".colors div"); //declarar colores
console.log(colores);
function changeBorde(e){
    let color = window.getComputedStyle(e.target).backgroundColor;
    borde.style.borderColor = color;
}
//let colRojo = document.getElementById("rojo"); //de uno en uno cambiando el nombre
//LSITENER DEL BORDE Y 
//colRojo.addEventListener("click", changeBorde); <<<<<FUNCIONA Y TE AHORRAS EL forEach
//colores = addEventListener("click", changeBorde);

colores.forEach(elemento => {
    elemento.addEventListener("click",changeBorde);
})

// Quant facis click damunt de les lupes augmenti o disminueixi el zoom. 
// Fer zoom vol dir augmentar el width i el height amb 50px
let zMenos = document.getElementById("out");
let zMas = document.getElementById("in");
let imgenCentro = document.getElementById("principal");
console.log(zMas,zMenos);

zMenos.addEventListener("click", zoomOut);
zMas.addEventListener("click", zoomIn);

function zoomOut (e){
    let dim = imgenCentro.offsetWidth;
    console.log(dim);
    imgenCentro.style.height = (dim-50)+"px";
    imgenCentro.style.width = (dim-50) +"px";
}
function zoomIn (e){
    let dim = imgenCentro.offsetWidth;
    console.log(dim);
    imgenCentro.style.height = (dim+50) +"px";
    imgenCentro.style.width = (dim+50) + "px";
}
