const carBrands = ['Ford', 'Bmw', 'Toyota'];

// empty array
const pizzaTypes: string[] = [];

// 2 dimensions array
const twoDimension = [['one'], ['two']];

// map method
const carUpperCase: string[] = carBrands.map((car: string): string => car.toLocaleUpperCase());

// Multiple types in arrays
const importantDates: (string | Date)[] = [new Date(), '2023-02-24'];
