//Anotacion dde tipos

let vehiculo: string;
let cantidad: number;

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

const peliculas_listado: any[]= ["la cada en el aire", 2022, true, "mama" ]

let hobbies: string[] = ["daniel", "galvan"]

let hobbies_2: {
  deportes: string[];
  peliculas: any[];
} = {
  deportes: ["natacion","futbol"],
  peliculas: ["la cada en el aire", 2022, true, "mama", persona ]
};





console.log(hobbies_2);

let datos: (string | object | number | boolean)[] = ["Hello", { name: "John" }, 123, true];

for (let dato of datos) {
  console.log(dato);
}
