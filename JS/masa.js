const factores = {
    gramo: 1,
    kilogramo: 1000,
    miligramo: 0.001
  };

  function convertir() {
    const valor = parseFloat(document.getElementById("valor").value);
    const origen = document.getElementById("unidadOrigen").value;
    const destino = document.getElementById("unidadDestino").value;

    const resultado = valor * (factores[origen] / factores[destino]);
    document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(3)} ${destino}s`;
  }