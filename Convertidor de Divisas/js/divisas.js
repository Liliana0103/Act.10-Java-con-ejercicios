function convertir() {
  const pesos = parseFloat(document.getElementById('pesos').value);

  if (isNaN(pesos) || pesos <= 0) {
    document.getElementById('resultado').innerText = 'Ingresa una cantidad válida.';
    return;
  }

  const dolar = 18; // ejemplo: 1 USD = 18 MXN
  const euro = 19.5; // ejemplo: 1 EUR = 19.5 MXN

  const resultadoDolar = (pesos / dolar).toFixed(2);
  const resultadoEuro = (pesos / euro).toFixed(2);

  document.getElementById('resultado').innerText =
    `${pesos} pesos equivalen a ${resultadoDolar} USD o ${resultadoEuro} EUR.`;
}
function convertir() {
  const pesos = parseFloat(document.getElementById('pesos').value);

  if (isNaN(pesos) || pesos <= 0) {
    document.getElementById('resultado').innerText = 'Ingresa una cantidad válida.';
    return;
  }

  const dolar = 18;
  const euro = 19.5; 

  const resultadoDolar = (pesos / dolar).toFixed(2);
  const resultadoEuro = (pesos / euro).toFixed(2);

  document.getElementById('resultado').innerText =
    `${pesos} pesos equivalen a ${resultadoDolar} USD o ${resultadoEuro} EUR.`;
}

