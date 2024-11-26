// Canviar propietats a diferents imatges d’un mateix document.
// Crear un element amb 12 imatges. Poden ser imatges repetides si no vols perdre temps.
// Fica totes les imatges amb el mateix height i weight
// Fica a 3 imatges la classe A, a 3 la classe B i 3 la clase C i 3 D, no les fiquis a imatges seguides, sinò que 
// intercala.
// Amb la funció getElementsByClassName, seleccionar els elements amb la clase A i aplicali a la propietat border ,
// el valor “5px solid yellow”, si no funciona, pues  “5px solid #00F”. Recorrer totes les posicions utilitzant el  for of.
// Els de la classe B, utilitzar “3px dotted red”.
// El primer de la clase B, fica-li border-radius que desitgis però sol al primer
// Amb la funció querySelectorAll, agafa tots els elements de la classe D, i fica-li un tipus de border diferent i que 
// tingui border-radius, però utilitzant foreach

// cambiar img base (tamaño y margen)
const img_total = document.getElementsByTagName('img');
for (let imagen of img_total) {
  imagen.style.width = '200px';
  imagen.style.height = '300px';
  imagen.style.margin = '25px';
}

// metodo para aplicar los estilos con dos parametros de entrada
function aplicarEstilo(elementos, estilo) {
    for (const elemento of elementos) {
      elemento.style.border = estilo;
    }
}

const elementosA = document.getElementsByClassName('A');
const elementosB = document.getElementsByClassName('B');
const elementosC = document.getElementsByClassName('C');
const elementosD = document.querySelectorAll('.D');

aplicarEstilo(elementosA, '7px solid yellow');
aplicarEstilo(elementosB, '4px dotted red');
// clase D
aplicarEstilo(elementosC, '7px double purple')
elementosC[1].style.borderRadius = '48%';

// cambiar el border radius de solo el primer elemento de B (por posición)
elementosB[0].style.borderRadius = '30%';

elementosD.forEach(elemento => {
    elemento.style.border = '3px dashed green';
    elemento.style.borderRadius = '30px';
});