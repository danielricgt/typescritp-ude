"use strict";
const sumarnumeros = (valor1, valor2) => {
    return valor1 + valor2;
};
const dividir = (a, b) => {
    return a / b;
};
console.log(dividir(20, 2));
const throwError = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
let sumar2;
sumar2 = sumarnumeros;
console.log(sumar2(2, 2));
