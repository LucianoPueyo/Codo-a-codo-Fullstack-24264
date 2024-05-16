let original = document.querySelector("#Plantilla");
let contenedor = document.querySelector("#Contenedor");

let botonAgregar = document.querySelector("#Agregar");
let botonQuitar = document.querySelector("#Quitar");

let referencia = original.cloneNode(true);

original.remove();

function AgregarArticulo() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        // Procesamiento de la info que llega de la API
    
        console.log(data.results[0].name.first + " " + data.results[0].name.last);
    
        console.log(data.results[0].picture.large);
    
        let nuevaPersona = referencia.cloneNode(true);
    
        nuevaPersona.querySelector("img").src = data.results[0].picture.large;
        nuevaPersona.querySelector("img").alt = "Foto CV";
        nuevaPersona.querySelector("p").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    
        contenedor.appendChild(nuevaPersona);
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}

function QuitarArticulo() {
    if(contenedor.childElementCount > 0){
        contenedor.removeChild(contenedor.lastChild);
    }
}

// Eventos
botonAgregar.addEventListener("click", function(){
    AgregarArticulo();
});

botonQuitar.addEventListener("click", function(){
    QuitarArticulo();
});





