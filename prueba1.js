
  //Obtener los identificadores de los objetos del formulario
  var num1 = document.getElementById("opera1").value;
var  num2 =  document.getElementById('opera2').value;
var  result =  document.getElementById('result')
var  button =  document.getElementById('lanzar')
var  operador =  document.getElementById('operador').value;
  //Crear un manejador del evento pulsar botón.
  button.onclick = calcular();

button.onlcli;
//Realizar los cálculos cuando se pulsa el botón.
function calcular() {

  var result;
  var cad;



  switch (operador) {
    case "suma":
      result = num1 + num2;
      cad = "Resultado: " + num1 + "+" + num2 + " = " + result;
      break;
    case "resta":
      result = num1 - num2;
      cad = "Resultado: " + num1 + "-" + num2 + " = " + result;
      break;
    case "multiplicacion":
      result = num1 * num2;
      cad = "Resultado: " + num1 + "*" + num2 + " = " + result;
      break;
    case "division":
      result = num1 / num2;
      cad = "Resultado: " + num1 + "/" + num2 + " = " + result;
      break;
  }
  result.innerhtml(cad);
}
