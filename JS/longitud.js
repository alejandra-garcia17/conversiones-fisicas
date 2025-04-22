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
    const valor = parseFloat(document.getElementById("valor").value);
    const origen = document.getElementById("unidadOrigen").value;
    const destino = document.getElementById("unidadDestino").value;

    const resultado = valor * (factores[origen] / factores[destino]);
    document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(3)} ${destino}s`;
  }