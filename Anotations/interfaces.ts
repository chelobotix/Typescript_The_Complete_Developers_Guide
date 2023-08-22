/* -------------------------------------------------------------------------- */
/*                                 Interfaces                                 */
/* -------------------------------------------------------------------------- */
interface Car {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}`;
  },
};

const printCar = (car: Car): void => {
  console.log(`Name: ${car.name}, Year: ${car.year}. Is it broken? ${car.broken}`);
  console.log(car.summary());
};

printCar(oldCivic);
