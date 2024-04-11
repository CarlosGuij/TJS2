let clave = prompt("Ingrese la clave del producto:");
let materiaPrima = prompt("Ingrese el coste de la materia prima:");

let manoDeObra = 0;
let gastosDeFabricacion = 0;

if (clave === 3 || clave === 4) {
    manoDeObra = materiaPrima * 0.75;
} else if (clave === 1 || clave === 5) {
    manoDeObra = materiaPrima * 0.8;
} else if (clave === 2 || clave === 6) {
    manoDeObra = materiaPrima * 0.85;
}

if (clave === 2 || clave === 5) {
    gastosDeFabricacion = materiaPrima * 0.3;
} else if (clave === 3 || clave === 6) {
    gastosDeFabricacion = materiaPrima * 0.35;
} else if (clave === 1 || clave === 4) {
    gastosDeFabricacion = materiaPrima * 0.28;
}

let costoProduccion = materiaPrima + manoDeObra + gastosDeFabricacion;
let precioVenta = costoProduccion + costoProduccion * 0.45;

document.getElementById("entradas").innerHTML = "El coste de producción es: " + costoProduccion;
document.getElementById("salidas").innerHTML = "El precio de venta es: " + precioVenta + "€";