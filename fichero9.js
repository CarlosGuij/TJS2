let n = parseFloat(prompt("Introduce el número de trabajadores:"));

let horas = [];
let tarifa = [];

let total = 0;

for (let i = 0; i < n; i++) {
  let nombre = prompt("Introduce el nombre del trabajador " + (i+1) + ":");
  horas[i] = parseFloat(prompt("Introduce las horas trabajadas por semana para " + nombre + ":"));
  tarifa[i] = parseFloat(prompt("Introduce la tarifa por hora para " + nombre + ":"));

  let sueldoSemanal = 0;
  if (horas[i] <= 40) {
    sueldoSemanal = horas[i] * tarifa[i];
  } else {
    sueldoSemanal = 40 * tarifa[i] + (horas[i] - 40) * tarifa[i] * 1.5;
  }

  total += sueldoSemanal;

  document.getElementById("entradas").innerHTML += "El sueldo semanal de " + nombre + " es " + sueldoSemanal + "€<br>";
}

document.getElementById("salidas").innerHTML = "La empresa pagó un total de " + total + "€ por los " + n + " empleados.";