//Anotacion dde tipos

let vehiculo: string;
let cantidad: number;

//Infrencia de tipos

let vehiculo_1= "Mazda"

cantidad = 2*4;


//vatiables tipo objeto

let persona : {
    nombre: string,
    edad: number,
    direccion:{
        calle: string
        comuna: string
    }
} = {

    nombre: "rodirgo",
    edad: 34,
    direccion:{
        calle: "calle 69",
        comuna: "alamos"
    }
}

console.log(persona);