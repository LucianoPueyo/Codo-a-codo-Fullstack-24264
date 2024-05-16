// Creación
//                  0   1  2  3  4  5  6
let nota_alumnos = [10, 7, 5, 9, 8, 1, 6];

// Las listas pueden poseer valores de cualquier tipo
let lista_random = [1, .5, "hola", false, null, undefined, x => x**2, [1,2,3]]

// formas de acceso
console.log(nota_alumnos);
console.log("primero: " + nota_alumnos[0]); // Obtengo el primero
console.log("ultimo: "+ nota_alumnos[nota_alumnos.length - 1]); // Obtengo el ultimo

// longitud
console.log(nota_alumnos.length);

// Acceso a valores fuera de rango
console.log(nota_alumnos[8]);

// sort
console.log(nota_alumnos);

// Le paso un criterio de ordenamiento como una función flecha
nota_alumnos.sort((a, b) => b - a);
console.log(nota_alumnos);

// Modificación
nota_alumnos[0] = 5;
console.log(nota_alumnos);

// Agregar y quitar

// agregar fuera de rango
nota_alumnos[10] = 6.5;
console.log(nota_alumnos);

// Agregar al final
nota_alumnos.push(7.5);
nota_alumnos.push(8.5); 
console.log(nota_alumnos);

// Quito el ultimo elemento
nota_alumnos.pop();
nota_alumnos.pop();
nota_alumnos.pop();

console.log(nota_alumnos);

// recorrer

nota_alumnos = [5, 6, 7, 8, 9, 10];

// for "clasico"
//      0 1 2 3 (4)
// ej: [6,7,8,9]
for(let i = 0; i < nota_alumnos.length; i++){
    console.log("La nota del alumno N°: " + (i + 1)  + " es " + nota_alumnos[i]);
}

// for of (for each)
for (let nota of nota_alumnos) {
    console.log(nota);
}