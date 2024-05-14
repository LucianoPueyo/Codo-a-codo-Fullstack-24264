// Creo un objeto (tambien llamado array asociativo)
// Los elementos no están ordenados
// JSON Javascript Object Notation








// API - Application Programming Interface
// Consumiendo una API










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
*/

// https://username.github.io/reponame/file.json

fetch("https://lucianopueyo.github.io/Codo-a-codo-Fullstack-24172/datos.json")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error!"));

fetch("https://dragonball-api.com/api/characters/1")
.then(response => response.json())
.then(data => {
    // Procesamiento de la info que llega de la API
    console.log(data);
    })
.catch(error => console.log("Ocurrió un error!"));
