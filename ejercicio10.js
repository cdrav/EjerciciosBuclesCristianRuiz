let sumaPares = 0;
let sumaImpares = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número (0 para finalizar):"));
    if (numero !== 0) {
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }
} while (numero !== 0);

console.log("Suma de números pares:", sumaPares);
console.log("Suma de números impares:", sumaImpares);
