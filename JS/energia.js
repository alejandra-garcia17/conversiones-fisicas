const factoresEnergia = {
  joule: 1,
  kilojoule: 1000,              // 1 kJ = 1000 J
  caloria: 4.184,               // 1 cal = 4.184 J
  kilocaloria: 4184             // 1 kcal = 4184 J
};

function convertirEnergia() {
  const valor = parseFloat(document.getElementById("valor").value);
  const origen = document.getElementById("unidadOrigen").value;
  const destino = document.getElementById("unidadDestino").value;

  // Paso 1: Convertir a Joules
  const valorEnJoules = valor * factoresEnergia[origen];

  // Paso 2: Convertir a la unidad destino
  const resultado = valorEnJoules / factoresEnergia[destino];

  // Mostrar resultado
  document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(4)} ${formatoUnidad(destino)}`;

  // Mostrar procedimiento
  const procedimientoTexto = `
    <strong>Procedimiento:</strong><br>
    1. Convertir ${valor} ${formatoUnidad(origen)} a Joules: ${valor} × ${factoresEnergia[origen]} = ${valorEnJoules.toFixed(4)} J<br>
    2. Convertir ${valorEnJoules.toFixed(4)} J a ${formatoUnidad(destino)}: ${valorEnJoules.toFixed(4)} ÷ ${factoresEnergia[destino]} = ${resultado.toFixed(4)} ${formatoUnidad(destino)}
  `;
  document.getElementById("procedimiento").innerHTML = procedimientoTexto;
}

function formatoUnidad(unidad) {
  switch(unidad) {
    case "joule": return "J";
    case "kilojoule": return "kJ";
    case "caloria": return "cal";
    case "kilocaloria": return "kcal";
    default: return unidad;
  }
}