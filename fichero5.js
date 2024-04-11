let tipoTarjeta = parseInt(prompt("Introduce el tipo de tarjeta (1, 2, 3):"));

let limiteCreditoActual = parseFloat(prompt("Introduce el límite de crédito actual en €:"));

let aumentosPorcentaje = {
    1: 0.25,
    2: 0.35,
    3: 0.40
};

let aumentoPorcentaje = aumentosPorcentaje[tipoTarjeta];

if (aumentoPorcentaje === undefined) {
    aumentoPorcentaje = 0.50;
}

let nuevoLimiteCredito = limiteCreditoActual * (1 + aumentoPorcentaje);

document.getElementById("entradas").innerHTML = "Tipo de tarjeta: " + tipoTarjeta + ", Límite de crédito actual: " + limiteCreditoActual + "€";
document.getElementById("salidas").innerHTML = "Nuevo límite de crédito: " + nuevoLimiteCredito + "€";
