let Num_Ventas = parseInt(prompt("Introduce la cantidad de ventas realizadas durante el día:"));


let ventasMayor1000 = 0;
let ventasEntre500y1000 = 0;
let ventasMenorIgual500 = 0;

let montoMayor1000 = 0;
let montoEntre500y1000 = 0;
let montoMenorIgual500 = 0;
let montoTotal = 0;


for (let i = 0; i < Num_Ventas; i++) {
    
    let montoVenta = parseFloat(prompt("Introduce el monto de la venta " + (i + 1) + " en €:"));

    
    montoTotal += montoVenta;


    if (montoVenta > 1000) {
        ventasMayor1000++;
        montoMayor1000 += montoVenta;
    } else if (montoVenta > 500) {
        ventasEntre500y1000++;
        montoEntre500y1000 += montoVenta;
    } else {
        ventasMenorIgual500++;
        montoMenorIgual500 += montoVenta;
    }
}

document.getElementById("entradas").innerHTML = "Cantidad de ventas mayores a 1000€: " + ventasMayor1000 + "<br>" + "Cantidad de ventas entre 500€ y 1000€: " + ventasEntre500y1000 + "<br>" + "Cantidad de ventas menores o iguales a 500€: " + ventasMenorIgual500;

document.getElementById("salidas").innerHTML = "Monto total de ventas: " + montoTotal + "€<br>" + "Monto de ventas mayores a 1000€: " + montoMayor1000 + "€<br>" + "Monto de ventas entre 500€ y 1000€: " + montoEntre500y1000 + "€<br>" + "Monto de ventas menores o iguales a 500€: " + montoMenorIgual500 + "€";
                                                 