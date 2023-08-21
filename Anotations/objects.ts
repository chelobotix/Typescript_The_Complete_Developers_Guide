const obj = {
  fName: 'Natasha',
  age: 5,
  coords: {
    x: 50,
    y: 43,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = obj;
const {
  coords: { x, y },
}: { coords: { x: number; y: number } } = obj;
