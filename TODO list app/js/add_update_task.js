let submitButton = document.querySelector("#Formulario #Crear");

let params = new URLSearchParams(document.location.search);
let task_id = params.get("task_id");

function add_new_task(event) {
    let data = {
        'nombre': document.querySelector("#Formulario #Titulo").value,
        'descripcion': document.querySelector("#Formulario #Descripcion").value
    }

    let url = 'http://localhost:5000/api/tasks/create/';

    fetchData(url, "POST", () => {
        document.querySelector("#Formulario").reset();
        window.location.replace("../index.html#TareasPendientes");
    }, 
    data);
}

function update_task(event) {
    let data = {
        'nombre': document.querySelector("#Formulario #Titulo").value,
        'descripcion': document.querySelector("#Formulario #Descripcion").value
    }

    let url = 'http://localhost:5000/api/tasks/update/' + task_id;

    fetchData(url, "PUT", () => {
        document.querySelector("#Formulario").reset();
        window.location.replace("../index.html#TareasPendientes");
    }, 
    data);
}

function set_form_readOnly(value) {
    let form = document.querySelector("#Formulario");
    var elements = form.elements;
    for (input of elements) { 
        input.readOnly = value;
    }
}

function add_or_update(){
    if(task_id !== null) {
        document.querySelector(".actionTitle").innerHTML = "Editar tarea existente";

        set_form_readOnly(true);

        let url = 'http://localhost:5000/api/tasks/fetch/' + task_id;
        fetchData(url, "GET", (data) => {
            document.querySelector("#Titulo").value = data.nombre;
            document.querySelector("#Descripcion").value = data.descripcion;
            document.querySelector("#task_id").value = data.id;
            document.querySelector(".fecha").innerHTML = data.fecha_creacion;

            set_form_readOnly(false);
        });

        submitButton.addEventListener("click", update_task);
    } else {
        submitButton.addEventListener("click", add_new_task);
    }
}



add_or_update();



