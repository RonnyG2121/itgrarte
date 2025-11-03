// Declaración de funciones
function saludar() {
console.log("Hola");

}

// saludar();

// Fucnión sumar
function sumar(num1, num2) {
    return num1+ num2;
}

// console.log(sumar(5, 7));
// console.log(sumar(6, 4));
// console.log(sumar(15, 10));


/* 
function correr() {
    for (var index = 0; index < 3; index++) {
        console.log("Dentro del for:", index);
        
    }

    console.log("Fuera del for: ", index);
}

correr(); */


function correr() {
    for (let index = 0; index < 3; index++) {
        console.log("Dentro del for:", index);
        
    }

    console.log("Fuera del for: ", index);
}

// correr();

// Funciones flecha o arrow functions
const cuadrado = () => {
    return 5*5;
}

potencia = () => {
return 2 **3;
}

()=> {

}


// Funciones dentro de otras
const arreglo = [1, 2, 3, 5, 21, 12, 8, 4];

arreglo.forEach((elemento) => {
    console.log(elemento* elemento);
return elemento * elemento;

});