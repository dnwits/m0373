let element_inner = document.getElementById("inner");
console.log(element_inner);
element_inner.innerHTML = "parrafo <b>cambiado</b>";
let element_outer = document.getElementById("outer");
console.log(element_outer);
element_outer.innerHTML = "<ul><li>Opción 1</li><li>Opción 2</li></ul>";