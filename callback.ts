// Esutilizar un a funcion y enviarla como parametro


function imprimir_papel  (a:number
    , b: number, 
    mostrar:(value: number) =>void ): void {

    let resultado = a+b;
    mostrar(resultado);
}

imprimir_papel(3,2,x => {
    console.log(x);
})


const edades: number = 21;

