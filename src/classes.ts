interface Billables {
    drive: any;
    setPrice: number;
    getPrice: any;
    Currentbill(): string
}

interface Flyllable {
    drive: any;
    altitude(): number;
}

abstract class Vehicle {
  protected readonly brandName: string;
  protected readonly model: string;
  protected readonly color: string;
  protected price: number;

  constructor(n: string, model: string, color: string, price: number) {
    this.brandName = n;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  get getPrice() {
    return `El precio actual es ${this.price} `;
  }

  set setPrice(value: number) {
    this.price = value;
  }

  static PricetoCurrency(value: number, typeOfCurrency: string) {
    let result = "";
    switch (typeOfCurrency) {
      case "USD":
        result = `${value} USD`;
        break;
      case "PESO":
        result = `$ ${value}`;
        break;
    }
    return result;
  }

  /*tambien se pueden enviar a traves del constructor
    constructor (
         private brandName: string,
         private model: string,  
         private color: string)
    */

  abstract drive(): void ;
}

class Car extends Vehicle implements Billables {
  drive():void {
    console.log(
      `conduciendo un auto ${this.brandName} modelo  ${this.model} color  ${this.color}`
    );
  }
  Currentbill(): string {
      return "Hola Billable"
  }
}

class Airplane extends Vehicle implements Billables, Flyllable {
    drive():void {
      console.log(
        `conduciendo un avion ${this.brandName} modelo  ${this.model} color  ${this.color}`
      );
    }
    Currentbill(): string {
        return "Hola Billable"
    }
    altitude(): number {
        return 233333;
    }
  }

const vehicle: Billables = new Car("mazda", "2009", "ROJO", 250);
const vehicle_2: Flyllable = new Airplane("929", "2009", "BLANCO", 250000);

console.log(vehicle.getPrice);
vehicle.setPrice = 300;
console.log(vehicle.getPrice);
vehicle.drive();
console.log(Car.PricetoCurrency(200, "USD"));
console.log(Car.PricetoCurrency(200, "PESO"));
vehicle_2.drive();
console.log(vehicle_2.altitude() );
