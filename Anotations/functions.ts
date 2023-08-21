// Functions
const sum = (a: number, b: number): number => {
  return a + b;
};

// or
function rest(a: number, b: number): number {
  return a - b;
}

// void
const printMsg = (message: string): void => {
  console.log('Hello');
};

// never
const fireError = (message: string): never => {
  throw new Error(message);
};

// obj as a parameter
const obj = {
  fName: 'Marcelo',
  age: 41,
};
const forecast = (obj: { fName: string }): void => {
  console.log(`Hello ${obj.fName}`);
};

// obj destruction
const forecast2 = ({ fName }: { fName: string }): void => {
  console.log(`Hello ${fName}`);
};
