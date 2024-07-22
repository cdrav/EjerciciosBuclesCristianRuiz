let numero;
let suma = 0;
do {
  numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
  suma += numero;
} while (numero !== 0);

console.log("La suma de los números ingresados es: " + suma);
