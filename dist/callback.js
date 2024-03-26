"use strict";
// Esutilizar un a funcion y enviarla como parametro
function imprimir_papel(a, b, mostrar) {
    let resultado = a + b;
    mostrar(resultado);
}
imprimir_papel(3, 2, x => {
    console.log(x);
});
const edades = 21;
