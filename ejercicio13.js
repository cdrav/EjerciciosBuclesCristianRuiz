let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

let mano1, mano2;

while (true) {
  mano1 = prompt(jugador1 + ", elija piedra, papel o tijeras:");
  mano2 = prompt(jugador2 + ", elija piedra, papel o tijeras:");

  if (mano1 === mano2) {
    console.log("Empate! Jueguen de nuevo.");
  } else if ((mano1 === "piedra" && mano2 === "tijeras") ||
             (mano1 === "papel" && mano2 === "piedra") ||
             (mano1 === "tijeras" && mano2 === "papel")) {
    console.log("El ganador es " + jugador1);
    break;
  } else {
    console.log("El ganador es " + jugador2);
    break;
  }
}
