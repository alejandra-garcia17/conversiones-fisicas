const factores = {
  gramo: 1,
  kilogramo: 1000,
  miligramo: 0.001,
  libra: 453.592,
  onza: 28.3495
};

function convertir() {
  const valor = parseFloat(document.getElementById("valor").value);
  const origen = document.getElementById("unidadOrigen").value;
  const destino = document.getElementById("unidadDestino").value;

  const resultado = valor * (factores[origen] / factores[destino]);
  document.getElementById("resultado").innerText = `Resultado: ${resultado} ${destino}s`;

  // Mostrar el procedimiento
  const procedimiento = `${valor} ${origen}(es) * (${factores[origen]} / ${factores[destino]}) = ${resultado} ${destino}s`;
  document.getElementById("procedimiento").innerText = `Procedimiento: ${procedimiento}`;
}
