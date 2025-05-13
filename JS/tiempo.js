const factores = {
  segundo: 1,
  minuto: 60,
  hora: 3600
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
