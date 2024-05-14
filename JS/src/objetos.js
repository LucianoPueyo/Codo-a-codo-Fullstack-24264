class Persona {
    constructor(nombre, apellido, dni){
        // Atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    // metodos
    Presentar() {
        return "Mi nombre es: " + this.nombre + " " + this.apellido + " dni: " + this.dni;
    }
}

let persona1 = new Persona("Carlos", "Lopez", 1234); // Instanciar una clase
let persona2 = new Persona("Maria", "Del Cerro", 5678);
let persona3 = new Persona("Jose", "Perez", 7892);

let lista_personas = [persona1, persona2, persona3];

// Accedo a los atributos individuales
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.dni);

console.log(persona1.Presentar());
console.log(persona2.Presentar());
console.log(persona3.Presentar());
