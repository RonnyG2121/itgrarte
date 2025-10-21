// Condicional if
let edad = 101;

/* if(edad >= 18)
    {
    console.log("Es mayor de edad.");
}
else {
    console.log("Es menor.");
}

 */


// Programa que valida si una persona está apta para viajar
let pasaporte = true;
// Muestra con el operador and
/* if (edad >= 17 && pasaporte === true) {
    console.log("Puedes viajar.");
} 
else {
console.log("No puedes viajar porque no tienes pasaporte o no eres de 17 años al menos")
}
 */

// Programa del motor
let combustible = 0;
let aceite = 20;
// Operador or
/* if (combustible >0 || aceite <50) {
    console.log("El motor arranca.")
} 
else 
{
    console.log("El motor no arranca.");
}


 */

// Operador not
pasaporte = !pasaporte;
// console.log(pasaporte);

// Ejemplo de condicionales anidadas
/* if (edad >= 18 && edad <=30) {
    console.log("Es oven.");
}
else if(edad >=31 && edad <=60) {
    console.log("Es maduro.");
}
else if(edad >=61 && edad <=100) {
    console.log("Tiene que juvilarse");
}
else {
    console.log("Está muerto o no ha nacido.")
}


*/

// Switch case

// Ejemplo de frutas
let frutas = "naranja";
switch(frutas)
{
    case "manzana":
        console.log("La manzana es agradable.");
        break;
        case "limon":
            console.log("Es agrio");
            break;
            case "naranja":
                console.log("Buena en jugos");
                break;
            default:
                console.log("Error, fruta desconocida");
                break
}
