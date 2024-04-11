let totalPagado = 0;
let pagoActual = 10;
let entradas = document.getElementById("entradas");
let salidas = document.getElementById("salidas");

    for (let mes = 1; mes <= 20; mes++) {
        totalPagado += pagoActual;
        entradas.innerHTML += "Mes " + mes + ": Pago mensual = " + pagoActual + "€<br>";
        pagoActual *= 2;
    }

salidas.innerHTML = "Total pagado después de 20 meses: " + totalPagado + "€";

document.getElementById("entradas").innerHTML += "<br>Tipo de tarjeta: " + tipoTarjeta + ", Límite de crédito actual: " + limiteCreditoActual + "€";
document.getElementById("salidas").innerHTML += "<br>Nuevo límite de crédito: " + nuevoLimiteCredito + "€";