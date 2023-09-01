/*Drag y Drog*/

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

/*Barra de progreso*/
const progreso = document.getElementById("progreso");
const boton = document.getElementById("volver");

let contadorProgreso = 1;

function actualizarProgreso() {
    const porcentaje = contadorProgreso * 10;
    progreso.style.width = `${porcentaje}%`;
    progreso.innerHTML = `${porcentaje}%`;
    contadorProgreso++;

    if (porcentaje > 99) {
        boton.disabled = true;
        progreso.innerHTML = "100%";
    }
}

/*Números aleatorios*/

const imagenOb1 = document.getElementById("mayor");
const imagenOb2 = document.getElementById("menor");
const imagenOb3 = document.getElementById("igual");

const bloque1 = document.querySelector(".imagen__mayor");
const bloque2 = document.querySelector(".imagen__menor");
const bloque3 = document.querySelector(".imagen__igual");

boton.addEventListener("click", function () {
    arreglo = [""];

    bloque1.appendChild(imagenOb1);
    bloque2.appendChild(imagenOb2);
    bloque3.appendChild(imagenOb3);


    valor1 = numeroAleatorio(0, 999);
    valor2 = numeroAleatorio(0, 999);

    document.getElementById("aleatorio1").innerHTML = valor1;
    document.getElementById("aleatorio2").innerHTML = valor2;

    document.querySelector("h1").innerHTML = "- Nivel: Basico -";

    actualizarProgreso();
});


/*Agregar Imagen*/
let contador = 0;

function drop(ev) {

    if (arreglo[parseInt(ev.target.id)] == "") {
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
    }

    //metodos calcular mayor, menor e igual
    if (arreglo[0] == "mayor" && valor1 > valor2 || arreglo[0] == "menor" && valor1 < valor2 || arreglo[0] == "igual" && valor1 == valor2) {
        contador++;
        document.querySelector("h1").innerHTML = "Correcto " + contador + " punto";
        if (contadorProgreso > 10) {
            document.querySelector("h1").innerHTML = `obtuviste ${contador} puntos`;
        }
    } else {
        document.querySelector("h1").innerHTML = "Mal 0 puntos";
        if (contadorProgreso > 10) {
            document.querySelector("h1").innerHTML = `obtuviste ${contador} puntos`;
        }
    }

}
