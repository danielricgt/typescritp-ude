interface Facturable {
    currentBill():string
}



abstract class Carros {
  constructor(
    protected readonly marca: string,
    protected readonly color: string,
    protected price: number
  ) {}

  get currentPrice(){
    return `El precio actual es es${this.price}`;
  }

  set setPrice(value:number){
    this.price = value;
  }

static PricetoCurrency(value:number, typeOfCurrencies:string ){
    let result = ''
    switch(typeOfCurrencies){
        case 'USD':
            result = 'US ' + value;
            break;
        case 'Peso':
            result = '$ ' + value;
            break;
    }
    return result
}

  abstract drive():string;
}

class Aveos extends Carros implements Facturable {
 drive(): string {
     return `El ${this.marca} se mueve y tiene un precio de ${this.price}`
 }
 currentBill () {
    return `El precio actual es ${this.price}`
 }
 }
const aveoRojoFerrari = new Aveos('S','2021',20000000)

const vehicle_getter= new Aveos('Chevrolet','ss',2333);
const vehicle_getter2: Facturable = new Aveos('Chevrolet','ss',4400);
console.log(vehicle_getter.currentPrice);
vehicle_getter.setPrice = 1000;
console.log(vehicle_getter.currentPrice);
// PUEDO ACCEDER A ESTE METODO PRICETOCURRENCY SIN NECESIDAD DE CREAR UNA INSTANCIA
console.log(Carros.PricetoCurrency(233,'USD'));

console.log(vehicle_getter2.currentBill());

console.log(vehicle_getter.drive());
