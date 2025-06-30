function convertirTemperatura() {
  const valor = parseFloat(document.getElementById("valor").value);
  const origen = document.getElementById("unidadOrigen").value;
  const destino = document.getElementById("unidadDestino").value;

  let resultado = valor;
  let intermedio = '';
  let procedimiento = '';

  // Convertir primero a Celsius si no está ya en Celsius
  let valorCelsius;
  if (origen === "celsius") {
    valorCelsius = valor;
    intermedio = `${valor} °C`;
  } else if (origen === "kelvin") {
    valorCelsius = valor - 273.15;
    intermedio = `${valor} K - 273.15 = ${valorCelsius.toFixed(2)} °C`;
  } else if (origen === "fahrenheit") {
    valorCelsius = (valor - 32) * 5 / 9;
    intermedio = `(${valor} °F - 32) × 5/9 = ${valorCelsius.toFixed(2)} °C`;
  }

  // Convertir de Celsius a unidad destino
  if (destino === "celsius") {
    resultado = valorCelsius;
    procedimiento = `Valor ya en °C: ${resultado.toFixed(2)} °C`;
  } else if (destino === "kelvin") {
    resultado = valorCelsius + 273.15;
    procedimiento = `${valorCelsius.toFixed(2)} °C + 273.15 = ${resultado.toFixed(2)} K`;
  } else if (destino === "fahrenheit") {
    resultado = (valorCelsius * 9 / 5) + 32;
    procedimiento = `(${valorCelsius.toFixed(2)} °C × 9/5) + 32 = ${resultado.toFixed(2)} °F`;
  }

  document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(2)} ${destino === "celsius" ? "°C" : destino === "kelvin" ? "K" : "°F"}`;
  document.getElementById("procedimiento").innerHTML = `<strong>Procedimiento:</strong><br>${intermedio}<br>${procedimiento}`;
}