
let misTareas = [];

const formulario = document.getElementById("form-tarea");
const inputTarea = document.getElementById("txt-nueva-tarea");
const listaTareas = document.getElementById("lista-html");

function mostrarTareas() {
    listaTareas.innerHTML = "";

    misTareas.forEach(function (tarea) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>
            ${tarea.titulo}
            ${tarea.completada ? "(SI)Completada" : "(NO)Pendiente"}
            </span>
            <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            <button onclick="cambiarEstado(${tarea.id})"> ${tarea.completada ? "Marcar Pendiente" : "Completar"}</button>
             `;
            listaTareas.appendChild(li); 
       
    });
}

    function cambiarEstado(id) {
    misTareas.forEach(function (tarea) {
        if (tarea.id === id) {
            tarea.completada = !tarea.completada;
        }
    });

    mostrarTareas();
}

    function eliminarTarea(id) {
        misTareas = misTareas.filter(function (tarea) {
            console.log(tarea.id, id);
            console.log(tarea.id !== id);
            return tarea.id !== id;
        });
        mostrarTareas();
    }

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nuevaTarea = {
        id: Date.now(),
        titulo: inputTarea.value,
        completada: false
    };

    misTareas.forEach(function (tarea) {
        if (tarea.titulo === nuevaTarea.titulo) {
            alert("La tarea ya existe");
            return;
        }
    });

    misTareas.push(nuevaTarea);
    mostrarTareas();
    inputTarea.value = "";

});