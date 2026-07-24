// Lista de turnos
let turnos = [
    "A001",
    "A002",
    "A003",
    "A004",
    "A005"
];

// Obtener elementos
const btnLlamar = document.getElementById("btnLlamar");
const turnoActual = document.getElementById("turnoActual");
const moduloActual = document.getElementById("moduloActual");
const listaTurnos = document.getElementById("listaTurnos");
const cantidadEspera = document.getElementById("cantidadEspera");
const mensajeVacio = document.getElementById("mensajeVacio");

// Mostrar la lista
function mostrarTurnos() {

    listaTurnos.innerHTML = "";

    for(let i = 0; i < turnos.length; i++){

        let li = document.createElement("li");
        li.textContent = turnos[i];
        listaTurnos.appendChild(li);

    }

    cantidadEspera.textContent = turnos.length;

    if(turnos.length == 0){
        mensajeVacio.style.display = "block";
    }else{
        mensajeVacio.style.display = "none";
    }

}

// Llamar siguiente turno
btnLlamar.addEventListener("click", function(){

    if(turnos.length > 0){

        let siguiente = turnos.shift();

        turnoActual.textContent = siguiente;
        moduloActual.textContent = "Módulo 1";

        mostrarTurnos();

    }else{

        turnoActual.textContent = "---";
        moduloActual.textContent = "Sin turnos";

    }

});

// Cargar al iniciar
mostrarTurnos();