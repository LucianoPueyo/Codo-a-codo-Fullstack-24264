let original = document.querySelector("#Original");
let contenedor = document.querySelector("#Contenedor");
let copia = original.cloneNode(true);

original.remove();

copia.style.backgroundColor = '#f00';

contenedor.appendChild(copia.cloneNode(true));
contenedor.appendChild(copia.cloneNode(true));
contenedor.appendChild(copia.cloneNode(true));

