// uso del bucle for
/* for(let i = 1; i <= 10; i++) {
    console.log(i);
}
 */

// Recorriendo un array
let arreglo = [
    "Juan",
    "María",
    "Oscar",
    "Luciana"];

/* // Viendo la longitud de un array
    console.log(`El arreglo tiene: ${arreglo.length} posiciones`);
for(let indice = 0; indice < arreglo.length; indice++) {
    console.log(arreglo[indice]);
}

 */


// Viendo un elemento del array por su posición
// console.log(arreglo[3]);

// Uso del bucle while

// Bucle infinito
let contador = 1;
/*
while(contador <= 0) {
    console.log("Eternidad");
}

console.log("Fuera del bucle while");
*/

/* // Contando con el while
while(contador <=10) {
    // Rompiendo la iteración
if (contador === 5) {
        break;
    }

// Viendo la instrucción continue

if (contador === 5) {
    contador++;
    continue;
}

console.log(contador);
    contador++;
}
 */

// viendo el bucle do while
do {
    console.log(contador);
    contador++;
} while(contador <=0);
