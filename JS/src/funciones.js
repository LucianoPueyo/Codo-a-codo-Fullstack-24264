function calcular_promedio() {
    let suma = 0;
    let cantidad = 0;
    let continuar = true;
    
    while(continuar) {
        let respuesta = prompt("Ingrese un numero");
        
        if (respuesta == "salir") {
            // Corto abruptamente el while
            break;
        }
        
        suma += Number.parseInt(respuesta); // sintaxis equivalente: suma = suma + respuesta;
        cantidad++;
    }
    
    let promedio = suma / cantidad;
    
    console.log(promedio);
}

function calculo_iva(costo) {
    console.log("Calculando costo final:");
    return costo * 1.21;
}

let bici = 1000;
let moto = 5000;
let auto = 25000;

console.log(calculo_iva(bici));
console.log(calculo_iva(moto));
console.log(calculo_iva(auto));

// funciones flecha (tambien llamadas lambda)
var cuadrado = x => x ** 2;

console.log(cuadrado(4));
