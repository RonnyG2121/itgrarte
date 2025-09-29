// Declarando una función
function saludar() {
    return "Hola";
}


console.log(saludar());

// Declarar funciones con uso de parámetros
// Función flecha
suma = (num1, num2) => {
    return num1 + num2;
}

console.log(suma(3, 5));

// Usando mat.sqrt
console.log(Math.sqrt(25));

// Uso de las variable globales y locales

// let nombre = "Juan";
function ModificarVariable() {

    let nombre = "Pedro";
    console.log(`Soy una variable local y mi valor es: ${nombre}`);
}

ModificarVariable();
// console.log(nombre);
// console.log(nombre);


