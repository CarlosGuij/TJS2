
let cantidadHamburguesas = prompt("Introduce la cantidad de hamburguesas:");

    let tipoHamburguesa = prompt("¿Qué tipo de hamburguesa deseas comprar? (sencilla, doble, triple):");

    let precios = {
        "sencilla": 20,
        "doble": 25,
        "triple": 28
    };


    let costoHamburguesas = cantidadHamburguesas * precios[tipoHamburguesa];

    let cargoTarjeta = costoHamburguesas * 0.05;

    let costoTotal = costoHamburguesas + cargoTarjeta;

        
    document.getElementById("entradas").innerHTML = "Cantidad de hamburguesas: " + cantidadHamburguesas + " (" + tipoHamburguesa + ")";
    document.getElementById("salidas").innerHTML = "Costo total: " + costoTotal.toFixed(2) + "€ (incluyendo un cargo de " + cargoTarjeta.toFixed(2) + "€ por el uso de tarjeta de crédito)";