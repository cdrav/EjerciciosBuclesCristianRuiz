function adivinarNumero() {
    let numeroSecreto = 24;  
    let intento;
    let contador = 0;


    do {
        intento = parseInt(prompt("Adivine el número (entre 1 y 100):"));
        contador++;
        if (intento < numeroSecreto) {
            console.log("El número es mayor");
        } else if (intento > numeroSecreto) {
            console.log("El número es menor");
        }
    } while (intento != numeroSecreto);

    console.log("Felicitaciones! Adivinaste el número en " + contador + " intentos.");
}

adivinarNumero();