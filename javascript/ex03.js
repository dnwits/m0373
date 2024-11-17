// Realitzar una funció que esperi 1 valors d’entrada i retorni la frase “ets major d’edat “ 
//o “Ets menor d’edat”, a la part principal, aquesta frase s’ha d’afegir al final del document.
function VerficarMayorDeEdat(edad) {
    if (edad >= 18) {
      return "Ets major d’edat";
    } else {
      return "Ets menor d’edat";
    }
  }

const resultado = document.getElementById("resultat");
let edadUser = prompt("Introduexi la seva edat");
edadUser = Number(edadUser);

const mensaje = VerficarMayorDeEdat(edadUser);
resultado.textContent = mensaje;