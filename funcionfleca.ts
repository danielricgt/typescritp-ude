const sumarnumeros = (valor1: number, valor2: number): number => {
  return valor1 + valor2;
};

const dividir = (a: number, b: number): number => {
  return a / b;
};

console.log(dividir(20, 2));

const throwError = (message: string) => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

let sumar2: (a: number, b: number)=> number ;
sumar2 = sumarnumeros;

console.log(sumar2(2,2));
