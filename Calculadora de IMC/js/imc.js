document.getElementById("btnCalcular").addEventListener("click", calcularIMC);

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let mensaje = "";
  let color = "";

  if (imc < 18.5) {
    mensaje = "Bajo peso";
    color = "blue";
  } else if (imc < 24.9) {
    mensaje = "Peso normal";
    color = "green";
  } else if (imc < 29.9) {
    mensaje = "Sobrepeso";
    color = "orange";
  } else {
    mensaje = "Obesidad";
    color = "red";
  }

  document.getElementById("resultado").innerHTML = 
    `Tu IMC es <strong>${imc.toFixed(2)}</strong>: ${mensaje}`;
  document.getElementById("resultado").style.color = color;
}


