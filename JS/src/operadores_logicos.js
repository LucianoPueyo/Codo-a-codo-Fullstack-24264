/*
Conjuncion (AND &&)
La operación A && B dara por resultado verdadero únicamente cuando ambos operandos sean verdaderos. Cualquier otro caso, el resultado es falso.

Puedo entrar a codo a codo?
A tengo titulo
B Soy mayor

A | B | A && B
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

Disyunción (OR ||)
La operación A || B dará por resultado verdadero cuando al menos uno de sus operandos sea verdadero.
El único caso donde da falso es cuando ambos operandos son falsos.

A | B | A || B
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1

Negación (NOT !) (Operador Unario)
Invierte el valor de A.

A | !A
0 | 1
1 | 0
*/

let a = true;
let b = false;

console.log(a, b);
console.log(a && b);
console.log(a || b);