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

// When we need to use type anotation instead of inferation

// Function that return any
const json = '{"fName": "Natish, "age": 5}';
const coordinates: { fname: string; age: number } = JSON.parse(json);

// When we declare a variable in one line and initialize it later
let theTrue: boolean;
theTrue = false;

// When we want to have a type that cant be inferred
let leesThanZero: boolean | number = true;
leesThanZero = -6;
