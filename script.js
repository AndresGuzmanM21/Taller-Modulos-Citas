

let turnos = [
    "A 055",
    "A 056",
    "A 057",
    "A 058",
    "A 059"
];

// Obtener elementos
const listaTurnos = document.getElementById("listaTurnos");
const turnoActual = document.getElementById("turnoActual");
const moduloActual = document.getElementById("moduloActual");
const contadorEspera = document.getElementById("contadorEspera");
const mensajeVacio = document.getElementById("mensajeVacio");
const btnLlamar = document.getElementById("btnLlamar");

// Mostrar la fila
function mostrarTurnos() {

    listaTurnos.innerHTML = "";

    if (turnos.length === 0) {
        mensajeVacio.style.display = "block";
    } else {
        mensajeVacio.style.display = "none";

        turnos.forEach(function(turno) {

            let li = document.createElement("li");
            li.textContent = turno;
            listaTurnos.appendChild(li);

        });
    }

    contadorEspera.textContent = turnos.length;
}

// Llamar siguiente turno
function llamarSiguiente() {

    if (turnos.length > 0) {

        let siguiente = turnos.shift();

        turnoActual.textContent = siguiente;
        moduloActual.textContent = "Módulo 1";

        mostrarTurnos();

    } else {

        turnoActual.textContent = "---";
        moduloActual.textContent = "Sin turnos";
        mostrarTurnos();

    }
}

// Evento del botón
btnLlamar.addEventListener("click", llamarSiguiente);

// Mostrar al cargar la página
mostrarTurnos();