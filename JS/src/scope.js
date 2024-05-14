let a = 15; // variable global

function funcion_1() {
    let b = 20; // variable local
    console.log(a);
    console.log(b);
}

funcion_1()

console.log(a);
console.log(b);