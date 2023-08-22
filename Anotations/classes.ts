class Vehicle {
  constructor(public color: string) {}

  getColor(): void {
    console.log(this.color);
  }
  drive(): void {
    console.log('rummmm rumm');
  }
}

class Car extends Vehicle {
  // constructor a not necessary here for color ;)
  /* -------------------------------------------------------------------------- */
  /*                                   Classes                                  */
  /* -------------------------------------------------------------------------- */

  constructor(color: string, public wheel: number) {
    super(color);
  }

  private tiers(): void {
    console.log('4 tiers');
  }

  getTiers(): void {
    this.tiers();
  }
}

const car = new Car('Blue', 4);
car.drive();
car.getTiers();
car.getColor();
