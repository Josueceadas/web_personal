function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
  }
}

function mostrarCompletadas() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
// Función para mostrar tareas pendientes
function mostrarPendientes() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (!tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
// Agregar evento de clic al botón "Mostrar Completadas"
document
  .getElementById("mostrarCompletadas")
  .addEventListener("click", mostrarCompletadas);
// Agregar evento de clic al botón "Mostrar Pendientes"
document
  .getElementById("mostrarPendientes")
  .addEventListener("click", mostrarPendientes);
