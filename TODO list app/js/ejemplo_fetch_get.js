// Contenedor donde se dibujan las tareas
let taskContainer = document.querySelector(".tareas-container");

// Template de tarea Pendiente
let taskPendingTemplateReference = document.querySelector(".tarea.pendiente.template");

// Template de tarea Completada
let taskCompletedTemplateReference = document.querySelector(".tarea.completada.template");

// Template de tarea Archivada
let taskArchivedTemplateReference = document.querySelector(".tarea.archivada.template");

let pendingTask = taskPendingTemplateReference.cloneNode(true);
let completedTask = taskCompletedTemplateReference.cloneNode(true);
let archivedTask = taskArchivedTemplateReference.cloneNode(true);

// Quito del documento los templates
taskPendingTemplateReference.remove();
taskCompletedTemplateReference.remove();
taskArchivedTemplateReference.remove();

fetchData(
    "http://localhost:5000/api/tasks/pending/",
    "GET",
    (data) => {
        console.log(data);

        let tareas = [];

        // Recorro la lista de tareas obtenidas
        for (const tarea of data) {
            console.log(tarea);

            // Duplico la plantilla de tarea pendiente
            let newTask = pendingTask.cloneNode(true);

            // Completo la tarea nueva con los datos reales
            newTask.querySelector("h3 .titulo").innerHTML = tarea.nombre;
            newTask.querySelector(".descripcion").innerHTML = tarea.descripcion;
            newTask.querySelector(".fecha").innerHTML = tarea.fecha_creacion;
            newTask.querySelector(".task_id").value = tarea.id;

            // Agrego la nueva tarea al listado de tareas para ver en el viewport
            tareas.push(newTask);
        }

        // Accion doble: 
        // ReplaceChildren borra todo el contenido interno y agrega lo que yo le diga
        taskContainer.replaceChildren(...tareas);
    }
    );