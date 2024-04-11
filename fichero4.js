let peso_paquete = parseFloat(prompt("Introduzca el peso del paquete en kg:"));
let zona = parseInt(prompt("Introduzca la zona a la cual va dirigido (1, 2, 3, 4, 5):"));

let coste = 0;
let zonas = {
    1: "América",
    2: "África",
    3: "Oceanía",
    4: "Europa",
    5: "Asia"
};

if (peso_paquete > 5){
    document.getElementById("salidas").innerHTML = "El paquete no puede ser transportado ya que tiene un peso superior a 5 kg.";
} else {
    if (zona === 1) {
        coste = 11.00 * peso_paquete;
    } else if (zona === 2) {
        coste = 10.00 * peso_paquete;
    } else if (zona === 3) {
        coste = 12.00 * peso_paquete;
    } else if (zona === 4) {
        coste = 24.00 * peso_paquete;
    } else if (zona === 5) {
        coste = 27.00 * peso_paquete;
    }

    document.getElementById("salidas").innerHTML = "El coste de la entrega es: " + coste + "€";
}
