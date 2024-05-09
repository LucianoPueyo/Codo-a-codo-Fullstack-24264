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