//Crea un document amb 3 div que inicialment tenen que tindre el text “Div1”, “Div2” i “Div3” 
//→ Llavors fer una crida a cadascuna de les funcions creades als exercicis 1,2,3, i que és mostri 
//el resultat de cadascuna de les funcions a cadascun dels div2.
//  a. Mostra algun dels div utilitzant el mètode append(XXX)
//  b. Mostra algun dels div utilitzant la propietat InnerHTML.
// Asumimos que las funciones sumar, calcularPromedio y comprobarEdad ya están definidas
function VerficarMayorDeEdat(edad) {
    if (edad >= 18) {
      return "Ets major d’edat";
    } else {
      return "Ets menor d’edat";
    }
  }
function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}
function calcularMitjana(numero1, numero2) {
    let mitjana = (numero1 + numero2) / 2;
    alert("Ex2>> la mitjana de 8 i 4 és: " + mitjana);
    return mitjana;
}
function actualizarDivs() {
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');

    div1.textContent = "La suma de 5 + 3 és "+sumar(5, 3);
    div2.innerHTML = "La mitjana de 8 i 4 és: " + calcularMitjana(8, 4);
    let edadUser = prompt("Introduexi la seva edat");
    edadUser = Number(edadUser);
    div3.append(VerficarMayorDeEdat(edadUser));
}

actualizarDivs();