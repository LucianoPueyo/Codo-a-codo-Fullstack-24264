// Botones de filtro de tareas
let filterButtons = {
    "Pendientes": document.querySelector("#VerPendientes"),
    "Completadas": document.querySelector("#VerCompletadas"),
    "Archivadas": document.querySelector("#VerArchivadas")
}

// Contenedor donde se dibujan las tareas
let taskContainer = document.querySelector(".tareas-container");

// Template de tarea Pendiente
let taskPendingTemplateReference = document.querySelector(".tarea.pendiente.template");

// Template de tarea Completada
let taskCompletedTemplateReference = document.querySelector(".tarea.completada.template");

// Template de tarea Archivada
let taskArchivedTemplateReference = document.querySelector(".tarea.archivada.template");

// Templates de tareas para clonar al momento de agregar tareas al contenedor
let taskTemplates = {
    "Pendiente": taskPendingTemplateReference.cloneNode(true),
    "Completada": taskCompletedTemplateReference.cloneNode(true),
    "Archivada": taskArchivedTemplateReference.cloneNode(true)
};

// Quito del documento los templates
taskPendingTemplateReference.remove();
taskCompletedTemplateReference.remove();
taskArchivedTemplateReference.remove();

function archiveTask(event) {
    let id = event.currentTarget.task_id;

    let url = 'http://localhost:5000/api/tasks/archive/' + id;

    fetchData(url, "DELETE", () => {
        location.reload();
    });
}

function editTask(event) {
    let id = event.currentTarget.task_id;
    window.location.replace("pages/add_update_task.html?task_id=" + id);
}

function completeTask(event) {
    let id = event.currentTarget.task_id;

    let url = 'http://localhost:5000/api/tasks/complete/set/' + id;

    fetchData(url, "PUT", () => {
        location.reload();
    });
}

function toPendingTask(event){
    let id = event.currentTarget.task_id;

    let url = 'http://localhost:5000/api/tasks/complete/reset/' + id;

    fetchData(url, "PUT", () => {
        location.reload();
    });
}

function loadTasks(task_status) {
    let fetch_data = {
        'Pendientes': {
            'URL': 'http://localhost:5000/api/tasks/pending/',
            'TaskTemplatesName': 'Pendiente'
        },

        'Completadas': {
            'URL': 'http://localhost:5000/api/tasks/completed/',
            'TaskTemplatesName': 'Completada'
        },

        'Archivadas': {
            'URL': 'http://localhost:5000/api/tasks/archived/',
            'TaskTemplatesName': 'Archivada'
        },
    }

    if (!(task_status in fetch_data)){
        throw new Error(`El Parametro: ${task_status} no está definido!`);
    }

    fetchData(fetch_data[task_status].URL, "GET", (data) => {
        // Procesamiento de la info que llega de la API
        let tasks = [];
        for (const task of data) {
            let newTask = taskTemplates[fetch_data[task_status].TaskTemplatesName].cloneNode(true);
            newTask.querySelector("h3 .titulo").innerHTML = task.nombre;
            newTask.querySelector(".descripcion").innerHTML = task.descripcion;
            newTask.querySelector(".fecha").innerHTML = task.fecha_creacion;
            newTask.querySelector(".task_id").value = task.id;

            let archivarAction = newTask.querySelector("#Archivar");
            let editarAction =newTask.querySelector("#Editar");
            let completarAction =newTask.querySelector("#Completar");
            let pasarAPendienteAction =newTask.querySelector("#Pendiente");

            if (archivarAction) {
                archivarAction.addEventListener("click", archiveTask);
                archivarAction.task_id = task.id;
            }

            if (editarAction) {
                editarAction.addEventListener("click", editTask);
                editarAction.task_id = task.id;
            }

            if (completarAction) {
                completarAction.addEventListener("click", completeTask);
                completarAction.task_id = task.id;
            }

            if (pasarAPendienteAction) {
                pasarAPendienteAction.addEventListener("click", toPendingTask);
                pasarAPendienteAction.task_id = task.id;
            }

            tasks.push(newTask);
        }

        taskContainer.replaceChildren(...tasks);
    });
}

function setActiveFilter(event){
    for (filter in filterButtons) {
        filterButtons[filter].classList.remove("active");
    }

    event.currentTarget.classList.add("active");

    loadTasks(event.currentTarget.filterName);
}

function setFilters() {
    for (button in filterButtons){
        filterButtons[button].addEventListener("click", setActiveFilter);
        filterButtons[button].filterName = button;
    }
}

setFilters();
loadTasks('Pendientes');