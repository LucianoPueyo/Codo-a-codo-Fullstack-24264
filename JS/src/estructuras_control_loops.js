let valor = 0;

while(valor < 10) {
    console.log(valor);
    valor++;
}

console.log("for ------------------------------------------")

console.log("while con prompt ------------------------------------------")

let continuar = true;

while(continuar) {
    let respuesta = Number.parseInt(prompt("Ingrese un numero del 1 al 10"));
    
    if(respuesta >= 1 && respuesta <= 10) {
        continuar = false;

    } else {
        console.log("El valor ingresado es incorrecto");
    }
}

// for(valor inicial; condicion; incremento / decremento)
for(i = 0; i < 10; i++){
    console.log(i);
}

console.log("for con listas ------------------------------------------")

let lista = ["Carlos", "Maria", "Jose", "Gaston", "Lucia", "Mario"]

for(i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

console.log("do while ------------------------------------------")
let condicion = false;

// me garantiza 0 o más ejecuciones
while(condicion){
    console.log("Estoy dentro del while");
}

// me garantiza 1 o más ejecuciones
do {
    console.log("Estoy dentro del do while");
}while(condicion);

console.log("Adios");