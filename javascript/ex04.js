//Crea un document HTML amb un script que calcula una suma i afegeix el resultat a un element <div> buit:
function sumar() {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const resultado = Number(numero1) + Number(numero2);

    document.getElementById('resultado').textContent = "El resultat és "+resultado;
  }