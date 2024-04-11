let numCita = prompt("Introduce el número de cita actual:");

numCita = parseInt(numCita);

let precioCita;
if (numCita <= 3) {
    precioCita = 200;
} else if (numCita <= 5) {
    precioCita = 150;
} else if (numCita <= 8) {
    precioCita = 100;
} else {
    precioCita = 50;
}


let montoTotal = 0;
if (numCita > 0) {
    if (numCita <= 3) {
        montoTotal = numCita * 200;
    } else if (numCita <= 5) {
        montoTotal = 3 * 200 + (numCita - 3) * 150;
    } else if (numCita <= 8) {
        montoTotal = 3 * 200 + 2 * 150 + (numCita - 5) * 100;
    } else {
        montoTotal = 3 * 200 + 2 * 150 + 3 * 100 + (numCita - 8) * 50;
    }
}

document.getElementById("entradas").innerHTML = "Número de cita actual: " + numCita;
document.getElementById("salidas").innerHTML = "Precio de la cita actual: " + precioCita.toFixed(2) + "€" + "<br>Monto total pagado hasta la cita actual: " + montoTotal.toFixed(2) + "€";
