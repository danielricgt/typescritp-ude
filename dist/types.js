"use strict";
//Anotacion dde tipos
let vehiculo;
let cantidad;
//Infrencia de tipos
let vehiculo_1 = "Mazda";
cantidad = 2 * 4;
//vatiables tipo objeto
const persona = {
    nombre: "rodirgo",
    edad: 34,
    direccion: {
        calle: "calle 69",
        comuna: "alamos",
    },
    cursos: ["daniel", "galvan", 2022],
};
const peliculas_listado = ["la cada en el aire", 2022, true, "mama"];
let hobbies = ["daniel", "galvan"];
let hobbies_2 = {
    deportes: ["natacion", "futbol"],
    peliculas: ["la cada en el aire", 2022, true, "mama", persona]
};
console.log(hobbies_2);
let datos = ["Hello", { name: "John" }, 123, true];
for (let dato of datos) {
    console.log(dato);
}
