
let arreglo = [""];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const valor1 = numeroAleatorio(0, 9999);
const valor2 = numeroAleatorio(0, 9999);

document.getElementById("aleatorio1").innerHTML = valor1;
document.getElementById("aleatorio2").innerHTML = valor2;

function drop(ev) {

    if (arreglo[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

    //metodos calcular mayor y menor
    if (arreglo[0] == "mayor" && valor1 > valor2 || arreglo[0] == "menor" && valor1 < valor2 || arreglo[0] == "igual" && valor1 == valor2) {
        document.querySelector("h1").innerHTML = "¡Correcto!";
    } else {
        document.querySelector("h1").innerHTML = "¡Intentalo de nuevo!";
    }

}
