
let c = parseFloat(prompt("Introduce el número de ciudades:"));
let t = parseFloat(prompt("Introduce el número de tiendas por ciudad:"));
let n = parseFloat(prompt("Introduce el número de empleados por tienda:"));


let ventasEmpleado = [];
let ventasTienda = [];
let ventasCiudad = [];
let totalVentas = 0;

for (let i = 0; i < c; i++) {
  ventasCiudad[i] = 0;
  for (let j = 0; j < t; j++) {
    ventasTienda[j] = 0;
    for (let k = 0; k < n; k++) {
      ventasEmpleado[k] = parseFloat(prompt("Introduce las ventas del empleado " + (k+1) + " de la tienda " + (j+1) + " de la ciudad " + (i+1) + ":"));
      ventasTienda[j] += ventasEmpleado[k];
      ventasCiudad[i] += ventasEmpleado[k];
      totalVentas += ventasEmpleado[k];
    }
  }
}

for (let i = 0; i < c; i++) {
  for (let j = 0; j < t; j++) {
    document.getElementById("entradas").innerHTML += "Las ventas del empleado " + (j+1) + " de la tienda " + (i+1) + " de la ciudad " + (i+1) + " son " + ventasEmpleado[j] + "€<br>";
  }
  document.getElementById("entradas").innerHTML += "Las ventas de la tienda " + (i+1) + " de la ciudad " + (i+1) + " son " + ventasTienda[i] + "€<br>";
  document.getElementById("entradas").innerHTML += "Las ventas de la ciudad " + (i+1) + " son " + ventasCiudad[i] + "€<br>";
}
document.getElementById("salidas").innerHTML = "El total de ventas de la cadena en un solo día es " + totalVentas + "€";