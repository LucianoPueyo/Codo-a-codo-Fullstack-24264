// Creo un objeto (tambien llamado array asociativo | En python se los llama diccionarios) 
// Los elementos no están ordenados
// JSON Javascript Object Notation

let persona = {
    nombre: "Carlos",
    apellido: "Lopez",
    dni: 1234,
    cuota_al_dia: true,

    curso: {
        turno: "Manaña",
        comision: 24264,
        nombre: "Fullstack Python",
        notas: [7,8,9,10]
    },

    titulo: null,

    mejores_amigos: ["Maria", "Gaston"]
};

// API - Application Programming Interface
// Consumiendo una API

fetch("https://randomuser.me/api")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));


/* fuentes
Fetch:
- https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

GET a un repo con github pages:
- https://medium.com/@peternjuguna76/hosting-a-json-file-on-github-pages-a-step-by-step-guide-52105a5a393a
- https://stackoverflow.com/questions/39199042/serve-json-data-from-github-pages

APIS:
(Movies) https://developer.themoviedb.org/docs/getting-started
(Harry Potter) - Suspendida - https://hp-api.onrender.com/
(Pokemon) https://pokeapi.co/
(Listado de APIS) https://github.com/public-apis/public-apis
(Dragon Ball API) https://web.dragonball-api.com/
(Random user) https://randomuser.me/api 
*/

// https://username.github.io/reponame/file.json

fetch("https://lucianopueyo.github.io/Codo-a-codo-Fullstack-24264/datos.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));

fetch("https://dragonball-api.com/api/characters/1")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error! " + error));
