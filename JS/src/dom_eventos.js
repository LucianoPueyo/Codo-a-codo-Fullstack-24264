let original = document.querySelector("#Original");
let contenedor = document.querySelector("#Contenedor");

console.log(original);
console.log(contenedor);

let botonAgregar = document.querySelector("#Agregar");
let botonQuitar = document.querySelector("#Quitar");

original.querySelector("h2").innerHTML = "Este titulo fue modificado por JS";

let copia = original.cloneNode(true);

original.remove();

copia.style.backgroundColor = '#f00';
copia.style.padding = '15px';

function AgregarArticulo() {    
    contenedor.appendChild(copia.cloneNode(true));
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









