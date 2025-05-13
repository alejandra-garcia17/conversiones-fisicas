// Objeto con factores de conversión respecto al metro
const factores = {
  metro: 1,
  kilometro: 1000,
  centimetro: 0.01,
  milimetro: 0.001,
  pulgada: 0.0254,
  pie: 0.3048,
  milla: 1609.34
};

function convertir() {
  // Obtener el valor y las unidades seleccionadas
  const valor = parseFloat(document.getElementById("valor").value);
  const origen = document.getElementById("unidadOrigen").value;
  const destino = document.getElementById("unidadDestino").value;

  // Convertir el valor a la unidad destino usando factores
  const resultado = valor * (factores[origen] / factores[destino]);
  document.getElementById("resultado").innerText = `Resultado: ${resultado} ${destino}s`;

  // Mostrar el procedimiento de conversión paso a paso
  const procedimiento = `${valor} ${origen}(es) * (${factores[origen]} / ${factores[destino]}) = ${resultado} ${destino}s`;
  document.getElementById("procedimiento").innerText = `Procedimiento: ${procedimiento}`;
}

