const apples: number = 5;
const speed: string = 'Fast';
const control: boolean = true;
const nothing: null = null;
const nothing2: undefined = undefined;

// Build in objects
const now: Date = new Date();

// Arrays
const color: string[] = ['blue', 'orenge', 'green'];
const numbers: number[] = [1, 2, 3];

// Classes
class Car {}
const car: Car = new Car();

// Object
const point: { fName: string; age: number } = {
  fName: 'Natasha',
  age: 5,
};

// Functions
const sum: (a: number, b: number) => void = (a: number, b: number) => {
  console.log(a + b);
};
