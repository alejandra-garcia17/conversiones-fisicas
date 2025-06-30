const factoresPresion = {
  pascal: 1,                    // Base
  kilopascal: 1000,             // 1 kPa = 1000 Pa
  bar: 100000,                  // 1 bar = 100,000 Pa
  atm: 101325,                  // 1 atm = 101325 Pa
  mmhg: 133.322                 // 1 mmHg = 133.322 Pa
};

function convertirPresion() {
  const valor = parseFloat(document.getElementById("valor").value);
  const origen = document.getElementById("unidadOrigen").value;
  const destino = document.getElementById("unidadDestino").value;



  // Convertir a Pascal
  const valorEnPascal = valor * factoresPresion[origen];

  // Convertir a unidad destino
  const resultado = valorEnPascal / factoresPresion[destino];

  document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(4)} ${formatoUnidadPresion(destino)}`;

  const procedimientoTexto = `
    <strong>Procedimiento:</strong><br>
    1. Convertir ${valor} ${formatoUnidadPresion(origen)} a Pascal: ${valor} × ${factoresPresion[origen]} = ${valorEnPascal.toFixed(4)} Pa<br>
    2. Convertir ${valorEnPascal.toFixed(4)} Pa a ${formatoUnidadPresion(destino)}: ${valorEnPascal.toFixed(4)} ÷ ${factoresPresion[destino]} = ${resultado.toFixed(4)} ${formatoUnidadPresion(destino)}
  `;
  document.getElementById("procedimiento").innerHTML = procedimientoTexto;
}

function formatoUnidadPresion(unidad) {
  switch(unidad) {
    case "pascal": return "Pa";
    case "kilopascal": return "kPa";
    case "bar": return "bar";
    case "atm": return "atm";
    case "mmhg": return "mmHg";
    default: return unidad;
  }
}
